export const environment = {
  production: true
};

export const firebaseConfig = {
  apiKey: "AIzaSyBviFQz5C3tVN2iDkpL5yqaUgwMCjZpmGs",
  authDomain: "snv-mart.firebaseapp.com",
  databaseURL: "https://snv-mart.firebaseio.com",
  projectId: "snv-mart",
  storageBucket: "snv-mart.appspot.com",
  messagingSenderId: "776194675648",
  appId: "1:776194675648:web:d568e82945faff1315ee25",
  measurementId: "G-6PW0VX90LP"
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
