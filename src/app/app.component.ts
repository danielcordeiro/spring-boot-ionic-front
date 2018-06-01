import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { AuthService } from '../services/auth.service';
import { AdMobFreeBannerConfig, AdMobFree } from '@ionic-native/admob-free';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: string = 'HomePage';

  pages: Array<{ title: string, component: string }>;

  constructor(public platform: Platform,
    public statusBar: StatusBar,
    public splashScreen: SplashScreen,
    public auth: AuthService,
    public admob: AdMobFree) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      //{ title: 'Login', component: 'HomePage' },
      { title: 'Profile', component: 'ProfilePage' },
      { title: 'Categorias', component: 'CategoriasPage' },
      { title: 'Carinho', component: 'CartPage' },
      { title: 'Logout', component: '' }
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
      this.showBanner();
    });
  }

  openPage(page: { title: string, component: string }) {
    switch (page.title) {
      case 'Logout':
        this.auth.logout();
        this.nav.setRoot('HomePage');
        break;

      default:
        this.nav.setRoot(page.component);

    }


  }

  showBanner() {
 
    let bannerConfig: AdMobFreeBannerConfig = {
        isTesting: false, // Remove in production
        autoShow: true,
        id: 'ca-app-pub-2655139835721928/9434251136'
    };

    this.admob.banner.config(bannerConfig);

    this.admob.banner.prepare().then(() => {
        // success
    }).catch(e => console.log(e));

}
}
