var jQuery = require('jquery');

describe('Compass Tests', function () {
  it('should get degree', function () {
    expect(Compass.prototype.getDegree()).toBe(0);
  });

  it('should get text', function () {
    expect(Compass.prototype.getDegreeAsText()).toBe('North');
  });

  it('should show degree as text', function () {
    spyOn(Compass.prototype, 'showDegreeAsText');

    Compass.prototype.rotateAndShowDegreeAsText(0);
    expect(Compass.prototype.showDegreeAsText).toHaveBeenCalled();
  });

  it('should get degree', function () {
    spyOn(Compass.prototype, 'getDegree');

    Compass.prototype.getDegreeAsText();
    expect(Compass.prototype.getDegree).toHaveBeenCalled();
  });

  it('should get 90 degree as text', function () {
    Compass.prototype.rotateAndShowDegreeAsText(90);
    expect(Compass.prototype.getDegreeAsText()).toBe('East');
  });

  it('should get 68 degree as text', function () {
    Compass.prototype.rotateAndShowDegreeAsText(68);
    expect(Compass.prototype.getDegreeAsText()).toBe('East North East');
  });

  it('should get 45 degree as text', function () {
    Compass.prototype.rotateAndShowDegreeAsText(45);
    expect(Compass.prototype.getDegreeAsText()).toBe('North East');
  });

  it('should get 23 degree as text', function () {
    Compass.prototype.rotateAndShowDegreeAsText(23);
    expect(Compass.prototype.getDegreeAsText()).toBe('North North East');
  });

  it('should get degree as text', function () {
    spyOn(Compass.prototype, 'getDegreeAsText');

    Compass.prototype.showDegreeAsText();
    expect(Compass.prototype.getDegreeAsText).toHaveBeenCalled();
  });
});

describe('handling jQuery', function () {
  it('should rotate image', function () {
    spyOn(Image.prototype, 'rotate');
    Compass.prototype.rotateAndShowDegreeAsText(90);
    expect(Image.prototype.rotate).toHaveBeenCalled();
  });

  it('should return degree', function () {
    spyOn(Image.prototype, 'getDegree');
    Compass.prototype.getDegree();
    expect(Image.prototype.getDegree).toHaveBeenCalled();
  });

  it('should get jQuery element', function () {
    spyOn(Image.prototype, '_getElement');
    Image.prototype.getDegree();
    expect(Image.prototype._getElement).toHaveBeenCalled();
  });
});


function Compass() {
}

Compass.prototype = {
  degreeToTextMap: {
    0: 'North',
    23: 'North North East',
    45: 'North East',
    68: 'East North East',
    90: 'East'
  },
  rotateAndShowDegreeAsText: function (degree) {
    this.showDegreeAsText();
    Image.prototype.rotate(degree);
  },
  getDegreeAsText: function () {
    return this.degreeToTextMap[this.getDegree()];
  },
  getDegree: function () {
    return Image.prototype.getDegree();
  },
  showDegreeAsText: function () {
    this.getDegreeAsText();
  }
};

function Image() {

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