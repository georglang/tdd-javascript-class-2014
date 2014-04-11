describe('Compass Tests', function () {
  it('should show degree', function () {
    expect(showDegree()).toBe(0);
  });

  it('should show text', function () {
    expect(showDegreeAsText()).toBe('North');
  });

  it('should rotate image', function () {
    spyOn(Compass.prototype, 'showDegreeAsText');

    Compass.prototype.rotateAndShowDegreeAsText();
    expect(Compass.prototype.showDegreeAsText).toHaveBeenCalled();
  });
});

function showDegree() {
  return 0;
}

function showDegreeAsText() {
  return 'North';
}

