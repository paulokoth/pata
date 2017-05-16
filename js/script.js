
function myPassword(password,confirm){
  this.mypassword=password;
  this.confirmpassword=confirm;
};
$(document).ready(function(){
  $("button#logintop").click(function(){
  $(".modal").slideDown();
  $("#close").click(function(){
    $(".modal").hide();
  });
  });
  $("button#signup").click(function(){
  $(".modal2").slideDown();
  $("form#signup").submit(function(event){
  var inputtedPassword=String(parseInt($("input#password")).val());
  var inputtedConfirmation=String(parseInt($("input#confirm")).val());
   });
  $("#closeit").click(function(){
    $(".modal2").hide();
  });
  });
  });
