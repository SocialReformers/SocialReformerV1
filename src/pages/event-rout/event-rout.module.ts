import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EventRoutPage } from './event-rout';

@NgModule({
  declarations: [
    EventRoutPage,
  ],
  imports: [
    IonicPageModule.forChild(EventRoutPage),
  ],
})
export class EventRoutPageModule {}
