import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { JoinEventPage } from './join-event';

@NgModule({
  declarations: [
    JoinEventPage,
  ],
  imports: [
    IonicPageModule.forChild(JoinEventPage),
  ],
})
export class JoinEventPageModule {}
