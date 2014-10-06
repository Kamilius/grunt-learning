function elementInViewport(el) {
  var top = el.offsetTop;
  var left = el.offsetLeft;
  var width = el.offsetWidth;
  var height = el.offsetHeight;

  while(el.offsetParent) {
    el = el.offsetParent;
    top += el.offsetTop;
    left += el.offsetLeft;
  }

  return (
    top < (window.pageYOffset + window.innerHeight) &&
    left < (window.pageXOffset + window.innerWidth) &&
    (top + height) > window.pageYOffset &&
    (left + width) > window.pageXOffset
  );
}

$(document).ready(function() {
  var $window = $(window);

  $('.slide').each(function($section) {
    var $bgobj = $(this);
    $(window).scroll(function() {

      if(elementInViewport($bgobj.get(0))) {
        var yPos = (($bgobj.offset().top - $window.scrollTop()) / $bgobj.data('speed')),
            coords = '50% ' + yPos + 'px';

        $bgobj.css({ backgroundPosition: coords });
      }
    });
  });
});