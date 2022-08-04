
//ADD YOUR FIREBASE LINKS HERE
const firebaseConfig = {
      apiKey: "AIzaSyBaNQ_A4ZkN9jQf-aHIhK4x1OiVpkPXpig",
      authDomain: "kwitter-d0950.firebaseapp.com",
      projectId: "kwitter-d0950",
      storageBucket: "kwitter-d0950.appspot.com",
      messagingSenderId: "1028695510319",
      appId: "1:1028695510319:web:776d761e9ce8f68d33a5da"
    };
    
    // Initialize Firebase
    const app = initializeApp(firebaseConfig);

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
