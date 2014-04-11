describe('Compass Tests', function () {
  it('should get degree', function () {
    expect(Compass.prototype.getDegree()).toBe(0);
  });

  it('should get text', function () {
    expect(Compass.prototype.getDegreeAsText()).toBe('North');
  });

  it('should get degree as text', function () {
    spyOn(Compass.prototype, 'getDegreeAsText');

    Compass.prototype.rotateAndShowDegreeAsText(0);
    expect(Compass.prototype.getDegreeAsText).toHaveBeenCalled();
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
  degree: 0,
  rotateAndShowDegreeAsText: function (degree) {
    this.degree = degree;
    this.getDegreeAsText();
  },
  getDegreeAsText: function () {
    return this.degreeToTextMap[this.getDegree()];
  },
  getDegree: function () {
    return this.degree;
  }
};
