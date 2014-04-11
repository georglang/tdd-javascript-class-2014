describe('Compass Tests', function () {
  it('should show degree', function () {
    expect(Compass.prototype.showDegree()).toBe(0);
  });

  it('should get text', function () {
    expect(Compass.prototype.getDegreeAsText()).toBe('North');
  });

  it('should get degree as text', function () {
    spyOn(Compass.prototype, 'getDegreeAsText');

    Compass.prototype.rotateAndShowDegreeAsText(0);
    expect(Compass.prototype.getDegreeAsText).toHaveBeenCalled();
  });

  it('should showDegree', function () {
    spyOn(Compass.prototype, 'showDegree');

    Compass.prototype.getDegreeAsText();
    expect(Compass.prototype.showDegree).toHaveBeenCalled();
  });

  it('should get 90 degree as text', function () {
    Compass.prototype.rotateAndShowDegreeAsText(90);
    expect(Compass.prototype.getDegreeAsText()).toBe('East');
  });
});

function Compass() {
//this.degree = 0;
}

Compass.prototype = {
  degree: 0,
  rotateAndShowDegreeAsText: function (degree) {
    this.degree = degree;
    this.getDegreeAsText();
  },
  getDegreeAsText: function () {
    var degree = this.showDegree();
    if (90 === degree) {
      return 'East';
    }
    return 'North';
  },
  showDegree: function () {
    return this.degree;
  }
};
