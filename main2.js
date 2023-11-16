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
username = localStorage.getItem("user_name");
document.getElementById("welcome").innerHTML = "Welcome " + username;
function addRoom(){
    roomname = document.getElementById("room_name").value;

    firebase.database().ref("/").child(roomname).update({
        
    })

    localStorage.setItem("room_name" , roomname);
    window.location = "index3.html";
}

function getData() {  firebase.database().ref("/").on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key;
    Room_names = childKey;
    
     row = '<div id="' + Room_names + '" onclick="changeroom(this.id)">' + Room_names + '</div><hr>';
     document.getElementById("output").innerHTML+=row;
 });
});

}

getData();

function changeroom(currentroom){
    localStorage.setItem("room_name", currentroom )
    window.location = "index3.html"

}


function logout(){
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
    window.location = "index.html";
}