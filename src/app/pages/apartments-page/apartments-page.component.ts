import { Component, OnInit } from '@angular/core';
import { StatusCardComponent } from '../../components/simple-status-card/simple-status-card.component';
import { CommonModule } from '@angular/common';
import { ITower } from '../../services/tower/types';
import { TowerService } from '../../services/tower/tower.service';
import { MainSpinnerComponent } from '../../components/main-spinner/main-spinner.component';

@Component({
  selector: 'app-apartments-page',
  imports: [StatusCardComponent, CommonModule, MainSpinnerComponent],
  templateUrl: './apartments-page.component.html',
  styleUrl: './apartments-page.component.css'
})
export class ApartmentsPageComponent implements OnInit {

  towers: ITower[] = [];
  isLoading: boolean = true;


  constructor(
    private towerService: TowerService,

  ) { }

  async ngOnInit(): Promise<void> {
    try {
      this.isLoading = true;
      this.towers = (await this.towerService.getAll()).content;
      this.towers.unshift({ id: 0, number: 0 });
    } catch (e) {
      console.error(e);
    } finally {
      this.isLoading = false;
    }
  }


  apartments = [
    { "tower": 1, "number": 101, "owner": "Proprietário 1-A", "inq": "Inquilino 1-A", "area": 85 },
    { "tower": 1, "number": 102, "owner": "Proprietário 1-B", "inq": "Inquilino 1-B", "area": 85 },
    { "tower": 2, "number": 101, "owner": "Proprietário 2-A", "inq": "Inquilino 2-A", "area": 85 },
    { "tower": 2, "number": 102, "owner": "Proprietário 2-B", "inq": "Inquilino 2-B", "area": 85 },
    { "tower": 3, "number": 101, "owner": "Proprietário 3-A", "inq": "Inquilino 3-A", "area": 85 },
    { "tower": 3, "number": 102, "owner": "Proprietário 3-B", "inq": "Inquilino 3-B", "area": 85 },
    { "tower": 4, "number": 101, "owner": "Proprietário 4-A", "inq": "Inquilino 4-A", "area": 85 },
    { "tower": 4, "number": 102, "owner": "Proprietário 4-B", "inq": "Inquilino 4-B", "area": 85 },
    { "tower": 5, "number": 101, "owner": "Proprietário 5-A", "inq": "Inquilino 5-A", "area": 85 },
    { "tower": 5, "number": 102, "owner": "Proprietário 5-B", "inq": "Inquilino 5-B", "area": 85 },
    { "tower": 6, "number": 101, "owner": "Proprietário 6-A", "inq": "Inquilino 6-A", "area": 85 },
    { "tower": 6, "number": 102, "owner": "Proprietário 6-B", "inq": "Inquilino 6-B", "area": 85 },
    { "tower": 7, "number": 101, "owner": "Proprietário 7-A", "inq": "Inquilino 7-A", "area": 85 },
    { "tower": 7, "number": 102, "owner": "Proprietário 7-B", "inq": "Inquilino 7-B", "area": 85 },
    { "tower": 8, "number": 101, "owner": "Proprietário 8-A", "inq": "Inquilino 8-A", "area": 85 },
    { "tower": 8, "number": 102, "owner": "Proprietário 8-B", "inq": "Inquilino 8-B", "area": 85 }
  ]



  onTowerChange(event: Event) {
    console.log("EAE");
  }
}
