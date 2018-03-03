import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import {FormsModule} from '@angular/forms';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { CreateEventPage } from '../pages/create-event/create-event';
import { CalendarModule } from 'ionic2-calendar2';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { EventsProvider } from '../providers/events/events';
import { RegisterPage } from '../pages/register/register'
import { ComplaintsPage } from '../pages/complaints/complaints'

import { ComplaintsProvider } from '../providers/complaints/complaints';
import { SignInPage } from '../pages/sign-in/sign-in';
import { AutoCompleteProvider } from '../providers/auto-complete/auto-complete';
import { LocalStorageService } from '../providers/storage/storage';
import { BrowserGlobalRef,GlobalRef } from '../providers/window-ref/window-ref';
import { AutoCompleteComponent } from '../components/auto-complete/auto-complete';
import { HttpClientModule } from '@angular/common/http'; 
import { HttpModule } from '@angular/http';
import {Geolocation} from '@ionic-native/geolocation';
import { ConnectionProvider } from '../providers/connection/connection';
import { RegisterProvider } from '../providers/register/register';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    CreateEventPage,
    SignInPage,
    RegisterPage,
    ComplaintsPage,
    ListPage,AutoCompleteComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    CalendarModule,
    HttpModule, HttpClientModule,
    IonicModule.forRoot(MyApp),
    
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    CreateEventPage,
    SignInPage,
    RegisterPage,
    ComplaintsPage,
    ListPage,AutoCompleteComponent
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    EventsProvider,
    ComplaintsProvider,
    AutoCompleteProvider,
    LocalStorageService,
    Geolocation,
     HttpClientModule,{ provide: GlobalRef, useClass: BrowserGlobalRef },
    ConnectionProvider,
    RegisterProvider, 
  ]
})
export class AppModule {}
