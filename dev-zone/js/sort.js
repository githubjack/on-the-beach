
function sortMeBy(arg, sel, elem, order) {
  var $selector = $(sel),
    $element = $selector.children(elem);

  $element.sort(function(a, b) {
    var an = parseInt(a.getAttribute(arg)),
      bn = parseInt(b.getAttribute(arg));

    if (order == 'asc') {
      if (an > bn)
        return 1;
      if (an < bn)
        return -1;
    } else if (order == 'desc') {
      if (an < bn)
        return 1;
      if (an > bn)
        return -1;
    }
    return 0;
  });

  $element.detach().appendTo($selector);
}

function sortName(){
var $hotels = $('ul#sort-list'),
	$hotelsli = $hotels.children('li');

$hotelsli.sort(function(a,b){
	var an = a.getAttribute('data-name'),
		bn = b.getAttribute('data-name');

	if(an > bn) {
		return 1;
	}
	if(an < bn) {
		return -1;
	}
	return 0;
});

$hotelsli.detach().appendTo($hotels);
}
