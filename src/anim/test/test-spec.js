var jQuery = require('jquery');
var Compass = require('../src/anim/Compass').Compass;


describe('Compass Tests', function () {
  var compass;
  beforeEach(function () {
    compass = new Compass();
  });

  it('should get degree', function () {
    expect(compass.getDegree()).toBe(0);
  });

  it('should get text', function () {
    expect(compass.getDegreeAsText()).toBe('North');
  });

  it('should show degree as text', function () {
    spyOn(compass, 'showDegreeAsText');

    compass.rotateAndShowDegreeAsText(0);
    expect(compass.showDegreeAsText).toHaveBeenCalled();
  });

  it('should get degree', function () {
    spyOn(compass, 'getDegree');

    compass.getDegreeAsText();
    expect(compass.getDegree).toHaveBeenCalled();
  });

  it('should get 90 degree as text', function () {
    compass.rotateAndShowDegreeAsText(90);
    expect(compass.getDegreeAsText()).toBe('East');
  });

  it('should get 68 degree as text', function () {
    compass.rotateAndShowDegreeAsText(68);
    expect(compass.getDegreeAsText()).toBe('East North East');
  });

  it('should get 45 degree as text', function () {
    compass.rotateAndShowDegreeAsText(45);
    expect(compass.getDegreeAsText()).toBe('North East');
  });

  it('should get 23 degree as text', function () {
    compass.rotateAndShowDegreeAsText(23);
    expect(compass.getDegreeAsText()).toBe('North North East');
  });

  it('should get degree as text', function () {
    spyOn(compass, 'getDegreeAsText');

    compass.showDegreeAsText();
    expect(compass.getDegreeAsText).toHaveBeenCalled();
  });

  it('should convert delta position to degree', function () {
    expect(compass.convertDeltaPositionToDegree(0)).toBe(0);
  });

  it('should call convertDeltaPositionToDegree', function () {
    spyOn(compass, 'convertDeltaPositionToDegree');

    compass.handleScrollEvent(10);
    expect(compass.convertDeltaPositionToDegree).toHaveBeenCalled();
  });

  it('should degree as number with °', function () {
    compass.rotateAndShowDegreeAsText(13);
    expect(compass.getDegreeAsText()).toBe('13°');
  });

  it('should return positive degree when delta position is -1 ', function () {
    expect(compass.convertDeltaPositionToDegree(-1)).toBe(359);
  });
});

describe('handling jQuery', function () {
  var compass;
  beforeEach(function () {
    compass = new Compass();
  });

  it('should rotate image', function () {
    spyOn(compass.image, 'rotate');
    compass.rotateAndShowDegreeAsText(90);
    expect(compass.image.rotate).toHaveBeenCalled();
  });

  it('should return degree', function () {
    spyOn(compass.image, 'getDegree');
    compass.getDegree();
    expect(compass.image.getDegree).toHaveBeenCalled();
  });

  it('should get jQuery element', function () {
    spyOn(compass.image, '_getElement');
    compass.image.getDegree();
    expect(compass.image._getElement).toHaveBeenCalled();
  });

  it('should call handleScrollEvent with delta position 10', function () {
    spyOn(compass, 'handleScrollEvent');
    Document.prototype.bindScrollCallback(compass.handleScrollEvent);
    Document.prototype.triggerScrollEventWithDelta(10);
    expect(compass.handleScrollEvent).toHaveBeenCalledWith(10);
  });

  it('should call rotateAndShowDegreeAsText delta position 10', function () {
    spyOn(compass, 'rotateAndShowDegreeAsText');
    compass.handleScrollEvent(10);
    expect(compass.rotateAndShowDegreeAsText).toHaveBeenCalled();
  });

  it('should call insert degree into direction heading', function () {
    spyOn(Document.prototype, 'insertIntoHTML');
    compass.showDegreeAsText();
    expect(Document.prototype.insertIntoHTML).toHaveBeenCalled();
  });
});

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
    //    jQuery('#'+idHTMLElement).html(degreeAsText);
  }
};





function Image() {
  this.counter = 0;
}

Image.prototype = {
  degree: 0,
  _getElement: function () {
//    return jQuery('#' + this._imageId);
  },
  rotate: function (degree) {
    this.degree = degree;
  },
  getDegree: function () {
    this._getElement();
    return this.degree;
  }
};