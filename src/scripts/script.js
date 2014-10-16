var elementInViewport;

elementInViewport = function(el) {
  var height, left, top, width;
  top = el.offsetTop;
  left = el.offsetLeft;
  width = el.offsetWidth;
  height = el.offsetHeight;
  while (el.offsetParent) {
    el = el.offsetParent;
    top += el.offsetTop;
    left += el.offsetLeft;
  }
  return top < (window.pageYOffset + window.innerHeight) && left < (window.pageXOffset + window.innerWidth) && (top + height) > window.pageYOffset && (left + width) > window.pageXOffset;
};

$(document).ready(function() {
  var $window;
  $window = $(window);
  return $('.slide').each(function() {
    var $bgobj;
    $bgobj = $(this);
    return $window.scroll(function() {
      var coords, yPos;
      if (elementInViewport($bgobj.get(0))) {
        yPos = ($bgobj.offset().top - $window.scrollTop()) / $bgobj.data('speed');
        coords = "50% " + yPos + "px";
        return $bgobj.css({
          backgroundPosition: coords
        });
      }
    });
  });
});
