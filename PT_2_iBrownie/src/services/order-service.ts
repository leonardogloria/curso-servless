import {Injectable} from "@angular/core";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Order } from '../pages/brownie-detail/order';
import { Storage } from '@ionic/storage';
import { Callback, CognitoUtil } from "./cognito.service";


@Injectable()
export class OrderService implements Callback {
    private orders: any;
    
    constructor(public http: HttpClient,public storage: Storage,public cognitoUtil: CognitoUtil){
        
    }
    getAll(token){
        const headers = new HttpHeaders().set("auth", token );

            console.log(token)
       
             const serverUrl = 'https://smqrcs23si.execute-api.us-east-1.amazonaws.com/dev/pedido/1223'
             return this.http.get(serverUrl, {headers: headers})  
    }
    getOrder(id){
       
        for (var i = 0; i < this.orders.length; i++) {
            if (this.orders[i].id === parseInt(id)) {
              return this.orders[i];
            }
          }
          return null;
    }
    checkout(order: Order, token:string){
            const headers = new HttpHeaders()
            .set("auth", token );
        return this.http.post('https://smqrcs23si.execute-api.us-east-1.amazonaws.com/dev/pedido/' ,order, {headers: headers});
    
    }
    callbackWithParam(result: any) {
        console.log(result)
    }
    callback() {
      
    }
}
