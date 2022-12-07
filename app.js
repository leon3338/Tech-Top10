

var counter = 0;
function upvote() {
  counter++;
  document.getElementById('storyVotes').innerHTML = counter;

}

function downvote() {
  counter--;
  document.getElementById('storyVotes').innerHTML = counter;
  
}



function initializeApp(){
const firebaseConfig = {
  apiKey: "AIzaSyC51HkpBlPm9QTs99CvdtinpQaUCkn_cNU",
  authDomain: "comments-tech-top10.firebaseapp.com",
  databaseURL: "https://comments-tech-top10-default-rtdb.firebaseio.com",
  projectId: "comments-tech-top10",
  storageBucket: "comments-tech-top10.appspot.com",
  messagingSenderId: "58373575254",
  appId: "1:58373575254:web:6fc50a43a43dc32f9561f7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

  var database= firebase.database();

  function sendMessage()
  {
    var email=document.getElementById("email").value;
    var name=document.getElementById("name").value;
    var message=document.getElementById("message").value;

    var newMessageKey = database.ref().child('comments').push().key;
    database.ref('comments/'+newMessageKey+'/Email').set(email);
    database.ref('comments/'+newMessageKey+'/Name').set(name);
    database.ref('comments/'+newMessageKey+'/message').set(message);
}




document.getElementById('contactForm').addEventListener('submit', submitForm);

function submitForm(e)
{
    e.preventDefautl();
}
document.querySelector('alert').getElementsByClassName.display='block';

function hideAlert()
{
    document.querySelector('.alert').getElementsByClassName.display='none';

}
setTimeout(hideAlert, 3000);
}