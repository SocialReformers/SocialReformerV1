import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, App, ViewController  } from 'ionic-angular';
import{Storage} from '@ionic/storage';
import { LocalStorageService } from '../../providers/storage/storage';
/**
 * Generated class for the MyAccountPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-my-account',
  templateUrl: 'my-account.html'
})
export class MyAccountPage {
   username:String;

  constructor( public viewCtrl: ViewController) {   
 
//this.viewCtrl.getNavParams()
 
  }
  signOut(){
   localStorage.clear();
  }

  ionViewDidLoad() {
    this.username=localStorage.getItem("username");
  }
}
