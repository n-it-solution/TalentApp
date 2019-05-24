import { Component } from '@angular/core';
import {Events, NavController, NavParams} from 'ionic-angular';
import {HttpClient} from "@angular/common/http";
import {GlobalVariableProvider} from "../../providers/global-variable/global-variable";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  data:any;
  showSlides:boolean = false;
  images:any = [];
  getTalents(){
    console.log(1);
    this.data = this.httpClient.get(this.globalVar.apiUrl + '/slides');
    this.data
      .subscribe(data => {
        console.log(data);
        this.images = data;
        this.showSlides = true;
      },error=> {
        console.log(error);
      });
  }
  constructor(public navCtrl: NavController,public httpClient: HttpClient,
              public globalVar: GlobalVariableProvider,public events: Events) {
    this.getTalents();
  }

}
