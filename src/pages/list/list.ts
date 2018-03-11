import { Component,Output, EventEmitter, } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {EventsProvider} from '../../providers/events/events'
import {ConnectionProvider} from '../../providers/connection/connection';
import { EventDetailsPage } from '../event-details/event-details';

@Component({
  selector: 'page-list',
  templateUrl: 'list.html'
})
export class ListPage {
  selectedItem: any;
  resultq:any;
  //icons: string[];
  // items: Array<{title: string, note: string, icon: string}>;
  @Output()
  eventlist:any;
  eventDetails:any;
  
    constructor(public navCtrl: NavController, public navParams: NavParams,public connectionProvider:ConnectionProvider,public eventsProvider:EventsProvider ) {
    // If we navigated to this page, we will have an item available as a nav param
    //this.selectedItem = navParams.get('item');
    this.eventsProvider=eventsProvider;
    this.connectionProvider=connectionProvider;
    //this.geoloaction=geoloaction;
    // Let's populate this page with some filler content for funzies
    // this.icons = ['flask', 'wifi', 'beer', 'football', 'basketball', 'paper-plane',
    // 'american-football', 'boat', 'bluetooth', 'build'];

    // this.items = [];
    // for (let i = 1; i < 11; i++) {
    //   this.items.push({
    //     title: 'Item ' + i,
    //     note: 'This is item #' + i,
    //     icon: this.icons[Math.floor(Math.random() * this.icons.length)]
    //   });
    // }
    this.eventsProvider.getEventList().
    then((result:any)=>{
    var object=JSON.stringify(result.json());
    console.log(object+"Tesing");
    this.eventlist=JSON.parse(object); 
    })
   // console.log(this.eventlist.json());
  }

  
 getEventsList(){

 }
 getEventDetails(eventId){
    this.eventsProvider.getEventDetails(eventId).
    then((result:any)=>{
    var object=result.json();
    console.log(object+"Tesing");
    this.eventDetails=JSON.stringify(object); 
    console.log(this.eventDetails+"THis gmmm");
    this.navCtrl.push(EventDetailsPage,{result});
    })
    console.log(this.eventDetails);
 }
 
}
