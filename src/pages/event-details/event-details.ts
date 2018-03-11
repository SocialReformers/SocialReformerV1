import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { JoinEventPage } from '../join-event/join-event';

/**
 * Generated class for the EventDetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-event-details',
  templateUrl: 'event-details.html',
})
export class EventDetailsPage {
  eventlist:any=[];
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    // console.log( this.navParams.get('object')+"Test...");
   this.eventlist= this.navParams.get('result').json();
   console.log(this.eventlist['id']);
   
  }

  join(eventId,eventTitle){
    console.log(eventId+"ID"+eventTitle+"Title")
      this.navCtrl.push(JoinEventPage,{eventId,eventTitle});
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad EventDetailsPage');
  }

}
