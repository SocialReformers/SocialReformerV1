import {FormControl} from '@angular/forms';

export class EmailValidator {

 static checkEmail(control: FormControl): {[key: string]: any} {
  var emailRegexp = /^[_A-Za-z0-9-\\+]+(\\.[_A-Za-z0-9-]+)*@[A-Za-z0-9-]+(\\.[A-Za-z0-9]+)*(\\.[A-Za-z]{2,})$/;
  if (control.value && !emailRegexp.test(control.value)) {
    console.log("Invalid Email")
    return { invalidEmail: true };
  }else{
    return null;
  }
 }


ionViewDidLoad() {
  console.log('ionViewDidLoad RegisterPage');
}

}