import { Component, OnInit } from '@angular/core';
import { AngularFireAuth} from '@angular/fire/auth'


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  user:any= {}
  msg

  constructor(
   private fireauth: AngularFireAuth,
     ) { }

  

  ngOnInit() {
    
    
  }

  login(user){
    console.log(user)
    this.fireauth.signInWithEmailAndPassword(user.email,user.password).then(res=>{
      console.log(res)
      this.user = {}
      
    }).catch(err=>{
      console.log(err)
      this.msg = err.message
    })
  }

  logout(){
    this.fireauth.signOut().then(res=>console.log(res)
    )
  }






}
