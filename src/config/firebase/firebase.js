import * as firebase from 'firebase'

// Initialize Firebase
const config = {
    apiKey: "AIzaSyDaVLZRM0zxMyZike9vqWWtOLrD2hDIDsE",
    authDomain: "agroshare-17942.firebaseapp.com",
    databaseURL: "https://agroshare-17942.firebaseio.com",
    projectId: "agroshare-17942",
    storageBucket: "agroshare-17942.appspot.com",
    messagingSenderId: "121465352697"
}

if (!firebase.apps.length) {
    firebase.initializeApp(config)
}

const auth = firebase.auth()
const db = firebase.database()
const storage = firebase.storage()

export {
    auth,
    db,
    storage,
}