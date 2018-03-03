import { Component,NgModule} from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormBuilder, FormGroup, FormControl,Validators } from '@angular/forms';
import { Geolocation } from '@ionic-native/geolocation';
import { AutoCompleteProvider } from '../../providers/auto-complete/auto-complete';
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
  public registerForm: FormGroup;
  public componentData1: any = '';
  constructor(public navCtrl: NavController, public navParams: NavParams,public geolocation:Geolocation,public autocomplete:AutoCompleteProvider,public formBuilder:FormBuilder) {
    this.autocomplete=autocomplete;
    this.registerForm=formBuilder.group({
     'namePerson':['',Validators.required],
     'emailAddr':['',Validators.compose([Validators.required,  this.emailValidator])],
     'phoneNo':['',Validators.required],
     'eventVenue':['',Validators.required],
     'password':['',Validators.compose([Validators.required, Validators.minLength(6), Validators.maxLength(12), Validators.pattern('^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{6,12}$')])],
     'confirmPassword':['',Validators.required]
  },{validator: this.matchingPasswords('password', 'confirmPassword')});
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
    this.componentData1 = JSON.stringify(data.data.geometry.location.lat);
    //this.componentData1 = JSON.parse(this.componentData1).lat;
    console.log(JSON.parse(this.componentData1));
   
      //console.log(JSON.stringify(this.componentData1.lng));
  }
  matchingPasswords(passwordKey: string, confirmPasswordKey: string) {
    // TODO maybe use this https://github.com/yuyang041060120/ng2-validation#notequalto-1
    return (group: FormGroup): {[key: string]: any} => {
      let password = group.controls[passwordKey];
      let confirmPassword = group.controls[confirmPasswordKey];

      if (password.value !== confirmPassword.value) {
        return {
          mismatchedPasswords: true
        };
      }
    }
  }

  emailValidator(control: FormControl): {[key: string]: any} {
    var emailRegexp = /^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i;
    if (control.value && !emailRegexp.test(control.value)) {
      return { invalidEmail: true };
    }}
  createEventForm(registerForm){
    console.log(registerForm);
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');
  }

}
