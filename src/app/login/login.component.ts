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

  resetModel: FormGroup = new FormGroup({
    email: new FormControl('', Validators.required)
  });

  signupModel: FormGroup = new FormGroup({
  	first_name: new FormControl(''),
  	middle_name: new FormControl(''),
  	last_name: new FormControl(''),
    phone: new FormControl(''),
    location: new FormControl('', Validators.required),
    email: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
    birthday: new FormControl('', Validators.required)
  });

  loggedIn: null;

  register: false;
  reset: false;

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

  resetEmail() {
  	if(this.resetModel.valid) {
  		this.store.dispatch({type: AppActions.RESET,
  			payload: {email: <string>this.resetModel.value.email}});
  		this.cancelReset();
  	}
  }

  cancelReset() {
  	this.reset = false;
  	this.resetModel.reset();
  }

  registerAccount() {
  	if(this.signupModel.valid) {
  		this.store.dispatch({
  			type: AppActions.CREATE_USER,
  			payload: this.signupModel.value
  		});
  		this.cancelRegister();
  	}
  }

  cancelRegister() {
  	this.register = false;
  	this.signupModel.reset();
  }
}
