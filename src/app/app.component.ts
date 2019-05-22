import { Component, ViewChild } from '@angular/core';
import {Events, Nav, Platform} from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { ContactPage } from "../pages/contact/contact";
import { HelpPage } from "../pages/help/help";
import { LoginPage } from "../pages/login/login";
import { ProfilePage } from "../pages/profile/profile";
import {AwesomePage} from "../pages/awesome/awesome";
import {VisitingPage} from "../pages/visiting/visiting";
import {CustomerPage} from "../pages/customer/customer";
import {PartnershipPage} from "../pages/partnership/partnership";
import {SuggesionPage} from "../pages/suggesion/suggesion";
import {JoinPage} from "../pages/join/join";
import {SearchPage} from "../pages/search/search";
import {HearPage} from "../pages/hear/hear";
import {UpdateProfilePage} from "../pages/update-profile/update-profile";
import {TestPage} from "../pages/test/test";
import {GalleryPage} from "../pages/gallery/gallery";
import {NotificationPage} from "../pages/notification/notification";
import {WelcomePage} from "../pages/welcome/welcome";
import {GlobalVariableProvider} from "../providers/global-variable/global-variable";
import {Storage} from "@ionic/storage";

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = WelcomePage;

  pages: Array<{title: string, component: any}>;
  loginMenu: Array<{title: string, component: any}> = [
    { title: 'Home', component: HomePage },
    { title: 'Notifications', component: NotificationPage },
    { title: 'How Can We Help You', component: HelpPage },
    { title: 'Gallery', component: GalleryPage },
    { title: 'Contact Us', component: ContactPage },
    { title: 'Awesome', component: AwesomePage },
    { title: 'Visit Site', component: VisitingPage },
    { title: 'Customer Service', component: CustomerPage },
    { title: 'Partnership', component: PartnershipPage },
    { title: 'Concern/Suggestion', component: SuggesionPage }
  ];
  withOutLoginMenu: Array<{title: string, component: any}> = [
    { title: 'Home', component: HomePage },
    { title: 'My Account', component: LoginPage },
    { title: 'How Can We Help You', component: HelpPage },
    { title: 'Contact Us', component: ContactPage },
    { title: 'Awesome', component: AwesomePage },
    { title: 'Visit Site', component: VisitingPage },
    { title: 'Customer Service', component: CustomerPage },
    { title: 'Partnership', component: PartnershipPage },
    { title: 'Concern/Suggestion', component: SuggesionPage },
    { title: 'Join Talent', component: JoinPage },
  ];
  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen,public events: Events,
      public globalVar: GlobalVariableProvider,private storage: Storage
  ) {
    this.initializeApp();
    events.subscribe('login:success',(data) =>{
      globalVar.loginStatus = true;
      this.globalVar.loginData = data;
      console.log('login Success');
      this.pages = this.loginMenu;
      this.pages.push({ title: 'Logout', component: JoinPage });
      console.log(this.pages);
      // this.pages.splice(1,1);
      // console.log(this.pages);
      // this.pages.splice(1,0,{ title: 'Logout', component: LoginPage });
    });
    // used for an example of ngFor and navigation
    this.pages = this.withOutLoginMenu;

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    if(page.title == 'Logout'){
      this.storage.remove('loginData');
      this.pages = this.withOutLoginMenu;
      this.events.publish('login:logout');
      this.globalVar.loginStatus = false;
      this.globalVar.loginData = '';
      this.nav.setRoot(WelcomePage);
    }else {
      this.nav.setRoot(page.component);
    }
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
  }
}
