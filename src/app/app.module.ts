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
import { LoginComponent } from './login/login.component';
import { AppState, INITIAL_APP_STATE } from './store/state';
import { StoreModule, combineReducers, ActionReducer } from "@ngrx/store";
import { EffectsModule } from '@ngrx/effects';

import { AppReducer } from './store/reducers/appReducer';
import { AppEffects } from './store/effects/appEffects';

const reducers = {
  appState: AppReducer,
};

const effects = [
  EffectsModule.run(AppEffects)
];

const combinedReducers: ActionReducer<AppState> = combineReducers(reducers);

export function appReducers(state: AppState = INITIAL_APP_STATE, action: any) {
  return combinedReducers(state, action);
}

@NgModule({
    declarations: [
        AppComponent,
        ProfileComponent,
        VolunteerComponent,
        LoginComponent
    ],
    imports: [
        BrowserAnimationsModule,
        BrowserModule,
        FormsModule,
        HttpModule,
        ClarityModule.forRoot(),
        ROUTING,
        SharedModule,
        CalendarModule.forRoot(),
        StoreModule.provideStore(appReducers),
        effects
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
