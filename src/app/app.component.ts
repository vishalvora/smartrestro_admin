import { Component, NgZone } from '@angular/core';

import { Platform, NavController } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Router } from '@angular/router';
import { FirebaseAuthService } from './services/firebase-auth.service';
import { FcmService } from './services/fcm.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private router: Router,
    private navCtrl : NavController,
    private authService : FirebaseAuthService,
    private ngZone : NgZone,
    private fcmService : FcmService

  ) {
    this.initializeApp();
  }

  ngOnInit(){
    
  }
  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      //this.splashScreen.hide();
      this.fcmService.receiveMessage()
    this.fcmService.requestPermission()
      this.authService.getAuthState()
      .subscribe(res=>{
        
        if(res){
          //this.router.navigate(['private', 'tabs', 'dashboard'])
          this.ngZone.run(()=>{
          this.splashScreen.hide();
           this.navCtrl.navigateRoot('tabs/tab1');
          //this.navCtrl.navigateRoot('storedisable')
        })
        }
        else{
          this.splashScreen.hide();
        this.router.navigate(['/login'])

        }
      })

    });
  }
}
