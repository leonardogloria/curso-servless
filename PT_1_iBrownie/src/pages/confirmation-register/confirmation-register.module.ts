import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ConfirmationRegisterPage } from './confirmation-register';

@NgModule({
  declarations: [
    ConfirmationRegisterPage,
  ],
  imports: [
    IonicPageModule.forChild(ConfirmationRegisterPage),
  ],
})
export class ConfirmationRegisterPageModule {}
