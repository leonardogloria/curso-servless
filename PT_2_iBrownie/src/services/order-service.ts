import {Injectable} from "@angular/core";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Order } from '../pages/brownie-detail/order';
import { Storage } from '@ionic/storage';


@Injectable()
export class OrderService {
    private orders: any;
    constructor(public http: HttpClient,public storage: Storage){
        
    }
    getAll(){
             return this.http.get('http://localhost:3000/orders/?clienteId=1')  
    }
    getOrder(id){
        for (var i = 0; i < this.orders.length; i++) {
            if (this.orders[i].id === parseInt(id)) {
              return this.orders[i];
            }
          }
          return null;
    }
    checkout(order: Order){
        return this.http.post('http://localhost:3000/orders', order);
    }
}
