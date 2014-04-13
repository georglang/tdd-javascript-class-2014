var jQuery = require('jquery');

function Document() {}

Document.prototype = {
  scrollHandler: null,
  bindScrollCallback: function (callback) {
    this.scrollHandler = callback;

  },
  triggerScrollEventWithDelta: function (deltaPosition) {
    this.scrollHandler(deltaPosition);
  },
  insertIntoHTML: function (idHTMLElement, degreeAsText) {
    jQuery('#directionHeading').html(degreeAsText);
  }
};


function Compass() {
  this.image = new Picture();
  this.idHTMLElement = "compassImage";
  this.lastScrollPosition = 0;
}

Compass.prototype = {
  degreeToTextMap: {
    0: 'North',
    23: 'North North East',
    45: 'North East',
    68: 'East North East',
    90: 'East',
    113: 'East South East',
    135: 'South East',
    158: 'South South East',
    180: 'South',
    203: 'South South West',
    225: 'South West',
    284: 'West South West',
    270: 'West',
    293: 'West North West',
    315: 'North West',
    338: 'North North West'
  },
  handleScrollEvent: function (deltaPosition) {
    var degree = this.convertDeltaPositionToDegree(deltaPosition);
    this.rotateAndShowDegreeAsText(degree);
  },
  rotateAndShowDegreeAsText: function (degree) {
    this.showDegreeAsText();
    this.image.rotate(degree);
  },
  getDegreeAsText: function () {
    return (this.degreeToTextMap[this.getDegree()] || this.getDegree() + '°');
  },
  getDegree: function () {
    return this.image.getDegree();
  },
  showDegreeAsText: function () {
    Document.prototype.insertIntoHTML(this.idHTMLElement, this.getDegreeAsText());
  },
  convertDeltaPositionToDegree: function (deltaPosition) {
    if (deltaPosition > 0) {
      this.image.counter += 1;
    } else if (deltaPosition < 0) {
      this.image.counter -= 1;

      if(this.image.counter < 0) {
        this.image.counter = 359;
      }
    }
    return (this.image.counter % 360);
  }
};


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

