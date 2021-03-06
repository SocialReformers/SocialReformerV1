import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
//import { SocialSharing } from '@ionic-native/social-sharing';
import {Http, RequestOptions ,ResponseType,Headers,RequestMethod} from '@angular/http';
import {FormControl,FormBuilder,FormGroup,FormsModule, Validators} from '@angular/forms';
import {SignInProvider}  from '../../providers/sign-in/sign-in';
import {MyAccountPage} from '../../pages/my-account/my-account';
import { RegisterPage } from '../register/register';
import { Storage } from '@ionic/storage';
import { window } from 'rxjs/operators/window';
import {LocalStorageService} from '../../providers/storage/storage';

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
  

  constructor(http: Http,public navCtrl: NavController, public navParams: NavParams,public storage:Storage,public formBuilder:FormBuilder,public signinProvider:SignInProvider) {
      this.http = http;
      this.storage=storage;
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
  console.log(loginF.username+"user name");
  localStorage.setItem("username",loginF.emailAddr);
  this.navCtrl.push(MyAccountPage).then(
      response => {
        console.log('Response ' + response);
      },
      error => {
        console.log('Error: ' + error);
      }
    ).catch(exception => {
      console.log('Exception ' + exception);
    }); 
  }else{
    this.navCtrl.push(RegisterPage).then(
      response => {
        console.log('Response ' + response);
      },
      error => {
        console.log('Error: ' + error);
      }
    ).catch(exception => {
      console.log('Exception ' + exception);
    });;
  };
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
