import { Component,NgModule,ViewChild,ElementRef} from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormBuilder, FormGroup, FormControl,Validators,ValidatorFn,AbstractControl } from '@angular/forms';
import { Geolocation } from '@ionic-native/geolocation';
import { AutoCompleteProvider } from '../../providers/auto-complete/auto-complete';
import {RegisterProvider} from '../../providers/register/register'
import { AbstractClassPart } from '@angular/compiler/src/output/output_ast';
import {EmailValidator} from '../../validators/email';
import {PasswordValidator} from '../../validators/password';
import {MyAccountPage} from '../../pages/my-account/my-account';
import { Storage } from '@ionic/storage';

/**
 * Generated class for the RegisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {
  //@ViewChild('eventVenue') locality:any; 
  eventVenue:any;
  registerProvider:RegisterProvider;
  registerForm: FormGroup;

  public componentData1: any = '';
  public eventVenueAuto:any='';
  emailAddr: AbstractControl;
  password: AbstractControl;
  confirmPassword: AbstractControl;
  namePerson:AbstractControl;
  registrationData:any={
     namePerson:'',
     phoneNo:'',
     emailAddr:'',     
     eventVenue:'',
     password:'',
  }
  constructor(public navCtrl: NavController, public navParams: NavParams,public storage:Storage,public geolocation:Geolocation,public autocomplete:AutoCompleteProvider,
    public formBuilder:FormBuilder,register:RegisterProvider) {
    this.autocomplete=autocomplete;
    this.storage=storage;
    this.registerForm=formBuilder.group({
     'namePerson':['',Validators.required],
     'emailAddr':['',Validators.compose([Validators.required, Validators.minLength(3),Validators.required, Validators.maxLength(25), EmailValidator.checkEmail])],
     'phoneNo':['',Validators.required],
     'eventVenue':['',Validators.required],
     'password':['',[Validators.required, Validators.minLength(5), Validators.maxLength(45)]],
     'confirmPassword':['', [Validators.required]]
    }, { 'validator': PasswordValidator.isMatching }
    
);
this.emailAddr = this.registerForm.controls['emailAddr'];
this.password = this.registerForm.controls['password'];
this.confirmPassword = this.registerForm.controls['confirmPassword'];
console.log("Testing"+this.emailAddr.valid);    
  this.registerProvider=register;
  }

  public userSettings2: any = {
    showRecentSearch: false,
    geoCountryRestriction: ['in'],
    searchIconUrl: 'http://downloadicons.net/sites/default/files/identification-search-magnifying-glass-icon-73159.png'
  };
  
  getCodeHtml(data: any): any {
    let _temp: any = JSON.stringify(data);
    _temp = _temp.split(',').join(',<br>');
    _temp = _temp.split('{').join('{<br>');
    _temp = _temp.split('}').join('<br>}');
    return _temp;
  }
   autoCompleteCallback1(data: any): any {
    this.componentData1 = JSON.stringify(data.data.formatted_address);
    //this.componentData1 = JSON.parse(this.componentData1).lat;
    console.log(JSON.parse(this.componentData1));
   
      //console.log(JSON.stringify(this.componentData1.lng));
  }
  
    registrationForm(registerForm){
      // if (this.registerForm.valid) {
        //console.log(this.locality.locationInput);
        this.registrationData.namePerson=this.registerForm.controls['namePerson'].value;
        this.registrationData.phoneNo=this.registerForm.controls['phoneNo'].value;
        this.registrationData.emailAddr=this.registerForm.controls['emailAddr'].value;
        this.registrationData.eventVenue=this.componentData1;
        console.log(this.componentData1);
        this.registrationData.password=this.registerForm.controls['password'].value;
        
        this.registerProvider.addUser(this.registrationData).then(
          result=>{
            localStorage.setItem('username', this.registrationData.emailAddr);
            this.navCtrl.push(MyAccountPage);
          }
          ).catch(err=>"Service Error");
    
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');
  }

}
