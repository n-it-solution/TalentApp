import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {HttpClient} from "@angular/common/http";
import {GlobalVariableProvider} from "../../providers/global-variable/global-variable";
import {error} from "@angular/compiler-cli/src/transformers/util";
import { AlertController } from 'ionic-angular';

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
  deletedata:any;
  msg:any = [];
  completeRead(msg){
    alert(msg);
  }
  showConfirm(id) {
    const confirm = this.alertCtrl.create({
      title: 'Are you sure to delete this message?',
      // message: 'Do you agree to use this lightsaber to do good across the intergalactic galaxy?',
      buttons: [
        {
          text: 'No',
          handler: () => {
            console.log('No clicked');
          }
        },
        {
          text: 'Yes',
          handler: () => {
            console.log('Yes clicked');
            this.deletedata = this.httpClient.get(this.globalVar.apiUrl + '/user/msg-delete/' + id);
            this.deletedata.subscribe(data => {
              console.log(data);
              this.getMsg();
            },error => {
              alert('something wrong try again');
              console.log(error)
            });
          }
        }
      ]
    });
    confirm.present();
  }
  getMsg(){
    this.data = this.httpClient.get(this.globalVar.apiUrl + '/user/msg-list/' + this.globalVar.loginData.data.id);
    this.data.subscribe(data => {
      this.msg = data;
      console.log(this.msg);
    },error => {
      console.log(error)
    })
  }
  constructor(public navCtrl: NavController, public navParams: NavParams, public httpClient: HttpClient,
              public globalVar: GlobalVariableProvider,public alertCtrl: AlertController) {
    this.getMsg();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NotificationPage');
  }

}
