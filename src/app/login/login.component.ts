import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../store/state';
import { AppActions } from '../store/actions/appActions';
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { Observable } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private store: Store<AppState>) { }

  model: FormGroup = new FormGroup({
    username: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required)
  });

  loggedIn: null;

  ngOnInit() {
  	this.store.select((state: AppState) => {
        return state;
    }).subscribe((state: AppState) => {
        this.loggedIn = (<any>state).appState.loggedIn;
    });
  }

  login(){
  	if(this.model.valid) {
  		this.store.dispatch({type: AppActions.LOGIN, 
  			payload: {username: <string>this.model.value.username, password: <string>this.model.value.password}});
  	}
  }

}
