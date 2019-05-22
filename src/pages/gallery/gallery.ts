import { Component } from '@angular/core';
import { Events, IonicPage, NavController, NavParams} from 'ionic-angular';
import { HttpClient } from "@angular/common/http";
import { GlobalVariableProvider } from "../../providers/global-variable/global-variable";

/**
 * Generated class for the GalleryPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-gallery',
  templateUrl: 'gallery.html',
})
export class GalleryPage {
  data:any;
  showSlides:boolean = false;
  images:any = [];
  getImages(){
    console.log(1);
    this.data = this.httpClient.get(this.globalVar.apiUrl + '/user/images/' + this.globalVar.loginData.data.id);
    this.data
      .subscribe(data => {
        console.log(data);
        this.images = data;
        this.showSlides = true;
      },error=> {
        console.log(error);
      });
  }
  constructor(public navCtrl: NavController, public navParams: NavParams,public httpClient: HttpClient,
              public globalVar: GlobalVariableProvider,public events: Events)
  {
    this.getImages();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad GalleryPage');
  }

}
