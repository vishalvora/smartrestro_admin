import { Component, OnInit, Input } from '@angular/core';
import { ModalController, NavParams } from '@ionic/angular';

@Component({
  selector: 'app-deliverylist',
  templateUrl: './deliverylist.page.html',
  styleUrls: ['./deliverylist.page.scss'],
})
export class DeliverylistPage implements OnInit {

  @Input() data : object;

  constructor(private modalCtrl : ModalController, private navParams : NavParams) { 
    console.log(navParams.get('data'));
    this.data = navParams.get('data')
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

}
