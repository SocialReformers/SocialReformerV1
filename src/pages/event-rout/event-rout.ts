import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormBuilder, FormControlName,FormGroup, Validators } from '@angular/forms';
import { Geolocation } from '@ionic-native/geolocation';
import { AutoCompleteProvider } from '../../providers/auto-complete/auto-complete';
import {EventsProvider} from '../../providers/events/events';
import {ListPage} from '../../pages/list/list';
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

  //nav: NavController;
   public componentData1: any = '';
   public componentData2: any = '';
   public city:any; 
   public state:any;  
   public country:any;
  public form: FormGroup;
  public createEventDetails:any={
    eventTitle:"",
    eventDate:"",
    description:"",
    details:0,
    emailAddress:"",  
    contactNo:"",
    city:"",
    state:"",
    locality:"",
    created_by:"", 
  }
  constructor(public navCtrl: NavController, public geolocation:Geolocation,public eventProvide:EventsProvider,public autocomplete:AutoCompleteProvider,private fb: FormBuilder) {
    this.autocomplete=autocomplete;
    //this.nav=navCtrl;
    this.eventProvide=eventProvide;
    console.log(this.componentData1.value);
    this.form=fb.group({
    
     'eventTitle':['',Validators.required],
     'eventDate':['',Validators.required],
     'description':['',Validators.required],
      //locality:this.form.controls['details'].value,
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
     this.componentData1= JSON.stringify(data.data);
    this.componentData2 = JSON.stringify(data.data.formatted_address);
    //this.componentData1 = JSON.parse(this.componentData1).lat;
    console.log(this.componentData1);
    this.retrieveCity(data.data);
      //console.log(JSON.stringify(this.componentData1.lng));
  }
  createEventForm(form){
    this.createEventDetails.eventTitle=this.form.controls['eventTitle'].value;
    this.createEventDetails.description=this.form.controls['description'].value;
    this.createEventDetails.eventDate=this.form.controls['eventDate'].value;
    this.createEventDetails.locality=this.componentData2;
    this.createEventDetails.city=this.city;
    this.createEventDetails.state=this.state;
    this.createEventDetails.country=this.country;
    this.createEventDetails.details=this.form.controls['details'].value;
    this.createEventDetails.contactNo=this.form.controls['contactNo'].value;
    
    console.log('Test'+this.createEventDetails.eventDate)
      this.eventProvide.addEvents(this.createEventDetails).then(res=>{
        this.navCtrl.push(ListPage);
      }).catch(err=>{
        
      })
  }
  
  ionViewDidLoad() {
    console.log('ionViewDidLoad EventRoutPage');
  }
  retrieveCity(addressDetails:any){
   
    for ( var i:number =0; i<addressDetails.address_components.length; i++) {
      for (var b=0;b<addressDetails.address_components[i].types.length;b++) {
       if (addressDetails.address_components[i].types[b] == "political") {
          //this is the object you are looking for
         this.country= addressDetails.address_components[i];
         this.createEventDetails.country=this.country;
         console.log(this.country);
          break;
      }
        if (addressDetails.address_components[i].types[b] == "administrative_area_level_1") {
          //this is the object you are looking for
          this.state= addressDetails.address_components[i];
         this.createEventDetails.state=this.state;
         console.log(this.state);
          break;
      }
      if (addressDetails.address_components[i].types[b] == "administrative_area_level_2") {
              //this is the object you are looking for
              this.city= addressDetails.address_components[i];
             this.createEventDetails.city=this.city;
             console.log(this.city);
              break;
          }
      }
    }}
}
