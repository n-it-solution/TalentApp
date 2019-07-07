import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {HttpClient} from "@angular/common/http";
import {GlobalVariableProvider} from "../../providers/global-variable/global-variable";

/**
 * Generated class for the MyAccountPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-my-account',
  templateUrl: 'my-account.html',
})
export class MyAccountPage {
    data:any;
    detailShow:boolean = false;
    details:any = [];
    getDetails(){
        console.log(1);
        this.data = this.httpClient.get(this.globalVar.apiUrl + '/user/details/'+ this.globalVar.loginData.data.id);
        this.data
            .subscribe(data => {
                console.log(data);
                this.details = data;
                this.detailShow = true;
            },error=> {
                console.log(error);
            });
    }
  constructor(public navCtrl: NavController, public navParams: NavParams,public httpClient: HttpClient,
              public globalVar: GlobalVariableProvider) {
      this.getDetails();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MyAccountPage');
  }

}
