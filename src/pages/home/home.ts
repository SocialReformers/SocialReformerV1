import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {CreateEventPage} from '../../pages/create-event/create-event';
import {ComplaintsPage} from '../../pages/complaints/complaints';
import {SignInPage} from '../../pages/sign-in/sign-in';
import {RegisterPage} from '../../pages/register/register';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
 
  constructor(public navCtrl: NavController) {

  }
  register(){
    this.navCtrl.setRoot(RegisterPage);
   }
   signUp(){
    this.navCtrl.setRoot(SignInPage);
   }
   complaint(){
    this.navCtrl.setRoot(ComplaintsPage);
   }
   createEvent(){
    this.navCtrl.setRoot(CreateEventPage);
   }
}
