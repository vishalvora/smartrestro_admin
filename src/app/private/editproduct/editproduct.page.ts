import { Component, OnInit, NgModule, NgZone, ViewChild } from '@angular/core';
import { ModalController, NavParams, ToastController, AlertController } from '@ionic/angular';
import { AngularFirestore } from '@angular/fire/firestore';
import * as firebase from 'firebase';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { LoginPage } from 'src/app/user/login/login.page';



@Component({
  selector: 'app-editproduct',
  templateUrl: './editproduct.page.html',
  styleUrls: ['./editproduct.page.scss'],
})
export class EditproductPage implements OnInit {
  productDocId: any;
  product:any ={}
  imageUploadInprogress = false
  fgroup: FormGroup
  testValue= "test"
  @ViewChild('productForm',{static: true}) productForm: any;
  productCategory: any;

  constructor(private modalCtrl : ModalController, private navParams: NavParams, private db: AngularFirestore,
    private formBuilder: FormBuilder, private ngZone : NgZone, private toastController : ToastController,
    private alertController : AlertController
    ) { 
    this.productDocId = navParams.get('product');
    this.productCategory = navParams.get('cat')
    console.log(this.productDocId);
      this.db.collection('product_seller').doc(this.productDocId).valueChanges().subscribe(res=>{
        console.log(res);
        this.ngZone.run(()=>{
        this.product = res
        //this.fgroup.setValue(this.product)
      })
      })
  }

  ngOnInit() {

    // this.fgroup = this.formBuilder.group({
    //   name : new FormControl('', Validators.required),
    //   title : new FormControl('', Validators.required),
    //   price : new FormControl('', Validators.required),
    //   inventory : new FormControl('', Validators.required)
    // })

  

  }

  dismiss() {
    // using the injected ModalController this page
    // can "dismiss" itself and optionally pass back data
    this.modalCtrl.dismiss({
      'dismissed': true
    });
  }

  makeDirty(){
    console.log("making form dirty!!!")
      this.productForm.control.markAsDirty()
  
    }
  
    makePristine(){
      console.log("making form pristine")
      this.productForm.control.markAsPristine()
    }
  

  addVariant(){
    //console.log(this.product.variants);
    
    let a = [{
      title: '',
      price: 0,
      inventory: 0
    }]
    this.product.variants = [ ...this.product.variants, ...a ]
  }

  deleteVariant(index){
    this.makeDirty()
    console.log(this.product)
    this.product.variants.splice(index, 1)
    console.log(this.product)
  }

  saveProduct(){
    if(!this.product.markOOS){
      this.product.markOOS = false
    }

    if(!this.product.image_url){
      this.product.image_url = ""
    }
    if(!this.product.showMRP){
      this.product.showMRP = false
    }

    if(!this.product.looseItem){
      this.product.lInventory = 0
      this.product.lUnit = ''
      this.product.looseItem = false
    }
    if(this.imageUploadInprogress){
      alert("uploading image please wait!")

    }else{
      console.log(this.product)
    this.db.collection('product_seller').doc(this.productDocId).set(
      {name: this.product.name, image_url: this.product.image_url, 
        variants: this.product.variants, markOOS:this.product.markOOS, 
        lInventory:parseFloat(this.product.lInventory).toFixed(3) , 
        lUnit:this.product.lUnit , looseItem :this.product.looseItem,
        category:this.product.category, showMRP:this.product.showMRP
      },{merge:true}).then(res=>{
    console.log(res)
this.presentToast('product updated successfully!')
    })
  }
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
        this.makeDirty()
      })
      
    })
  }
    }

    test(fm){
      console.log(fm);
      
    }

    async presentToast(msg) {
      const toast = await this.toastController.create({
        message: msg,
        duration: 2000
      });
      toast.present();
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

