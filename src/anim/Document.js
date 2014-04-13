var Document = function () {};

Document.prototype = {
    scrollHandler: null,
    bindScrollCallback: function (callback) {
        this.scrollHandler = callback;
    },
    triggerScrollEventWithDelta: function (deltaPosition) {
        this.scrollHandler(deltaPosition);
    },
    insertIntoHTML: function (idHTMLElement, degreeAsText) {
        //    jQuery('#'+idHTMLElement).html(degreeAsText);
    }
};

module.exports = {
    Document: Document
};