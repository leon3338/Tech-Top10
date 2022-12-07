import { initializeApp } from  'https://www.gstatic.com/firebasejs/9.14.0/firebase-app.js';
import { getAuth, onAuthStateChanged} from 'https://www.gstatic.com/firebasejs/9.14.0/firebase-auth.js';
const firebaseApp = initializeApp({});

firebase.auth().onAuthStateChanged(function(user){

	if (user) {
		document.getElementById("user_div").style.display ="initial";
		document.getElementById("login_div").style.display ="none";
	} else {
		document.getElementById("user_div").style.display ="none";
		document.getElementById("login_div").style.display ="initial";
	}
});


function login(){
var userEmail = document.getElementById("email").value;
var userPassword = document.getElementById("password").value;

firebase.auth().signInWithEmailAndPassword(userEmail, userPassword).catch(function(error) {

	var errorCode = error.code;
	var errorMessage = error.message;

	window.alert("Error: " + errorMessage);

});

}