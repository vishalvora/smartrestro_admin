import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { IonSlides, ModalController} from '@ionic/angular';
import { DatabaseService } from 'src/app/services/database.service';
import { GoogleService } from 'src/app/services/google.service';
import { LocationPage } from '../location/location.page';
import { FirebaseAuthService } from 'src/app/services/firebase-auth.service';
import { SetradiusPage } from '../setradius/setradius.page';

@Component({
  selector: 'app-slides',
  templateUrl: './slides.page.html',
  styleUrls: ['./slides.page.scss'],
})
export class SlidesPage implements OnInit {
  @ViewChild('mySlider', { static: true })  slides: IonSlides;
  storeDetail:any ={}
  isLocation = false
  

  constructor(private dbService : DatabaseService, private googleService: GoogleService,
    private modalController : ModalController, private authService: FirebaseAuthService
    ) { 
     // this.slides.lockSwipes(true)
    }

  ngOnInit() {
    this.slides.lockSwipes(true)
    this.googleService.getStoreAddress().subscribe((res:any)=>{
      console.log(res);
      if(Object.keys(res).length > 0){
      this.storeDetail.address = res
      this.storeDetail.lat = res.geometry.location.lat()
      this.storeDetail.lng = res.geometry.location.lng()
        if(parseFloat(this.storeDetail.lat) < 90 && parseFloat(this.storeDetail.lat) > -90 && parseFloat(this.storeDetail.lng) < 180 && parseFloat(this.storeDetail.lng) > -180){
          this.isLocation = true
        }
        else{
          this.isLocation = false;
          alert("incorrect location, try again!!")
        }
      
      console.log(this.storeDetail);
      }
    })
  }

  swipeNext(){
    this.slides.lockSwipes(false)
    this.slides.slideNext();
    this.slides.lockSwipes(true)
  }

  addStore(store){
    console.log(store);
    this.dbService.addStore(store)
    
  }

  async presentModalLocation() {
    const modal = await this.modalController.create({
      component: LocationPage
    });
    return await modal.present();
  }

  catChange(ev){

  }

  copyNo(){
    this.storeDetail.phone_whatsapp = this.storeDetail.phone
  }


  close(){
    console.log("close");
    this.authService.logout()

  }

  async setRadius() {
    const modal = await this.modalController.create({
      component: SetradiusPage,
      componentProps:{
        lat:this.storeDetail.lat,
        lng:this.storeDetail.lng,
        radius:1
      }
    });
    modal.onDidDismiss().then((data)=>{
      console.log(data);
      if(data.data.radius>0){
      this.storeDetail.serving_radius = data.data.radius
      }
    })
    return await modal.present();
  }

}
