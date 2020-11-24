import { Component, OnInit } from '@angular/core';
import { ModalController, ToastController, AlertController } from '@ionic/angular';
import * as firebase from 'firebase';
import { DatabaseService } from 'src/app/services/database.service';
import { AngularFirestore } from '@angular/fire/firestore';
import { dismiss } from '@ionic/core/dist/types/utils/overlays';


@Component({
  selector: 'app-addproduct',
  templateUrl: './addproduct.page.html',
  styleUrls: ['./addproduct.page.scss'],
})
export class AddproductPage implements OnInit {
  product:any = {variants : [{id:'default', price: '',title:'',inventory:''}], price:0, selectedVariant:'0'}
  store: any;
  imageUploadInprogress = false
  cateagory_local: any =[]
  showInput: boolean = false

  constructor(private modalCtrl: ModalController, 
    private dbService: DatabaseService, 
    private toastController: ToastController,
    private db : AngularFirestore,
    private alertController : AlertController) { }

  ngOnInit() {
    this.dbService.getStore().subscribe(res=>{
      this.store = res
      //this.store.category.push('Add New Category')
      console.log(this.store)
      // this.cateagory_local = this.store.category
      // //this.cateagory_local.push('Add New Category')
      // console.log(this.store);
      
    })


  }


  dismiss() {
    // using the injected ModalController this page
    // can "dismiss" itself and optionally pass back data
    this.modalCtrl.dismiss({
      'dismissed': true
    });
  }


  addProduct(product){
    product.markOOS = false
    product.product_id  = Date.now()
    product.storeID = this.store.store_id
    product.search = this.searchTearm(product.name)
    if(!product.image_url){
      product.image_url = ""
    }

    if(!product.looseItem){
      product.lInventory = 0
      product.lUnit = ''
      product.looseItem = false
    }


console.log(product);
this.db.collection('product_seller').add(product).then(res=>{
  console.log(res);
  
this.presentToast("new product added successfully")
})

if(!this.store.category.includes(product.category) && product.category != undefined){
  this.store.category.push(product.category)
  console.log(this.store);
  this.db.collection('store_seller').doc(this.store.store_id).set({d: this.store},{merge:true}).then(res=>{
    console.log(res);
    this.presentToast("new category added ")

  })
}


this.dismiss()
  }

  async presentToast(msg) {
    const toast = await this.toastController.create({
      message: msg,
      duration: 2000
    });
    toast.present();
  }

  searchTearm(name1){
    //let name:string  = "vishal vora"
    let name  = name1.toLowerCase()
    let curName  = ''
    let curArray = []
    let nameArray = name.split(" ")
    //console.log(name.split(" "));
    nameArray.forEach((subName)=>{
    // console.log([...name])
    curName  = ''
    subName.split('').forEach((letter)=>{
      curName += letter
      //console.log(curName);
      curArray.push(curName);
      console.log(curArray);
      
    })
    })
  
    return curArray
  }

  logoSelected(event){
    if(event.target.files.length>0){

    this.imageUploadInprogress = true
    console.log(event);
    console.log(event.target.files[0]);
    var ref = firebase.storage().ref().child('products/' + Date.now())
    ref.put(event.target.files[0]).then(res=>{
      console.log(res);
      ref.getDownloadURL().then(url=>{
        console.log(url);
        this.imageUploadInprogress = false
        // store url to database
        this.product.image_url = url
      })
      
    })
  }

    
    
  }


  catChange(ev:any){
    console.log(ev.detail.value);
    if(ev.detail.value == "newCat"){
      this.product.category = ''
      this.showInput = true

    }
    else{
      this.showInput = false
      this.product.category = ev.detail.value
    }

    console.log(this.product);
    
    
  }

    addVariant(){
    let a = [{
      id: 'v_'+ Date.now(),
      title: '',
      price: '',
      inventory: 0
    }]
    this.product.variants = [...this.product.variants, ...a ]
  }

  deleteVariant(index){
    this.product.variants.splice(index, 1)
  }


  async presentAlertConfirm(index) {
    const alert = await this.alertController.create({
      header: 'Confirm!',
      message: 'delete variant?',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            console.log('Confirm Cancel: blah');
          }
        }, {
          text: 'Okay',
          handler: () => {
            console.log('Confirm Okay');
            this.deleteVariant(index)
          }
        }
      ]
    });
  
    await alert.present();
  }
  

}
