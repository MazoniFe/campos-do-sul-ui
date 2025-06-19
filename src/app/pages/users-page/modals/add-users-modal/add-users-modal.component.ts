import { CommonModule } from '@angular/common';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { NgxMaskDirective } from 'ngx-mask';
import { CoreButtonComponent } from '../../../../components/button/button.component';
import { MainSpinnerComponent } from '../../../../components/main-spinner/main-spinner.component';
import { ToastService } from '../../../../services/toast/toast.service';
import { UserService } from '../../../../services/user/user.service';
import { IInsertUser } from '../../../../services/user/types';
import { passwordsMatchValidator } from '../../../../utils/commonUtils';
import { ProfileService } from '../../../../services/profile/profile.service';
import { IProfile } from '../../../../services/profile/types';

@Component({
  selector: 'app-add-users-modal',
  imports: [CommonModule, ReactiveFormsModule, NgxMaskDirective, CoreButtonComponent, MainSpinnerComponent],
  templateUrl: './add-users-modal.component.html',
  styleUrl: './add-users-modal.component.css'
})
export class AddUsersModalComponent implements OnInit {

  @Output() close = new EventEmitter<void>();
  @Output() userUpdated = new EventEmitter<void>();
  isLoading: boolean = false;
  selectedProfileId: number | null = null;
  profiles: IProfile[] | null = [];
  formSelectedProfile: IProfile | null = null;
  userForm!: FormGroup;

  constructor(private fb: FormBuilder, private userService: UserService, private profileService: ProfileService, private toastService: ToastService) { }

  async ngOnInit(): Promise<void> {
    this.userForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required, Validators.pattern(/^\d{2}9\d{8}$/)]],
      birthDate: ['', Validators.required],
      cpf: ['', Validators.required],
      password: ['', [Validators.required]],
      confirmPassword: ['', [Validators.required]]
    }, { validators: passwordsMatchValidator });

    this.profiles = await this.getProfiles();

  }


  onSelectProfileChange($event: Event) {
    const selectedId = Number(($event.target as HTMLSelectElement).value);
    this.selectedProfileId = selectedId;
  }

  async onSubmit(): Promise<void> {
    try {
      this.isLoading = true;
      const formData = this.userForm.value;

      const userPayload: IInsertUser = {
        person: {
          cpf: formData.cpf,
          firstName: formData.firstName,
          lastName: formData.lastName,
          email: formData.email,
          phone: formData.phone,
          birthDate: formData.birthDate,
          category: 'RESIDENT',
          apartmentId: 0
        },
        password: formData.password,
        profileId: 1
      };

      await this.userService.insert(userPayload);

      this.userUpdated.emit();
      this.toastService.show('success', 'Sucesso!', 'Morador registrado com Sucesso!');
    } catch (e: any) {
      console.error(e);
      this.toastService.show('error', 'Algo deu errado!', e.message || 'Erro inesperado.');
    } finally {
      this.isLoading = false;
      this.onClose();
    }
  }


  async getProfiles(): Promise<IProfile[] | null> {
    try {
      this.isLoading = true;
      const data = (await this.profileService.getAll()).content;
      return data;
    } catch (ex) {
      this.toastService.show('error', 'Algo deu errado', 'Erro ao buscar os perfis disponíveis');
      console.error(ex);
      return null;
    }
    finally {
      this.isLoading = false;
    }
  }

  onClose() {
    this.close.emit();
  }
}