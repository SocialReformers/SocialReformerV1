import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormBuilder, FormControlName,FormGroup, Validators } from '@angular/forms';
import { EventsProvider } from '../../providers/events/events';
import { ThankyouJoinPage } from '../thankyou-join/thankyou-join';

/**
 * Generated class for the JoinEventPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-join-event',
  templateUrl: 'join-event.html',
})
export class JoinEventPage {
   eventId:any;
   eventTitle:any;
   form:FormGroup;
   joinEvent:any={
     event_Id:"",
     userName:"",
     email:"",
     phone:"",
};
  constructor(public navCtrl: NavController, public navParams: NavParams,public eventProvider:EventsProvider,public formBuilder:FormBuilder) {
  this.eventId=this.navParams.get('eventId');
  this.eventTitle=this.navParams.get('eventTitle');
  console.log(this.eventId+"   "+this.eventTitle);
  this.form=formBuilder.group({
    'userName':['',Validators.required],
    'email':['',Validators.required],
    'phone':['',Validators.required]
  })
  
  }

  joinEventForm(){
    this.joinEvent.event_Id=this.eventId;
        this.joinEvent.userName=this.form.controls['userName'].value;
        this.joinEvent.email=this.form.controls['email'].value;
        this.joinEvent.phone=this.form.controls['phone'].value;
        this.eventProvider.joinEvent(this.joinEvent).then(res=>{
          this.navCtrl.push(ThankyouJoinPage);
        }).catch(err=>({
        }))


  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad JoinEventPage');
  }

}
