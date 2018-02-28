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

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    CreateEventPage,
    SignInPage,
    RegisterPage,
    ComplaintsPage,
    ListPage
  ],
  imports: [
    BrowserModule,
    FormsModule,
    CalendarModule,
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
    ListPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    EventsProvider,
    ComplaintsProvider
  ]
})
export class AppModule {}
