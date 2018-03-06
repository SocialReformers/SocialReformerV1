import { Component,Output, EventEmitter, } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {EventsProvider} from '../../providers/events/events'
import {ConnectionProvider} from '../../providers/connection/connection';

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
  eventlist: EventEmitter<any> = new EventEmitter<any>();
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
  }

  
 getEventsList(){
//   const subscription = this.geoloaction.watchPosition()
//   .filter((p) => p.coords !== undefined) //Filter Out Errors
//   .subscribe(position => {
// console.log(position.coords.longitude + ' ' + position.coords.latitude);
// });

//    console.log(subscription+"Test");
   this.eventsProvider.getEventList().
   then((result:any)=>{
   // this.resultq=JSON.parse(result);
    console.log(result);
    // if (!result) {      
    //   this.eventlist.emit({'response': false, 'reason': 'Failed to get geo location'});
    // }else {
     
    // }
   })
 }

}
