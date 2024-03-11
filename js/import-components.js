// Import Components JavaScript File
$(document).ready(() =>{

  // Call components via Ajax
  const componentRequest = (componentUrl) =>{
    $.ajax({
      url: componentUrl,
      beforeSend: () =>{
        $(".loading").slideDown();
      },

      success: (data) =>{
        setTimeout(() =>{
          $(".loading").slideUp();
          $("#principal-view").slideDown();
          $("#principal-view").css("display","fixed");
          $(".principal-view-content").html(data);
        }, 2000);
      }
    });
  }

  // Logistic map section import
    //$(".logistic-map-btn").click(() => componentRequest('../components/_logistic-map.html'));

  // Clients Carousel Section
   //$(".clients-carousel-btn").click(() => componentRequest('../components/_clients-carousel.html'));

  // Show Perfumery Section
    //$(".perfumery-product").click(() => componentRequest('../components/_perfumery.html'));

  // Show Optic Section
   //$(".optic-product").click(() => componentRequest('../components/_optic.html'));

  // Show Make-Up Section
   //$(".make-up-product").click(() => componentRequest('../components/_make-up.html'));

  // Show Personal-Care Section
   //$(".personal-care-product").click(() => componentRequest('../components/_personal-care.html'));

  // Show Login Panel Section
  $(".login-button").click(() => componentRequest('../components/_login.html'));

  // Show Dressing-Table Section
   //$(".dressing-table-product").click(() => componentRequest('../components/_dressing-table.html'));



  // Clients Carousel Animation
  $('.clients-carousel-content').slick({
    autoplay: true,
    autoplaySpeed: 2000,
    infinite: true,
    arrows: true
  });

  // Perfumery Carousel Animation
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

  // Optic Carousel Animation
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

  // Make-Up Carousel Animation
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

  // Dressing-Table Carousel Animation
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

  // Personal Care Carousel Animation
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
});
