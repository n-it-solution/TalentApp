import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {HttpClient} from "@angular/common/http";
import {GlobalVariableProvider} from "../../providers/global-variable/global-variable";
import {error} from "@angular/compiler-cli/src/transformers/util";

/**
 * Generated class for the NotificationPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-notification',
  templateUrl: 'notification.html',
})
export class NotificationPage {
  data:any;
  msg:any = [];
  completeRead(msg){
    alert(msg);
  }
  constructor(public navCtrl: NavController, public navParams: NavParams, public httpClient: HttpClient,
              public globalVar: GlobalVariableProvider) {
    this.data = httpClient.get(this.globalVar.apiUrl + '/user/msg-list/156');
    this.data.subscribe(data => {
      this.msg = data;
      console.log(this.msg);
    },error => {
      console.log(error)
    })
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NotificationPage');
  }

}
