import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormBuilder, FormControlName,FormGroup, Validators } from '@angular/forms';
import { Geolocation } from '@ionic-native/geolocation';
import { AutoCompleteProvider } from '../../providers/auto-complete/auto-complete';
/**
 * Generated class for the CreateEventPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


/**
 * Generated class for the EventRoutPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-event-rout',
  templateUrl: 'event-rout.html',
})
export class EventRoutPage {

  nav: NavController;
   public componentData1: any = '';
  public form: FormGroup;
  constructor(public navCtrl: NavController, public geolocation:Geolocation,public autocomplete:AutoCompleteProvider,private fb: FormBuilder) {
    this.autocomplete=autocomplete;
    this.form=fb.group({
     'nameOfPerson':['',Validators.required],
     'eventTitle':['',Validators.required],
     'eventDate':['',Validators.required],
    //  'eventVenue':['',Validators.required],
     'details':['',Validators.required],
     'emailAddress':['',Validators.required],
     'contactNo':['',Validators.required]
   });
 
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
    this.componentData1 = JSON.stringify(data.data);
    //this.componentData1 = JSON.parse(this.componentData1).lat;
    console.log(JSON.parse(this.componentData1));
   
      //console.log(JSON.stringify(this.componentData1.lng));
  }
  createEventForm(form){
    console.log(form);
  }
  
  ionViewDidLoad() {
    console.log('ionViewDidLoad EventRoutPage');
  }

}
