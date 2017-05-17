// user logic with submit function that saves the form
$(document).ready(function() {
  $("form.reg").submit(function() {
    event.preventDefault();

    var education = $("#education").val();
    var profession = $(#"profession").val();
    var skills = $("#skills").val();
    var city = $("#city").val();
    var location = $("#location").val();
    var phonenumber = String(parsInt($("#phone-number").val()));
    var comment =$("#comment").val();
  });
});
