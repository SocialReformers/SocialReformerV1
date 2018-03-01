import { HttpClient } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
 import { HttpModule } from '@angular/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the StorageProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class LocalStorageService {

  setItem(key: any, value: any) : any {
    localStorage.setItem(key, value);
  }

  getItem(key: any): any {
    return localStorage.getItem(key);

  }

  removeItem(key: any): any {
    localStorage.removeItem(key);
  }

}
