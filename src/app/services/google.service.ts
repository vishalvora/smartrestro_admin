import { Injectable } from '@angular/core';
import { MapsAPILoader } from '@agm/core';
import { Platform } from '@ionic/angular';
import { BehaviorSubject } from 'rxjs';
import { AndroidPermissions } from '@ionic-native/android-permissions/ngx';
import { LocationAccuracy } from '@ionic-native/location-accuracy/ngx';


@Injectable({
  providedIn: 'root'
})
export class GoogleService {

  googleMapStaus = new BehaviorSubject(false)
  geoCoder;
  storeAddress = new BehaviorSubject({})


  constructor(
    private mapAPILoader : MapsAPILoader,
    private platform : Platform,
    private androidPermissions: AndroidPermissions, 
    private locationAccuracy: LocationAccuracy, 

    ) { 

      console.log("from google servie");
      

    this.platform.ready().then(()=>{
      console.log("platform ready");
      this.checkGPSPermission()
  this.mapAPILoader.load().then(()=>{
    console.log("google map api loaded");
    this.googleMapStaus.next(true)
    
    this.geoCoder = new google.maps.Geocoder;
  })
})
  }



  autoDetectCurrentPosition_(){
    return new Promise<any>((resolve, reject)=>{
      if('geolocation' in navigator){
        navigator.geolocation.getCurrentPosition((position) => {
          
          let a = {
            lat:position.coords.latitude,
            lng:position.coords.longitude
          }
          resolve (a)
        });
      }
      else{
        // R101 - if geolocation not found in navigator
        reject ("err")
      }
    
  
    })
  
  }


  latLngBasedAddress_(lat , lng) {
    return new Promise<any>((resolve, reject)=>{
      this.geoCoder.geocode({ 'location': { lat: lat, lng: lng } }, (results, status) => {
        if (status === 'OK') {
          console.log(results);
          
          if (results[0]) {
        resolve(results[0])
              //console.log(this.currentAddress);
              
          } else {
            window.alert('not able to get address');
          }
        } else {
          window.alert('Not able to get your location check your GPS is turned on and connected to internet');
        }
    
      });
    
    })
    
  
  }

  setStoreAddress(lat, lng){
    this.latLngBasedAddress_(lat,lng).then(res=>{
      console.log(res);
      this.storeAddress.next(res)
    })
  }


  getStoreAddress(){
    return this.storeAddress.asObservable()
  }
  

  checkGPSPermission() {
    // alert("checking gps permission!!")
    this.androidPermissions.checkPermission(this.androidPermissions.PERMISSION.ACCESS_COARSE_LOCATION).then(
      result => {
        // alert("result has permission: " + result.hasPermission)
        if (result.hasPermission) {
  
          //If having permission show 'Turn On GPS' dialogue
          this.askToTurnOnGPS();
        } else {
  
          //If not having permission ask for permission
          this.requestGPSPermission();
        }
      },
      err => {
        //// alert(err);
      }
    );
  }
  

  requestGPSPermission() {
    // alert("res=questing gps perisssion")
    this.locationAccuracy.canRequest().then((canRequest: boolean) => {
      // alert("result :" + canRequest)
      if (canRequest) {
        console.log("4");
        // alert("4")
      } else {
        //Show 'GPS Permission Request' dialogue
        // alert("requesting permission")
        this.androidPermissions.requestPermission(this.androidPermissions.PERMISSION.ACCESS_COARSE_LOCATION)
        
          .then(
            () => {
              // call method to turn on GPS
              this.askToTurnOnGPS();
              // alert("got permission!!")
              //this.setCurrentLocation();
            },
            error => {
              //Show //// alert if user click on 'No Thanks'
              // alert('requestPermission Error requesting location permissions ' + error)
            }
          );
      }
    });
  }
  
  
  askToTurnOnGPS() {
    this.locationAccuracy.request(this.locationAccuracy.REQUEST_PRIORITY_HIGH_ACCURACY).then(
      () => {
        // When GPS Turned ON call method to get Accurate location coordinates
       // this.getLocationCoordinates()
      },
      //error => // alert('Error requesting location permissions ' + JSON.stringify(error))
    );
  }
  
  
}
