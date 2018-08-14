import { Component } from '@angular/core';
import {UserRegistrationService} from "../../services/userRegistration.service";
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {LoginPage} from "../login/login";

/**
 * Generated class for the ConfirmationRegisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-confirmation-register',
  templateUrl: 'confirmation-register.html',
})
export class ConfirmationRegisterPage {
  confirmationCode: string;
  constructor(public navCtrl: NavController, public navParams: NavParams,
    public userRegistration: UserRegistrationService,) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ConfirmationRegisterPage');
  }
  confirm(){
      this.userRegistration.confirmRegistration(this.navParams.get("email"), this.confirmationCode, this);
      this.navCtrl.setRoot(LoginPage);
  }
  cognitoCallback(message: string, result: any) {
    if (message != null) { //error
    } else { //success
        console.log("Entered ConfirmRegistrationComponent");
        let email = this.navParams.get("email");

        if (email != null)
            this.navCtrl.push(LoginPage, {
                'email': email
            });
        else
          this.navCtrl.push(LoginPage);
    }
}

}
