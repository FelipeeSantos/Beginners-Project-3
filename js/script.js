$(window).on("load", function () {

  $("#status").fadeOut();
  $("#preloader").delay(350).fadeOut("slow");

});

$(function () {
  $("#team-members").owlCarousel({
    autoplay: true,
    autoplayHoverPause: true,
    dots: false,
    items: 2,
    loop: true,
    nav: true,
    navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
    responsive: {
      0: {

        items: 1

      },

      480: {

        items: 2

      }
    },
    smartSpeed: 700
  });
});

$(function () {

  $("#progress-elements").waypoint(function () {

    $(".progress-bar").each(function () {

      $(this).animate({

        width: $(this).attr("aria-valuenow") + "%"

      }, 500);

    });

    this.destroy();

  }, { offset: 'bottom-in-view' });

});

$(function () {

  $("#services-tabs").responsiveTabs({

    animation: "slide"

  });

});

$(window).on("load", function () {


  $("#isotope-filters").on("click", "button", function () {

    var filterValue = $(this).attr("data-filter");

    $("#isotope-container").isotope({

      filter: filterValue

    });

    $("#isotope-filters").find(".active").removeClass("active");
    $(this).addClass("active");

  });

});

$(function () {

  $("#portfolio-wrapper").magnificPopup({

    delegate: 'a',
    type: 'image',
    gallery: {

      enabled: true

    }

  });

});

$(function () {
  $("#testimonial-slider").owlCarousel({
    autoplay: true,
    autoplayHoverPause: true,
    dots: false,
    items: 1,
    loop: true,
    nav: true,
    navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
    smartSpeed: 700
  });
});

$(function () {

  $(".counter").counterUp({
    delay: 10,
    time: 2000
  });

});

$(function () {
  $("#clients-list").owlCarousel({
    autoplay: true,
    autoplayHoverPause: true,
    dots: false,
    items: 6,
    loop: true,
    nav: true,
    navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
    responsive: {
      0: {

        items: 2

      },

      480: {

        items: 3

      },

      768: {

        items: 6

      },
    },
    smartSpeed: 700
  });
});

$(window).on("load", function () {

  var addressString = "230 Broadway, NY, New York 10007, USA"
  var myLatitudeAndLongitude = { lat: 40.712742, lng: -74.005966 };
  var map = new google.maps.Map(document.getElementById("map"), {
    zoom: 11,
    center: myLatitudeAndLongitude
  });

  var marker = new google.maps.Marker({
    position: myLatitudeAndLongitude,
    map: map,
    title: "Click to See Address"
  });

  var infowindow = new google.maps.InfoWindow({
    content: addressString
  });

  marker.addListener("click", function () {
    infowindow.open(map, marker);
  });

});

$(function () {

  showHideNav();

  $(window).scroll(function () {

    showHideNav();

  });

  function showHideNav() {

    if ($(window).scrollTop() > 50) {

      $("nav").addClass("white-nav-top");
      $(".navbar-brand img").attr("src", "img/logo/logo-dark.png");
      $("#back-to-top").fadeIn();

    } else {

      $("nav").removeClass("white-nav-top");
      $(".navbar-brand img").attr("src", "img/logo/logo.png");
      $("#back-to-top").fadeOut();

    }

  }

});

$(function () {

  $("a.smooth-scroll").click(function (event) {

    event.preventDefault();

    var sectionId = $(this).attr("href");

    $("html, body").animate({

      scrollTop: $(sectionId).offset().top - 64

    }, 1250, "easeInOutCirc");

  });

});

$(function () {

  $("#mobile-nav-open-btn").click(function () {

    $("#mobile-nav").css("height", "100%");

  });

  $("#mobile-nav-close-btn, #mobile-nav a").click(function () {

    $("#mobile-nav").css("height", "0%");

  });

});

$(function () {

  new WOW().init();

});

$(window).on("load", function () {

  $("#home-heading-1").addClass("animated fadeInDown");
  $("#home-heading-2").addClass("animated fadeInLeft");
  $("#home-text").addClass("animated zoomIn");
  $("#home-btn").addClass("animated zoomIn");
  $("#arrow-down i").addClass("animated fadeInDown infinite");

});
