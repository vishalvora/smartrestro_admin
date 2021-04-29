import { Component, OnInit, NgZone } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AngularFirestore } from '@angular/fire/firestore';
import { InvoicePage } from '../invoice/invoice.page';
import { ModalController, AlertController } from '@ionic/angular';
import { DatabaseService } from 'src/app/services/database.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.page.html',
  styleUrls: ['./order.page.scss'],
})
export class OrderPage implements OnInit {
  params: any;
  order: any ={};
  day
  month
  min
  hour
  monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];

status:any
storeId
  storeId_: string;
  store: any = {};
  constructor(    private route: ActivatedRoute,  private db:AngularFirestore, private dbService : DatabaseService,
    private ngZone : NgZone, private modalController : ModalController, private alertController : AlertController
    ) { 

    this.route.params.subscribe(params => {
      console.log(params);
      this.params = params
      console.log(this.params)

      this.db.firestore.collection('orders').doc(this.params.orderDocId).onSnapshot(res=>{
        console.log(res.data());
        this.order = res.data()
        this.order.id = res.id
        this.storeId = this.order.cartData.store.store_id
        let time =  new Date (this.order.time)
        this.day = time.getDate()
        console.log(this.day);
        this.month = this.monthNames[time.getMonth()]
        this.min = time.getMinutes()
        this.hour = time.getHours()
        if(this.order.orderStatus === 'ordered'){
        this.order.cart.forEach(cartItem=>{
          cartItem.acceptedQty = cartItem.qty
        })

        // if(this.order.adjusted_amount){
        // this.order.cartData.grandTotal =this.order.cartData.grandTotal + this.order.adjusted_amount
        // }
      }
        
        
      })


      
  })
}

  ngOnInit() {

    this.dbService.storeId.subscribe(res=>{
      this.storeId_ = res
        this.db.collection('store_seller').doc(this.storeId_).get().subscribe(res=>{
          this.store =  res.data().d
          console.log(this.store);
          
        })

    })
  }


  
