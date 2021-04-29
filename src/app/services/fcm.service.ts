import { Injectable } from '@angular/core';
import { AngularFireMessaging} from '@angular/fire/messaging'
import { BehaviorSubject } from 'rxjs';
import  { AngularFirestore } from '@angular/fire/firestore'
import { FCM } from '@ionic-native/fcm/ngx';
import { Platform } from '@ionic/angular';
import { FirebaseAuthService } from './firebase-auth.service';
import { DatabaseService } from './database.service';

@Injectable({
  providedIn: 'root'
})
export class FcmService {

  fcmToken = new BehaviorSubject('')
  fcmTokenAndroid = new BehaviorSubject('')

  constructor(private angularFireMessaging: AngularFireMessaging, private db : AngularFirestore, private fcm: FCM,
    private platform : Platform, private dbService : DatabaseService
    ) { 
      this.platform.ready().then(()=>{
        

        this.dbService.getStoreId().subscribe(id=>{
          if(id != '' && id != null){
            this.fcm.subscribeToTopic(id)
            this.androidFcm()
          }
        })
      })
      }


// check android permission

        androidFcm(){
          console.log('getting fcm permssion!!');
          
            this.fcm.hasPermission().then(permission=>{
              console.log(permission);
              if(!permission){
                alert("you dont have permission  for notification!!")
              }
            })


            this.fcm.getToken().then(token => {
              console.log(token);
              this.fcmTokenAndroid.next(token)
              this.dbService.getStoreId().subscribe(id=>{
                if(id != ''){
                  this.db.collection('token').doc(id).set({fcm_token:token}).then(res=>{
                    console.log('token saved!');
                    })
                  }
                })
              });

            this.fcm.onNotification().subscribe(data => {
              if(data.wasTapped){
                console.log("Received in background");
              } else {
                console.log("Received in foreground");
                };
              });

            this.fcm.onTokenRefresh().subscribe(token => {
              console.log(token);
              this.dbService.getStoreId().subscribe(id=>{
                if(id != ''){
                  this.db.collection('token').doc(id).update({fcm_oken:token}).then(res=>{
                    console.log('token saved!');
                    })
                  }
                })
              });
          }


      subscribeTopic(storeId){
        console.log("subscribing to topick user id");
        this.fcm.subscribeToTopic(storeId)
        this.fcm.subscribeToTopic("topicmarketingseller")
      }




      // browser notification
      requestPermission() {
        this.angularFireMessaging.requestToken.subscribe(
        (token) => {
        console.log(token);
        this.fcmToken.next(token)
        
        },
        (err) => {
        console.error('Unable to get permission to notify.', err);
        }
        );
        }

        receiveMessage() {
          this.angularFireMessaging.messages.subscribe(
          (payload) => {
          console.log("new message received. ", payload);
          //this.currentMessage.next(payload);
          })
          }
    
  
}
