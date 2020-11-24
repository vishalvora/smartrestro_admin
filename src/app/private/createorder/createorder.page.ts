import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { OrderaddproductPage } from '../orderaddproduct/orderaddproduct.page';

@Component({
  selector: 'app-createorder',
  templateUrl: './createorder.page.html',
  styleUrls: ['./createorder.page.scss'],
})
export class CreateorderPage implements OnInit {
  cart = []


  constructor(private modalController : ModalController) { }

  ngOnInit() {
  }

 

  async addProduct() {
    const modal = await this.modalController.create({
      component: OrderaddproductPage,
    });

    modal.onDidDismiss().then((data)=>{
      console.log(data);
      this.cart.push(data.data.product)
      console.log(this.cart);
      
    })
    return await modal.present();
  }

  changeQty(id, a){
    for( var i = 0; i < this.cart.length; i++){
      if(this.cart[i].product_id == id){
        this.cart[i].qty = this.cart[i].qty + a;
        // if qty zero then delete the product from cart
      }
    }
  }

  saveProduct(){}
}
