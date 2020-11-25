import { Component, OnInit } from '@angular/core';
import { DatabaseService } from '../../services/database.service';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {

  user:any= {}
  msg;

  constructor(private afauth: AngularFireAuth,
    private db: DatabaseService,
     private router: Router,
     private toastController : ToastController
    ) { }

  ngOnInit() {
  }


  signup(user){
    // fixme: 
    this.msg = "registering..."
    console.log(user)
    if(user.password == user.confirmPassword){
      
    this.afauth.createUserWithEmailAndPassword(user.email, user.password).then((res:any)=>{
      this.msg = "your account has been registered successfully.."
      this.presentToast()
      console.log(res);
      this.db.updateUserData(user, res.user.uid)
      // check user data updated R101
      this.router.navigate(['tabs/tab2'])
    }).catch(err=>{
      console.log(err);
      this.msg = err.message
      
    })
    }else{
      this.msg= "Password does not match"
    }
  }
  async presentToast() {
    const toast = await this.toastController.create({
      message: 'Your account has been registered successfully',
      duration: 2000
    });
    toast.present();
  }
}
