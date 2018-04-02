import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { TabsPage } from '../pages/tabs/tabs';
import { LoginComponent } from "../pages/member/login/login.component"

@Component({
  templateUrl: 'app.html'
})

export class MyApp {

  rootPage:any = localStorage.getItem("accessToken") ? TabsPage : LoginComponent;

  constructor( platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
      //

    });
  }

  ngOnInit() {

    // if(localStorage.getItem("accessToken")) {
    //   // this.navCtrl.push("login");
    //   rootPage:any = LoginComponent;
    // } else {
    //   rootPage:any = TabsPage;
    // }
  }

}
