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
  eventlist:any;
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
    var object=JSON.stringify(result.json() );
    console.log(object+"Tesing");
    this.eventlist=JSON.parse(JSON.stringify(result.json())); 
    })
    console.log(this.eventlist);
  }

  
 getEventsList(){

 }
  convertObjectToString(data) {
  Object.keys(data).forEach(function (key) {
      if (data[key] && typeof data[key] === 'object') {
          Object.keys(data[key]).forEach(function (key1) {
              data[key][key1] = String(data[key][key1]);
          });
      } else if (data[key] && typeof data[key] === 'string' || typeof data[key] === 'number') {
          data[key] = String(data[key]);
      } else {
          data[key] = "";
      }

  });
  return data;
}




}
