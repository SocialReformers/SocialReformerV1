import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import {ConnectionProvider} from '../../providers/connection/connection';
import { Console } from '@angular/core/src/console';

/*
  Generated class for the RegisterProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class RegisterProvider {

  
    constructor(public http: Http,public connectionProvider:ConnectionProvider) {
    this.connectionProvider=connectionProvider;
    }

  addUser(data)  {
   
      return new Promise((resolve, reject) => {
     console.log(this.connectionProvider.getUrl()+ JSON.stringify(data));

        this.http.post(this.connectionProvider.getUrl()
      +'/socialReformer/register/user/', JSON.stringify(data),this.connectionProvider.addHeader())
          .subscribe(res => {
            resolve(res);
          }, (err) => {
            reject(err);
          });
      });
    } 

}
