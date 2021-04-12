// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false
};

export const firebaseConfig = {
  apiKey: "AIzaSyDQnHAagaXnlsFwGh8sa7EdZ4l7mc0jAN8",
  authDomain: "finefood-e82d1.firebaseapp.com",
  projectId: "finefood-e82d1",
  storageBucket: "finefood-e82d1.appspot.com",
  messagingSenderId: "872002261545",
  appId: "1:872002261545:web:fb1778362510ff4d1d8238",
  measurementId: "G-8B9DL2N62T"
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
