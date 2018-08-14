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
             const serverUrl = 'https://smqrcs23si.execute-api.us-east-1.amazonaws.com/dev/pedido/123'
             return this.http.get(serverUrl)  
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
        return this.http.post('https://smqrcs23si.execute-api.us-east-1.amazonaws.com/dev/pedido/', order);
    }
}
