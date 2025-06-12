import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { StatusCardComponent } from '../../components/simple-status-card/simple-status-card.component';
import { CommonModule } from '@angular/common';
import { ITower } from '../../services/tower/types';
import { TowerService } from '../../services/tower/tower.service';
import { MainSpinnerComponent } from '../../components/main-spinner/main-spinner.component';
import { IApartmentStatus, IApartmentToList } from '../../services/apartment/types';
import { ApartmentService } from '../../services/apartment/apartment.service';
import { FormsModule } from '@angular/forms';
import { fromEvent, debounceTime } from 'rxjs';

@Component({
  selector: 'app-apartments-page',
  imports: [FormsModule, StatusCardComponent, CommonModule, MainSpinnerComponent],
  templateUrl: './apartments-page.component.html',
  styleUrl: './apartments-page.component.css'
})
export class ApartmentsPageComponent implements OnInit, AfterViewInit {
  towers: ITower[] = [];
  selectedTower: ITower | null = null;
  selectedStatus: IApartmentStatus = '';
  currentFilter: string = '';
  apartments: IApartmentToList[] = [];
  filteredApartments: IApartmentToList[] = [];
  isLoading: boolean = true;

  availableStatus: IApartmentStatus[] = [
    '',
    'AVAILABLE',
    'MAINTENANCE',
    'OCCUPIED',
    'RENTED',
    'RESERVED'
  ];

  @ViewChild('apartmentInput', { static: true }) apartmentInput!: ElementRef;

  ngAfterViewInit() {
    fromEvent(this.apartmentInput.nativeElement, 'input')
      .pipe(debounceTime(500))
      .subscribe(event => this.handleApartmentFilterInput(event as Event));

  }


  constructor(
    private towerService: TowerService,
    private apartmentService: ApartmentService

  ) { }

  async ngOnInit(): Promise<void> {
    try {
      this.isLoading = true;

      const [towerResult, apartmentResult] = await Promise.all([
        this.towerService.getAll(),
        this.apartmentService.getAll(999)
      ]);

      this.towers = towerResult.content;
      this.towers.unshift({ id: 0, number: 0 });

      this.apartments = apartmentResult.content;
      this.filteredApartments = this.apartments;

    } catch (e) {
      console.error(e);
    } finally {
      this.isLoading = false;
    }
  }


  async getApartments(filter: string = ''): Promise<IApartmentToList[]> {
    try {
      this.isLoading = true;
      const response = await this.apartmentService.getAll(999, filter);
      return response.content;
    } catch (ex) {
      console.error('Erro ao buscar apartamentos:', ex);
      return [];
    } finally {
      this.isLoading = false;
    }
  }

  getStatusTranslation(status: IApartmentStatus): string {
    const statusTranslations = new Map<IApartmentStatus, string>([
      ['AVAILABLE', 'Livre para locação'],
      ['RENTED', 'Alugado'],
      ['OCCUPIED', 'Residencial'],
      ['MAINTENANCE', 'Em manutenção'],
      ['RESERVED', 'Reservado'],
      ['', 'Sem Filtro'],
    ]);
    return statusTranslations.get(status) ?? 'Status desconhecido';
  }

  async updateFilteredApartments() {
    this.apartments = await this.getApartments(this.currentFilter);

    this.filteredApartments = this.apartments.filter(apartment => {
      const matchesTower = this.selectedTower ? apartment.towerNumber == this.selectedTower.number : true;
      const matchesStatus = this.selectedStatus ? apartment.status == this.selectedStatus : true;
      return matchesTower && matchesStatus;
    });
  }


  async handleApartmentFilterInput(event: Event) {
    this.currentFilter = (event.target as HTMLInputElement).value;
    await this.updateFilteredApartments();
  }

  async onTowerChange(tower: ITower | null) {
    this.selectedTower = tower;
    await this.updateFilteredApartments();
  }

  async onStatusChange(status: IApartmentStatus) {
    this.selectedStatus = status;
    await this.updateFilteredApartments();
  }


}
