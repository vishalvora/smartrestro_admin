import { Component, NgZone } from '@angular/core';
import { AngularFirestore} from '@angular/fire/firestore'
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { product } from 'src/environments/environment';
import { DatabaseService } from '../services/database.service';
import { ImportPage } from '../private/import/import.page';
import { ModalController, LoadingController, AlertController } from '@ionic/angular';
import { loadingController } from '@ionic/core';
import { AddproductPage } from '../private/addproduct/addproduct.page';
import * as firebase from 'firebase'
import { ImportPageModule } from '../private/import/import.module';
import { EditproductPage } from '../private/editproduct/editproduct.page';
import { CategoryPage } from '../private/category/category.page';

export interface product1 extends product{ id: string}

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})



export class Tab2Page {
  masterProductList
 
  productList : any = []
  searchList : any =[]
  a = true
  price
  store
  storeId
  productIds = []
  categoryList = []
  selectedCatalogue: any;
  segCtrl: boolean = true
  searchbar: boolean= false;

  constructor(private db: AngularFirestore, private dbService: DatabaseService,
    private modalController : ModalController, 
    private alertController : AlertController,
    private loadingController : LoadingController, 
    private modalCtrl : ModalController,
    private ngZone : NgZone) {
  }

  

  ngOnInit(){

    this.dbService.getStore().subscribe((res:any)=>{
      console.log(res);

  if(Object.keys(res).length > 0)      
  {
    console.log("running due to not null");
    this.storeId = res.store_id
    if(res.category){
      console.log('there is category');
      // this.snap('')

    
    this.categoryList = res.category
    console.log(this.categoryList);
    console.log(this.storeId);
    

  this.selectedCatalogue = this.categoryList[0]
    }
  if(this.categoryList.length>0)
{       

  this.segmentChanged('ev')


}

}  

})


  }

  segmentChanged(event){
    console.log(this.selectedCatalogue)
    this.db.firestore.collection('product_seller').where('storeID','==',this.storeId).where('category','==',this.selectedCatalogue).orderBy('product_id','asc').limit(15).onSnapshot(res=>{
      let a:any = {}
      this.productList = []
      this.productIds = []

      this.ngZone.run(()=>{
      res.forEach(doc=>{
        
        console.log(doc.id);
        a = doc.data();
        a.doc_id = doc.id
        this.productList.push(a)
        //this.deleteProduct(a,1)
        this.productIds.push(a.product_id)
      })
    })
    })

  }

  close(){
    this.a = false
  }

  priceSet(product){
    console.log("setting price");
    
    console.log(product);
    // console.log(this.price);
    console.log()

    
    this.db.collection('product_seller').doc(product.doc_id).set({variants: product.variants},{merge: true}).then(res=>{
      console.log(res);
      
    })
  }


  priceChnage(product, i){
    console.log("changing price");
    const increment = firebase.firestore.FieldValue.increment(i);
    
    product.price = parseFloat(product.price) + 1
    this.db.firestore.collection('product_seller').doc(product.doc_id).update({price: increment}).then(res=>{
      console.log(res);
      
    })
  }


  async presentImportModal() {
    const modal = await this.modalController.create({
      component: ImportPage,
      componentProps:{
        productIds_: 'this.productIds'
      }
    });
    return await modal.present();
    
  }


  dismissLoading() {
    // using the injected ModalController this page
    // can "dismiss" itself and optionally pass back data
    this.loadingController.dismiss({
      'dismissed': true
    });
  }


  async loading() {
    const loading = await this.loadingController.create({
      message: 'Please wait...'
      
    });
    await loading.present();

    const { role, data } = await loading.onDidDismiss();
    console.log('Loading dismissed!');
  }


