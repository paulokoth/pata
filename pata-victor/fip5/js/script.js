
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
return this.mypassword === this.confirmpassword;
//prototype for login details
};
$(document).ready(function(){
$("button#logintop").click(function(){
$(".modal").slideDown();
$("form#loginform").submit(function(event){
  event.preventDefault();
  var inputtedusername=$("input#username").val();
  var inputtedpassword=String(parseInt($("input#password").val()));
  if(inputtedusername == "" || inputtedpassword == ""){
    alert("please fill all the fields");
  }
  else{
    $(".modal").slideUp();
    $("#welcomeback").fadeIn();
    $("#welcomeback").fadeOut();
  }
});
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
   var re=new RegExp();
     re = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
     var validation=re.test(inputedEmails);
 if(validation == false || newPassword.confirmation() == false){
    alert("Enter a valid gmail or make sure your passwords match");
 }
 else {
//$("ul#confirmed").append("<li class='remove'>" + newPassword.confirmation() + "</li>");
$("form#signupform")[0].reset();
$(".modal2").slideUp();
$("#welcome").fadeIn();
$("#welcome").fadeOut();
}
});
$("#closeit").click(function(){
 $(".modal2").slideUp();
});
});
});
