import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ListBrowniePage } from './list-brownie';

@NgModule({
  declarations: [
    ListBrowniePage,
  ],
  imports: [
    IonicPageModule.forChild(ListBrowniePage),
  ],
})
export class ListBrowniePageModule {}
