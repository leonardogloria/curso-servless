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
      
            return this.http.get('http://localhost:3000/brownies');
            
     
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