import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {GlobalVariableProvider} from "../../providers/global-variable/global-variable";

/**
 * Generated class for the AwesomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-awesome',
  templateUrl: 'awesome.html',
})
export class AwesomePage {

  constructor(public navCtrl: NavController, public navParams: NavParams,public globalVar: GlobalVariableProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AwesomePage');
  }

}
