import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { BrownieService } from '../../services/brownie-service';
import { BrownieDetailPage } from '../brownie-detail/brownie-detail';
/**
 * Generated class for the ListBrowniePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-list-brownie',
  templateUrl: 'list-brownie.html',
})
export class ListBrowniePage {
  public brownies: any;
  constructor(public navCtrl: NavController, public navParams: NavParams,
    public brownieService:BrownieService) {
     
  }

  ionViewDidLoad() {
     this.brownieService.getAll().subscribe(res =>{
      console.log(res) 
      this.brownies = res
   });
  }

  viewDetail(id:number){
    this.navCtrl.push(BrownieDetailPage, {id: id});
  }

}
