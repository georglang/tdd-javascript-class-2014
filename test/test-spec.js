describe('Compass Tests', function() {
  it('should show degree', function() {
    expect(showDegree()).toBe(0);
  });

  it('should show text', function() {
    expect(showDegreeAsText()).toBe('North');
  });
});

function showDegree() {
  return 0;
}

function showDegreeAsText() {
  return 'North';
}

