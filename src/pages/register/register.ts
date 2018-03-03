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
  
  constructor(public navCtrl: NavController, public navParams: NavParams,public geolocation:Geolocation,public autocomplete:AutoCompleteProvider,public formBuilder:FormBuilder) {
  this.registerForm=formBuilder.group({
     'namePerson':['',Validators.required],
     'emailAddr':['',Validators.compose([Validators.required,  this.emailValidator])],
     'phoneNo':['',Validators.required],
     'eventVenue':['',Validators.required],
     'password':['',Validators.compose([Validators.required, Validators.minLength(6), Validators.maxLength(12), Validators.pattern('^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{6,12}$')])],
     'confirmPassword':['',Validators.required]
  },{validator: this.matchingPasswords('password', 'confirmPassword')});
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
