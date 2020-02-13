// Import Components JavaScript File
$(document).ready(() =>{

  // Logistic map section import
  $(".logistic-map-btn").click(function(){
    $(".principal-view-content").load("../components/_logistic-map.html");
    $("#principal-view").slideDown();
    $("#principal-view").css("display","fixed");
  });

  // Clients Carousel Section
  $(".clients-carousel-btn").click(function(){
    $(".principal-view-content").load("../components/_clients-carousel.html");
    $("#principal-view").slideDown();
    $("#principal-view").css("display","fixed");
  });

  // Clients Carousel Animation
  $('.clients-carousel-content').slick({
    autoplay: true,
    autoplaySpeed: 2000,
    infinite: true,
    arrows: true
  });

  // Show Perfumery Section
  $(".perfumery-product").click(function(){
    $(".principal-view-content").load("../components/_perfumery.html");
    $("#principal-view").slideDown();
    $("#principal-view").css("display","fixed");
  });

  // Perfumery Carousel Features
  $('.perfumery-carousel').slick({
    autoplay: true,
    autoplaySpeed: 2000,
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });

  // Show Optic Section
  $(".optic-product").click(function(){
    $(".principal-view-content").load("../components/_optic.html");
    $("#principal-view").slideDown();
    $("#principal-view").css("display","fixed");
  });

  // Optic Carousel Features
  $('.optic-carousel').slick({
    autoplay: true,
    autoplaySpeed: 2000,
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 400,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });

  // Show Make-Up Section
  $(".make-up-product").click(function(){
    $(".principal-view-content").load("../components/_make-up.html");
    $("#principal-view").slideDown();
    $("#principal-view").css("display","fixed");
  });

  // Make-Up Carousel Features
  $('.make-up-carousel').slick({
    autoplay: true,
    autoplaySpeed: 2000,
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });

  // Show Dressing-Table Section
  $(".dressing-table-product").click(function(){
    $(".principal-view-content").load("../components/_dressing-table.html");
    $("#principal-view").slideDown();
    $("#principal-view").css("display","fixed");
  });

  // Dressing-Table Carousel Features
  $('.dressing-table-carousel').slick({
    autoplay: true,
    autoplaySpeed: 2000,
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });

  // Show Personal-Care Section
  $(".personal-care-product").click(function(){
    $(".principal-view-content").load("../components/_personal-care.html");
    $("#principal-view").slideDown();
    $("#principal-view").css("display","fixed");
  });

  // Personal Care Carousel Features
  $('.personal-care-carousel').slick({
    autoplay: true,
    autoplaySpeed: 2000,
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });

  // Show Login Panel Section
  $(".login-button").click(function(){
    $(".principal-view-content").load("../components/_login.html");
    $("#principal-view").slideDown();
    $("#principal-view").css("display","fixed");
  });
});
