import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Events } from 'ionic-angular';
import {JoinPage} from "../join/join";
import {LocalNotifications} from "@ionic-native/local-notifications";
import {HttpClient} from "@angular/common/http";
import { BackgroundMode } from '@ionic-native/background-mode';
import {GlobalVariableProvider} from "../../providers/global-variable/global-variable";
import {SearchPage} from "../search/search";
import {GalleryPage} from "../gallery/gallery";

/**
 * Generated class for the WelcomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-welcome',
  templateUrl: 'welcome.html',
})
export class WelcomePage {
  data:any;
  getMsg(){
    this.data = this.httpClient.get(this.globalVar.apiUrl + '/user/msg-check/156');
    this.data
      .subscribe(data => {
        console.log(data);
        if (data.unViewed > 0){
          this.lclNot.schedule({
            id: 1,
            text: 'You have '+data.unViewed+' new Messages and ' + data.unRead + ' Unread messages',
            sound: 'file://sound.mp3'
          });
        }
        // if (data.status == 'success'){
        //   alert('Welcome MR/MISS '+data.datlanca.name)
        // }else {
        //   alert('Check your id and pass and try again')
        // }
      },error=> {
        console.log(error);
      });
  }
  constructor(public navCtrl: NavController, public navParams: NavParams, private lclNot: LocalNotifications,public httpClient: HttpClient,
              private backgroundMode: BackgroundMode, public globalVar: GlobalVariableProvider,public events: Events
  ) {
    if(!backgroundMode.isEnabled()){
      this.backgroundMode.enable();
    }
    console.log(1);
    this.getMsg();
    events.subscribe('user:created', () => {
      this.getMsg();
    });
    // setInterval(function() {
    //   console.log('function called');
    //   events.publish('user:created');
    // }, 10000);
    navCtrl.setRoot(GalleryPage);
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad WelcomePage');
  }

}
