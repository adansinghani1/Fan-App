// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
var firebaseConfig = {
  apiKey: "AIzaSyCaOj5UcrrJZ8TLr0142PtSH7_ZCpc2crQ",
  authDomain: "fan-app-5a72f.firebaseapp.com",
  databaseURL: "https://fan-app-5a72f-default-rtdb.firebaseio.com",
  projectId: "fan-app-5a72f",
  storageBucket: "fan-app-5a72f.appspot.com",
  messagingSenderId: "212811887961",
  appId: "1:212811887961:web:5cffa663a7e8ba4c008848",
  measurementId: "G-HKXS9VT1PP"
};
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  const auth =  firebase.auth();

  //signup function
  function signUp(){
    var email = document.getElementById("email");
    var password = document.getElementById("password");

    const promise = auth.createUserWithEmailAndPassword(email.value,password.value);
    //
    promise.catch(e=>alert(e.message));
    alert("SignUp Successfully");
  }

  //signIN function
  function  signIn(){
    var email = document.getElementById("email");
    var password  = document.getElementById("password");
    const promise = auth.signInWithEmailAndPassword(email.value,password.value);
    promise.catch(e=>alert(e.message));
    
  }


  //signOut

  function signOut(){
    auth.signOut();
    alert("SignOut Successfully from System");
  }

  //active user to homepage
  firebase.auth().onAuthStateChanged((user)=>{
    if(user){
      var email = user.email;
      alert("Active user "+email);

    }else{
      alert("No Active user Found")
    }
  })
