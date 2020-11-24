import { Component, OnInit, NgZone } from '@angular/core';
import { FirebaseAuthService } from 'src/app/services/firebase-auth.service';
import { DatabaseService } from 'src/app/services/database.service';
import { AppVersion } from '@ionic-native/app-version/ngx';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {
  userData: any = {}
  app_v

  constructor(private authService : FirebaseAuthService, private dbService : DatabaseService, 
    private ngZone : NgZone, private appVersion: AppVersion, private alertController : AlertController) { }

  ngOnInit() {
    // this.app_v = this.appVersion.getVersionNumber();
    // console.log(this.app_v);
    
    this.dbService.getUserData().subscribe(res=>{
      console.log(res);

      if(Object.keys(res).length > 0 ){
        this.ngZone.run(()=>{
        this.userData = res
      })
      }
    
    })
  }

  logOut(){
    this.authService.logout()
  }

  async presentAlertConfirmLogout() {
    const alert = await this.alertController.create({
      header: 'Confirm!',
      message: 'logout?',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            console.log('Confirm Cancel: blah');
          }
        }, {
          text: 'Okay',
          handler: () => {
            console.log('Confirm Okay');
            this.logOut()
          }
        }
      ]
    });
  
    await alert.present();
  }
  
}