  deleteProduct(product, index){
    // delete from product list 
    // delete from store products
    console.log(product);
    // this.presentAlertConfirm()
    this.productList.splice(index ,1)
    this.db.collection('product_seller').doc(product.doc_id).delete().then(res=>{
      console.log("product deleted");
    })
    


    this.db.collection('productList_seller').doc(this.storeId).get().subscribe(res=>{
      console.log(res.data());
      let productIndex = res.data().productList.indexOf(product.product_id)
      console.log(productIndex);
      let a = res.data().productList
      a.splice(productIndex, 1)
      console.log(a);
      
      
       this.db.collection('productList_seller').doc(this.storeId).set({productList: a})
      
    })
    
  }

  async deleteProductAlert(product, index) {
    const alert = await this.alertController.create({
      header: 'Confirm!',
      message: 'delete product?',
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
            this.deleteProduct(product,index)
          }
        }
      ]
    });

    await alert.present();
  }

  async presentModalAdd() {
    const modal = await this.modalController.create({
      component: AddproductPage
    });
    return await modal.present();
  }


  
  search(ev:any){
 //console.log(this.searchResult.length);
    //this.segCtrl = false
    console.log(ev.detail);
    //this.viewCtrl = 'search'
    
      this.db.firestore.collection('product_seller').where('storeID','==',this.storeId).where("search",'array-contains',ev.detail.value.toLowerCase()).get().then(res=>{
      console.log(res);
      this.searchList = []
      // this.searchResult = res;
      // console.log(this.searchResult);
      this.ngZone.run(()=>{
       
        
      res.forEach(doc=>{
        let a:any = {}
        a = doc.data()
        a.doc_id = doc.id
        this.searchList.push(a)
      })
    })
  })

  }


  test(){
    console.log("ion focus chae");
    this.segCtrl = false
  }

  ionBlur(){
    console.log("blur");
    this.segCtrl = true
    this.searchbar  = !(this.searchbar)
  }
  ionClear(){
    //this.segCtrl = true

  }

  searchBar(){
    console.log(this.searchbar);
    
    this.searchbar  = !(this.searchbar)

  }


  async presentModalProductEdit(id) {
    const modal = await this.modalController.create({
      component: EditproductPage,
      componentProps : {id : id, cat:this.categoryList}
    });
    return await modal.present();
 
  
  }


  loadMoreProduct(ev:any){
    this.db.firestore.collection('product_seller').where('storeID','==',this.storeId).where('category', '==' ,this.selectedCatalogue).orderBy('product_id','asc').limit(15).startAfter(this.productList[this.productList.length - 1 ].product_id).get().then(doc=>{

      let a  = []
      let product : any = {}

      doc.docChanges().forEach(change=>{
        product = change.doc.data()
        product.doc_id = change.doc.id
        a.push(product)
      })
      this.ngZone.run(()=>{
        this.productList = [...this.productList, ...a]
      })
      ev.target.complete();
    })

    
  }



  snap(ev:any){

    // this.db.firestore.collection('product_seller').where('storeID','==',this.storeId).where('category', '==' ,this.selectedCatalogue).orderBy('product_id','asc').limit(15).startAfter(this.productList[this.productList.length - 1 ].product_id).onSnapshot(doc=>{

    this.db.firestore.collection('product_seller').where('storeID','==',this.storeId).onSnapshot(doc=>{
      let a  = []
      let product : any = {}

      doc.docChanges().forEach(change=>{
        console.log(change.type);
        console.log(change.doc.data());

        if(change.type === 'added'){
          product = change.doc.data()
          product.doc_id = change.doc.id
          a.push(product)
        }

        if(change.type === 'modified' ){
          console.log('document modified');
          product = change.doc.data()
          product.doc_id = change.doc.id
          let index = this.productList.findIndex(x => x.doc_id === change.doc.id);
          console.log(index);
          this.productList.splice(index,1)
          this.productList.splice(index, 0 , product)
        }
      })
      this.ngZone.run(()=>{
        this.productList = [...this.productList, ...a]
      })
      // ev.target.complete();
    })

  }


  async presentCatModal() {
    const modal = await this.modalController.create({
      component: CategoryPage,
      componentProps:{
        storeId: this.storeId
      }
    });
    return await modal.present();
  }


}
