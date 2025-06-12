import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { AddResidentsModalComponent } from "./modals/add-residents-modal/add-residents-modal.component";
import { IPersonDetailed } from '../../services/person/types';
import { PersonService } from '../../services/person/person.service';
import { PhoneFormatPipe } from "../../pipes/phone-format/phone-format.pipe";
import { CpfFormatPipe } from '../../pipes/cpf-format/cpf-format.pipe';
import { MainSpinnerComponent } from "../../components/main-spinner/main-spinner.component";
import { GenericModalComponent } from "../../components/modals/generic-modal/generic-modal.component";
import { ToastService } from '../../services/toast/toast.service';
import { EditResidentsModalComponent } from './modals/edit-residents-modal/edit-residents-modal.component';
import { ModalService } from '../../services/modal/modal.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-residents-page',
  imports: [CommonModule, AddResidentsModalComponent, EditResidentsModalComponent, PhoneFormatPipe, CpfFormatPipe, MainSpinnerComponent, GenericModalComponent],
  templateUrl: './residents-page.component.html',
  styleUrl: './residents-page.component.css'
})
export class ResidentsPageComponent implements OnInit {
  constructor(
    private personService: PersonService,
    private toastService: ToastService,
    private modalService: ModalService
  ) { }

  currentModal: 'add' | 'edit' | 'view' | 'delete' | null = null;
  selectedResidentId: number | null = null;
  private modalSub!: Subscription;

  showModal: boolean = true;
  residents: IPersonDetailed[] = [];
  isLoading: boolean = false;
  isModalLoading: boolean = false;

  async ngOnInit(): Promise<void> {
    this.modalSub = this.modalService.modalState$.subscribe((state) => {
      this.currentModal = state.name as any;
      this.selectedResidentId = state.itemId as number | null;
    });

    this.getResidents();
    await this.getResidents();
  }

  openModal(modal: 'add' | 'edit' | 'view' | 'delete') {
    this.modalService.open(modal);
  }

  closeModal() {
    this.modalService.close();
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
    this.modalService.open('delete', id);
  }

  setupResidentToUpdate(id: number): void {
    this.modalService.open('edit', id);
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
