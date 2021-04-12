import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-customersdetials',
  templateUrl: './customersdetials.page.html',
  styleUrls: ['./customersdetials.page.scss'],
})
export class CustomersdetialsPage implements OnInit {
  params: any;
  orders: any[];

  constructor(private route: ActivatedRoute, private db:AngularFirestore, private router: Router) { 
    this.route.params.subscribe(params => {
      console.log(params);
      this.params = params
      console.log(this.params.name);
      
    })

  }

  ngOnInit() {
    this.db.firestore.collection('orders').where('store.storeID','==',this.params.store_id).where('userID','==',this.params.uid).limit(5).get().then(res=>{
      console.log(res);
      this.orders = []
      res.forEach(doc=>{
        let a  = doc.data()
        a.id = doc.id
        this.orders.push(a)
      })
      console.log(this.orders);
      
    })

  }
  openOrder(order){
    this.router.navigate(['order', {orderDocId : order.id}])
  }
}
