import { Component } from '@angular/core';
import {Events, IonicPage, NavController, NavParams} from 'ionic-angular';
import {GlobalVariableProvider} from "../../providers/global-variable/global-variable";
import {LocalNotifications} from "@ionic-native/local-notifications";
import {HttpClient} from "@angular/common/http";
import {JoinPage} from "../join/join";
import {VisitingPage} from "../visiting/visiting";
import {CustomerPage} from "../customer/customer";
import {SuggesionPage} from "../suggesion/suggesion";
import {PartnershipPage} from "../partnership/partnership";

/**
 * Generated class for the HelpPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-help',
  templateUrl: 'help.html',
})
export class HelpPage {
  openJoin(){
    this.navCtrl.push(JoinPage);
  }
  openVisit(){
    this.navCtrl.push(VisitingPage);
  }
  openCustomerService(){
    this.navCtrl.push(CustomerPage);
  }
  openConcern(){
    this.navCtrl.push(SuggesionPage);
  }
  openParShip(){
    this.navCtrl.push(PartnershipPage);
  }
  constructor(public navCtrl: NavController, public navParams: NavParams, public globalVar: GlobalVariableProvider,public events: Events,
    public httpClient: HttpClient) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HelpPage');
  }

}
