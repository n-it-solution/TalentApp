import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {HttpClient} from "@angular/common/http";
import {GlobalVariableProvider} from "../../providers/global-variable/global-variable";
import { HttpHeaders } from '@angular/common/http';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { ImagePicker } from "@ionic-native/image-picker";
import { ImagePickerOptions } from "@ionic-native/image-picker";
import { FileTransfer, FileUploadOptions, FileTransferObject } from '@ionic-native/file-transfer';
import { File } from '@ionic-native/file';
import {AwesomePage} from "../awesome/awesome";
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
  talentList:any = [];
  talentId: string;
  subTalentList: any = [];
  userData:any;
  joinData: any =  {name: "", height: "" , gender: "", countryOrigin: "", countryLiveIn: "", email: "", yearsExperience: "",
                      phone1: "", age: 0, talent: 0
                    };
  joinTalent(){
    console.log(this.joinData);
    this.data = this.httpClient.post(this.globalVar.apiUrl + '/user/join-talent',this.joinData);
    this.data
      .subscribe(data => {
        console.log(data);
        this.userData = data;
        this.uploadImageCheck();
        // alert(JSON.stringify(data));
        // this.images[index].status = true;
        // this.uploadImageCheck();
        // if (data.status == 'success'){
        //   alert('Welcome MR/MISS '+data.data.name)
        // }else {
        //   alert('Check your id and pass and try again')
        // }
      },error=> {
        console.log(error);
        // alert('something wrong please contact to site developer');
        // alert(JSON.stringify(error));
        console.log(error);
      });
  }
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
        this.subTalentList = data;
        console.log(this.subTalentList);
      },error=> {
        console.log(error);
      });
  }
  testVideo(){
    const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.FILE_URI,
      // encodingType: this.camera.EncodingType.JPEG,
      sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
      mediaType: this.camera.MediaType.VIDEO
    };

    this.camera.getPicture(options).then((imageData) => {
      // imageData is either a base64 encoded string or a file URI
      // If it's base64 (DATA_URL):
      alert(imageData);
      let base64Image = 'data:image/jpeg;base64,' + imageData;
      alert(base64Image);
    }, (err) => {
      // Handle error
      alert(JSON.stringify(err));
    });
  }
  path:any;
  data1 = {doc:'hello'};
  images: any = [];
  uploadImageCheck(){
    // alert('hello');
    for (var i = 0; i < this.images.length; i++) {
      if(!this.images[i].status){
        // alert(this.images[i]);
        this.uploadImage(this.images[i].imageUri,i);
        return false
      }else {
        this.navCtrl.setRoot(AwesomePage);
      }
    }
  }
  uploadImage(source,index){
    this.data1.doc = source;
    this.data = this.httpClient.post(this.globalVar.apiUrl + '/user/img-upload/' + this.userData.id,this.data1);
    this.data
      .subscribe(data => {
        // alert(JSON.stringify(data));
        this.images[index].status = true;
        this.uploadImageCheck();
        // if (data.status == 'success'){
        //   alert('Welcome MR/MISS '+data.datlanca.name)
        // }else {
        //   alert('Check your id and pass and try again')
        // }
      },error=> {
        alert('something wrong please contact to site developer');
        alert(JSON.stringify(error));
        console.log(error);
      });
  }
  selectPic(){
    // console.log(this.data1);
    // this.data1.doc = 'hello';
    // console.log(this.data1);
    const options = {outputType:1};
    this.imagePicker.getPictures(options).then((results) => {
      for (var i = 0; i < results.length; i++) {
        // alert(results[i]);
        var imageUri = 'data:image/jpeg;base64,' + results[i];
        // this.uploadImage(imageUri);
        this.images.push( {imageUri: imageUri, status: false} );
        // this.data1.doc = 'data:image/jpeg;base64,' + results[i];
        // console.log('Image URI: ' + results[i]);
      }

    }, (err) => {});
    console.log('In the join page');
    const httpOptions = {
      headers: new HttpHeaders({
        'Accept' : 'application/json',
        'Access-Control-Allow-Origin' : '*'
      })
    };
  }
  constructor(public navCtrl: NavController, public navParams: NavParams,
              public httpClient: HttpClient,public globalVar: GlobalVariableProvider,
              private camera: Camera,
              private imagePicker: ImagePicker,
              private fileTransfer: FileTransfer, private file: File
  ) {
    console.log(this.joinData);
    console.log(1);
    this.getTalentList();
    // var results = ['hello','hello1'];
    // for (var i = 0; i < results.length; i++) {
    //   // alert(results[i]);
    //   // alert(results[i]);
    //   var imageUri = 'data:image/jpeg;base64,' + results[i];
    //   // this.uploadImage(imageUri);
    //   this.images.push( {imageUri: imageUri, status: false} );
    //   // this.data1.doc = 'data:image/jpeg;base64,' + results[i];
    //   // console.log('Image URI: ' + results[i]);
    // }
    // this.uploadImageCheck();
    // this.data = this.httpClient.get(globalVar.apiUrl + '/list/talent');
    // this.data
    //   .subscribe(data => {
    //     // alert('success');
    //     console.log(data);
    //     // if (data.status == 'success'){
    //     //   alert('Welcome MR/MISS '+data.data.name)
    //     // }else {
    //     //   alert('Check your id and pass and try again')
    //     // }
    //   },error=> {
    //     alert('something wrong please contact to site developer');
    //     console.log(error);
    //   });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad JoinPage');
  }

}
