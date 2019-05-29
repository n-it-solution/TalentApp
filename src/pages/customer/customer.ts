import { Component } from '@angular/core';
import {Events, IonicPage, NavController, NavParams} from 'ionic-angular';
import {HttpClient} from "@angular/common/http";
import {GlobalVariableProvider} from "../../providers/global-variable/global-variable";

/**
 * Generated class for the CustomerPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-customer',
  templateUrl: 'customer.html',
})
export class CustomerPage {
  data:any;
  fist:boolean;
  cs = {inquiry: false, transaction: false, booking: false, tech: false};
  submitCS(){
    if (this.cs.inquiry == false && this.cs.transaction == false && this.cs.booking == false && this.cs.tech == false){
      alert('One must be select')
    }else {
      console.log(this.cs);
      let data1 = JSON.stringify(this.cs);
      this.data = this.httpClient.post(this.globalVar.apiUrl + '/cs/submit',{cs : this.cs});
      this.data
        .subscribe(data => {
          console.log(data);
          alert('Your request has been submit')
        },error=> {
          console.log(error);
          alert('Something wrong!')
        });
    }
  }
  constructor(public navCtrl: NavController, public navParams: NavParams,public httpClient: HttpClient,
              public globalVar: GlobalVariableProvider,public events: Events) {
    console.log(1);
    console.log(1);

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CustomerPage');
  }

}
