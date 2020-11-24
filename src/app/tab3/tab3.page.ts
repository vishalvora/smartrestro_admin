
import { Component, ViewChild, NgZone } from '@angular/core';
import { FirebaseAuthService } from '../services/firebase-auth.service';
import { DatabaseService } from '../services/database.service';
import * as firebase from 'firebase';
import { LocationPage } from '../private/location/location.page';
import { ModalController, ToastController } from '@ionic/angular';
import { GoogleService } from '../services/google.service';
import { SetradiusPage } from '../private/setradius/setradius.page';
import { loadingController } from '@ionic/core';


@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
  store: any = {}
  storeId: string;
  ref
  imageUploadInprogress = false
  bypass = false
  dataSaving = false;


  @ViewChild('storeForm',{static: true}) storeForm: any;
  constructor(private dbService: DatabaseService, private modalController : ModalController,
    private toastController: ToastController,
     private googleService : GoogleService,
     private ngZone : NgZone) {
    //----------- test code for file upload


   
  



    //----------------

      this.dbService.getStore().subscribe(store=>{
        if(Object.keys(store).length>0){
          this.ngZone.run(()=>{
        this.store = store
      })
        console.log(this.store);
        // this.makePristine()
        }
      })
      this.dbService.getStoreId().subscribe(id=>{
        this.storeId  = id
      })
    
      this.googleService.getStoreAddress().subscribe((res:any)=>{
        console.log(res);
        if(Object.keys(res).length > 0){
        this.store.address = res
        this.store.lat = res.geometry.location.lat()
        this.store.lng = res.geometry.location.lng()
  
        console.log(this.store);

        }
      })
  
  }

  ionViewWillLeave(){
    if(this.storeForm.dirty){
      // alert("you have unsaved changes!")
    }
    
  }



  logoSelected(event){
    if(event.target.files.length>0){

    this.makeDirty()
    this.imageUploadInprogress = true
    console.log(event);
    console.log(event.target.files[0]);
    var ref = firebase.storage().ref().child('logo/' + this.storeId)
    ref.put(event.target.files[0]).then(res=>{
      console.log(res);
      ref.getDownloadURL().then(url=>{
        console.log(url);
        // store url to database
        this.store.logo_url = url
        this.imageUploadInprogress = false
        
      })
      
    })
    

  }
    
  }

  updateStoreData(storeData){
    this.dataSaving = true
    console.log("updating data")
    console.log(storeData);
    console.log(this.store);
    
    if(storeData.is_active){
      storeData.is_active = 1
    }else{
      storeData.is_active = 0
    }
    //storeData.is_active = 1
    //this.dbService.updateStoreData(storeData)
    let a:any = {}
    a.storeId = this.storeId;
    a.data = storeData
    // a.data['coordinates'] = new firebase.firestore.GeoPoint(40.7589, -73.9851)
    const cloudFn = firebase.functions ().httpsCallable('updateStore');
    cloudFn(a).then(result=>{
      console.log(result);
      this.dataSaving = false
      this.presentToast("store detail updated successfully!")
      this.makePristine()
      
    })
  }


  // addStore(storeData){
  //   console.log("adding store")
  //   console.log(storeData);
  //   storeData.is_active = 1
  //   storeData.category = []
  
  //   //this.dbService.updateStoreData(storeData)
  //   let a:any = {}
  
  //   a.data = storeData
  //   // a.data['coordinates'] = new firebase.firestore.GeoPoint(40.7589, -73.9851)
  //   const cloudFn = firebase.functions ().httpsCallable('addStore');
  //   cloudFn(a).then(result=>{
  //     console.log(result);

  //     setTimeout(() => 
  //         {
  //           this.dbService.userData('noid')
  //         },
  //         5000);
      
  //   })

  // }


  changeLocation(){
    this.storeForm.control.markAsDirty()
    this.presentModalLocation()
  }


  async presentModalLocation() {
    const modal = await this.modalController.create({
      component: LocationPage
    });
    return await modal.present();
  }

  // changeRadius(){
  //   console.log('chnage radius');
    
  // }

  async changeRadius() {
    console.log(this.store.lat);
    
    const modal = await this.modalController.create({
      component: SetradiusPage,
      componentProps : {
        lat:this.store.lat,
        lng:this.store.lng,
        radius: this.store.serving_radius
      }

    });
    modal.onDidDismiss().then((data)=>{
      console.log(data);
      if(data.data.radius>0){
      this.store.serving_radius = data.data.radius
      }
    })
    return await modal.present();
    
  }

  makeDirty(){
  console.log("making form dirty!!!")
    this.storeForm.control.markAsDirty()

  }

  makePristine(){
    console.log("making form pristine")
    this.storeForm.control.markAsPristine()
  }


  async presentToast(msg) {
    const toast = await this.toastController.create({
      message: msg,
      duration: 2000
    });
    toast.present();
  }


  catChange(ev){
    console.log(ev);
    this.makeDirty()

  //   const users = [
  //     { id: 11, name: ['Adam', 'a', 'b'], age: 23, group: 'editor' },
  //     { id: 47, name: ['John', 'b', 'c'], age: 28, group: 'admin' },
  //     { id: 85, name: ['William', 'c', 'd'], age: 34, group: 'editor' },
  //     { id: 97, name: ['Oliver', 'd', 'e'], age: 28, group: 'admin' }
  //   ];
    
  //   let res = users.filter(it => it.name.includes('c'));
  //   console.log(res)
   }

}