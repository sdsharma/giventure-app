import { ModuleWithProviders } from '@angular/core/src/metadata/ng_module';
import { Routes, RouterModule } from '@angular/router';

import { ProfileComponent } from './profile/profile.component';
import { VolunteerComponent } from './volunteer/volunteer.component';
import { LoginComponent } from './login/login.component';

import { AccessControlGuard } from './shared/guards/accesscontrol.service';


export const ROUTES: Routes = [
    {path: '', redirectTo: 'login', pathMatch: 'full'},
    {path: 'volunteer', component: VolunteerComponent, canActivate: [AccessControlGuard]},
    {path: 'profile', component: ProfileComponent, canActivate: [AccessControlGuard]},
    {path: 'login', component: LoginComponent}
];

export const ROUTING: ModuleWithProviders = RouterModule.forRoot(ROUTES);