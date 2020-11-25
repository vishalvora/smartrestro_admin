import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { GoogleService } from '../../services/google.service';
import { ModalController } from '@ionic/angular';
import { dismiss } from '@ionic/core/dist/types/utils/overlays';
import { getLocaleFirstDayOfWeek } from '@angular/common';

@Component({
  selector: 'app-location',
  templateUrl: './location.page.html',
  styleUrls: ['./location.page.scss'],
})
export class LocationPage implements OnInit {
  @ViewChild("mapContainer", { static: false }) gmap: ElementRef;
  map:any
  marker:any
  coordinates:any
  address: any;

  constructor(private googleService: GoogleService, private modalCtrl: ModalController) { }

  ngOnInit() {
    console.log("view did load");
    this.googleService.googleMapStaus.subscribe(status=>{
      if(status){
        console.log("google map is now ready");
          // this.map= new google.maps.Map;

  this.marker = new google.maps.Marker({
    // position: this.coordinates,
    map: this.map,
    title: "move map to adjust"
  });
 

  this.googleService.autoDetectCurrentPosition_().then(position=>{
    this.coordinates = new google.maps.LatLng(position.lat, position.lng);
    this.mapInitializer()
    this.googleService.latLngBasedAddress_(position.lat, position.lng).then(location=>{
      console.log(location.formatted_address);
      this.address = location.formatted_address
      
    })
    
    })
    


      }
    })
  }

  ionViewDidEnter(){
   
    

  }

  mapInitializer(): void {
    

    this.map = new google.maps.Map(this.gmap.nativeElement, {
      center: this.coordinates,
      zoom: 15,
      disableDefaultUI: true,
      draggable: true
    });
     this.marker.setPosition( this.map.getCenter());
    
    this.marker.setMap(this.map);
 

  google.maps.event.addListener(this.map, 'center_changed', () => {
    
    // console.log(this.map.getCenter());
    this.marker.setPosition(this.map.getCenter());
        


});
  



  google.maps.event.addListener(this.map, 'dragend', () => {
    
    console.log(this.map.getCenter());
    this.marker.setPosition(this.map.getCenter());
  
    console.log(this.map.getCenter().lat());
    
    this.googleService.latLngBasedAddress_(this.map.getCenter().lat(), this.map.getCenter().lng()).then(location=>{
      console.log(location.formatted_address);
      this.address = location.formatted_address
      
    })

});
  



    //Adding other markers
    // this.loadAllMarkers();
  }

  getCurrentLocation(){
    this.googleService.autoDetectCurrentPosition_().then((location:any)=>{
     
      this.coordinates = new google.maps.LatLng(location.lat, location.lng);
      this.map.setCenter(this.coordinates)
      this.map.setZoom(17)
      this.googleService.latLngBasedAddress_(this.map.getCenter().lat(), this.map.getCenter().lng()).then(location=>{
        console.log(location.formatted_address);
        this.address = location.formatted_address
        
      })
  
    })

  }

  confirmedLocation(){
  this.googleService.setStoreAddress(this.map.getCenter().lat(),this.map.getCenter().lng())
  this.dismiss()  
}


  dismiss() {
    // using the injected ModalController this page
    // can "dismiss" itself and optionally pass back data
    this.modalCtrl.dismiss({
      'dismissed': true
    });
  }

 
}
