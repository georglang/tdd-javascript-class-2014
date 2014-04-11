describe('Compass Tests', function () {
  it('should show degree', function () {
    expect(Compass.prototype.showDegree()).toBe(0);
  });

  it('should show text', function () {
    expect(Compass.prototype.showDegreeAsText()).toBe('North');
  });

  it('should show degree as text', function () {
    spyOn(Compass.prototype, 'showDegreeAsText');

    Compass.prototype.rotateAndShowDegreeAsText(0);
    expect(Compass.prototype.showDegreeAsText).toHaveBeenCalled();
  });

  it('should showDegree', function () {
    spyOn(Compass.prototype, 'showDegree');

    Compass.prototype.showDegreeAsText();
    expect(Compass.prototype.showDegree).toHaveBeenCalled();
  });

  it('should show 90 degree as text', function () {
    Compass.prototype.rotateAndShowDegreeAsText(90);
    expect(Compass.prototype.showDegreeAsText()).toBe('East');
  });
});

function Compass() {
//this.degree = 0;
}

Compass.prototype = {
  degree: 0,
  rotateAndShowDegreeAsText: function (degree) {
    this.degree = degree;
    this.showDegreeAsText();
  },
  showDegreeAsText: function () {
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
