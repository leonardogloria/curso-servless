import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { LoginPage } from '../login/login';
import { ListBrowniePage } from '../list-brownie/list-brownie';
/**
 * Generated class for the ChangePassPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-change-pass',
  templateUrl: 'change-pass.html',
})
export class ChangePassPage {
  userName: string;
  password: string;
  newPassword: string;
  constructor(public navCtrl: NavController, public navParams: NavParams,
     public alertController: AlertController) {
  }
  changePass(){
    const alert = this.alertController.create({
      title: 'Senha alterada com sucesso',
      subTitle: 'Seja-Bem Vindo!!',
      buttons: ['OK']
    });    
    alert.present();
    this.navCtrl.setRoot(ListBrowniePage);
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad ChangePassPage');
  }

}
