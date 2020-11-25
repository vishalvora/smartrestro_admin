import { Injectable } from '@angular/core';
import { AngularFirestore} from '@angular/fire/firestore'
import { FirebaseAuthService } from './firebase-auth.service';
import { BehaviorSubject } from 'rxjs';
import * as firebase from 'firebase';
import { Router } from '@angular/router';
import { LoadingController, NavController } from '@ionic/angular';
import { FcmService } from './fcm.service';
import { DatePipe } from '@angular/common';



@Injectable({
  providedIn: 'root'
})
export class DatabaseService {
  uid: any
  store = new BehaviorSubject({})
  storeId = new BehaviorSubject('null')
  userdataSubject = new BehaviorSubject({})
  userData_: firebase.firestore.DocumentData;
  rating = new BehaviorSubject({})

  constructor(private db: AngularFirestore, private authService: FirebaseAuthService, private router: Router,
    private loadingController : LoadingController, private navCtrl : NavController
    ) {

//this.test()

    // db.firestore.collection("product_seller").where('storeID','==','9P2YrbZdm0An5pE4aAXb')
    // .onSnapshot(res=>{
    //   res.docChanges().forEach(change=>{
    //     if(change.type === 'added'){
    //       console.log(change.doc.data());
          
    //     }
    //   })
    // });

    this.authService.getAuthState().subscribe(res=>{
      if(res){
        console.log("database got user login true!!");
        this.authService.getUserId().subscribe(id=>{
          this.uid = id
          if(this.uid != 'null'){
          // get userdata
          this.userData(this.uid)

          //this.storeData()
          }
        })
      }
      else{
        console.log("database got user login false!!!");
        
      }
    })
   }


  updateUserData(user, uid){
    this.db.collection('/userdata').doc(uid).set({name: user.name, phone: user.phone, uid : uid, email:user.email, time:Date.now()}).then((res)=>{
      console.log(res) 
      this.userData('a')
    },(err)=>{
      console.log(err)
    })
  }


  // addstore(data){
  //   this.presentLoadingWithOptions()
  //   // this.db.collection('store_seller').add(data).then(res=>{
  //   //   console.log(res);
      
  //   // })
  // }


  getProductFromMasterDB(){
    this.db.collection('products_').valueChanges().subscribe(res=>{
      
    })

    
  }

 
  storeData(storeId){
    // store data of login user
    this.db.firestore.collection('store_seller').doc(storeId).get().then(res=>{
      console.log(res.data());
      this.store.next(res.data().d)
      this.rating.next(res.data().d.rating)
      console.log(res.data().d.admin_store_status);
      
      if(!res.data().d.admin_store_status && res.data().d.admin_store_status != undefined){
      this.navCtrl.navigateRoot('/storedisable')
      }
      //let a  = []
      // res.forEach(doc=>{
      //   console.log(doc);
      //   a.push(doc.data())
      //   console.log(a);
        
    //   // })
    //   if(a.length > 1){
    //     alert("more than 1 store found!!")
    //   }
    //   if(a.length != 0){
    //   this.store.next(a[0].d)
    //   console.log(this.store);
    //   }
    // }).catch(err=>{
    //   console.log(err);
      
     })
  }

  getStore(){
    return this.store.asObservable()
  }

  // updateStoreData(data){
  //   //let storeId = '788Mu1s1N4KQZIVRYPQ1'
  //   //data.storeId = storeId
  //   //this.db.collection('store_seller').doc(storeId).set(data, {merge:true})
  // }

  userData(id){
    if(this.uid){
      console.log(this.uid);
      
    
    this.db.collection('userdata').doc(this.uid).get().subscribe(res=>{
      console.log(res.data());
      // user has store or not 
      if (Object.keys(res.data()).length > 0 ){
        
      if(res.data().store_id ){
        this.userdataSubject.next(res.data())
        this.userData_ = res.data()
      this.storeId.next(res.data().store_id)
      this.storeData(res.data().store_id)
      }
      else {

        if(res.data().uid){
          alert("no store has found, kindly add store")
          this.router.navigate(['slides'])
  
  
        }
      }
    }
    })
  }
    
  }
  

  getStoreId(){
    return this.storeId.asObservable()
  }


  addStore(storeData){
    this.loading()
    console.log("adding store")
    console.log(storeData);
    storeData.is_active = 0
    storeData.category = []
    // storeData.phone = ''
    storeData.delivery_charge = 0
    storeData.time =  Date.now()
  
    //this.dbService.updateStoreData(storeData)
    let a:any = {}
  
    a.data = storeData
    // a.data['coordinates'] = new firebase.firestore.GeoPoint(40.7589, -73.9851)
    const cloudFn = firebase.functions ().httpsCallable('addStore');
    cloudFn(a).then(result=>{
    console.log(result);
    this.dismissLoading()

    this.storeId.next(result.data.store_id)
    this.storeData(result.data.store_id)  
    console.log(result.data.store_id);
      
    this.router.navigate(['tabs/tab1'])
   
      
    },(err)=>{
      console.log(err);
      alert("try again")
      this.dismissLoading()
    })

  }

  async loading() {
    const loading = await this.loadingController.create({
      spinner: 'bubbles',
      // duration: 5000,
      message: 'Creating your store please wait...',
      // translucent: true,
      // cssClass: 'custom-class custom-loading',
      // backdropDismiss: true
    });
    await loading.present();

    
  }

  dismissLoading() {
    // using the injected ModalController this page
    // can "dismiss" itself and optionally pass back data
    this.loadingController.dismiss({
      'dismissed': true
    });
  }

  setFcmToken(type, token){
    let update  = {}
    update[type] = token
    console.log(update);
    
    this.db.collection('userdata').doc(this.uid).set(update,{merge:true}).then(res=>{
      console.log("token saved");
      
    })
  }

  getUserData(){
    return this.userdataSubject.asObservable()
  }


  test(){
    this.db.collection('products_').get().subscribe(res=>{
      res.forEach(doc=>{
        let a : any  = {}
        a = doc.data()
        console.log(a)

        // copy product id to import id
        a.import_id = a.product_id
        console.log(a)
        // this.db.collection('products_').doc(doc.id).set(a).then(res=>{
        //   console.log(res);
          
        // })
      })
    })
  }
}
