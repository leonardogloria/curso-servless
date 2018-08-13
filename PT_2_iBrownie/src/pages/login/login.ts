import {Component} from "@angular/core";
import {NavController, AlertController, ToastController, MenuController} from "ionic-angular";
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
export class LoginPage {
  userName: string;
  passWord: string;

  constructor(public nav: NavController, public forgotCtrl: AlertController, public menu: MenuController, public toastCtrl: ToastController, 
 public userService: UserService,
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
    this.storage.set('userName', this.userName )
    if(this.userName === 'leonardo'){
      this.nav.setRoot(ListBrowniePage);
      
    }else {
      if(this.userName === 'leo'){
        const alert = this.forgotCtrl.create({
          title: 'Troque sua senha',
          subTitle: 'Por favor troque sua senha!!',
          buttons: ['OK']
        });    
        alert.present();
    
        this.nav.push(ChangePassPage)
      } else {
        const alert = this.forgotCtrl.create({
          title: 'Usuário Inválido',
          subTitle: 'Verifique suas credencias!!',
          buttons: ['OK']
        });    
        alert.present();
      }
    }
   

    
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

}
