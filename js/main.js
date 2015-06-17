var $window = $(window);
var $windowSize = $window.width()

function contactFunction() {
  $('html,body').animate({
      scrollTop: $(".wrapper").offset().top},
      'slow');
};

function topPage() {
  $('html,body').animate({
      scrollTop: $("#am").offset().top},
      'slow');
};

window.onresize = function(event){
  var newSize = $window.width();
    if (newSize < $windowSize * 0.35) {
      alert("YUP, it's responsive!")
    };
};
