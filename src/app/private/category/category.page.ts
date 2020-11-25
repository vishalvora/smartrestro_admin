import { Component, OnInit, Input } from '@angular/core';
import { ModalController, NavParams, ToastController } from '@ionic/angular';
import { AngularFirestore } from '@angular/fire/firestore';
import { present } from '@ionic/core/dist/types/utils/overlays';

@Component({
  selector: 'app-category',
  templateUrl: './category.page.html',
  styleUrls: ['./category.page.scss'],
})
export class CategoryPage implements OnInit {
  @Input() storeId:string
  category

  constructor(private modalCtrl: ModalController, private db: AngularFirestore,  
    private toastController: ToastController,
    private navParams: NavParams) { 
    this.storeId = navParams.get('storeId')
  }
  

  ngOnInit() {
    
    this.db.collection('store_seller').doc(this.storeId).get().subscribe(res=>{
      console.log(res);
      this.category = res.data().d.category
      console.log(this.category);
      
    })
  }

  dismiss() {
    // using the injected ModalController this page
    // can "dismiss" itself and optionally pass back data
    this.modalCtrl.dismiss({
      'dismissed': true
    });
  }


  doReorder(ev){
    ev.detail.complete();
    let catToMove = this.category.splice(ev.detail.from,1)[0]
    this.category.splice(ev.detail.to, 0, catToMove)
    console.log(this.category);
    
  }

  save(){
    this.db.collection('store_seller').doc(this.storeId).update({'d.category': this.category}).then(res=>{
      console.log(res);
      this.presentToast('category saved!')
      
    })
  }

  async presentToast(msg) {
    const toast = await this.toastController.create({
      message: msg,
      duration: 2000
    });
    toast.present();
  }
}
