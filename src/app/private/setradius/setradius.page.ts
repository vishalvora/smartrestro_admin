import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { GoogleService } from '../../services/google.service';
import { ModalController, NavParams } from '@ionic/angular';
import {  ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-setradius',
  templateUrl: './setradius.page.html',
  styleUrls: ['./setradius.page.scss'],
})
export class SetradiusPage implements OnInit {
  @ViewChild("mapContainer", { static: false }) gmap: ElementRef;
  map:any
  marker:any
  circle:any
  coordinates:any
  address: any;
  loc:any
  

  constructor(private googleService: GoogleService, private modalCtrl: ModalController, private navParms:NavParams) { 
    this.loc = {}
    this.loc.lat = navParms.get('lat')
    this.loc.lng = navParms.get('lng')
    this.loc.radius = navParms.get('radius')
    console.log(this.loc);
    
  }

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
    this.coordinates = new google.maps.LatLng(this.loc.lat, this.loc.lng);
    this.mapInitializer()
    this.googleService.latLngBasedAddress_(this.loc.lat, this.loc.lng).then(location=>{
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
    this.circle = new google.maps.Circle({
      map: this.map,
      radius: this.loc.radius * 1000,    // 10 miles in metres
      fillColor: '#AA0000',
      strokeColor:'#aa3300',
      strokeOpacity:0.5,
      strokeWeight:1.5
    });
    this.circle.bindTo('center', this.marker, 'position');
    this.chnageRadius(this.loc.radius)
 

  google.maps.event.addListener(this.map, 'center_changed', () => {
    
    // console.log(this.map.getCenter());
    // this.marker.setPosition(this.map.getCenter());
        


});
  



//   google.maps.event.addListener(this.map, 'dragend', () => {
    
//     console.log(this.map.getCenter());
//     this.marker.setPosition(this.map.getCenter());
  
//     console.log(this.map.getCenter().lat());
    
//     this.googleService.latLngBasedAddress_(this.map.getCenter().lat(), this.map.getCenter().lng()).then(location=>{
//       console.log(location.formatted_address);
//       this.address = location.formatted_address
      
//     })

// });
  



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

  confirmRadius(){
  this.dismiss(this.loc.radius)  
}


  dismiss(radius) {
    // using the injected ModalController this page
    // can "dismiss" itself and optionally pass back data
    this.modalCtrl.dismiss({
      'dismissed': true,
      radius:radius
    });
  }

  chnageRadius(radius){
    console.log(radius);
    this.circle.setRadius(radius * 1000)
    // this.map.setZoom(13)
    var bounds = this.circle.getBounds();
// Set zoom to max possible
  this.map.setZoom(20);   // 19 or 20 or get the maxZoom property of your MapOptions
  this.map.fitBounds(bounds);
  this.map.panToBounds(bounds);
  }

}
