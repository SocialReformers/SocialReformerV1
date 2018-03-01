import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'; 
import { HttpModule } from '@angular/http';
export interface MyGlobal {
  
  }
  
  export abstract class GlobalRef {
    abstract get nativeGlobal(): MyGlobal;
  }
  @Injectable()
  export class BrowserGlobalRef extends GlobalRef {
    get nativeGlobal(): MyGlobal {
      return window as MyGlobal;
    }
  }

