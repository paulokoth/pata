$(document).ready(function(){
 $("button#message").click(function(){
   $(".messagemodal").show();
   $("form#messaging").submit(function(){
       $(".messagemodal").hide();
   });
 });
 });
