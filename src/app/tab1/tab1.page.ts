import { Component, NgZone} from '@angular/core';
import { DatabaseService } from '../services/database.service';
import { AngularFirestore } from '@angular/fire/firestore';
import { concat, groupBy } from 'rxjs/operators';
import { FcmService } from '../services/fcm.service';
import { isNgTemplate } from '@angular/compiler';
import { Router } from '@angular/router';
import { ModalController, AlertController, PopoverController, ActionSheetController } from '@ionic/angular';
import { InvoicePage } from '../private/invoice/invoice.page';
import { merge } from 'rxjs';
import { DeliverylistPage } from '../private/deliverylist/deliverylist.page';




@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  storeData :any = {}
  orders: any[];
  viewCtrl: 'orders'
  storeId: any
  status:any
  orderStatus = []
  slideOpts = {
    slidesPerView: 2.8,
    spaceBetween: 15,
    initialSlide: 0,
    //speed: 400
    //centeredSlides: true,
    dynamicBullets: true,
    freeMode: true,
    // pagination: {
    //   el: '.swiper-pagination',
    //   clickable: true,
    // }
  };

  orderAgg: any = {}
  ordersFilter: any[];
  currentDate: number;
  monthSales= 0;
  finalArray = []
  selectedFilter = ''
  snap: () => void;
  
  rating = {
  ratingTotal: "-",
  rating:"-"}

  // bar chart
  currentSelection = 0
  sales = []
  orderCount = []


  barChartData:any[] = [
    {data: [],  
      
      // barThickness: 1,
       minBarLength: 2
      
      },
  ];

  mbarChartLabels:number[] = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30];

  barChartOptions:any = {
    scaleShowVerticalLines: false,
    responsive: true,
    legend: {
      display: false
    },
    scales:{

      xAxes:[{
        ticks:{
         autoSkipPadding:30,
         maxRotation:0,
         fontColor:'#DCDCDC',
        fontSize:10
        },
        gridLines: {
                        color: '#A9A9A9',
                        lineWidth:0.3
                    },
      }],
      yAxes:[{
        ticks:{
          min:0,
          autoSkipPadding:30,
          fontColor:'#DCDCDC',
          fontSize:10
  
        },
        gridLines: {
                        color: '#A9A9A9',
                        lineWidth:0.2
                    },
      }]
    }
  };

  barChartColors:Array<any> = [
    {
      backgroundColor: '#ffffff',
      borderColor: 'rgba(105,159,177,1)',
      pointBackgroundColor: 'rgba(105,159,177,1)',
      pointBorderColor: '#fafafa',
      pointHoverBackgroundColor: '#fafafa',
      pointHoverBorderColor: 'rgba(105,159,177)'
    }
  ];
  store: any;
  activeOrdersCount: any = 0;


  constructor(private dbService: DatabaseService, 
    private db : AngularFirestore, 
    private router : Router,
    private ngZone : NgZone, private fcmService : FcmService,
    private modalController : ModalController, private alertController : AlertController,
    private actionSheetController : ActionSheetController)
   {
    this.dbService.getStore().subscribe((store:any)=>{
      if(Object.keys(store).length>0){
        this.ngZone.run(()=>{
      this.store = store

      this.db.collection('monthly_order_seller').doc(store.store_id).valueChanges().subscribe((res:any)=>{
        console.log(res);
        
        let date = new Date()
        let tday = date.getDate()
        console.log(tday);
        console.log(date.toLocaleDateString());
        
        let monthSales = []
        monthSales = res.sales
        monthSales[tday-1] = res.today.sales
        this.barChartData[0].data = monthSales 
        this.sales[0] = res.today.sales
        this.sales[1] = res.sales[tday-2]
        this.sales[2] = res.this_week + this.sales[0]
        this.sales[3] = res.sales.reduce((a, b) => a + b, 0)
        this.orderCount[0]=res.today.orders
        this.orderCount[1] = res.order[tday-2]
        this.orderCount[2] = res.this_order
        this.orderCount[3] = res.order.reduce((a, b) => a + b, 0) + res.today.orders
        console.log(this.sales);
        console.log(this.orderCount);
        
        
        
      })
 
    })
      console.log(this.store);
      }
    })

  }
  

  goToLink(url: string){
    window.open(url, "_self");
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
  
  test(){
    this.dbService.addStore({})
  }
  ngOnInit(){
    

    this.fcmService.fcmToken.subscribe(res=>{

      console.log(res);
      this.dbService.setFcmToken('fcm_token_browser', res)
    })


    this.fcmService.fcmTokenAndroid.subscribe(res=>{
      this.dbService.setFcmToken('fcm_token_android', res)
    })

    this.dbService.getStoreId().subscribe(res=>{
      console.log(res);
      this.storeId = res
      this.getOrderCont()
      if(res != 'null'){
        console.log(res);
        
        this.currentDate = Date.now() - 86400000 *10
        this.currentDate = Date.now() - 86400000 *10
        console.log(this.currentDate);
        this.activeOrders()
        
      }
    })

    // this.dbService.getStore().subscribe((res:any)=>{
    //   console.log(res);
    //   if(Object.keys(res.rating).length>0){
    //     this.ngZone.run(()=>{
    //       this.rating = res.rating
    //     })

    //   }
      
    // })

    this.dbService.rating.subscribe((res:any)=>{
      console.log(res);
      if(Object.keys(res).length>0){
        this.ngZone.run(()=>{
          this.rating = res
        })

      }
  })

  }


  activeOrders(){
    this.snap =  this.db.firestore.collection('orders').where('time','>', this.currentDate ).where('store.storeID','==',this.storeId).where('orderStatus','in',['ordered','Accepted','Out For Delivery']).orderBy('time','desc').onSnapshot(res=>
      {
        console.log("active");
        console.log(res);
        this.ngZone.run(()=>{
          this.activeOrdersCount = res.size
        })
      this.setDiaplayOrders(res)
      this.newFn(res)
      
    })

  }

  orderedOrders(){
    this.snap = this.db.firestore.collection('orders').where('time','>', this.currentDate ).where('store.storeID','==',this.storeId).where('orderStatus','in',['ordered']).orderBy('time','desc').onSnapshot(res=>
      {
        console.log("order");


      this.setDiaplayOrders(res)
    })
  }

  acceptedOrders(){
    this.snap =  this.db.firestore.collection('orders').where('time','>', this.currentDate ).where('store.storeID','==',this.storeId).where('orderStatus','in',['Accepted']).orderBy('time','desc').onSnapshot(res=>
      {
        console.log("accept");

      this.setDiaplayOrders(res)
    })

  }

  ofdOrders(){
    this.snap = this.db.firestore.collection('orders').where('time','>', this.currentDate ).where('store.storeID','==',this.storeId).where('orderStatus','in',['Out For Delivery']).orderBy('time','desc').onSnapshot(res=>
      {
        console.log("ofd");

          this.setDiaplayOrders(res)
    })
  

  }

  setDiaplayOrders(res){
    let a:any = {}
    this.orders = []
      res.forEach(doc=>{
      // console.log(doc.id);
      a = doc.data();
      // console.log(a.time);
      a.time_formated  = new Date(a.time).toLocaleDateString()
      // a.expand = false
      a.id = doc.id
      this.orders.push(a)
    })
this.ngZone.run(()=>{
this.orderStatus = ["all", ...new Set(this.orders.map(it=>it.orderStatus))]
    // this.orderStatus = ["all", ...this.orderStatus]
    
    this.ordersFilter = this.orders
    console.log(this.ordersFilter);
    
  })

  }

  getOrderCont(){
  console.log("getiing order count!!");
//   this.db.firestore.collection('private_data_store').doc(this.storeId).onSnapshot(res=>{
//     console.log(res);
//      console.log(res.data());
//      if(Object.keys(res).length>0){
//      this.ngZone.run(()=>{
       
//     this.orderAgg = res.data()
//   }) 
//   let d  = new Date(Date.now())
//   let a = ''+d.getFullYear()
//   // if(this.orderAgg.sales != undefined){
//   // let b = this.orderAgg.sales[a]
//   // console.log(b);
//   //   if(b != undefined){
//   //     console.log(b['month_' + (d.getMonth() + 1)]);
//   //     this.monthSales = b['month_' + (d.getMonth() + 1)]
//   //   }
//   // }
// }
//   })

  }


expand(i){
  console.log(i)
  if(!this.orders[i].expand){
  this.orders[i].expand = true
  // this.db.collection('orders').doc( this.orders[i].id).set({expand: true},{merge: true})
  }else if(this.orders[i].expand){
    this.orders[i].expand = false
    // this.db.collection('orders').doc( this.orders[i].id).set({expand: false},{merge: true})
  }
}


acceptOrder(order){
  // order.cart.forEach(item=>{
  //   if(!item.status){
  //     order.status = "accepted"
  //   }
  // })
  console.log(order)
  order.cart.forEach((item:any)=>{
    console.log(item);
    if(!item.status){
      item.status = 'accepted'
    }
    if(item.status === 'accepted'){
      // reduce qty from inventory
      // item.product_id
      console.log(this.storeId);
      console.log(item.product_id)
      this.db.firestore.collection('product_seller').where('storeID', '==',this.storeId).where('product_id','==',item.product_id).get().then(res=>{
        console.log(res);
        res.forEach(doc=>{
          console.log(doc.data());
          console.log(item)
          console.log(parseInt(item.variants[item.cartVariant].inventory))
          console.log(parseInt(item.qty))
          console.log(parseInt(item.variants[item.cartVariant].inventory) - parseInt(item.qty)          )

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
  this.db.collection('orders').doc(order.id).set({orderStatus : "Rejected"},{merge:true}).then(res=>{
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

acceptItem(cart, orderIndex, cartIndex){
  this.ngZone.run(()=>{
    cart[cartIndex].status =  "accepted"
    this.orders[orderIndex].cart = cart
  console.log(cart);
  //console.log(index);
})
  
}

rejectItem(cart, orderIndex, cartIndex){
  cart[cartIndex].status = "rejected"
  this.ngZone.run(()=>{
  this.orders[orderIndex].cart = cart
  console.log(this.orders[orderIndex]);
  
  // this.db.collection('orders').doc(this.orders[orderIndex].id).set({cart : this.orders[orderIndex].cart, expand : true},{merge : true}).then(res=>{
  //   //console.log();
    
  // })
  
})
  console.log(cart);
  console.log(orderIndex);
  console.log(cartIndex);
  
  
  console.log(this.orders);
  
  
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
    message: 'Did you receive payment for this order outside of snvmart? order will be mark as paid',
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



openOrder(order){
  this.router.navigate(['order', {orderDocId : order.id}])
}


optionsPop(){
  console.log("options clicked");
  
  
}

filterOrder(event){
console.log(event.detail.value);
// if(event.detail.value !='all'){
// this.ordersFilter = this.orders.filter(it=>it.orderStatus.includes(event.detail.value))
// console.log(this.ordersFilter);
// }else {
//   this.ordersFilter = this.orders
//   console.log(this.ordersFilter);
  
// }
this.snap()
if(event.detail.value === 'all'){
  this.selectedFilter = 'all'
  this.allOrders()

}
else if(event.detail.value === 'active'){
  this.selectedFilter = 'active'
  this.activeOrders()
}
else if(event.detail.value === 'pending'){
  this.selectedFilter = 'pending'
  this.paymentPendingOrder()
}

else if(event.detail.value === 'ordered'){
  this.selectedFilter = 'ordered'
  this.orderedOrders()
}
else if(event.detail.value === 'accepted'){
  this.selectedFilter = 'accepted'
  this.acceptedOrders()
}
else if(event.detail.value === 'ofd'){
  this.selectedFilter = 'ofd'
  this.ofdOrders()
}


}


async presentActionSheet(order) {

  console.log(order);
  
  let btn  = [{
    text: '+91 ' + order.customerPhone,
    icon: 'call',
    handler: () => {
      window.open('tel:'+ order.customerPhone);
      console.log('call clicked');
    }
  }, {
    text: 'Send whatsapp message',
    icon: 'logo-whatsapp',
    handler: () => {
      window.open('https://wa.me/91'+order.customerPhone+'?text=hello')
      console.log('msg clicked');
    }
  },
 
   {
    text: 'Cancel',
    icon: 'close',
    role: 'cancel',
    handler: () => {
      console.log('Cancel clicked');
    }
  }]
if(order.paymentStatus != "paid"){
  btn.push( {
    text: 'Mark as paid',
    icon: 'wallet-outline',
    handler: () => {
      console.log('mark as paid clicked');
      this.presentAlertConfirm(order)
    }
  })
}

  const actionSheet = await this.actionSheetController.create({
    header: order.customerName +' #'+ order.orderNo,
    buttons: btn
  });

 
  await actionSheet.present();
}


allOrders(){
  console.log("all orders");
 this.snap =  this.db.firestore.collection('orders').where('time','>', this.currentDate ).where('store.storeID','==',this.storeId).orderBy('time','desc').onSnapshot(res=>{
    console.log(res);
    this.setDiaplayOrders(res)
  })
  }


paymentPendingOrder(){
  console.log("payment panding");
  this.snap = this.db.firestore.collection('orders').where('time','>', this.currentDate ).where('store.storeID','==',this.storeId).where('orderStatus','==','Delivered').where('paymentStatus','==','pending').orderBy('time','desc').onSnapshot(res=>{
    console.log(res);
    this.setDiaplayOrders(res)
  })

  
}

newFn(res){
  this.finalArray = []
  // console.log(res);
  let orders = []
  res.forEach(doc=>{
    orders.push(doc.data())
  })
  // console.log(orders);
  const groupBy = (array, key) => {
    // Return the end result
    return array.reduce((result, currentValue) => {
      // If an array already present for key, push it to the array. Else create an array and push the object
      (result[currentValue[key]] = result[currentValue[key]] || []).push(
        currentValue
      );
      // Return the current iteration `result` value, this will be taken as next iteration `result` value and accumulate
      return result;
    }, {}); // empty object is the initial value for result object
  };
  
  // Group by color as key to the person array
  let orderGrpByStatus = groupBy(orders, 'orderStatus');
  // console.log(orderGrpByStatus);
  let orderedOrders = orderGrpByStatus.ordered.reduce((acc, it) => [...acc, ...it.cart], []);
  // console.log(orderedOrders);
  let grpByPid = groupBy(orderedOrders, 'product_id')
  // console.log(grpByPid);

  let fiArray = []
  for(var id in grpByPid){
    // console.log(grpByPid[id]);
    let gbyvariant = groupBy(grpByPid[id], 'selectedVariant')
    // console.log(gbyvariant);

    for(var variant in gbyvariant){
      
      // console.log(gbyvariant[variant][0]);
      
      let qty = gbyvariant[variant].reduce((i, j) => i + j.qty, 0)
      // console.log(qty);
      let b  = gbyvariant[variant][0]
      b.qty = qty
      //gbyvariant[variant][0].qty = qty
      //fiArray.push(gbyvariant[variant][0])
      //this.finalArray = [...this.finalArray, ...gbyvariant[variant][0]]
      this.finalArray.push(b)
    }
    // let qty = gbyvariant.reduce((i, j) => i + j.price * j.qty, 0)
    // gbyvariant[0].qty = qty
    // finalArray.push(gbyvariant[0])
    // console.log(gbyvariant[0]);
    
  }
  this.ngZone.run(()=>{
  //   this.finalArray = []
  //   this.finalArray = fiArray
  // console.log(this.finalArray);
  
  // console.log(typeof(this.finalArray));
  // console.log(typeof(this.ordersFilter));
})
}


async deliveryListModal() {
  const modal = await this.modalController.create({
    component: DeliverylistPage,
    //cssClass: 'my-custom-class'
    componentProps:{data : this.finalArray}
  });
  return await modal.present();
}
changeSelection(i){
  this.currentSelection = i
}


share(){
  console.log(this.store);
  if (this.store.store_link == undefined || this.store.store_link == ''){
  location.href ="https://wa.me/?text=stay at home, Order online at " + this.store.name + " visit our official website  www.snvmart.com/tabs/tab1;storeID=" + this.storeId
}else {
  location.href ="https://wa.me/?text=stay at home, Order online at " + this.store.name + " visit our official website   " + this.store.store_link 
}
}
}


