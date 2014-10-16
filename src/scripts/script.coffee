elementInViewport = (el) ->
  top = el.offsetTop
  left = el.offsetLeft
  width = el.offsetWidth
  height = el.offsetHeight

  while el.offsetParent
    el = el.offsetParent
    top += el.offsetTop
    left += el.offsetLeft

  (top < (window.pageYOffset + window.innerHeight) &&
    left < (window.pageXOffset + window.innerWidth) &&
    (top + height) > window.pageYOffset &&
    (left + width) > window.pageXOffset)

$(document).ready ->
  $window = $(window)

  $('.slide').each ->
    $bgobj = $(@)
    $window.scroll ->
      if(elementInViewport($bgobj.get(0)))
        yPos = ($bgobj.offset().top - $window.scrollTop()) / $bgobj.data('speed')
        coords = "50% #{yPos}px"

        $bgobj.css {
          backgroundPosition: coords
        }