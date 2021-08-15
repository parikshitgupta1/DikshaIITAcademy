// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyCoWpRdcdCnsvq-8Im6AwE68nJ1LjPfvco",
  authDomain: "diksha-iit-academy.firebaseapp.com",
  databaseURL: "https://diksha-iit-academy-default-rtdb.firebaseio.com",
  projectId: "diksha-iit-academy",
  storageBucket: "diksha-iit-academy.appspot.com",
  messagingSenderId: "828508022020",
  appId: "1:828508022020:web:a096e3c7f2761cb9bbdc51",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// var messageRef = firebase.database().ref("messages");
var db = firebase.firestore();

document.getElementById("contactForm").addEventListener("submit", submitForm);

function submitForm(e) {
  e.preventDefault();
  var sender = document.getElementById("sender").value;
  var senderEmail = document.getElementById("senderEmail").value;
  var senderPhone = document.getElementById("senderPhone").value;
  var message = document.getElementById("message").value;

  saveMessage(sender, senderEmail, senderPhone, message);

  document.getElementById("sender").value = "";
  document.getElementById("senderEmail").value = "";
  document.getElementById("senderPhone").value = "";
  document.getElementById("message").value = "";
  alert("Form submitted sucessfully");
}

function saveMessage(sender, senderEmail, senderPhone, message) {
  // var newMessageRef = messageRef.push();
  // newMessageRef.set({
  //   name: sender,
  //   email: senderEmail,
  //   phone: senderPhone,
  //   message: message,
  // });
  db.collection("users")
  .add({
    email: senderEmail,
    message: message,
    phone: senderPhone,
    username: sender,
    timestamp: firebase.firestore.FieldValue.serverTimestamp(),
  })
  .catch((err) => alert(err.message));
}

//disable preloader
function preloader() {
  document.querySelector(".preloaderBox").style.display = "none";
  setTimeout(() => {
    Popup(true);
    document.getElementById("popupImg").style.animationName = "popupScroll";
    setTimeout(() => {
      document.getElementById("popupImg").style.top = "0%";
    }, 1000);
  }, 1000);
}

setTimeout(function () {
  document.querySelector(".preloaderBox").style.display = "none";
}, 10000);

//toggle menu
function toggleMenu() {
  const btn = document.querySelector(".openBtn");
  const menu = document.querySelector(".navbar");
  menu.classList.toggle("active");
  btn.classList.toggle("active");
}

function Popup(x) {
  if (x) {
    document.querySelector(".Image__popUp").style.display = "flex";
  } else {
    document.querySelector(".Image__popUp").style.display = "none";
  }
}

