describe('Compass Tests', function () {
  it('should show degree', function () {
    expect(Compass.prototype.showDegree()).toBe(0);
  });

  it('should show text', function () {
    expect(Compass.prototype.showDegreeAsText()).toBe('North');
  });

  it('should show degree as text', function () {
    spyOn(Compass.prototype, 'showDegreeAsText');

    Compass.prototype.rotateAndShowDegreeAsText();
    expect(Compass.prototype.showDegreeAsText).toHaveBeenCalled();
  });

  it('should showDegree', function () {
    spyOn(Compass.prototype, 'showDegree');

    Compass.prototype.showDegreeAsText();
    expect(Compass.prototype.showDegree).toHaveBeenCalled();
  });

  it('should show 90 degree as text', function () {
    spyOn(Compass.prototype, 'showDegreeAsText');

    Compass.prototype.rotateAndShowDegreeAsText(90);
    expect(Compass.prototype.showDegreeAsText).toBe('East');
  });
});

function Compass() {

}

Compass.prototype = {
  rotateAndShowDegreeAsText: function () {
    this.showDegreeAsText();
  },
  showDegreeAsText: function () {
    this.showDegree();

    return 'North';
  },
  showDegree: function () {
    return 0;
  }
};
