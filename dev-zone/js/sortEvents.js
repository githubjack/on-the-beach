

$(document).on('click', '.sortPrice', function() {
  sortMeBy('data-price', 'ul#sort-list', 'li', 'asc');
});

$(document).on('click', '.sortRate', function() {
  sortMeBy('data-rate', 'ul#sort-list', 'li', 'asc');
});

$(document).on('click', '.sortAlphabet', function() {
sortName(('data-name', 'ul#sort-list', 'li', 'asc'));
});
