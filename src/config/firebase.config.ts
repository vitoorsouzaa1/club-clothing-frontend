import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: 'AIzaSyAiVPcrQc-dUIGXouUX3E-3GPzI7JkOZl4',
  authDomain: 'club-ecommerce-28330.firebaseapp.com',
  projectId: 'club-ecommerce-28330',
  storageBucket: 'club-ecommerce-28330.appspot.com',
  messagingSenderId: '363762291961',
  appId: '1:363762291961:web:b2c128ee1e10a40e33fe28',
  measurementId: 'G-KRLL6RGNXC'
}

export const app = initializeApp(firebaseConfig)
export const db = getFirestore(app)
export const auth = getAuth(app)
