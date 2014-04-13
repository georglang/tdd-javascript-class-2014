var jQuery = require('jquery');
var Compass = require('./Compass').Compass;

function Picture() {
  this.counter = 0;
}

Picture.prototype = {
  degree: 0,
  create: function () {
    var imageEl = jQuery(new Image());
    imageEl
        .load(function () {
          jQuery('#compassImage').append(imageEl);
          imageEl.attr('width', '500');
        })
        .attr('src', '/img/compass.png');
  },
  _getElement: function () {
    return jQuery('#'+this.idHTMLElement);
  },
  rotate: function (degree) {
    this.degree = degree;
    jQuery('#compassImage').css('-webkit-transform','rotate('+degree+'deg)');
  },
  getDegree: function () {
    this._getElement();
    return this.degree;
  }
};

Picture.prototype.create();
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
});

