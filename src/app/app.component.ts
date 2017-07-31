import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { Store } from '@ngrx/store';
import { AppState } from './store/state';
import { AppActions } from './store/actions/appActions';

@Component({
    selector: 'my-app',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {

    route: String = '/login';

    constructor(private router: Router, private store: Store<AppState>) {
        router.events.subscribe((route)=>{
            if(route instanceof NavigationEnd){
                this.route = route.url;
            }
        });
    }

    public address: Object;
    getAddress(place: Object) {
        this.store.dispatch({ type: AppActions.SET_LOCATION, payload: (<any>place).name });
    }
}
