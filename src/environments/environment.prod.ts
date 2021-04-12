export const environment = {
  production: true
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
