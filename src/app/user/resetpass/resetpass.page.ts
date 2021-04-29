import { Component, OnInit } from '@angular/core';
import { FirebaseAuthService } from 'src/app/services/firebase-auth.service';

@Component({
  selector: 'app-resetpass',
  templateUrl: './resetpass.page.html',
  styleUrls: ['./resetpass.page.scss'],
})
export class ResetpassPage implements OnInit {

  user:any = {}
  constructor(private authService: FirebaseAuthService) { }

  ngOnInit() {
  }


  resetPassword(user){
    this.authService.resetPassword(user);
  }
}
