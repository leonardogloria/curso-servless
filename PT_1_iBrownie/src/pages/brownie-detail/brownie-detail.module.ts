import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BrownieDetailPage } from './brownie-detail';

@NgModule({
  declarations: [
    BrownieDetailPage,
  ],
  imports: [
    IonicPageModule.forChild(BrownieDetailPage),
  ],
})
export class BrownieDetailPageModule {}
