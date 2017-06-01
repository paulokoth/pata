
$(document).ready(function(){
  $("button#message").click(function(){
    $(".messagemodal").show();
    $("form#messaging").submit(function(event){
      event.preventDefault();
      var inputedEmails=$("input").val();
      var inputtedDescription=$("textarea").val();
      if(inputedEmails == "" || inputtedDescription == ""){
        alert("please input your email and desription");
      }
      else{
        alert("your message has been received ");
        $("form#messaging")[0].reset();
        $(".messagemodal").hide();
     }
    });
  });
  $("#calling").click(function(){
    $(".callsmodal").show();
  });
  $("#phonemessage").click(function () {
    $(".yourMessageModal").slideDown();
  });
  $("#close").click(function () {
    $(".yourMessageModal").slideUp();
  });
  $("form#FormMessage").submit(function(event){
    event.preventDefault();
    var inputtedMessage=$("textarea#yourMessage").val();
    var inputedEmail=$("input#yourEmail").val();
    if(inputtedMessage == "" || inputedEmail == ""){
      alert("please fill the fields please");
    }
    else{
      alert("you message has been received");
      $("#theMessaging").hide();
      $(".callsmodal").hide();
    }
  });
  $("#phonecall").click(function(){
    $(".phonecallwindow").slideDown();
  });
  $("#hangup").click(function(){
    $("#callended").show();
      $("#callended").hide(4000);
    $(".phonecallwindow").slideUp(3000);
    $(".callsmodal").slideUp(3000);
  });
  });
