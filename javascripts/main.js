$(document).ready(function () {
  // Toggle between the dark and light themes
  $(".toggle-icon").click(function() {
    $("body").toggleClass("light-theme").toggleClass("dark-theme");

    // Swap the HTML preview's body class
    var swap = $(".swap").html();
    if (swap == "light-theme") {
      $(".swap").html("dark-theme");
    }
    else if (swap == "dark-theme") {
      $(".swap").html("light-theme");
    }

    return false;
  });

  // Change the theme based on the time of day
  var now = new Date();
  var hour = now.getHours();
  if (hour < 7) {
    $("body").removeClass("light-theme").addClass("dark-theme");
    $(".swap").html("dark-theme");
  } else if (hour < 17) {
    $("body").removeClass("dark-theme").addClass("light-theme");
    $(".swap").html("light-theme");
  } else {
    $("body").removeClass("light-theme").addClass("dark-theme");
    $(".swap").html("dark-theme");
  }

  // Pulse the contrast icon until someone hovers over it
  $(".toggle-icon").hover(function() {
    $(this).removeClass("pulse");
  });

  // Parrallax the background while scrolling
  var deviceAgent = navigator.userAgent.toLowerCase();
  if (deviceAgent.match(/(iphone|ipod|ipad)/)) {
    // Do iOS specific stuff
  } else {
    $(window).scroll(function() {
      $(".background-1").css("transform","translate3d(0," + -($(window).scrollTop()/5) + "px, 0)");
      $(".background-2").css("transform","translate3d(0," + -($(window).scrollTop()/3) + "px, 0)");
      $(".background-3").css("transform","translate3d(0," + -($(window).scrollTop()/2) + "px, 0)");
    });
  }

  // Switch between the different previews
  $(".html-preview-link").click(function() {
    $(".preview-link").removeClass("active");
    $(".preview").removeClass("active");
    $(this).addClass("active");
    $("#html").addClass("active");

    return false;
  });

  $(".sass-preview-link").click(function() {
    $(".preview-link").removeClass("active");
    $(".preview").removeClass("active");
    $(this).addClass("active");
    $("#sass").addClass("active");

    return false;
  });

  $(".javascript-preview-link").click(function() {
    $(".preview-link").removeClass("active");
    $(".preview").removeClass("active");
    $(this).addClass("active");
    $("#javascript").addClass("active");

    return false;
  });

  $(".markdown-preview-link").click(function() {
    $(".preview-link").removeClass("active");
    $(".preview").removeClass("active");
    $(this).addClass("active");
    $("#markdown").addClass("active");

    return false;
  });

  // Add a link so iOS devices can tap to see the colour info
  $('<a class="tap" href="#"></a>').insertAfter('.info');
  $(".tap").click(function() {
    return false;
  });
});
