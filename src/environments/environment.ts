// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false
};

export const firebaseConfig = {
  apiKey: "AIzaSyBviFQz5C3tVN2iDkpL5yqaUgwMCjZpmGs",
  authDomain: "snv-mart.firebaseapp.com",
  databaseURL: "https://snv-mart.firebaseio.com",
  projectId: "snv-mart",
  storageBucket: "snv-mart.appspot.com",
  messagingSenderId: "776194675648",
  appId: "1:776194675648:web:d568e82945faff1315ee25",
  measurementId: "G-6PW0VX90LP",
  vapidKey: "BN0culhVzemC5xRhMZu8AFw9BNyKsrUg3HMU5VUZnVX1wu53cPJuxxcdjPCRzqhaqr-2MRKxyqo3EoVmJrHBEwY"
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
