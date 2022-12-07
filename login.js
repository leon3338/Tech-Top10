const firebaseConfig = {

    apiKey: "AIzaSyC21JSQTNpknFw87SuCzX0WJkuBuZ-VZ1I",
    authDomain: "tech-top10-web-login.firebaseapp.com",
    databaseURL: "https://tech-top10-web-login-default-rtdb.firebaseio.com/",
    projectId: "tech-top10-web-login",
    storageBucket: "tech-top10-web-login.appspot.com",
    messagingSenderId: "916766688849",
    appId: "1:916766688849:web:dad22467a8d65636cb5a70"

};

// initialize firebase
firebase.initializeApp(firebaseConfig);

// reference your database
var contactFormDB = firebase.database().ref("login");

document.getElementById("contactForm").addEventListener("submit", submitForm);

function submitForm(e) {
  e.preventDefault();

  var name = getElementVal("name");
  var emailid = getElementVal("emailid");
 

  saveMessages(emailid, pwd);

  //   enable alert
  document.querySelector(".alert").style.display = "block";

  //   remove the alert
  setTimeout(() => {
    document.querySelector(".alert").style.display = "none";
  }, 3000);

  //   reset the form
  document.getElementById("contactForm").reset();
}

const saveMessages = (name,emailid) => {
  var newContactForm = contactFormDB.push();

  newContactForm.set({
    name: name,
    emailid: emailid,
    
  });
};

const getElementVal = (id) => {
  return document.getElementById(id).value;
};
