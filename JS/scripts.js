var config = {
  apiKey: "AIzaSyCIRWzLDlKIE2E0ScNQDIToOj7oWTDqYYw",
  authDomain: "test-58e4b.firebaseapp.com",
  databaseURL: "https://test-58e4b.firebaseio.com",
  projectId: "test-58e4b",
  storageBucket: "test-58e4b.appspot.com",
  messagingSenderId: "815891999724"
};
firebase.initializeApp(config);
function toggleSignIn() {
  if (firebase.auth().currentUser) {
    // [START signout]
    firebase.auth().signOut();
    // [END signout]
  } else {
    var email = document.getElementById('useremail').value;
    var password = document.getElementById('pass').value;
    if (email.length < 4) {
      alert('Please enter an email address.');
      return;
    }
    if (password.length < 4) {
      alert('Please enter a long password.');
      return;
    }
    // Sign in with email and pass.
    // [START authwithemail]
    firebase.auth().signInWithEmailAndPassword(email, password).catch(function(error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      // [START_EXCLUDE]
      if (errorCode === 'auth/wrong-password') {
        alert('Wrong password.');
      } else {
        alert(errorMessage);
      }
      console.log(error);
      document.getElementById('quickstart-sign-in').disabled = false;
      // [END_EXCLUDE]
    });
    // [END authwithemail]
  }
  document.getElementById('quickstart-sign-in').disabled = true;
}
function initApp() {
  // Listening for auth state changes.
  // [START authstatelistener]
  firebase.auth().onAuthStateChanged(function(user) {
    // [START_EXCLUDE silent]
    //document.getElementById('quickstart-verify-email').disabled = true;
    // [END_EXCLUDE]
    if (user) {
      // User is signed in.
      var displayName = user.displayName;
      var email = user.email;
      var emailVerified = user.emailVerified;
      var photoURL = user.photoURL;
      var isAnonymous = user.isAnonymous;
      var uid = user.uid;
      var providerData = user.providerData;
      // [START_EXCLUDE]
      document.getElementById('quickstart-sign-in-status').textContent = email;
      document.getElementById('quickstart-sign-in').textContent = 'Sign out';
      if (!emailVerified) {
      //  document.getElementById('quickstart-verify-email').disabled = false;
      }
    } else {
   // User is signed out.
   // [START_EXCLUDE]
   //document.getElementById('quickstart-sign-in-status').textContent = 'Signed out';
   document.getElementById('quickstart-sign-in').textContent = 'Sign in';
   //document.getElementById('quickstart-account-details').textContent = 'null';
   // [END_EXCLUDE]
 }
 // [START_EXCLUDE silent]
 document.getElementById('quickstart-sign-in').disabled = false;
 // [END_EXCLUDE]
});
// [END authstatelistener]
document.getElementById('quickstart-sign-in').addEventListener('click', toggleSignIn, false);
//document.getElementById('quickstart-sign-up').addEventListener('click', handleSignUp, false);
//document.getElementById('quickstart-sign-out').addEventListener('click', logoutUser, false);
//document.getElementById('quickstart-verify-email').addEventListener('click', sendEmailVerification, false);
//document.getElementById('quickstart-password-reset').addEventListener('click', sendPasswordReset, false);
}
window.onload = function() {
initApp();
}
