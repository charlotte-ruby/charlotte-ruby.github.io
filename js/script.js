$(document).ready(function(){

  /* backstretch slider */
  $.backstretch([
    "imgbg/bg-backstretch01.jpg",
    "imgbg/bg-backstretch02.jpg",
    "imgbg/bg-backstretch03.jpg",
    "imgbg/bg-backstretch04.jpg"
    ], {
      fade: 2000,
      duration: 6000
  });

  /* navbar */
  $(window).scroll(function(){
    if($(window).scrollTop() > 175){
      $('.navbar-primary .navbar-nav > li.dropdown.open').removeClass('open');
      $('.navbar-primary .navbar-collapse.in').removeClass('in');
    }
    if($(window).scrollTop() > 180){
        $('.navbar-secondary-hide > .navbar').addClass('navbar-fixed-top container');
        $('.navbar-secondary').removeClass('navbar-secondary-hide');
    }else{
        $('.navbar-secondary > .navbar').removeClass('navbar-fixed-top container');
        $('.navbar-secondary').addClass('navbar-secondary-hide');
    }
  });
  
  $('.navbar-primary').clone().prependTo('.navbar-secondary');
  $('.navbar-secondary > .navbar').removeClass('navbar-primary');
  $('.navbar-secondary > .navbar .navbar-collapse').attr('id', 'bs-example-navbar-collapse-2');
  $('.navbar-secondary > .navbar .navbar-toggle').attr('data-target', '#bs-example-navbar-collapse-2');


  /* magnify image */
  $('.portfolio-image').magnificPopup({
    delegate: '[data-image="image-group"]',
    type: 'image',
    gallery:{
      enabled:true
    },
    
  });

  $('.portfolio-image-alt').magnificPopup({
    type: 'image',
    delegate: 'a.image-zoom'
  });


  /* scrolltop */
  $('.scrolltop').on('click', function(event) {
    var $anchor = $(this);
    $('html, body').stop().animate({
        scrollTop: $($anchor.attr('href')).offset().top
    }, 1500, 'easeInOutExpo');
    event.preventDefault();
  });


  /* masonry layout */
  var $container = $('.container-blog');
  $container.imagesLoaded( function(){
    $container.masonry();
  });


  /* map contact */
  $("#map").gmap3({
    map: {
      options: {
        center: [-7.866315,110.389574],
        zoom: 12,
        scrollwheel: false
      }  
     },
    infowindow:{
      latLng: [-7.866315,110.389574],
      options:{
        content: "<div class='map-infowindow'><h3>Templateninja Inc.</h3><span>Email: email@domain.com</span><span>Phone: +1 123 45-67-89</span><span>Fax: +1 123 45-67-89</span><span>Yogyakarta, Ina Jimg St. 55791</span></div>"
      },
    }
  });

});