function User(names, email, username) {
  this.userFullnames = names;
  this.userEmail = email;
  this.usersUsername = username;
  this.userspassword = [];
};
//object properties for password
function myPassword(password, confirm) {
  this.mypassword = password;
  this.confirmpassword = confirm;
};
//prototype for comparing the two password
myPassword.prototype.confirmation = function() {
  return this.mypassword === this.confirmpassword;
  //prototype for login details
};


$(document).ready(function() {
  $("button#logintop").click(function() {
    $(".modal").slideDown();
    $("form#loginform").submit(function(event) {
      event.preventDefault();
      var inputtedusername = $("input#username").val();
      var inputtedpassword = String(parseInt($("input#password").val()));
      if (inputtedusername == "" || inputtedpassword == "") {
        alert("please fill all the fields");
      } else {
        $(".modal").slideUp();
        $("#welcomeback").fadeIn(2000);
        $("#welcomeback").fadeOut(2000);
      }
    });

    $("#close").click(function() {
      $(".modal").slideUp();
    });
  });

  $("button#message").click(function() {
    $(".messagemodal").show();
    $("form#messaging").submit(function() {
      $(".messagemodal").hide();
    });
  });

  $("button#signup").click(function() {
    $(".modal2").slideDown();
    $("form#signupform").submit(function(event) {
      event.preventDefault();
      $("li.remove").remove();
      var inputtednames = $("input#names").val();
      var inputedEmails = $("input#useremail").val();
      var inputtedUsername = $("input#username").val();
      var newUser = new User(inputtednames, inputedEmails, inputtedUsername);
      var inputtedPassword = String(parseInt($("input#pass").val()));
      var inputtedConfirmation = String(parseInt($("input#confirm").val()));
      var newPassword = new myPassword(inputtedPassword, inputtedConfirmation);
      newUser.userspassword.push(newPassword);
      var re = new RegExp();
      re = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
      var validation = re.test(inputedEmails);
      if (validation == false || newPassword.confirmation() == false) {
        alert("Enter a valid gmail or make sure your passwords match");
      } else {
        //$("ul#confirmed").append("<li class='remove'>" + newPassword.confirmation() + "</li>");
        $("form#signupform")[0].reset();
        $(".modal2").slideUp();
        $("#welcome").fadeIn(2000);
        $("#welcome").fadeOut(2000);
      }
    });
    $("#closeit").click(function() {
      $(".modal2").slideUp();
    });
  });
  var slideIndex = 0;
  showSlides();

  function showSlides() {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) {
      slideIndex = 1
    }
    slides[slideIndex - 1].style.display = "block";
    setTimeout(showSlides, 2000); // Change image every 2 seconds
  }

  $(".filter-button").click(function() {
    var value = $(this).attr('data-filter');

    if (value == "all") {
      //$('.filter').removeClass('hidden');
      $('.filter').show('1000');
    } else {
      //            $('.filter[filter-item="'+value+'"]').removeClass('hidden');
      //            $(".filter").not('.filter[filter-item="'+value+'"]').addClass('hidden');
      $(".filter").not('.' + value).hide('2000');
      $('.filter').filter('.' + value).show('2000');

    }
  });

  if ($(".filter-button").removeClass("active")) {
    $(this).removeClass("active");
  }
  $(this).addClass("active");
});
