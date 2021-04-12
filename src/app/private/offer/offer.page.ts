import { Component, OnInit, NgZone } from '@angular/core';
import { DatabaseService } from 'src/app/services/database.service';
import { AngularFirestore } from '@angular/fire/firestore';
import { NavController, ToastController } from '@ionic/angular';
import { present } from '@ionic/core/dist/types/utils/overlays';

@Component({
  selector: 'app-offer',
  templateUrl: './offer.page.html',
  styleUrls: ['./offer.page.scss'],
})
export class OfferPage implements OnInit {
  
  offer:any= {
    // title:'',
    // offer_status: false,
    // type:'percentage',
    // discount:0,
    // min_order_amount:0,
    // max_discount_value:0
  }
  storeId=''
  dataSaving = false;
customOffers = []

  constructor(private dbService : DatabaseService, private ngZone : NgZone, 
    private db: AngularFirestore,
    private navCtrl : NavController,
    private toastController : ToastController
    ) { }

  ngOnInit() {
    this.dbService.getStore().subscribe((store:any)=>{
      console.log(store);
      this.storeId = store.store_id
      if(store.offer!= undefined && Object.keys(store.offer).length>0){
        this.ngZone.run(()=>{
      this.offer = store.offer
          })
        }
        if(store.hasOwnProperty('custom_offers')){
          console.log('has offers!');
          
          this.ngZone.run(()=>{
        this.customOffers = store.custom_offers
            })
          }
          else{
            console.log('no custome pffers');
            
          }
        })
    }


  saveOffer(offer){
    this.dataSaving = true
    console.log(offer);
    if(!offer.offer_status){
      offer.offer_status = false
    }
    if(this.storeId != ''){ 
      this.db.collection('store_seller').doc(this.storeId).update({'d.offer': offer, 'd.custom_offers':this.customOffers } ).then(res=>{
        console.log('document saved successfully!');
        this.dataSaving = false
        this.presentToast('offer saved!!')
        this.dbService.storeData(this.storeId)
      }).catch(err=>{
        console.log('doucmnt not saved! err');
        this.dataSaving = false
      })
    }
    
    
  }

  back(){
    console.log("back to product!!");
    this.navCtrl.back()
    //this.navCtrl.navigateBack();  
  }


  async presentToast(msg) {
    const toast = await this.toastController.create({
      message: msg,
      duration: 2000
    });
    toast.present();
  }

  deleteOffer(index){
    console.log(index);
    this.customOffers.splice(index, 1)
  }

  addOffer(){
    this.customOffers.push({offer:''})
  }
}
