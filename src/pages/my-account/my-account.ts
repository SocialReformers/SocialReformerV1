
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, App, ViewController  } from 'ionic-angular';
import{Storage} from '@ionic/storage';
import { LocalStorageService } from '../../providers/storage/storage';
import{EventRoutPage} from '../../pages/event-rout/event-rout';
import{ListPage} from '../../pages/list/list';
import { CreateEventPage } from '../create-event/create-event';

/**
* Generated class for the MyAccountPage page.
*
* See _https://ionicframework.com/docs/components/#navigation for more info on
* Ionic pages and navigation.
*/

@IonicPage()
@Component({
selector: 'page-my-account',
templateUrl: 'my-account.html'
})
export class MyAccountPage {
username:String;


  constructor( public navCtrl:NavController,public viewCtrl: ViewController) {   
 
//this.viewCtrl.getNavParams()
 
  }
  signOut(){
   localStorage.clear();
  }
  createEvent(){
   this.navCtrl.push(EventRoutPage);
  }
  eventList(){
    this.navCtrl.push(EventRoutPage);
  }


ionViewDidLoad() {
this.username=localStorage.getItem("username");
}
} 
 
