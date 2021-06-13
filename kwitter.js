var firebaseConfig = {
    apiKey: "AIzaSyBqmt7zEehASiLzliETxonn3oLe5Ohd4d4",
    authDomain: "project-94-kwitter.firebaseapp.com",
    databaseURL: "https://project-94-kwitter-default-rtdb.firebaseio.com",
    projectId: "project-94-kwitter",
    storageBucket: "project-94-kwitter.appspot.com",
    messagingSenderId: "434866157090",
    appId: "1:434866157090:web:a2a9940f3994ad11937c7b",
    measurementId: "G-XJSY2QN3GB"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  
function addUser () {

    user_name = document.getElementById ("user_name").value;

    localStorage.setItem ("user_name",user_name);

    window.location = "kwitter_room.html";
}