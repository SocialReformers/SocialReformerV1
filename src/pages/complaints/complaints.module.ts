import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { ComplaintsPage } from './complaints';

@NgModule({
  declarations: [
    ComplaintsPage,
  ],
  imports: [
    IonicModule.forRoot(ComplaintsPage),
  ],
})
export class ComplaintsPageModule {}
