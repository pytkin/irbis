$(function () {
  'use strict';

  var ymaps = window.ymaps;

  var $container = $('.masonry-grid');
  // initialize
  $container.masonry({
    columnWidth: '.grid-sizer',
    itemSelector: '.work-card',
    percentPosition: true
  });

  $('.owl-carousel').owlCarousel({
    loop: true,
    nav: true,
    autoWidth: true,
    navText: [
      '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 17 33"><path fill="#C0C0C0" d="M16.6 30.8c.5.5.5 1.4 0 1.9s-1.3.5-1.8 0L.4 17.4c-.5-.5-.5-1.4 0-1.9L14.8.4c.5-.5 1.3-.5 1.8 0s.5 1.4 0 1.9L3.4 16.5l13.2 14.3z"/></svg>',
      '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 17 33"><path fill="#C0C0C0" d="M13.6 16.5L.4 2.3C-.1 1.8-.1.9.4.4s1.3-.5 1.8 0l14.5 15.2c.5.5.5 1.4 0 1.9L2.2 32.6c-.5.5-1.3.5-1.8 0s-.5-1.4 0-1.9l13.2-14.2z"/></svg>'
    ]
  });

  function initLocationMap() {
    var myMap = new ymaps.Map('locationMap', {
          center: [59.913695, 30.350884],
          zoom: 17,
          controls: []
        });
				myMap.behaviors.disable(['drag', 'rightMouseButtonMagnifier', 'leftMouseButtonMagnifier', 'multiTouch', 'dblClickZoom', 'scrollZoom']);
    var myPlacemark = new ymaps.Placemark(myMap.getCenter(), {}, {
          iconLayout: 'default#image',
          iconImageHref: 'img/map-marker.svg',
          iconImageSize: [23, 33],
          iconImageOffset: [-11, -33]
        });

    myMap.geoObjects.add(myPlacemark);
  }

  ymaps.ready(initLocationMap);

});
