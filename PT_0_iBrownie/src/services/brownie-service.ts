import {Injectable} from "@angular/core";
import { BROWNIES }  from './mock-brownie';
import { HttpClient, HttpHeaders } from '@angular/common/http';



@Injectable()
export class BrownieService {
    private brownies: any;
    constructor(public http: HttpClient) {
        this.brownies = BROWNIES;
        
    }
    getAll(){
        let headers = new Headers({  "Access-Control-Allow-Origin": "*"});
        let header = new HttpHeaders();
        const httpOptions = {
            headers: new HttpHeaders({ 
              'Access-Control-Allow-Origin':'*',
            
            })
          };
            return this.http.get('https://qubll2xhi6.execute-api.us-east-1.amazonaws.com/production/produtos',httpOptions);
            
     
    }
       
    
    findById(id: number){
        for (var i = 0; i < this.brownies.length; i++) {
            if (this.brownies[i].id === id) {
              return this.brownies[i];
            }
          }
          return null;
    }
}