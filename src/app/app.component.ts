import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
    selector: 'my-app',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {

    route: String = '/login';
    locationName: string = '';

    constructor(private router: Router) {
        router.events.subscribe((route)=>{
            if(route instanceof NavigationEnd){
                this.route = route.url;
            }
        });
    }

    public address: Object;
    getAddress(place: Object) {
        this.locationName = (<any>place).name;
    }
}
