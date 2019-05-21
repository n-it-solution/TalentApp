import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
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

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = WelcomePage;

  pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp();
    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Home', component: HomePage },
      { title: 'My Account', component: LoginPage },
      { title: 'Notifications', component: NotificationPage },
      { title: 'How Can We Help You', component: HelpPage },
      { title: 'Gallery', component: GalleryPage },
      { title: 'Contact Us', component: ContactPage },
      { title: 'Awesome', component: AwesomePage },
      { title: 'Visit Site', component: VisitingPage },
      { title: 'Customer Service', component: CustomerPage },
      { title: 'Partnership', component: PartnershipPage },
      { title: 'Concern/Suggestion', component: SuggesionPage },
      { title: 'Join Talent', component: JoinPage },
      { title: 'Search Talent', component: SearchPage },
      { title: 'How Did You Hear Of Us', component: HearPage }
    ];

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
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
