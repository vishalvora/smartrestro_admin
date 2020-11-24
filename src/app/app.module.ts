import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AngularFireModule} from '@angular/fire';
import { AngularFireAuthModule} from '@angular/fire/auth';
import { firebaseConfig } from '../environments/environment'
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { ImportPageModule } from './private/import/import.module';
import { AgmCoreModule } from '@agm/core';
import { LocationPageModule } from './private/location/location.module';
import { AddproductPageModule } from './private/addproduct/addproduct.module';
import { LocationAccuracy } from '@ionic-native/location-accuracy/ngx';
import { AndroidPermissions } from '@ionic-native/android-permissions/ngx';
import { AngularFireMessagingModule} from'@angular/fire/messaging'
import { FCM } from '@ionic-native/fcm/ngx';
import { AppVersion } from '@ionic-native/app-version/ngx';
import { EditproductPageModule } from './private/editproduct/editproduct.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InvoicePageModule } from './private/invoice/invoice.module';
import { DeliverylistPageModule } from './private/deliverylist/deliverylist.module';
import { CategoryPageModule } from './private/category/category.module';
import { SetradiusPageModule } from './private/setradius/setradius.module';
import { OrderaddproductPageModule } from './private/orderaddproduct/orderaddproduct.module';


@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule, 
    IonicModule.forRoot(), 
    AppRoutingModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AgmCoreModule.forRoot({
      //apiKey: 'AIzaSyA--O0Kjx7r_iGGrjtcvWf4XhEflBV2bqY',
      apiKey: 'AIzaSyDRzCXqL8oGbUx9a3vE7XOuUYevV5ZvDKI',
      libraries: ['places']
  }),

    AngularFireAuthModule,
    AngularFirestoreModule,
    ImportPageModule,
    LocationPageModule,
    AddproductPageModule,
    AngularFireMessagingModule,
    EditproductPageModule,
    FormsModule,
    ReactiveFormsModule,
    InvoicePageModule,
    DeliverylistPageModule,
    CategoryPageModule,
    SetradiusPageModule,
    OrderaddproductPageModule

  ],
  providers: [
    StatusBar,
    SplashScreen,
    AndroidPermissions,
    LocationAccuracy,
    FCM,
    AppVersion,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
