// JavaScript Document
$(document).ready(() =>{

  // Set Loading Section Time & Features
  setTimeout(function(){
    $(".loading").slideUp();
    $("body").css("overflow-y","scroll");
  }, 3000);

  // Set Scroll Button Function
  $(".top-button").click(function(){
    $("body,html").animate({
      scrollTop: "0px"
    },1000);
  });

  // Main-Content Features
  $("#close-button").click(() =>{
    $("#principal-view").slideUp();
    $("#principal-view-content").empty();
  });

  // Navbar Button Functionality
  let state = true;
  $("#navbar-button").click(() =>{
    if(state == true){
      $("nav ul").slideDown();
      $("nav ul").css("display","flex");
      state = false;
    }
    else{
      $("nav ul").slideUp();
      state = true;
    }
  });

  //Show & Hide Scroll Button
  $(window).scroll(function(){
    if($(this).scrollTop() > 400){
      $(".top-button").slideDown(500);
      $(".top-button").css({
        "display":"flex",
        "flex-direction":"column",
        "justify-content":"center",
        "align-items":"center"
      });
    }else{
      $(".top-button").slideUp(500);
    }
  });

  // Slick Cover Section
  $('.cover-section').slick({
    autoplay: true,
    autoplaySpeed: 4500,
    infinite: true
  });

  // About Us Logos Efects
  $(".ab-us-logo").mouseover(function(){
    $(this).addClass("heartBeat");
  });
  $(".ab-us-logo").mouseleave(function(){
    $(this).removeClass("heartBeat");
  });

  // Set Tada Effect to Products Icons
  $(".general-product").mouseover(function(){
    $(this).children("i").addClass("animated tada");
  });

  $(".general-product").mouseleave(function(){
    $(this).children("i").removeClass("animated tada");
  });

  // Brands Carousel animation
  $('.brands-carousel').slick({
    autoplay: true,
    autoplaySpeed: 2000,
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 4,
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
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
    });
});
