import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Events } from 'ionic-angular';
import {JoinPage} from "../join/join";
import {LocalNotifications} from "@ionic-native/local-notifications";
import {HttpClient} from "@angular/common/http";
import {GlobalVariableProvider} from "../../providers/global-variable/global-variable";
import {SearchPage} from "../search/search";
import {GalleryPage} from "../gallery/gallery";
import {HomePage} from "../home/home";
import {LoginPage} from "../login/login";
import {Storage} from "@ionic/storage";
import { Badge } from '@ionic-native/badge/ngx';
import { HttpHeaders } from '@angular/common/http';
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
  expiredShow:boolean = true;
  soonExpiredShow:boolean = true;
  getMsg(){
    if(this.globalVar.loginStatus){
      const httpOptions = {
        headers: new HttpHeaders({
          'content-type':  'JSON',
        })
      };
      this.data = this.httpClient.get(this.globalVar.apiUrl + '/user/msg-check/'  + this.globalVar.loginData.data.id, httpOptions);
      this.data
        .subscribe(data => {
          console.log(data);
          if(data.unRead > 0) {
            // this.badge.set(data.unViewed);
          }
          if (data.unViewed > 0){
            // this.badge.set(data.unViewed);
            console.log('msg notification showed');
            this.lclNot.schedule({
              id: 1,
              text: 'You have '+data.unViewed+' new Messages and ' + data.unRead + ' Unread messages',
              sound: 'file://sound.mp3'
            });
          }
          if(data.expired){
            if (this.expiredShow){
              console.log('expired notification showed');
              this.lclNot.schedule({
                id: 2,
                text: 'you don\'t have any package right now kindly subscribe on our website and start your package thank you',
                sound: 'file://sound.mp3'
              });
              this.expiredShow = false;
            }
          }else if(data.soonExpired){
            if(this.soonExpiredShow){
              console.log('soonExpired notification showed');
              this.lclNot.schedule({
                id: 3,
                text: 'your account will be expire soon, kindly upgrade your account thank you.',
                sound: 'file://sound.mp3'
              });
              this.soonExpiredShow = false;
            }
          }
        },error=> {
          console.log(error);
        });
    }
  }
  checkLogin(){
    console.log('hello');
    // this.storage.remove('loginData');
    this.storage.get('loginData').then((data)=>{
      // console.log(data);
      if(data != undefined){
        console.log(data);
        this.events.publish('login:success',data)
      }
    })
  }
  startVideo: boolean = false;
  constructor(public navCtrl: NavController, public navParams: NavParams, private lclNot: LocalNotifications,public httpClient: HttpClient,
              public globalVar: GlobalVariableProvider,public events: Events,private storage: Storage,
              private badge: Badge
  ) {
    this.checkLogin();
    console.log(1);
    this.getMsg();
    events.subscribe('user:created', () => {
      this.getMsg();
    });
    setInterval(function() {
      console.log('function called');
      events.publish('user:created');
    }, 10000);
    setTimeout(() => {
      navCtrl.setRoot(HomePage);
    }, 4000);
    setTimeout(() => {
      this.startVideo = true;
      // navCtrl.setRoot(HomePage);
    }, 500);
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad WelcomePage');
  }

}
