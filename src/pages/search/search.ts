import { Component } from '@angular/core';
import {Events, IonicPage, NavController, NavParams} from 'ionic-angular';
import {LocalNotifications} from "@ionic-native/local-notifications";
import {HttpClient} from "@angular/common/http";
import {GlobalVariableProvider} from "../../providers/global-variable/global-variable";

/**
 * Generated class for the SearchPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-search',
  templateUrl: 'search.html',
})
export class SearchPage {
  search:string;
  data:any;
  getTalents(){
    console.log(1);
    this.data = this.httpClient.get(this.globalVar.apiUrl + '/talent/search/' + this.search);
    this.data
      .subscribe(data => {
        console.log(data);

      },error=> {
        console.log(error);
      });
  }
  constructor(public navCtrl: NavController, public navParams: NavParams,public httpClient: HttpClient,
              public globalVar: GlobalVariableProvider,public events: Events) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SearchPage');
  }

}
