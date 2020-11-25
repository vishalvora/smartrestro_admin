import { Component, OnInit, Input, NgZone } from '@angular/core';
import { ModalController, NavParams, ToastController } from '@ionic/angular';
import { AngularFirestore} from '@angular/fire/firestore'
import { DatabaseService } from 'src/app/services/database.service';


@Component({
  selector: 'app-import',
  templateUrl: './import.page.html',
  styleUrls: ['./import.page.scss'],
})
export class ImportPage implements OnInit {
  masterProductList = []
  storeId
  categoryList  = []

  // @Input() productIds : any;
  productIds: any = []
  store:any= {};
  //defaultCategory: any;
  selectCategory: any
  searchList: any[];
  segCtrl: boolean = true;
  searchbar: boolean= false;


  constructor(private modalCtrl : ModalController, private db: AngularFirestore, private navParams : NavParams,
    private dbService : DatabaseService, private ngZone : NgZone, private toastController: ToastController) { 
    // console.log(navParams.get('productIds'));
  }

  ngOnInit() {

    // new code R01
      // get store data
      this.dbService.getStore().subscribe((store:any)=>{
        console.log(store);
        this.store = store
        if(this.store.category == undefined){
          this.store.category = []
        }
        // validate store data
        if(Object.keys(store).length > 0){
          this.categoryList = ['Vegetables', 'Fruits', 'Dals','Atta & Flours','Oil & Ghee','Sugar','Rice & Grains','Salt-spices & masala','Nuts & Dry Fruits','Biscuits','Snacks','Tea & Coffee','Baverages','Health Drinks','Breakfast Foods','Sauces & Spreads','Ready Meals & Mixes','Noodles & Pasta','Sweets & Chocolates','Kitchen Cleaning','Household Cleaners','Other Home Needs','Personal Care','Grocery','Other Home Needs']
          this.selectCategory = this.categoryList[0]
          this.getProducts(this.selectCategory);
        }
      })
  

    // -----------------
    //this.getProduct()

    this.dbService.getStoreId().subscribe(id=>{
      this.storeId = id
    })

    this.dbService.getStore().subscribe(store=>{
      console.log(store);
      this.store = store
      
    })


    this.db.firestore.collection('productList_seller').doc(this.storeId).onSnapshot((res:any)=>{
      
      console.log(res.data());
      
      this.productIds = []
      if(Object.keys(res.data()).length > 0 ){
      this.productIds = res.data().productList
      console.log(this.productIds);
      }
    })
  }

  // new code R01
    // get top product for store id and category
    getProducts( category){
      //this.selectCategory = category
      this.db.firestore.collection('products_').where('category',"==",category).orderBy('product_id','asc').limit(8).get().then(res=>{
        this.masterProductList = []
        console.log(res);
        res.forEach(doc=>{
          console.log(doc.data());
          this.masterProductList.push(doc.data())
          
        })
        
      })
    }

    async presentToast(msg) {
      const toast = await this.toastController.create({
        message: msg,
        duration: 2000
      });
      toast.present();
    }

    loadMoreProduct(ev:any){
      this.db.firestore.collection('products_').where('category', '==' ,this.selectCategory).orderBy('product_id','asc').limit(15).startAfter(this.masterProductList[this.masterProductList.length - 1 ].product_id).get().then(doc=>{
        console.log(doc);
        let a  = []
        doc.forEach(doc=>{
          this.ngZone.run(()=>{
          //this.masterProductList.push(doc.data())
          a.push(doc.data())
          //this.masterProductList = [...this.masterProductList, ...doc.data()]
        })
        })
        console.log(a);
        
         this.masterProductList = [...this.masterProductList, ...a]
        console.log(this.masterProductList);
        
        ev.target.complete();
      })

      
    }

  dismiss() {
    // using the injected ModalController this page
    // can "dismiss" itself and optionally pass back data
    this.modalCtrl.dismiss({
      'dismissed': true
    });
  }


  getProduct(){
    console.log("getting product");
    
    this.db.collection("products_").valueChanges().subscribe(res=>{
      console.log(res);
     console.log(this.productIds);
     
      
      this.masterProductList = res
      
    })
  }


  productSelect(product){
    console.log(product);
    product.import_id = product.product_id
    product.product_id = Date.now()
    product.storeID = this.storeId
    this.productIds.push(product.import_id)
    console.log(product);
    //this.productList.push(product)
    this.db.collection('product_seller').add(product).then(res=>{
      this.presentToast("product imported succesully!")
    })
    // check category and add is not exist
    console.log(this.store);
    
    if(!this.store.category.includes(product.category) ){
      this.store.category.push(product.category)
      console.log(this.store);
      this.db.collection('store_seller').doc(this.store.store_id).set({d: this.store},{merge:true}).then(res=>{
        console.log(res);
        
      })
    }
      // add product id to product id array in store_product_list_seller
      this.db.collection('productList_seller').doc(this.store.store_id).set( {productList : this.productIds},{merge:true}).then(res=>{
        console.log("product added to list");
        
      })
      
    
    
  }



  search(ev:any){
    //console.log(this.searchResult.length);
       //this.segCtrl = false
       console.log(ev.detail);
       //this.viewCtrl = 'search'
       
         this.db.firestore.collection('products_').where("search",'array-contains',ev.detail.value.toLowerCase()).get().then(res=>{
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
           console.log(this.searchList);
           
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
}
