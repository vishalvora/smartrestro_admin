// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false
};

export const firebaseConfig = {
  apiKey: "AIzaSyBK0yyQCsa7BccPCbQce4wyjpx-tnCVXeI",
  authDomain: "restaurant-1e27c.firebaseapp.com",
  databaseURL: "https://restaurant-1e27c-default-rtdb.firebaseio.com",
  projectId: "restaurant-1e27c",
  storageBucket: "restaurant-1e27c.appspot.com",
  messagingSenderId: "74112351085",
  appId: "1:74112351085:web:a18c0e6e7b6f9148f73864",
  measurementId: "G-SF28LB8H3C"
};


export interface product {
  category: string,
  image_url: string,
  mrp: number,
  name: string,
  parent_category: string,
  price: number,
  product_id: number
  
}


/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
