import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { OrderService } from '../../services/order-service';
import { Storage } from '@ionic/storage';

/**
 * Generated class for the OrderListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-order-list',
  templateUrl: 'order-list.html',
})
export class OrderListPage {
  orders: any;
  constructor(public navCtrl: NavController, 
    public navParams: NavParams,
    public orderService: OrderService,
    public storage: Storage) {
    
  }

  ionViewDidLoad() {
    this.storage.get('token').then((val) => {
      console.log(val)
    this.orderService.getAll(val).subscribe(data =>{
      
      this.orders = data['Items'];
      console.log(data)
    })
  })
  
  }
}
