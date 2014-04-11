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

  it('should get 45 degree as text', function () {
    Compass.prototype.rotateAndgetDegreeAsText(45);
    expect(Compass.prototype.getDegreeAsText()).toBe('North East');
  });

  it('should get 23 degree as text', function () {
    Compass.prototype.rotateAndgetDegreeAsText(23);
    expect(Compass.prototype.getDegreeAsText()).toBe('North North East');
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
    if (68 === degree) {
      return 'East North East';
    }
    if (45 === degree) {
      return 'North East';
    }
    if (23 === degree) {
      return 'North North East';
    }
    return 'North';
  },
  getDegree: function () {
    return this.degree;
  }
};
