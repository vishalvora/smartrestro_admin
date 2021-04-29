import { Component, OnInit, Input, NgZone } from '@angular/core';
import { ModalController, NavParams } from '@ionic/angular';

@Component({
  selector: 'app-deliverylist',
  templateUrl: './deliverylist.page.html',
  styleUrls: ['./deliverylist.page.scss'],
})
export class DeliverylistPage implements OnInit {

  @Input() orders = [];
  finalArray: any[];
  data: any[];
  totalOrders = 0
  selectedOrders = 0
  displayCtrl = true

  constructor(private modalCtrl : ModalController, private navParams : NavParams, private ngZone: NgZone) { 
    console.log(navParams.get('data'));
    navParams.get('data')
    this.setTotalOrders(navParams.get('data').size)
    navParams.get('data').forEach(doc=>{
      let a = doc.data()
      a.isChecked = true
      a.time_formated  = new Date(a.time).toLocaleDateString()
      this.orders.push(a)
    })
    this.setSelection()
    this.newFn(this.orders)
  }

  ngOnInit() {
  }

  dismiss() {
    // using the injected ModalController this page
    // can "dismiss" itself and optionally pass back data
    this.modalCtrl.dismiss({
      'dismissed': true
    });
  }


  newFn(orders){
    this.finalArray = []
    // console.log(res);
    // let orders = []
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
    console.log(orderGrpByStatus);
    let orderedOrders = orderGrpByStatus.ordered.reduce((acc, it) => [...acc, ...it.cart], []);
    // console.log(orderedOrders);
    let grpByPid = groupBy(orderedOrders, 'product_id')
    console.log(grpByPid);
  
    let fiArray = []
    for(var id in grpByPid){
      // console.log(grpByPid[id]);
      let gbyvariant = groupBy(grpByPid[id], 'selectedVariant')
      console.log(gbyvariant);
  
      for(var variant in gbyvariant){
        
        console.log(gbyvariant[variant]);
        let a = gbyvariant[variant]
        let qty = a.reduce((i, j) => i + j.qty, 0)
        console.log(qty);
        let b  = JSON.parse(JSON.stringify(gbyvariant[variant][0]))
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
      this.data = this.finalArray
  })
  }
  setTotalOrders(num){
    this.ngZone.run(()=>{
      this.totalOrders = num
    })
  }


  setSelection(){
    let selected = this.orders.filter(it=>it.isChecked == true)
    this.ngZone.run(()=>{
      this.selectedOrders = selected.length
    })
  }

  selectionChnaged(){
    this.setSelection()
  }

  consolidateItems(){
    this.displayCtrl = true
    let selected = this.orders.filter(it=>it.isChecked == true)
    this.newFn(selected)
  }
}
