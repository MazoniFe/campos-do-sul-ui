import { Routes } from '@angular/router';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { DashboardPageComponent } from './pages/dashboard-page/dashboard-page.component';
import { ResidentsPageComponent } from './pages/residents-page/residents-page.component';
import { FullLayoutComponent } from './layouts/full-layout/full-layout.component';
import { BlankLayoutComponent } from './layouts/blank-layout/blank-layout.component';
import { UsersPageComponent } from './pages/users-page/users-page.component';
import { ApartmentsPageComponent } from './pages/apartments-page/apartments-page.component';
import { VehiclesPageComponent } from './pages/vehicles-page/vehicles-page.component';
import { ProfilesPageComponent } from './pages/profiles-page/profiles-page.component';
import { SettingsPageComponent } from './pages/settings-page/settings-page.component';

export const routes: Routes = [
  {
    path: '',
    component: BlankLayoutComponent,
    children: [
      { path: '', redirectTo: 'login', pathMatch: 'full' },
      { path: 'login', component: LoginPageComponent }
    ]
  },
  {
    path: '',
    component: FullLayoutComponent,
    children: [
      { path: 'dashboard', component: DashboardPageComponent },
      { path: 'residents', component: ResidentsPageComponent },
      { path: 'users', component: UsersPageComponent },
      { path: 'apartments', component: ApartmentsPageComponent },
      { path: 'vehicles', component: VehiclesPageComponent },
      { path: 'profiles', component: ProfilesPageComponent },
      { path: 'settings', component: SettingsPageComponent },
    ]
  }
];
