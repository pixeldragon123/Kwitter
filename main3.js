const firebaseConfig = {
    apiKey: "AIzaSyAj_R3TSUkp_HJ2NsAvdKwTlXx3O9TzE-I",
    authDomain: "kwitter-19be4.firebaseapp.com",
    databaseURL: "https://kwitter-19be4-default-rtdb.firebaseio.com",
    projectId: "kwitter-19be4",
    storageBucket: "kwitter-19be4.appspot.com",
    messagingSenderId: "30560211495",
    appId: "1:30560211495:web:6b661e733962385f91f402"
  };
firebase.initializeApp(firebaseConfig);

user_name = localStorage.getItem("user_name")
room_name = localStorage.getItem("room_name")

function send(){
    msg = document.getElementById("message").value;

    firebase.database().ref(room_name).push({
        Name: user_name,
        Message : msg
    })
}

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
    firebase_message_id = childKey;
    message_data = childData;

    console.log(firebase_message_id);
    console.log(message_data);

    Name = message_data["Name"]
    Message = message_data["Message"]

    nameandmsg = '<h4>' + Name + ":" + Message + '</h4>';
    document.getElementById("output").innerHTML += nameandmsg;

    
 } });  }); }
getData();

function logout(){
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
    window.location = "index.html";
}