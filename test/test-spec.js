describe('Compass Tests', function () {
  it('should get degree', function () {
    expect(Compass.prototype.getDegree()).toBe(0);
  });

  it('should get text', function () {
    expect(Compass.prototype.getDegreeAsText()).toBe('North');
  });

  it('should get degree as text', function () {
    spyOn(Compass.prototype, 'getDegreeAsText');

    Compass.prototype.rotateAndgetDegreeAsText(0);
    expect(Compass.prototype.getDegreeAsText).toHaveBeenCalled();
  });

  it('should get degree', function () {
    spyOn(Compass.prototype, 'getDegree');

    Compass.prototype.getDegreeAsText();
    expect(Compass.prototype.getDegree).toHaveBeenCalled();
  });

  it('should get 90 degree as text', function () {
    Compass.prototype.rotateAndgetDegreeAsText(90);
    expect(Compass.prototype.getDegreeAsText()).toBe('East');
  });

  it('should get 68 degree as text', function () {
    Compass.prototype.rotateAndgetDegreeAsText(68);
    expect(Compass.prototype.getDegreeAsText()).toBe('East North East');
  });
});

function Compass() {}

Compass.prototype = {
  degree: 0,
  rotateAndgetDegreeAsText: function (degree) {
    this.degree = degree;
    this.getDegreeAsText();
  },
  getDegreeAsText: function () {
    var degree = this.getDegree();
    if (90 === degree) {
      return 'East';
    }
    return 'North';
  },
  getDegree: function () {
    return this.degree;
  }
};
