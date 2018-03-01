import { Injectable } from '@angular/core';
import {Http, RequestOptions ,ResponseType,Headers} from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { EventInfo } from '../../model/EventInfo';
import { Header } from 'ionic-angular/components/toolbar/toolbar-header';


/*
  Generated class for the ConnectionProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ConnectionProvider {

  eventUrl='http://127.0.0.1:8080';
  
    constructor(public http: Http) {
    
    }
    getEventList(): Promise<EventInfo[]> {
      const url = this.eventUrl+'/api/events';
      let headers:Headers = new Headers();
     headers.append('Access-Control-Allow-Origin' , '*');
     //headers.append('Access-Control-Allow-Methods', 'POST, GET, OPTIONS, PUT');
     headers.append('Accept','application/json');
     headers.append('content-type','application/json');
      let options = new RequestOptions({headers:headers});
      
      return this.http.get(url,options)
        .toPromise()
        .then(response => {console.log(response); response.json() as EventInfo[];
       console.log(JSON.stringify(response)) })
        .catch(this.handleError);
    }
    private handleError(error: any): Promise<any> {
      console.error('An error occurred', error);
      return Promise.reject(error.message || error);
    }
  
  

}
