import { Component, OnInit, NgZone } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { DatabaseService } from 'src/app/services/database.service';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-orderaddproduct',
  templateUrl: './orderaddproduct.page.html',
  styleUrls: ['./orderaddproduct.page.scss'],
})
export class OrderaddproductPage implements OnInit {
  categoryList: any;
  storeId: any;
  selectedCatalogue: any;
  productList: any[];
  currentCart=[]

  constructor(private modalCtrl: ModalController, private dbService: DatabaseService, private db:AngularFirestore, private ngZone:NgZone) { }

  ngOnInit() {

    this.dbService.getStore().subscribe((res:any)=>{
      console.log(res);

      if(Object.keys(res).length > 0)      
      {
        console.log("running due to not null");
        this.storeId = res.store_id
        if(res.category){
          console.log('there is category');
          this.categoryList = res.category
          console.log(this.categoryList);
          console.log(this.storeId);
          this.selectedCatalogue = this.categoryList[0]
          }

        if(this.categoryList.length>0){
          this.segmentChanged('ev')
          }
        }
      })
    }

  
  segmentChanged(event){
    this.db.firestore.collection('product_seller').where('storeID','==',this.storeId).where('category','==',this.selectedCatalogue).orderBy('product_id','asc').limit(15).onSnapshot(res=>{
      let a:any = {}
      this.productList = []
      this.ngZone.run(()=>{
        res.forEach(doc=>{
          console.log(doc.id);
          a = doc.data();
          a.doc_id = doc.id
          this.productList.push(a)
          })
        })
      })
    }



  dismiss() {
    this.modalCtrl.dismiss({
      'dismissed': true
    });
  }

  addProduct(product){
    console.log(product);
    product.qty = 1
    this.modalCtrl.dismiss({
      'dismissed': true,
      product:product
    });
  }
}
