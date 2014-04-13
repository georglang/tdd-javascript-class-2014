var Image = require('./Image').Image;
var Document = require('./Document').Document;


var Compass = function () {
    this.image = new Image();
    this.idHTMLElement = "directionHeading";
};

Compass.prototype = {
    degreeToTextMap: {
        0: 'North',
        23: 'North North East',
        45: 'North East',
        68: 'East North East',
        90: 'East',
        113: 'East South East',
        135: 'South East',
        158: 'South South East',
        180: 'South',
        203: 'South South West',
        225: 'South West',
        284: 'West South West',
        270: 'West',
        293: 'West North West',
        315: 'North West',
        338: 'North North West'
    },
    handleScrollEvent: function (deltaPosition) {
        var degree = this.convertDeltaPositionToDegree(deltaPosition);
        this.rotateAndShowDegreeAsText(degree);
    },
    rotateAndShowDegreeAsText: function (degree) {
        this.showDegreeAsText();
        this.image.rotate(degree);
    },
    getDegreeAsText: function () {
        return (this.degreeToTextMap[this.getDegree()] || this.getDegree() + '°');
    },
    getDegree: function () {
        return this.image.getDegree();
    },
    showDegreeAsText: function () {
        Document.prototype.insertIntoHTML(this.idHTMLElement, this.getDegreeAsText());
    },
    convertDeltaPositionToDegree: function (deltaPosition) {
        if (deltaPosition > 0) {
            this.image.counter += 1;
        } else if (deltaPosition < 0) {
            this.image.counter -= 1;

            if (this.image.counter < 0) {
                this.image.counter = 359;
            }
        }
        return (this.image.counter % 360);
    }
};

module.exports = {
    Compass: Compass
};