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
});

function Compass() {

}

Compass.prototype = {
  rotateAndShowDegreeAsText: function () {
    Compass.prototype.showDegreeAsText();
  },
  showDegreeAsText: function () {
  },
  showDegree: function () {
    return 0;
  },
  showDegreeAsText: function () {
    return 'North';
  }
};
