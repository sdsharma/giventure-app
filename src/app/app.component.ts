import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
    selector: 'my-app',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {

    route: String = '/login';

    constructor(private router: Router) {
        router.events.subscribe((route)=>{
            if(route instanceof NavigationEnd){
                this.route = route.url;
            }
        });
    }

    public address: Object;
    getAddress(place: Object) {
        this.address = place['formatted_address'];
        var location = place['geometry']['location'];
        var lat =  location.lat();
        var lng = location.lng();
        console.log("Address Object", place);
    }
}
