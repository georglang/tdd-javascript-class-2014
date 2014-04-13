var Image = function () {
    this.counter = 0;
};

Image.prototype = {
    degree: 0,
    _getElement: function () {
//    return jQuery('#' + this._imageId);
    },
    rotate: function (degree) {
        this.degree = degree;
    },
    getDegree: function () {
        this._getElement();
        return this.degree;
    }
};

module.exports = {
    Image: Image
};