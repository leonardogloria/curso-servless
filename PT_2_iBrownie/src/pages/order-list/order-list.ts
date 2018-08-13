import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { OrderService } from '../../services/order-service';
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
    public orderService: OrderService) {
    
  }

  ionViewDidLoad() {
    this.orderService.getAll().subscribe(data =>{
      this.orders = data;
      console.log(data)
    })
  
  }
}
