import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {HttpClient} from "@angular/common/http";
import {GlobalVariableProvider} from "../../providers/global-variable/global-variable";
import {error} from "@angular/compiler-cli/src/transformers/util";

/**
 * Generated class for the ContactPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html',
})
export class ContactPage {
  data:any;
  contact: any;
  showData:boolean = false;
  constructor(public navCtrl: NavController, public navParams: NavParams, public httpClient: HttpClient,
              public globalVar: GlobalVariableProvider) {
    console.log(1);
    this.data = httpClient.get(this.globalVar.apiUrl + '/contact/details');
    this.data.
        subscribe(data => {
          console.log(data);
          this.contact = data;
          console.log(this.contact);
          this.showData = true;
          },
        error => {
          console.log(error)
        });

  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad ContactPage');
  }

}
