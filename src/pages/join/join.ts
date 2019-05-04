import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {HttpClient} from "@angular/common/http";
import {GlobalVariableProvider} from "../../providers/global-variable/global-variable";
import { HttpHeaders } from '@angular/common/http';
import { Camera, CameraOptions } from '@ionic-native/camera';


/**
 * Generated class for the JoinPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-join',
  templateUrl: 'join.html',
})
export class JoinPage {
  data:any;
  talentList:any;
  talentId: string;
  getTalentList(){
    this.data = this.httpClient.get(this.globalVar.apiUrl + '/list/talent');
    this.data
      .subscribe(data => {
        console.log(data);
        this.talentList = data;
        console.log(this.talentList);
      },error=> {
        console.log(error);
      });
  }
  talentChange(){
    console.log(this.talentId);
    this.data = this.httpClient.get(this.globalVar.apiUrl + '/list/sub-talent/' + this.talentId);
    this.data
      .subscribe(data => {
        console.log(data);
        this.talentList = data;
        console.log(this.talentList);
      },error=> {
        console.log(error);
      });
  }
  constructor(public navCtrl: NavController, public navParams: NavParams,
              public httpClient: HttpClient,public globalVar: GlobalVariableProvider,
              private camera: Camera
  ) {
    this.getTalentList();
    console.log('In the join page');
    const httpOptions = {
      headers: new HttpHeaders({
        'Accept' : 'application/json',
        'Access-Control-Allow-Origin' : '*'
      })
    };
    this.data = this.httpClient.get('http://talent.localhost/api/list/talent');
    this.data
      .subscribe(data => {
        console.log(data);
        // if (data.status == 'success'){
        //   alert('Welcome MR/MISS '+data.data.name)
        // }else {
        //   alert('Check your id and pass and try again')
        // }
      },error=> {
        alert('something wrong please contact to site developer');
        console.log(error);
      });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad JoinPage');
  }

}
