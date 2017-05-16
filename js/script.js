//back-end
  // Initialize Firebase
  /*var config = {
    apiKey: "AIzaSyCIRWzLDlKIE2E0ScNQDIToOj7oWTDqYYw",
    authDomain: "test-58e4b.firebaseapp.com",
    databaseURL: "https://test-58e4b.firebaseio.com",
    projectId: "test-58e4b",
    storageBucket: "test-58e4b.appspot.com",
    messagingSenderId: "815891999724"
  };
  firebase.initializeApp(config);
  // get database reference
  var dbRef = new Firebase('https://test-58e4b.firebaseio.com');
  var UsersDetailsRef = dbRef.child('UsersDetails');
  */
   function User(names,email,username){
    this.userFullnames=names;
    this.userEmail=email;
    this.usersUsername=username;
    this.userspassword=[];
  };
//object properties for password
function myPassword(password,confirm){
  this.mypassword=password;
  this.confirmpassword=confirm;
};
//prototype for comparing the two password
myPassword.prototype.confirmation = function () {
  if(this.mypassword !== this.confirmpassword){
    return "wrong password please reenter";
  }
  else{
    return true;
  }
  //prototype for login details
};
$(document).ready(function(){
  $("button#logintop").click(function(){
  $(".modal").slideDown();
  $("#close").click(function(){
    $(".modal").slideUp();
  });
  });
  $("button#signup").click(function(){
  $(".modal2").slideDown();
  $("form#signupform").submit(function(event){
    event.preventDefault();
    $("li.remove").remove();
    var inputtednames=$("input#names").val();
    var inputedEmails=$("input#useremail").val();
    var inputtedUsername=$("input#username").val();
    var newUser=new User(inputtednames,inputedEmails,inputtedUsername);
    var inputtedPassword=String(parseInt($("input#pass").val()));
    var inputtedConfirmation=String(parseInt($("input#confirm").val()));
    var newPassword = new myPassword(inputtedPassword,inputtedConfirmation);
    newUser.userspassword.push(newPassword);
  $("ul#confirmed").append("<li class='remove'>" + newPassword.confirmation() + "</li>");
   });
  $("#closeit").click(function(){
    $(".modal2").slideUp();
  });
  });
  });
