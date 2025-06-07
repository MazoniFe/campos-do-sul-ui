import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { AddResidentsModalComponent } from "../../components/modals/add-residents-modal/add-residents-modal.component";
import { IPersonDetailed } from '../../services/person/types';
import { PersonService } from '../../services/person/person.service';
import { PhoneFormatPipe } from "../../pipes/phone-format/phone-format.pipe";
import { CpfFormatPipe } from '../../pipes/cpf-format/cpf-format.pipe';
import { MainSpinnerComponent } from "../../components/main-spinner/main-spinner.component";
import { GenericModalComponent } from "../../components/modals/generic-modal/generic-modal.component";
import { ToastService } from '../../services/toast/toast.service';

@Component({
  selector: 'app-residents-page',
  imports: [CommonModule, AddResidentsModalComponent, PhoneFormatPipe, CpfFormatPipe, MainSpinnerComponent, GenericModalComponent],
  templateUrl: './residents-page.component.html',
  styleUrl: './residents-page.component.css'
})
export class ResidentsPageComponent implements OnInit {
  [x: string]: any;

  constructor(private personService: PersonService, private toastService: ToastService) { }

  selectedResidentId: number | null = null;

  showModal: boolean = true;
  currentModal: 'add' | 'edit' | 'view' | 'delete' | null = null;
  residents: IPersonDetailed[] = [];
  isLoading: boolean = false;
  isModalLoading: boolean = false;

  async ngOnInit(): Promise<void> {
    await this.getResidents();
  }

  openModal(modal: 'add' | 'edit' | 'view' | 'delete') {
    this.currentModal = modal;
  }

  closeModal() {
    this.selectedResidentId = null;
    this.currentModal = null;
  }

  async getResidents() {
    try {
      this.isLoading = true;
      this.residents = (await this.personService.getAllDetailed()).content;
    } catch (ex: any) {
      this.toastService.show('error', 'Falha ao buscar Residentes', ex.message);
      console.error(ex);
    } finally {
      this.isLoading = false;
    }
  }

  setupResidentToDelete(id: number): void {
    this.selectedResidentId = id;
    this.openModal('delete');
  }

  async deleteResident(): Promise<void> {
    try {
      if (this.selectedResidentId === null) return;
      this.isModalLoading = true;
      await this.personService.delete(this.selectedResidentId);
      this.toastService.show('success', '', 'Usuário removido com sucesso!');
      this.closeModal();
      await this.getResidents();
    } catch (ex: any) {
      this.toastService.show('error', 'Algo deu errado!', ex.message);
      console.error(ex);
    } finally {
      this.isModalLoading = false;
    }
  }


}
