//back-end
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
  var inputtedPassword=String(parseInt($("input#pass").val()));
  var inputtedConfirmation=String(parseInt($("input#confirm").val()));
  var newPassword = new myPassword(inputtedPassword,inputtedConfirmation);
  $("ul#confirmed").append("<li class='remove'>" + newPassword.confirmation() + "</li>");
   });
  $("#closeit").click(function(){
    $(".modal2").slideUp();
  });
  });
  });
