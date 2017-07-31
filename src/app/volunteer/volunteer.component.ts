import { Component, OnInit, ChangeDetectorRef } from "@angular/core";
import { Store } from '@ngrx/store';
import { AppState } from '../store/state';

@Component({
    styleUrls: ['./volunteer.component.scss'],
    templateUrl: './volunteer.component.html',
})
export class VolunteerComponent implements OnInit {
    viewDate: Date = new Date();
    location: String = '';

    constructor(private store: Store<AppState>, private changeDetector: ChangeDetectorRef) { }

    ngOnInit(): void {
        this.store.select((state: AppState) => {
            return state;
        }).subscribe((state: AppState) => {
            this.location = (<any>state).appState.location;
            this.changeDetector.detectChanges();
        });
    }
}
