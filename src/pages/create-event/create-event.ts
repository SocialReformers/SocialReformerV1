import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormBuilder, FormControlName,FormGroup, Validators } from '@angular/forms';
import { Geolocation } from '@ionic-native/geolocation';
import { AutoCompleteProvider } from '../../providers/auto-complete/auto-complete';
import {ListPage} from '../list/list';
import {EventRoutPage} from '../../pages/event-rout/event-rout';
/**
 * Generated class for the CreateEventPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-create-event',
  templateUrl: 'create-event.html',
})
export class CreateEventPage {
  nav: NavController;
  username:String;
  constructor(naveCtrl:NavController){
    this.nav=naveCtrl;


  }

  ionViewDidLoad() {
    //this.username=localStorage.getItem("username");
  }
  eventList(){
    this.nav.push(ListPage);
  }

  createEvent(){
  this.nav.push(EventRoutPage);
}
} 
