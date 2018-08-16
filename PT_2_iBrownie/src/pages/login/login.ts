import {Component} from "@angular/core";
import {NavController, AlertController, ToastController, MenuController} from "ionic-angular";
import {CognitoCallback, LoggedInCallback, CognitoUtil, Callback} from "../../services/cognito.service";
import {UserLoginService} from "../../services/userLogin.service";

import {HomePage} from "../home/home";
import {RegisterPage} from "../register/register";
import { ChangePassPage }  from '../change-pass/change-pass';
import { ListBrowniePage } from '../list-brownie/list-brownie';
import { UserService } from '../../services/user-service';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage implements CognitoCallback, Callback {
  userName: string;
  password: string;

  constructor(public nav: NavController, public forgotCtrl: AlertController,public userLoginService: UserLoginService 
    ,public menu: MenuController, public toastCtrl: ToastController, 
 public userService: UserService,
 public alertCtrl: AlertController,
 public cognitoUtil:CognitoUtil,
 public storage: Storage) {
    this.menu.swipeEnable(false);
  }

  // go to register page
  register() {
    this.nav.setRoot(RegisterPage);
  }

  // login and go to home page
  login() {
    this.userService.user.name = "Leonardo Gloria"
    
    this.userLoginService.authenticate(this.userName, this.password, this)
    
  }

  forgotPass() {
    let forgot = this.forgotCtrl.create({
      title: 'Esqueceu a senha?',
      message: "Digite seu e-mail cadastrado.",
      inputs: [
        {
          name: 'email',
          placeholder: 'Email',
          type: 'email'
        },
      ],
      buttons: [
        {
          text: 'Cancelar',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Enviar',
          handler: data => {
            console.log('Send clicked');
            let toast = this.toastCtrl.create({
              message: 'Email was sended successfully',
              duration: 3000,
              position: 'top',
              cssClass: 'dark-trans',
              closeButtonText: 'OK',
              showCloseButton: true
            });
            toast.present();
          }
        }
      ]
    });
    forgot.present();
  }
  cognitoCallback(message: string, result: any) {
    if (message != null) { //error
        if(message == 'User does not exist.'){
          this.doAlert("Error", 'Usuário não existe')
        }else if(message == 'Incorrect username or password.'){
          this.doAlert("Error", 'Usuário ou senha inválidos')
        }
        console.log("result: " + message);
    } else { //success
        console.log("Redirect to ControlPanelComponent");
        this.cognitoUtil.getIdToken(this);
        this.nav.setRoot(ListBrowniePage);
    }
  }
  callbackWithParam(result: any) {
    this.storage.remove('token');
    this.storage.set('token', result )
    console.log(result)
  }
  callback(){}
  doAlert(title: string, message: string) {

    let alert = this.alertCtrl.create({
        title: title,
        subTitle: message,
        buttons: ['OK']
    });
    alert.present();
}

}
