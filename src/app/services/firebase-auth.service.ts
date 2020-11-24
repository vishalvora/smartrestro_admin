import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { BehaviorSubject } from 'rxjs';
import { AngularFirestore } from '@angular/fire/firestore';
import { Platform } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class FirebaseAuthService {

  userId = new BehaviorSubject('null');
  authState = new BehaviorSubject(false)

  constructor(private afauth: AngularFireAuth,private platform: Platform, private db: AngularFirestore) { 
    // constructor logic
      // user loginstatus
      // user id

      this.afauth.onAuthStateChanged((user)=>{
        if(user){
          console.log("user loged in!!");
          console.log(user);
          this.userId.next(user.uid)
          this.authState.next(true)
          this.db.collection('userdata').doc(user.uid).update({device:this.platform.platforms(), appVersion:'0.1.6A'}).then(res=>{
            console.log(res);
            
          })
  
        }
        else {
          console.log("user loged out!!!");
          this.userId.next('null')
          this.authState.next(false)
        }
      })
      
    
  }


  getUserId(){
    return this.userId.asObservable()
  }

  getAuthState(){
    return this.authState.asObservable()
  }


  logout(){
    this.afauth.signOut().then(res=>{
      console.log(res);
      
    })
  }

  resetPassword(user){
    this.afauth.sendPasswordResetEmail(user.email).then(res=>{
      console.log(res);
      alert("password reset link send to email id: " + user.email)

    }).catch(err=>{
      console.log(err);
      alert("error :" + err.message)
    })
  }
}
