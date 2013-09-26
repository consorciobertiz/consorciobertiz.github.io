---
---
{% include js/jquery-1.10.1.min.js %};
{% include js/bootstrap.min.js%};

$('a#lnk_splash').on('click', function (e) {
  e.preventDefault();
  $('section.splash').removeClass("visible-xs");
  $('section.splash').hide(500);
});

$('a.restaurant').popover();
$('a.restaurant').on('click', function (e) {
  e.preventDefault();

  $('a.restaurant').not(this).each(function() {
      var element = $(this),
          self = element.data('bs.popover');

      if(self.tip().hasClass('in')) {
        // There are some issues in `.popover('hide')`
        // hence use internal function `leave`
        self.leave(self);
      }
    });
});