acceptOrder(order){
  console.log(order)
  order.cart.forEach((item:any)=>{
    console.log(item.status);
    if(!item.status){
      // item.status = 'accepted'
    }
    if(item.status === 'accepted'){
      // reduce qty from inventory
      // item.product_id
      console.log(this.storeId);
      console.log(item.product_id)
      // get product from DB
      this.db.firestore.collection('product_seller').where('storeID', '==',this.storeId).where('product_id','==',item.product_id).get().then(res=>{
        console.log(res);
        res.forEach(doc=>{
          console.log(doc.data());
          let product = doc.data()
          // console.log(item)
          // console.log(parseInt(item.variants[item.cartVariant].inventory))
          // console.log(parseInt(item.qty))
          // console.log(parseInt(item.variants[item.cartVariant].inventory) - parseInt(item.qty)          )
          // deduct invebtory
          let inventory 
          // if no inventory is defined then make it zero
          if(product.variants[parseInt(item.cartVariant)].inventory == undefined){
            product.variants[item.cartVariant].inventory = 0
          }
          else{
          }

          // inventory  = current item inventory - ordered qty
          // check if product id loose or not
          if(!product.looseItem){ // item is not loose
            console.log("normal item");
            // update variant inventory
            // new invetory = product inventory - ordered qty
            product.variants[item.cartVariant].inventory = parseInt(product.variants[item.cartVariant].inventory) - parseInt(item.acceptedQty)
            console.log(item);
            
              this.db.collection('product_seller').doc(doc.id).set({variants : product.variants},{merge:true}).then(res=>{
                console.log(res);
              })
          }
          else if (product.looseItem){ // item is loose
            console.log("loose item");
            let inventory
            inventory = parseFloat(product.lInventory) - (parseInt(item.acceptedQty) * parseFloat(product.variants[item.cartVariant].lifactor))
            // console.log(item);
            // console.log(parseInt(item.lInventory));
            // console.log(parseInt(item.qty));
            // console.log(parseFloat(item.variants[item.cartVariant].lifactor));
            
            
            
            console.log(inventory);
            
            
            this.db.collection('product_seller').doc(doc.id).set({lInventory: inventory},{merge:true}).then(res=>{
              console.log(res);
            })

          }
        })
      })
    }
    
  })

  this.db.collection('orders').doc(order.id).set({orderStatus : "Accepted", cart: order.cart},{merge:true}).then((res:any)=>{
    console.log(res);
    
    
    
  })
}

  rejectOrder(order){
    console.log(order);


    this.db.collection('orders').doc(order.id).update({orderStatus : "Rejected",rejectReason:order.rejectReason}).then(res=>{
      console.log(res);
      
    })
  
  }
  
  ourForDeliveryOrder(order){
    this.db.collection('orders').doc(order.id).set({orderStatus : "Out For Delivery"},{merge:true}).then(res=>{
      console.log(res);
      
    })
  }
  
  deliveredOrder(order){
    this.db.collection('orders').doc(order.id).set({orderStatus : "Delivered"},{merge:true}).then(res=>{
      console.log(res);
      
    })
  }
  

  paid(order){
    // mark order as paid
  
    console.log("paid")
    this.db.collection('orders').doc(order.id).set({paymentStatus : 'paid'},{merge : true}).then(res=>{
      console.log(res)
    })
  }


  async presentAlertConfirm(order) {
    const alert = await this.alertController.create({
      header: 'Confirm!',
      message: 'Did you receive payment for this order? order will be mark as paid',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            console.log('Confirm Cancel: blah');
          }
        }, {
          text: 'mark as paid',
          handler: () => {
            console.log('Confirm Okay');
            this.paid(order)
          }
        }
      ]
    });
  
    await alert.present();
  }
  

  acceptItem(cart, orderIndex, cartIndex){
    this.ngZone.run(()=>{
      cart[cartIndex].status =  "accepted"
      this.order.cart = cart
    console.log(cart);
    //console.log(index);
  })
    
  }


  rejectItem(cart, orderIndex, cartIndex){
    cart[cartIndex].status = "rejected"
    this.ngZone.run(()=>{
    this.order.cart = cart
    console.log(this.order);
    
    // this.db.collection('orders').doc(this.orders[orderIndex].id).set({cart : this.orders[orderIndex].cart, expand : true},{merge : true}).then(res=>{
    //   //console.log();
      
    // })
    
  })
    console.log(cart);
    console.log(orderIndex);
    console.log(cartIndex);
    
    
    console.log(this.order);
    
    
  }
  


  createInvoice(order){
    console.log(order)
     // this.router.navigate(['invoice', order])
     this.presentModal(order)
    }
    
    
    async presentModal(order) {
      const modal = await this.modalController.create({
        component: InvoicePage,
        componentProps:{orderId : order.id}
      });
      return await modal.present();
    }


    changeQty(count,index){
      
      this.order.cart[index].acceptedQty = parseInt(this.order.cart[index].acceptedQty) + parseInt(count)
      console.log(this.order);
      
    }

    saveNote(order){
      console.log(this.order.note)
      this.db.collection('orders').doc(order.id).update({note: order.note}).then(res=>{
        console.log('order note saved');
      })
    }


    async rejectOrderConfirm(order) {
      const alert = await this.alertController.create({
        cssClass: 'my-custom-class',
        header: 'Add reason for order rejection',
        inputs: [
          
          // multiline input.
          {
            name: 'reason',
            id: 'paragraph',
            type: 'textarea',
            placeholder: 'add reason for rejection'
          },
         
        
        ],
        buttons: [
          {
            text: 'Cancel',
            role: 'cancel',
            cssClass: 'secondary',
            handler: () => {
              console.log('Confirm Cancel');
            }
          }, {
            text: 'Ok',
            handler: (data) => {
              console.log('Confirm Ok');
              console.log(data.reason);
              if(data.reason === ''){
                alert.message = 'Add valid reason for rejection';
                return false;
              }
              else{
                console.log('reason collected!!');
                order.rejectReason = data.reason
                this.rejectOrder(order)
              }
              
            }
          }
        ]
      });
  
      await alert.present();
    }


    shareOrder(){
      let msg = ''
      console.log(this.order)
      msg = msg + 'order no: ' + this.order.orderNo
      msg = msg + '%0A%0A' + 'customer name: ' + this.order.customerName
      msg = msg +'%0A%0A' + 'address: ' + this.order.address.houseNo + " - " + this.order.address.landmark 
      msg = msg +'%0A%0A' + 'mobile: ' + this.order.customerPhone
      msg = msg + '%0A ```'
      this.order.cart.forEach(line=>{
        msg = msg + '%0A' + line.name + ' ' + line.variants[line.cartVariant].title + ' (' + line.acceptedQty + ' nos)' + ' - ₹' +line.price
        msg = msg + '%0A' + '---------------------'
      })


      msg = msg + '%0A%0A' +'total: ' + this.order.cartData.grandTotal

      if (this.order.note != undefined){
      msg = msg + '%0A%0A' +'note: ' + this.order.note
      }
      else {
        msg = msg + '%0A%0A' +'note: ' + ''
      }
      msg = msg + '```'
      console.log(msg)
      location.href ="https://wa.me/?text="  + msg

    }
}
