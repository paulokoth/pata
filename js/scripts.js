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
  if (this.mypassword !== this.confirmpassword) {
    return "wrong password please reenter";
  } else {
    return true;
  }
  //prototype for login details
};
$(document).ready(function() {
  $("button#logintop").click(function() {
    $(".modal").slideDown();
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
      $("ul#confirmed").append("<li class='remove'>" + newPassword.confirmation() + "</li>");
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
