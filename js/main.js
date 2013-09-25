$('a.restaurant').popover();

$('a.restaurant').on('click', function (e) {
    $('a.restaurant').not(this).popover('hide');
});
