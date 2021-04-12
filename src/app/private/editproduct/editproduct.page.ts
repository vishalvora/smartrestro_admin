import { Component, OnInit, NgModule, NgZone, ViewChild } from '@angular/core';
import { ModalController, NavParams, ToastController, AlertController } from '@ionic/angular';
import { AngularFirestore } from '@angular/fire/firestore';
import * as firebase from 'firebase';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { Product} from '../../shared/models/product.model'
import { Variant} from '../../shared/models/variant.model'
import { Option } from '../../shared/models/option.model'
import { resetFakeAsyncZone } from '@angular/core/testing';
import { DatabaseService } from 'src/app/services/database.service';



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
  hideDetail = false;
  store:any= {};
  isNew = true
  newVarinat:any
  url:any;

  constructor(private modalCtrl : ModalController, private navParams: NavParams, private db: AngularFirestore,
    private formBuilder: FormBuilder, private ngZone : NgZone, private toastController : ToastController,
    private alertController : AlertController, private dbService: DatabaseService
    ) { 
    this.productDocId = navParams.get('id');
    this.productCategory = navParams.get('cat')
    console.log(this.productDocId);
    if(this.productDocId != 'new'){
      this.isNew = false
      this.db.collection('product_seller').doc(this.productDocId).valueChanges().subscribe(res=>{
        console.log(res);
        this.ngZone.run(()=>{
        this.product = res
        if (!this.product.hasOwnProperty('details')){
          this.product.details = {}
          this.product.details.detail_text = ''
        }
        if(!this.product.details.hasOwnProperty('details')){
          this.product.details.details = []
        }
        if(!this.product.details.hasOwnProperty('detail_text')){
          this.product.details.detail_text = ''
        }
        console.log(this.product);
        
      })
      })
    }
    else if(this.productDocId == 'new'){
      this.isNew = true
      this.product = new Product('', false, 'Active', 0, 0)
      console.log(this.product)
    }
  }

  ngOnInit() {
    this.dbService.getStore().subscribe(res=>{
      this.store = res
      console.log(this.store)
    })

  }

  dismiss() {
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
      // this.product.image_url = ""
    }
    if(!this.product.showMRP){
      this.product.showMRP = false
    }
    if(!this.product.description){
      // this.product.description = ''
    }

    if(!this.product.details){
      // this.product.details=''
    }


    if(!this.product.looseItem){
      // this.product.lInventory = 0
      // this.product.lUnit = ''
      // this.product.looseItem = false
    }

    if (!this.product.isPromoted){
      this.product.isPromoted = false
    }
    if(this.imageUploadInprogress){
      alert("uploading image please wait!")

    }else{
      console.log(this.product)
      this.product.search = this.searchTearm(this.product.name)
    this.db.collection('product_seller').doc(this.productDocId).update({...this.product})
      .then(res=>{
    console.log(res)

this.presentToast('product updated successfully!')
this.dismiss()
    })
  }
  }

      logoSelected(event){
        if(event.target.files.length>0){
          
    this.imageUploadInprogress = true
    console.log(event);
    console.log(event.target.files[0]);
    let id;
    if(this.productDocId == 'new'){
      id = Date.now()
    }else{
      id = this.productDocId
    }
    var ref = firebase.storage().ref().child(this.store.store_id +'/products/' + id)
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

    addUrl(url){
      this.product.image_url = url
    }

    addimage(event){
      if(event.target.files.length>0){

        if(!this.product.hasOwnProperty('details')){
          this.product.details = {
            images : [],
          }
        }
        if(!this.product.details.hasOwnProperty())    {
          this.product.details.images = []
        }    

        
  console.log(event);
  console.log(event.target.files[0]);
  var ref = firebase.storage().ref().child('products1/storeid/' + Date.now()+1)
  ref.put(event.target.files[0]).then(res=>{
    console.log(res);
    ref.getDownloadURL().then(url=>{
      console.log(url);
      // store url to database
      this.product.details.images.push(url)
      this.makeDirty()
      this.db.collection('product_seller').doc(this.productDocId).update({'details.images':this.product.details.images})

    })
    
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
    
  
    deleteImage(index){
      console.log(index)
      try{
      var ref = firebase.storage().refFromURL(this.product.details.images[index])
      console.log(ref)
      ref.delete().then(function() {
        // File deleted successfully
        console.log('file deleted!!');
        
      }).catch(function(error) {
        console.log(error);
      });
    }
    catch(error){
      console.log(error)
    }
      this.product.details.images.splice(index ,1)
      this.db.collection('product_seller').doc(this.productDocId).update({'details.images':this.product.details.images})
    }
  

    addDetailLine(){
      this.product.details.details.push({feature:'',value:''})
      console.log(this.product.details.details);
      
    }

    removeFeature(index){
      this.product.details.details.splice(index ,1)

    }


    addNewVariant(title){
      console.log(title)
      if(!this.product.hasOwnProperty('variants')){
        this.product.variants = []
      }
      let option = [{title:'',price:0, foodType:'Veg'}]
      let variant ={ title: '', selectionType: '', validation: '', options: option }
      console.log(variant)
      this.product.variants.push(variant)
      console.log(this.product)
    }

    addNewOption(index){
      console.log(index)
      let option = {title:'',price:0, foodType:'Veg'}
    
      this.product.variants[index].options.push(option)
      // this.product.variants[index].options = [ ...this.product.variants[index].options, ...a ]

      console.log(this.product)
    }


    addProduct(){
      this.product.product_id  = Date.now()
      this.product.storeID = this.store.store_id
      this.product.search = this.searchTearm(this.product.name)

      console.log({...this.product})
      this.db.firestore.collection('product_seller').add({...this.product}).then(res=>{
        console.log(res)
        this.dismiss()

      })

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
  
}


