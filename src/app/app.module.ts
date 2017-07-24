import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { ClarityModule } from 'clarity-angular';
import { AppComponent } from './app.component';
import { ROUTING } from "./app.routing";
import { VolunteerComponent } from "./volunteer/volunteer.component";
import { ProfileComponent } from "./profile/profile.component";
import { SharedModule } from "./shared/shared.module";
import { CalendarModule } from 'angular-calendar';

@NgModule({
    declarations: [
        AppComponent,
        ProfileComponent,
        VolunteerComponent
    ],
    imports: [
        BrowserAnimationsModule,
        BrowserModule,
        FormsModule,
        HttpModule,
        ClarityModule.forRoot(),
        ROUTING,
        SharedModule,
        CalendarModule.forRoot()
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
