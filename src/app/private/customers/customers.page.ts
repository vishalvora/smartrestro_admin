import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { DatabaseService } from 'src/app/services/database.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.page.html',
  styleUrls: ['./customers.page.scss'],
})
export class CustomersPage implements OnInit {
  customerList = []

  constructor(private db : AngularFirestore, private dbService : DatabaseService, private router: Router) { }

  ngOnInit() {
    this.dbService.getStore().subscribe((store:any)=>{
      if(Object.keys(store).length>0){
        this.db.firestore.collection('aggregate_data').where('store_id','==',store.store_id).orderBy('total_amount','desc').get().then(res=>{
          console.log(res);
          res.forEach(doc=>{
            this.customerList.push(doc.data())
          })
        })
    
      }
    })


  }


  openCustomerDetails(customer){
    console.log(customer);
    
    this.router.navigate(['customerdetials', customer])
  }
  

}
