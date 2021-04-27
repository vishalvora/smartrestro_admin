export const environment = {
  production: true
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
