---
---
{% include js/jquery-1.10.1.min.js %};
{% include js/bootstrap.min.js%};
$('a.restaurant').popover();

$('a.restaurant').on('click', function (e) {
  e.preventDefault();
  $('a.restaurant').not(this).popover('hide');
});
