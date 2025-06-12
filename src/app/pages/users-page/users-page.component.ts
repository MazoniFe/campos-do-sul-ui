import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { UserService } from '../../services/user/user.service';
import { ModalService } from '../../services/modal/modal.service';
import { ToastService } from '../../services/toast/toast.service';
import { IUser } from '../../services/user/types';
import { AddUsersModalComponent } from './modals/add-users-modal/add-users-modal.component';
import { EditUsersModalComponent } from './modals/edit-users-modal/edit-users-modal.component';
import { MainSpinnerComponent } from '../../components/main-spinner/main-spinner.component';
import { GenericModalComponent } from '../../components/modals/generic-modal/generic-modal.component';
import { CpfFormatPipe } from '../../pipes/cpf-format/cpf-format.pipe';
import { PhoneFormatPipe } from '../../pipes/phone-format/phone-format.pipe';

@Component({
  selector: 'app-users-page',
  imports: [CommonModule, AddUsersModalComponent, MainSpinnerComponent],
  templateUrl: './users-page.component.html',
  styleUrl: './users-page.component.css'
})
export class UsersPageComponent {

 constructor(
     private userService: UserService,
     private toastService: ToastService,
     private modalService: ModalService
   ) { }
 
   currentModal: 'add' | 'edit' | 'view' | 'delete' | null = null;
   selectedResidentId: number | null = null;
   private modalSub!: Subscription;
 
   showModal: boolean = true;
   users: IUser[] = [];
   isLoading: boolean = false;
   isModalLoading: boolean = false;
 
   async ngOnInit(): Promise<void> {
     this.modalSub = this.modalService.modalState$.subscribe((state) => {
       this.currentModal = state.name as any;
       this.selectedResidentId = state.itemId as number | null;
     });
     await this.getUsers();
   }
 
   openModal(modal: 'add' | 'edit' | 'view' | 'delete') {
     this.modalService.open(modal);
   }
 
   closeModal() {
     this.modalService.close();
   }
 
   async getUsers() {
     try {
       this.isLoading = true;
       this.users = (await this.userService.getAll()).content;
     } catch (ex: any) {
       this.toastService.show('error', 'Falha ao buscar usuários', ex.message);
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
       //await this.userService.delete(this.selectedResidentId);
       this.toastService.show('success', '', 'Usuário removido com sucesso!');
       this.closeModal();
       await this.getUsers();
     } catch (ex: any) {
       this.toastService.show('error', 'Algo deu errado!', ex.message);
       console.error(ex);
     } finally {
       this.isModalLoading = false;
     }
   }
}
