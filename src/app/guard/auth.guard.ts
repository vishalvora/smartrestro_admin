import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import * as firebase from 'firebase';
import { FirebaseAuthService } from '../services/firebase-auth.service';


@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
status : boolean
  constructor( private router: Router, private authService : FirebaseAuthService) { }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      
      return new Promise ((resolve, reject)=>{
        firebase.auth().onAuthStateChanged((user: firebase.User)=>{
          if(user){
            console.log("user authanticated");
            resolve(true);
          }
          else{
            console.log('user not authanticted');
            this.router.navigate(['login']);
            resolve(true);
          }
      
        })
        
      })

    }
 
}
