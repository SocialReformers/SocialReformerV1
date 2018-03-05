import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {Http, RequestOptions ,ResponseType,Headers,RequestMethod} from '@angular/http';
import { FormBuilder, FormGroup, FormControl,Validators } from '@angular/forms';
import{SignInProvider} from '../../providers/sign-in/sign-in';

/**
 * Generated class for the SignInPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-sign-in',
  templateUrl: 'sign-in.html',
})
export class SignInPage {
  http: Http;
  mailgunUrl: string;
  mailgunApiKey: string;
  public loginF:FormGroup;
  // recipient='apgandhamwar@gmail.com';
  // subject="Testing";
  // message="Test my message";

  constructor(http: Http,public navCtrl: NavController, public navParams: NavParams,public formBuilder:FormBuilder,public signInProvider:SignInProvider) {
      // this.http = http;
      // this.mailgunUrl = "https://api.mailgun.net/v3/sandbox77d4ac9d52d146ba82628b56d380504a.mailgun.org/messages";
      // this.mailgunApiKey = window.btoa("api:key-95b56db7ca0ecba20795625042f2a578");
      this.signInProvider=signInProvider;
      this.loginF=formBuilder.group({
        
        'emailAddr':['',Validators.required],        
        'password':['',Validators.required]
      }
      );
    }

  loginForm(loginF){
      console.log(loginF);
      this.signInProvider.validateUser(loginF);
      console.log(this.signInProvider.validateUser(loginF));
  }

  send(recipient: string, subject: string, message: string) {
   
    
    var requestHeaders = new Headers();
    requestHeaders.append('Authorization', 'Basic ' + this.mailgunApiKey);
    requestHeaders.append('Content-Type', 'application/x-www-form-urlencoded');
    requestHeaders.append('Access-Control-Allow-Origin' , '*');
    requestHeaders.append('Access-Control-Allow-Methods', 'POST, GET, OPTIIONS, PUT');
    requestHeaders.append('Access-Control-Allow-Headers', 'Origin, X-Requested-With, content-Type, Accept');

    var req= new RequestOptions();
    req.headers=requestHeaders;

    this.http.post(
       this.mailgunUrl,
      "from=apgandhamwar@gmail.com&to=" + recipient + "&subject=" + subject + "&text=" + message,
      req
    )
    .subscribe(success => {
        console.log("SUCCESS -> " + JSON.stringify(success));
    }, error => {
        console.log("ERROR -> " + JSON.stringify(error));
    });
}

public addHeader():RequestOptions {
  let headers:Headers = new Headers();
  headers.append('Access-Control-Allow-Origin' , '*');
  headers.append('Access-Control-Allow-Methods', 'POST, GET, OPTIONS, PUT');
  headers.append('Accept','application/html');
  headers.append('content-type','application/json');
   let options = new RequestOptions({headers:headers});
   return options;
}
  // constructor(public navCtrl: NavController, public navParams: NavParams, private socialSharing: SocialSharing) {
  // }
  // smsShare() {
  //   this.socialSharing.shareViaSMS("shareViaSMS", "09833788064").then(() => {
  //     console.log("shareViaSMS: Success");
  //   }).catch(() => {
  //     console.error("shareViaSMS: failed");
  //   });}
  
  
  // whatsappShare() {
  //   this.socialSharing.shareViaWhatsApp("shareViaWhatsApp", teimage, teUrl).then(() => {
  //     console.log("shareViaWhatsApp: Success");
  //   }).catch(() => {
  //     console.error("shareViaWhatsApp: failed");
  //   });
  // }
  ionViewDidLoad() {
    console.log('ionViewDidLoad SignInPage');
  }


}
