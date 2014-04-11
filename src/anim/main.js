var jQuery = $;

var imageEl = jQuery(new Image());
imageEl
  .load(function() {
    jQuery('#compassImage').append(imageEl);
    imageEl.attr('width', '500');
  })
  .attr('src', '/img/compass.png');
