import { ModuleWithProviders } from '@angular/core/src/metadata/ng_module';
import { Routes, RouterModule } from '@angular/router';

import { ProfileComponent } from './profile/profile.component';
import { VolunteerComponent } from './volunteer/volunteer.component';


export const ROUTES: Routes = [
    {path: '', redirectTo: 'volunteer', pathMatch: 'full'},
    {path: 'volunteer', component: VolunteerComponent},
    {path: 'profile', component: ProfileComponent}
];

export const ROUTING: ModuleWithProviders = RouterModule.forRoot(ROUTES);
