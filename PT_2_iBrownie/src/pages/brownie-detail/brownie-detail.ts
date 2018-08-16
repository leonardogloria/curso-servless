import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { BrownieService } from '../../services/brownie-service';
import { OrderService } from '../../services/order-service';
import { AlertController } from 'ionic-angular';
import { v4 as uuid } from 'uuid';
import { Order } from './order';
import { Storage } from '@ionic/storage';
import { CognitoUtil, Callback } from '../../services/cognito.service';

@IonicPage()
@Component({
  selector: 'page-brownie-detail',
  templateUrl: 'brownie-detail.html',
})
export class BrownieDetailPage implements Callback {
  public brownie: any;
  public qtd = 1;

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              public bronieService: BrownieService,
              public alertCtrl: AlertController,
            public orderService: OrderService,
            public cognitoService: CognitoUtil,
          public storage: Storage ) {
    let id = this.navParams.get('id')
    this.brownie = this.bronieService.findById(parseInt(id));

  }
  minus(){
    this.qtd--;
  }
  plus(){
    this.qtd ++;
  }
  checkout() {

    this.storage.get('token').then((val) =>{
      let order = new Order();
      order.quantidade = this.qtd;
      order.brownieId = this.brownie.id;
      order.uuid = uuid();
      this.cognitoService.getIdToken(this);
      order.clientId = val;
      order.usuario = this.cognitoService.getCurrentUser()['username'];

      this.orderService.checkout(order,val).subscribe(data => {
        console.log(data)
      });
    });
    

    const alert = this.alertCtrl.create({
      title: 'Compra Efetuada com sucesso!',
      subTitle: 'Seu pedido foi efetuado com sucesso!',
      buttons: ['OK']
    });
    alert.present();
  }
  ionViewDidLoad() {
  }
  callbackWithParam(result: any) {
  }
  callback() {
    
  }
  
  cognitoCallback(message: string, result: any) {
    if (message != null) { //error
        if(message == 'User does not exist.'){
         // this.doAlert("Error", 'Usuário não existe')
        }else if(message == 'Incorrect username or password.'){
        //  this.doAlert("Error", 'Usuário ou senha inválidos')
        }
        console.log("result: " + message);
    } else { //success
        console.log("Redirect to ControlPanelComponent");
        
      //  this.nav.setRoot(ListBrowniePage);
    }
  }

}
