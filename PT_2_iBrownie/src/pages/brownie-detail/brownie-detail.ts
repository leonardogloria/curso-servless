import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { BrownieService } from '../../services/brownie-service';
import { OrderService } from '../../services/order-service';
import { AlertController } from 'ionic-angular';
import { Order } from './order';
import { Storage } from '@ionic/storage';

@IonicPage()
@Component({
  selector: 'page-brownie-detail',
  templateUrl: 'brownie-detail.html',
})
export class BrownieDetailPage {
  public brownie: any;
  public qtd = 1;

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              public bronieService: BrownieService,
              public alertCtrl: AlertController,
            public orderService: OrderService,
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

    this.storage.get('userName').then((val) =>{
      let order = new Order();
      order.quantidade = this.qtd;
      order.brownieId = this.brownie.id;
      order.clientId = val;
      order.usuario = '123'
      this.orderService.checkout(order).subscribe(data => {
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

}
