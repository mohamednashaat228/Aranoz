$(document).ready(function () {

  // slider from (slick)
  $('.header-slider').slick({
    infinite: true,
    speed: 700,
    autoplay: true,
    cssEase: 'linear',
  });

  // navbar (dropdown) // not running perfect XXXXXXXXXXXXXX
  // $(".dropdown").hover(function () {
  //   $(".dropdown-menu").slideToggle();
  // });


  // change navbar backgroundColor when scroll
  $(window).scroll(function () {
    if ($(window).scrollTop() > 100) {
      $("nav").css("background-color", "#FFF");
      $("nav").css("box-shadow", "0 10px 15px rgb(25 25 25 / 10%)");
    } else {
      $("nav").css("background-color", "transparent");
      $("nav").css("box-shadow", "none");
    }
  });


  // products-list
  $('.products-list-container').slick({
    infinite: true,
    speed: 700,
    autoplay: true,
    cssEase: 'linear',
  });


  // offer (count-down)
  $('.countdown').dsCountDown({
    endDate:new Date("December 24, 2022 23:59:00")
    });
    

  // navbar-input (search)
  //-1
  $('.search-click').click(function () {
    $('.navbar-input').slideToggle(300);
  });
  //-2
  $('.close-button').click(function () {
    $('.navbar-input').slideUp(300);
  });


  //button-to-up
  //-1
  $(window).scroll(function () {
    if($(window).scrollTop() > 700) {
      $('.button-to-up').fadeIn(40);
    } else {
      $('.button-to-up').fadeOut(400);
    }
  });
  //-2
  $('.button-to-up').click(function () {
    // $(window).scrollTop(0)
    // - animate is not running on window , so replacing it with html
    // - html running on chrome, body running on other browsers, so we use both of them
    $('html, body').animate({scrollTop: '0'}, 1200);
  });


  // spinner (loading)
  $('.spinner').fadeOut(1500, function () {
    $('body').css({overflow: 'auto'});
  });

  // when press link in navbar >> go to section (related to this link)
  $('.navbar .nav-link').click(function () {
    
    // 1.static
    // $('html, body').animate({scrollTop: '5200'}, 2000)

    // 2.dynamic
    // $('html, body').animate({scrollTop: $('#contact').offset().top}, 2000)

    // 3.dymanic / logic / programming (best method)
    let myHref = $(this).attr("href");
    // console.log(myHref);
    $('html, body').animate({scrollTop: $(myHref).offset().top - 50}, 1500);


  });

});



// for test
// change navbar backgroundColor when scroll (js)

// window.onscroll = function () {

//   if (window.scrollY > 100) {
//     console.log(scrollY);
//     let nv = document.getElementById("nv");
//     nv.style.backgroundColor = "red";
//   } else {
//     nv.style.backgroundColor = "transparent";
//   }
// }


// for test
// window.onscroll = function () {
//   console.log(window.scrollY);
// }


