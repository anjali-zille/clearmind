import firebase from 'firebase'

const config={
    apiKey: "AIzaSyDcbMxQaIGojPMXhxPgD1NclAqXBNyrAsE",
    authDomain: "iamclearmindapp.firebaseapp.com",
    databaseURL: "https://iamclearmindapp.firebaseio.com",
    projectId: "iamclearmindapp",
    storageBucket: "iamclearmindapp.appspot.com",
    messagingSenderId: "387593808056",
    appId: "1:387593808056:web:43bf17eba37ce95fe3ac4d",
    measurementId: "G-MS5KDEPPYD"
}
firebase.initializeApp(config);
export default firebase




// <!-- The core Firebase JS SDK is always required and must be listed first -->
// <script src="https://www.gstatic.com/firebasejs/7.16.0/firebase-app.js"></script>

// <!-- TODO: Add SDKs for Firebase products that you want to use
//      https://firebase.google.com/docs/web/setup#available-libraries -->
// <script src="https://www.gstatic.com/firebasejs/7.16.0/firebase-analytics.js"></script>

// <script>
//   // Your web app's Firebase configuration
//   var firebaseConfig = {
//     apiKey: "AIzaSyDcbMxQaIGojPMXhxPgD1NclAqXBNyrAsE",
//     authDomain: "iamclearmindapp.firebaseapp.com",
//     databaseURL: "https://iamclearmindapp.firebaseio.com",
//     projectId: "iamclearmindapp",
//     storageBucket: "iamclearmindapp.appspot.com",
//     messagingSenderId: "387593808056",
//     appId: "1:387593808056:web:43bf17eba37ce95fe3ac4d",
//     measurementId: "G-MS5KDEPPYD"
//   };
//   // Initialize Firebase
//   firebase.initializeApp(firebaseConfig);
//   firebase.analytics();
// </script>