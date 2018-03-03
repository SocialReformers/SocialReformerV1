import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Component,ViewChild,ElementRef } from '@angular/core';
import { Geolocation } from '@ionic-native/geolocation';
import { AutoCompleteProvider } from '../../providers/auto-complete/auto-complete';
import {Validators, FormBuilder, FormGroup } from '@angular/forms';
import {ComplaintsProvider} from '../../providers/complaints/complaints';

/**
 * Generated class for the ComplaintsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-complaints',
  templateUrl: 'complaints.html',
})
export class ComplaintsPage {
  private raiseComplaint : FormGroup;
  nav: NavController;
  constructor(navCtrl : NavController,public geolocation:Geolocation,public autocomplete:AutoCompleteProvider,public complaintProvider:ComplaintsProvider) {
      this.nav=navCtrl;
      this.autocomplete=autocomplete;
      this.complaintProvider=complaintProvider;
      
  }
  public componentData1: any = '';
  public componentData2: any = '';
  public componentData3: any = '';
  public activities;
  selectedValue:any='';
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
  autoCompleteCallback2(data: any): any {
   
    this.componentData2 = JSON.stringify(data);

    console.log( this.componentData2);
    console.log(data);
  }
  autoCompleteCallback3(data: any): any {
    
     this.componentData3 = JSON.stringify(data);
 
     console.log( this.componentData3);
     console.log(data);
   }
  onChange(selectedValue){
    console.info("Selected:",selectedValue);
    
  }
  complaintForm(formData,comp) {
       
    if(formData.valid) {
      console.log(formData.value);
       this.complaintProvider.raiseComplaint(formData);
     // this.subData = formData.value;
    }
  }
  
  getNGOList(formData,comp){
    this.complaintProvider.getNgoDetails(formData);
  }

}
