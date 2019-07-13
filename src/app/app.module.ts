import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { Badge } from '@ionic-native/badge';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import {AwesomePage} from "../pages/awesome/awesome";
import {ContactPage} from "../pages/contact/contact";
import { IonicStorageModule } from '@ionic/storage';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import {VisitingPage} from "../pages/visiting/visiting";
import {CustomerPage} from "../pages/customer/customer";
import {PartnershipPage} from "../pages/partnership/partnership";
import {SuggesionPage} from "../pages/suggesion/suggesion";
import {JoinPage} from "../pages/join/join";
import {SearchPage} from "../pages/search/search";
import {HearPage} from "../pages/hear/hear";
import {HelpPage} from "../pages/help/help";
import {LoginPage} from "../pages/login/login";
import {ProfilePage} from "../pages/profile/profile";
import {UpdateProfilePage} from "../pages/update-profile/update-profile";
import {TestPage} from "../pages/test/test";
import {GalleryPage} from "../pages/gallery/gallery";
import {NotificationPage} from "../pages/notification/notification";
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { GlobalVariableProvider } from '../providers/global-variable/global-variable';
import { Camera } from '@ionic-native/camera'
import { ImagePicker } from "@ionic-native/image-picker";
import { FileTransfer, FileUploadOptions, FileTransferObject } from '@ionic-native/file-transfer';
import { File } from '@ionic-native/file';
import {WelcomePage} from "../pages/welcome/welcome";
import { LocalNotifications } from '@ionic-native/local-notifications';
import {MyAccountPage} from "../pages/my-account/my-account";
@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    AwesomePage,
    ContactPage,
    VisitingPage,
    CustomerPage,
    PartnershipPage,
    SuggesionPage,
    TestPage,
    JoinPage,
    SearchPage,
    HearPage,
    HelpPage,
    LoginPage,
    ProfilePage,
    UpdateProfilePage,
    NotificationPage,
    GalleryPage,
    WelcomePage,
    MyAccountPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot(),
    HttpClientModule,
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    AwesomePage,
    ContactPage,
    VisitingPage,
    CustomerPage,
    PartnershipPage,
    SuggesionPage,
    TestPage,
    JoinPage,
    SearchPage,
    HearPage,
    HelpPage,
    LoginPage,
    ProfilePage,
    UpdateProfilePage,
    NotificationPage,
    GalleryPage,
    WelcomePage,
    MyAccountPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    GlobalVariableProvider,
    Camera,
    ImagePicker,
    FileTransfer,
    File,
    LocalNotifications,
    Badge
  ]
})
export class AppModule {}
