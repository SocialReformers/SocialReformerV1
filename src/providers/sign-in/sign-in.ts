import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import {ConnectionProvider} from '../connection/connection';
/*
  Generated class for the SignInProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class SignInProvider {

  constructor(public http: Http,public connectionProvider:ConnectionProvider) {
    this.connectionProvider=connectionProvider;
    console.log('Hello SignInProvider Provider');
  }

  validateUser(data)  {
    
       return new Promise((resolve, reject) => {
      console.log(this.connectionProvider.getUrl()+ JSON.stringify(data));
 
         this.http.post(this.connectionProvider.getUrl()
       +'/socialReformer/register/autheticate', JSON.stringify(data),this.connectionProvider.addHeader())
           .subscribe(res => {
             resolve(res);
           }, (err) => {
             reject(err);
           });
       });
     } 
}
