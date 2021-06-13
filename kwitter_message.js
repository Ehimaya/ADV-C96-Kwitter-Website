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
  
  user_name = localStorage.getItem("user_name");
  function send() {
     msg = document.getElementById("msg").value;
     firebase.database().ref(room_name).child("msg").update({
         name:user_name,
         message:msg,
         likes:0
     })
     document.getElementById("msg").value = "";
  }
  
  function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
    firebase_message_id = childKey;
    message_data = childData;
//Start code
    console.log(firebase_message_id);
    console.log(message_data);
    name = message_data['name'];
    message = message_data['message'];
    like = message_data['like'];
    name_with_tag = "<h4> "+ name +"<img class='user_tick' src='tick.png'></h4>";
    message_with_tag = "<h4 class='message_h4'>" + message + "</h4>";
like_button ="<button class='btn btn-warning' id="+firebase_message_id+" value="+like+" onclick='updateLike(this.id)'>";
    span_with_tag = "<span class='glyphicon glyphicon-thumbs-up'>Like: "+ like +"</span></button><hr>";

   row = name_with_tag + message_with_tag +like_button + span_with_tag;       
   document.getElementById("output").innerHTML += row;
//End code
 } });  }); }
getData();
  
function logout() {
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
    window.location.replace("kwitter_login.html");
  }