var jQuery = require('jquery');
var Compass = require('./Compass').Compass;

function Picture() {
    var imageEl = jQuery(new Image());
    imageEl
        .load(function () {
            jQuery('#compassImage').append(imageEl);
            imageEl.attr('width', '500');
        })
        .attr('src', '/img/compass.png');
}

new Picture();
var compass = new Compass();
jQuery(window).scroll(function() {
  var wheelDelta;
  if (window.pageYOffset > compass.lastScrollPosition) {
    wheelDelta = 1;
  }
  else {
    wheelDelta = -1;
  }

  compass.lastScrollPosition = window.pageYOffset;
  compass.handleScrollEvent(wheelDelta);

    var angle = jQuery(document).scrollTop();
    jQuery('#compassImage').css('-webkit-transform','rotate('+angle+'deg)');
});
