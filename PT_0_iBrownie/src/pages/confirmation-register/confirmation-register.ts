import { Component } from '@angular/core';
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

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ConfirmationRegisterPage');
  }
  confirm(){
      this.navCtrl.setRoot(LoginPage);
  }

}
