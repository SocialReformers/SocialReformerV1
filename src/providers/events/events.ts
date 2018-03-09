import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import {ConnectionProvider} from '../../providers/connection/connection';
import { Console } from '@angular/core/src/console'; 
//import 'rxjs/Observable'
//import { Observable } from 'rxjs/Observable';

/*
  Generated class for the EventsProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class EventsProvider {

  constructor(public http: Http,public connectionProvider:ConnectionProvider) {
  this.connectionProvider=connectionProvider;
  }
 getEventList(){
   return new Promise((resolve,reject)=>{
     console.log(this.connectionProvider.getUrl());
     this.http.get(this.connectionProvider.getUrl()
     +'/socialReformer/events/nearYou',this.connectionProvider.addHeader()).
     subscribe(res=>{
       resolve(res);
    },err=>{
      reject(err);
    })
   })
 }
 getEventDetails(eventId){
  return new Promise((resolve,reject)=>{
    console.log(this.connectionProvider.getUrl());
    this.http.post(this.connectionProvider.getUrl()
    +'/socialReformer/events /eventDetails ?eventId'+eventId,this.connectionProvider.addHeader()).
    subscribe(res=>{
      resolve(res);
   },err=>{
     reject(err);
   })
  })
}
  addEvents(data){
     return new Promise((resolve, reject) => {
    console.log(this.connectionProvider.getUrl()+ JSON.stringify(data));

       this.http.post(this.connectionProvider.getUrl()
     +'/socialReformer/events/createEvent/events', JSON.stringify(data),this.connectionProvider.addHeader())
         .subscribe(res => {
          alert("sucess");
           resolve(res);
         }, (err) => {
           reject(err);
         });
     });
   } 

  }



