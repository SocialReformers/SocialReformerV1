import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import {ConnectionProvider} from '../../providers/connection/connection';
import { Console } from '@angular/core/src/console';

/*
  Generated class for the ComplaintsProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ComplaintsProvider {

  constructor(public http: Http,public connectionProvider:ConnectionProvider) {
    this.connectionProvider=connectionProvider;
  }
  retrieveCause(){
    return new Promise((resolve,reject)=>{
      
        this.http.get(this.connectionProvider.getUrl()
       +'/socialReformer/complaint/cause',this.connectionProvider.addHeader())
           .subscribe(res => {
             resolve(res.json());          
           }, (err) => {
             reject(err);
           });
       });
    }
 raiseComplaint(data){
   return new Promise((resolve,reject)=>{
     console.log(this.connectionProvider.getUrl()+JSON.stringify(data));
       this.http.post(this.connectionProvider.getUrl()
      +'/socialReformer/complaint/complaint', JSON.stringify(data),this.connectionProvider.addHeader())
          .subscribe(res => {
            resolve(res);
          }, (err) => {
            reject(err);
          });
      });
  
 }

 getNgoDetails(data,city){
  return new Promise((resolve,reject)=>{
      this.http.get(this.connectionProvider.getUrl()
     +'/socialReformer/complaint/ngo'+"?cause="+data+"&city="+city,this.connectionProvider.addHeader())
         .subscribe(res => {
           resolve(res.json());
         }, (err) => {
           reject(err);
         });
     });
 }
}
