import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import {FormsModule} from '@angular/forms';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { CreateEventPage } from '../pages/create-event/create-event';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { EventsProvider } from '../providers/events/events';
import { RegisterPage } from '../pages/register/register'
import { ComplaintsPage } from '../pages/complaints/complaints'
import { SocialSharing } from '@ionic-native/social-sharing';


import {MyAccountPage} from '../pages/my-account/my-account';
import {SignOutPage} from '../pages/sign-out/sign-out';
import {EventRoutPage} from '../pages/event-rout/event-rout';
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
import { SignInProvider } from '../providers/sign-in/sign-in';
import { IonicStorageModule } from '@ionic/storage';
import { EventDetailsPage } from '../pages/event-details/event-details';
import { JoinEventPage } from '../pages/join-event/join-event';
import{ThankyouJoinPage} from '../pages/thankyou-join/thankyou-join'
// import { SignInProvider } from '../providers/sign-in/sign-in';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    CreateEventPage,
    SignInPage,
    RegisterPage,
    ComplaintsPage,
    EventRoutPage,EventDetailsPage,JoinEventPage,ThankyouJoinPage,
    ListPage,AutoCompleteComponent,SignOutPage,MyAccountPage
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule, HttpClientModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot() 
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    CreateEventPage,
    SignInPage,
    RegisterPage,JoinEventPage,ThankyouJoinPage,
    ComplaintsPage,EventRoutPage,EventDetailsPage,
    ListPage,AutoCompleteComponent,
    SignOutPage,MyAccountPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    EventsProvider,
    ComplaintsProvider,
    AutoCompleteProvider,
    LocalStorageService,
    Geolocation,Storage,
    SocialSharing,
     HttpClientModule,{ provide: GlobalRef, useClass: BrowserGlobalRef },
    ConnectionProvider,
    RegisterProvider,
    SignInProvider, 
  ]
})
export class AppModule {}
