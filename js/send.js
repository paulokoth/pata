  // Initialize Firebase
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
        document.getElementById('sign-in').disabled = false;
        // [END_EXCLUDE]
      });
      // [END authwithemail]
    }
    //document.getElementById('sign-in').disabled = true;
    window.location.replace("pata-victor/fip5/index.html");
  }
  /**
     * Handles the sign up button press.
     */
    function handleSignUp() {
      var email = document.getElementById('useremail').value;
      var password = document.getElementById('pass').value;
      if (email.length < 4) {
        alert('Please enter an email address.');
        return;
      }
      if (password.length < 4) {
        alert('Please enter a password.');
        return;
      }
      // Sign in with email and pass.
      // [START createwithemail]
      firebase.auth().createUserWithEmailAndPassword(email, password).catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // [START_EXCLUDE]
        if (errorCode == 'auth/weak-password') {
          alert('The password is too weak.');
        } else {
          alert(errorMessage);
        }
        console.log(error);
        // [END_EXCLUDE]
      });
      // [END createwithemail]
    }
    function logoutUser(){
    firebase.auth().signOut().then(function() {
  // Sign-out successful.
     confirm('you have sure you want to signed out ?');
    }).catch(function(error) {
  // An error happened.
    });
  }
    /*function sendEmailVerification() {
          // [START sendemailverification]
          firebase.auth().currentUser.sendEmailVerification().then(function() {
            // Email Verification sent!
            // [START_EXCLUDE]
            alert('Email Verification Sent!');
            // [END_EXCLUDE]
          });
          // [END sendemailverification]
        }
        function sendPasswordReset() {
          var email = document.getElementById('useremail').value;
          // [START sendpasswordemail]
          firebase.auth().sendPasswordResetEmail(email).then(function() {
            // Password Reset Email Sent!
            // [START_EXCLUDE]
            alert('Password Reset Email Sent!');
            // [END_EXCLUDE]
          }).catch(function(error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            // [START_EXCLUDE]
            if (errorCode == 'auth/invalid-email') {
              alert(errorMessage);
            } else if (errorCode == 'auth/user-not-found') {
              alert(errorMessage);
            }
            console.log(error);
            // [END_EXCLUDE]
          });
          // [END sendpasswordemail];
        }
     * initApp handles setting up UI event listeners and registering Firebase auth listeners:
     *  - firebase.auth().onAuthStateChanged: This listener is called when the user is signed in or
     *    out, and that is where we update the UI.
     */
    function initApp() {
      // Listening for auth state changes.
      // [START authstatelistener]
      firebase.auth().onAuthStateChanged(function(user) {
        // [START_EXCLUDE silent]
        document.getElementById('quickstart-verify-email').disabled = true;
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
          document.getElementById('sign-in-status').textContent = email;
          document.getElementById('sign-in').textContent = 'Sign out';
          if (!emailVerified) {
            document.getElementById('quickstart-verify-email').disabled = false;
          }
        } else {
       // User is signed out.
       document.getElementById('sign-in-status').textContent = 'Signed out';
       document.getElementById('sign-in').textContent = 'Sign in';
       //document.getElementById('quickstart-account-details').textContent = 'null';
     }
     // [START_EXCLUDE silent]
     document.getElementById('sign-in').disabled = false;
     // [END_EXCLUDE]
   });
   // [END authstatelistener]
   document.getElementById('sign-in').addEventListener('click', toggleSignIn, false);
   document.getElementById('sign-up').addEventListener('click', handleSignUp, false);
   document.getElementById('sign-out').addEventListener('click', logoutUser, false);
   //document.getElementById('quickstart-verify-email').addEventListener('click', sendEmailVerification, false);
   //document.getElementById('quickstart-password-reset').addEventListener('click', sendPasswordReset, false);
 }
 window.onload = function() {
    initApp();

};
