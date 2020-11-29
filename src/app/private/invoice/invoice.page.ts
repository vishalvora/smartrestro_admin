import { Component, OnInit, NgZone } from '@angular/core';
import { Route, ActivatedRoute } from '@angular/router';
import { AngularFirestore } from '@angular/fire/firestore';
import { NavParams, ModalController, ToastController } from '@ionic/angular';
import * as firebase from 'firebase';
import { concat } from 'rxjs';

@Component({
  selector: 'app-invoice',
  templateUrl: './invoice.page.html',
  styleUrls: ['./invoice.page.scss'],
})
export class InvoicePage implements OnInit {

  order: any = {}
  storeName: any;
  subtotal: number;
  logo_url: any;
  orderId: any;
  fssaiNo: any;
  gstNo: any;
  isGST: boolean= false;
  isFSSAI: boolean = false;
  grandTotal: any;
  invoice : any = {}
  invoiceApproved = false

  constructor(private route : ActivatedRoute, 
    private modalCtrl : ModalController,
    private ngZone: NgZone, private db:AngularFirestore, private navParams: NavParams, private toastController : ToastController) {
   
      console.log(navParams.get('orderId'))
      this.orderId  = navParams.get('orderId')
      
        this.db.collection('orders').doc(this.orderId).get().subscribe((res:any)=>{
          
          if(Object.keys(res).length){
          console.log(res.data());
          if(res.data().invoiceApproved){
            this.invoice = res.data().invoice
            this.invoiceApproved = true
          }else{
            this.createInvoice(res.data())
            this.invoiceApproved = false
          }
          }
          //console.log(this.order);
          
          })
   }

  ngOnInit() {
  }


getImage(){
  console.log(this.order.store);
  
  this.db.collection('store_seller').doc(this.order.store.storeID).get().subscribe(res=>{
    console.log(res.data().d.logo_url);
    this.ngZone.run(()=>{
      this.logo_url = res.data().d.logo_url
      this.invoice.logo_url = res.data().d.logo_url
      if(res.data().d.is_gst){
      this.gstNo = res.data().d.gst_no
      this.isGST = res.data().d.is_gst
      this.invoice.gstNo = res.data().d.gst_no
      this.invoice.isGST = res.data().d.is_gst
      }
      if(res.data().d.is_fssai){
      this.fssaiNo = res.data().d.fssai_no
      this.isFSSAI = res.data().d.is_fssai
      this.invoice.fssaiNo = res.data().d.fssai_no
      this.invoice.isFSSAI = res.data().d.is_fssai
      }
    })
  })
}

dismiss() {
  // using the injected ModalController this page
  // can "dismiss" itself and optionally pass back data
  this.modalCtrl.dismiss({
    'dismissed': true
  });
}


createInvoice(order){
  this.order = order
  this.getImage()
        if( this.order.hasOwnProperty('cartData')){
          this.invoice.storeName =  this.order.cartData.store.name
        }
        else if (this.order.hasOwnProperty('store.storeName')){
          console.log('not having property!!')
          this.invoice.storeName = this.order.store.storeName
        }
        else {
          this.invoice.storeName = ''
        }
        // this.invoice.storeName = this.order.store.storeName
        this.invoice.address = this.order.address
        this.invoice.invoiceNo = this.order.orderNo
        this.invoice.deliveryCharge = this.order.deliveryCharge
        if(this.order.cartData != undefined){
        this.invoice.discount = this.order.cartData.discount
        }
        this.invoice.customerName = this.order.customerName
        this.invoice.CustomerPhone = this.order.customerPhone
        this.order.time_formated  = new Date(this.order.time).toLocaleDateString()
        this.invoice.time_formated  = new Date(this.order.time).toLocaleDateString()

        this.subtotal = 0
        this.invoice.subtotal = 0
        this.invoice.cart = []
        this.order.cart.forEach(item=>{
          if(item.status == "accepted"){
            if("acceptedQty" in item){
          item.item_total = item.acceptedQty * item.price
            }else{
              item.item_total = item.qty * item.price
            }
          this.invoice.cart.push(item)
          this.subtotal = this.subtotal + item.item_total
          this.invoice.subtotal = this.invoice.subtotal + item.item_total
          }
          
        })

        if(parseInt(this.order.deliveryCharge) > 0){
        this.grandTotal =  this.subtotal + this.order.deliveryCharge
        this.invoice.grandTotal = this.invoice.subtotal + this.invoice.deliveryCharge
        }else{
          this.invoice.grandTotal = this.invoice.subtotal
        }

        if(this.order.cartData){
          this.invoice.grandTotal = this.invoice.subtotal + this.order.cartData.deliveryCharge - this.order.cartData.discount
        }


}


approveInvoice(){
  console.log("invoice approved")
  console.log(this.invoice)
  if(this.invoice.logo_url == undefined){
    this.invoice.logo_url = ''
  }
  this.db.collection('orders').doc(this.orderId).set({invoiceApproved: true, invoice:this.invoice}, {merge : true}).then(res=>{
    this.presentToast('invoice approved!!')
    this.invoiceApproved = true
  })

  // let d = new Date(this.invoice.time_formated)
  // let increment = firebase.firestore.FieldValue.increment(this.invoice.grandTotal);
  // this.db.collection('private_data_store').doc(this.order.store.storeID).update({["sales."+d.getFullYear() + ".month_"  + (d.getMonth()+1)] : increment} )

}


async presentToast(msg) {
  const toast = await this.toastController.create({
    message: msg,
    duration: 2000
  });
  toast.present();
}
}
