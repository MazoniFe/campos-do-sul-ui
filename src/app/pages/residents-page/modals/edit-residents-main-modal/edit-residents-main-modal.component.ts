import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditResidentsModalComponent } from "../edit-residents-modal/edit-residents-modal.component";
import { MainSpinnerComponent } from "../../../../components/main-spinner/main-spinner.component";
import { PersonService } from '../../../../services/person/person.service';
import { IPerson, IPersonDetailed } from '../../../../services/person/types';
import { IApartmentMinimal, IApartmentStatus } from '../../../../services/apartment/types';

interface Authorization {
  id: string;
  unit: string;
  location: string;
  status: string;
  frequency: string;
  authorizedBy: string;
  validUntil: string;
}

@Component({
  selector: 'app-residents-edit-main-modal',
  standalone: true,
  imports: [CommonModule, EditResidentsModalComponent, MainSpinnerComponent],
  templateUrl: './edit-residents-main-modal.component.html',
  styleUrls: ['./edit-residents-main-modal.component.css']
})
export class ResidentEditModalComponent implements OnInit {

  @Input() isOpen = false;
  @Output() closeModalEvent = new EventEmitter<void>();
  @Input() selectedResidentId: number | null = null;
  selectedPerson: IPersonDetailed | null = null;

  isLoading: boolean = false;
  isEditModalOpen: boolean = false;

  constructor(private personService: PersonService) {
  }

  async ngOnInit(): Promise<void> {
    await this.getPerson();
  }

  closeModal(): void {
    this.closeModalEvent.emit();
  }

  closeEditResidentModal(): void {
    this.isEditModalOpen = false;
  }

  toggleEditMode(): void {
    this.isEditModalOpen = true;
  }

  async getPerson() {
    if (this.selectedResidentId === null) return;
    this.isLoading = true;
    try {
      this.selectedPerson = await this.personService.getDetailedById(this.selectedResidentId);
    } catch (ex) {
      console.error(ex);
    } finally {
      this.isLoading = false;
    }
  }

  addProperty(): void {
    console.log('Add property');
  }

  requestAccess(): void {
    // Implementar lógica para solicitar acesso
    console.log('Request access');
  }

  editProperty(property: any): void {
    // Implementar lógica para editar propriedade
    console.log('Edit property:', property);
  }

  deleteProperty(property: any): void {
    // Implementar lógica para deletar propriedade
    console.log('Delete property:', property);
  }

  editAuthorization(auth: any): void {
    // Implementar lógica para editar autorização
    console.log('Edit authorization:', auth);
  }

  deleteAuthorization(auth: any): void {
    // Implementar lógica para deletar autorização
    console.log('Delete authorization:', auth);
  }

  getPersonFullname(): string | null {
    if (this.selectedPerson?.id === null) {
      return null;
    }
    return `${this.selectedPerson?.firstName} ${this.selectedPerson?.lastName}`
  }

  getApartmentLocation(data: IApartmentMinimal) {
    if (data === null) return;
    const floorNumber = Number(data.number.toString()[0]);
    return `Torre ${data.tower.number} - ${floorNumber}º Andar`
  }

  getApartmentStatusTranslation(status: IApartmentStatus): string {
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
}