import { Component, OnInit, NgZone } from '@angular/core';
import { DatabaseService } from 'src/app/services/database.service';
import { AngularFirestore } from '@angular/fire/firestore';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-announcement',
  templateUrl: './announcement.page.html',
  styleUrls: ['./announcement.page.scss'],
})
export class AnnouncementPage implements OnInit {
  storeId: any;
  store:any;
  announcement={
    isAnnouncement : false,
    announcement:''
  };
  dataSaving: boolean;

  constructor(private dbService: DatabaseService, private ngZone: NgZone, private db:AngularFirestore, private toastController: ToastController) { }

  ngOnInit() {
    this.dbService.getStore().subscribe((store:any)=>{
      console.log(store);
      this.storeId = store.store_id
      this.store = store
        this.ngZone.run(()=>{
          if (store.hasOwnProperty('isAnnouncement')){
            this.announcement.isAnnouncement = store.isAnnouncement
          }
          })
          if (store.hasOwnProperty('announcement')){
            this.announcement.announcement = store.announcement
          }
      })

  }


  save(){
    console.log(this.announcement)
    if(this.storeId != ''){ 
      this.db.collection('store_seller').doc(this.storeId).update({'d.announcement': this.announcement.announcement, 'd.isAnnouncement': this.announcement.isAnnouncement } ).then(res=>{
        console.log('document saved successfully!');
        this.dataSaving = false
        this.presentToast('Announcement saved!!')
      }).catch(err=>{
        console.log('doucmnt not saved! err');
        this.dataSaving = false
      })
    }

  }


  async presentToast(msg) {
    const toast = await this.toastController.create({
      message: msg,
      duration: 2000
    });
    toast.present();
  }

}
