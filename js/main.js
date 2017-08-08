jQuery(function($) { 'use strict',

  //Countdown js
  $("#countdown").countdown({ date: "26 Aug 2017 9:00:00", format: "on" }, function() { });
  $('#countdown_output').text('26/08/2017')

  //Scroll Menu

  function menuToggle() {
    var windowWidth = $(window).width();

    if(windowWidth > 767 ) {
      $(window).on('scroll', function() {
        if( $(window).scrollTop()>405 ) {
          $('.main-nav').addClass('fixed-menu animated slideInDown');
        } else {
          $('.main-nav').removeClass('fixed-menu animated slideInDown');
        }
      });
    } else {

      $('.main-nav').addClass('fixed-menu animated slideInDown');

    }
  }

  menuToggle();


  // Carousel Auto Slide Off
  $('#event-carousel, #twitter-feed, #sponsor-carousel ').carousel({
    interval: 5000
  });

  $(".carousel").on("touchstart", function(event){
    var xClick = event.originalEvent.touches[0].pageX;
    $(this).one("touchmove", function(event){
      var xMove = event.originalEvent.touches[0].pageX;
      if( Math.floor(xClick - xMove) > 5 ){
        $(".carousel").carousel('next');
      } else if( Math.floor(xClick - xMove) < -5 ){
        $(".carousel").carousel('prev');
      }
    });
    $(".carousel").on("touchend", function(){
      $(this).off("touchmove");
    });
  });

  // Contact form validation
  var form = $('.contact-form');
  form.submit(function () {'use strict',
    $this = $(this);
    $.post($(this).attr('action'), function(data) {
      $this.prev().text(data.message).fadeIn().delay(3000).fadeOut();
    },'json');
    return false;
  });

  $( window ).resize(function() {
    menuToggle();
  });

  $('.main-nav ul').onePageNav({
    currentClass: 'active',
    changeHash: false,
    scrollSpeed: 900,
    scrollOffset: 0,
    scrollThreshold: 0.3,
    filter: ':not(.no-scroll)'
  });

});


// Google Map Customization
(function(){

  var map;

  map = new GMaps({
    el: '#gmap',
    lat: -23.5382231,
    lng: -46.7616317,
    scrollwheel:false,
    zoom: 16,
    zoomControl : false,
    panControl : false,
    streetViewControl : false,
    mapTypeControl: false,
    overviewMapControl: false,
    clickable: false
  });

  var image = 'images/map-icon.png';
  map.addMarker({
    lat: -23.538228,
    lng: -46.759443,
    icon: image,
    animation: google.maps.Animation.DROP,
    verticalAlign: 'bottom',
    horizontalAlign: 'center',
    backgroundColor: '#3e8bff',
  });


  var styles = [

    {
      "featureType": "road",
      "stylers": [
        { "color": "#b4b4b4" }
      ]
    },{
      "featureType": "water",
      "stylers": [
        { "color": "#d8d8d8" }
      ]
    },{
      "featureType": "landscape",
      "stylers": [
        { "color": "#f1f1f1" }
      ]
    },{
      "elementType": "labels.text.fill",
      "stylers": [
        { "color": "#000000" }
      ]
    },{
      "featureType": "poi",
      "stylers": [
        { "color": "#d9d9d9" }
      ]
    },{
      "elementType": "labels.text",
      "stylers": [
        { "saturation": 1 },
        { "weight": 0.1 },
        { "color": "#000000" }
      ]
    }

  ];

  map.addStyle({
    styledMapName:"Styled Map",
    styles: styles,
    mapTypeId: "map_style"
  });

  map.setStyle("map_style");
}());



