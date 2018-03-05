import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
//import { SocialSharing } from '@ionic-native/social-sharing';
import {Http, RequestOptions ,ResponseType,Headers,RequestMethod} from '@angular/http';
import {FormControl,FormBuilder,FormGroup,FormsModule, Validators} from '@angular/forms';
import {SignInProvider}  from '../../providers/sign-in/sign-in';
import {MyAccountPage} from '../../pages/my-account/my-account';
import { RegisterPage } from '../register/register';
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
  loginF:FormGroup;

  constructor(http: Http,public navCtrl: NavController, public navParams: NavParams,public formBuilder:FormBuilder,public signinProvider:SignInProvider) {
      this.http = http;
      this.formBuilder=formBuilder;
      this.signinProvider=signinProvider;
      this.loginF=formBuilder.group({
        'emailAddr':['',Validators.required],
        'password':['',Validators.required]
      });
  }

loginForm(loginF){
console.log(loginF);
if(this.loginF.valid) {
  console.log(loginF);
  if(this.signinProvider.validateUser(loginF)){
  
  window.localStorage.setItem('username', loginF.username);
  window.localStorage.setItem('password', loginF.password);

  this.navCtrl.push(MyAccountPage);
  }else{
    this.navCtrl.push(RegisterPage);
  }
}

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
