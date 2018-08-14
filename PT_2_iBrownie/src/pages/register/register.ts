import {Component} from "@angular/core";
import {NavController} from "ionic-angular";
import {CognitoCallback, RegistrationUser} from "../../services/cognito.service";

import {LoginPage} from "../login/login";
import {HomePage} from "../home/home";
import { UserRegistrationService } from '../../services/userRegistration.service'
import { ConfirmationRegisterPage } from '../confirmation-register/confirmation-register';

@Component({
  selector: 'page-register',
  templateUrl: 'register.html'
})
export class RegisterPage implements CognitoCallback {
  registrationUser: RegistrationUser;
  constructor(public nav: NavController, 
    public userRegistration: UserRegistrationService,) {
      this.registrationUser = new RegistrationUser();
  }

  // register and go to home page
  register() {
    this.userRegistration.register(this.registrationUser, this);
    //this.nav.setRoot(HomePage);
  }

  // go to login page
  login() {
    this.nav.setRoot(LoginPage);
  }
  cognitoCallback(message: string, result: any) {
    if (message != null) { //error
        console.log("Ops, algo de errado ocorreu! " + message)
    } else { //success
        console.log("in callback...result: " + result);
        this.nav.setRoot(ConfirmationRegisterPage,{
          'email': this.registrationUser.email
        });
    }
}
}
