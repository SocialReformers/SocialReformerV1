import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Component,ViewChild,ElementRef,Output } from '@angular/core';
import { Geolocation } from '@ionic-native/geolocation';
import { AutoCompleteProvider } from '../../providers/auto-complete/auto-complete';
import {Validators, FormBuilder, FormGroup } from '@angular/forms';
import {ComplaintsProvider} from '../../providers/complaints/complaints';
import { formArrayNameProvider } from '@angular/forms/src/directives/reactive_directives/form_group_name';


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
  city:String;
  @Output()
  causeList:any;
  ngoList:any;
  constructor(navCtrl : NavController,public geolocation:Geolocation,public autocomplete:AutoCompleteProvider,public complaintProvider:ComplaintsProvider,public formBuilder:FormBuilder) {
      this.nav=navCtrl;
      this.autocomplete=autocomplete;
      this.complaintProvider=complaintProvider;
      this.raiseComplaint=formBuilder.group({        
        'causeType':['',Validators.required],
        'ngo':['',Validators.required],
        'compDetails':['',Validators.compose([Validators.required,Validators.maxLength(500)])]
       });
       
      
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
  // public userSettings6: any = {
  //   geoLocation: [37.76999, -122.44696],  
    
  //   recentStorageName: 'componentData2' 
  // };
  public complaintDetails:any={
    tomailId:"",
    socialId:"",
    causeId:0,
    description:"",  
    locality:"",
    type:""
  
  
  }
  getCodeHtml(data: any): any {
    let _temp: any = JSON.stringify(data);
    _temp = _temp.split(',').join(',<br>');
    _temp = _temp.split('{').join('{<br>');
    _temp = _temp.split('}').join('<br>}');
    return _temp;
  }
   autoCompleteCallback1(data: any): any {
    this.componentData1 = JSON.stringify(data.data.geometry.location.lat);
    console.log("test"+data.data.formatted_address);
  this.retrieveCity(data.data);
    //this.componemaientData1 = JSON.parse(this.componentData1).lat;
    console.log(JSON.parse(this.componentData1));
 this.geolocation.watchPosition()._do(res=>{console.log(res)}).catch
 
    this.retrieveCause();
      //console.log(JSON.stringify(this.componentData1.lng));
  }
  
    
  complaintForm(raiseComplaint) {

       
       if(this.raiseComplaint.valid){
       this.complaintDetails.description=raiseComplaint.compDetails;
       this.complaintProvider.raiseComplaint(this.complaintDetails).then(res=>{return res;}
      ).catch();
    }

  }
  
  getNGOList(causeType:String){
    this.complaintProvider.getNgoDetails(causeType,this.complaintDetails.locality).then(res=>{
      this.ngoList=JSON.parse(JSON.stringify(res));
    }).catch();
  }

  retrieveCause(){
    console.log(this.componentData1);
    this.complaintProvider.retrieveCause().then((res =>{  
      this.causeList=JSON.parse(JSON.stringify(res));
      console.log(this.causeList)
    })).catch();
  }


  onSelectChangeRetrieveNGO(selectedValue:any){
    this.complaintDetails.causeId=selectedValue.id;
    this.complaintDetails.type=selectedValue.type;
    this.clearNGoDetails()
    this.getNGOList(selectedValue.type);
  }

  onSelectNGO(selectedValue:any){
    this.complaintDetails.tomailId=selectedValue.email;
    this.complaintDetails.socialId=selectedValue.id;
  }

retrieveCity(addressDetails:any){
let city:any;  
for ( var i:number =0; i<addressDetails.address_components.length; i++) {
  for (var b=0;b<addressDetails.address_components[i].types.length;b++) {
  if (addressDetails.address_components[i].types[b] == "administrative_area_level_2") {
          //this is the object you are looking for
         city= addressDetails.address_components[i];
         
          break;
      }
  }
}
this.complaintDetails.locality=city.long_name;

}

clearNGoDetails(){
  this.complaintDetails.email="";
  this.complaintDetails.socialId="";
}

}
