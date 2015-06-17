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

$(document).ready(function(){

var $window = $(window);
var $windowSize = $window.width()
var called = false;

window.onresize = function(event){
  var newSize = $window.width();
  if (!called) {
    if (newSize < $windowSize * 0.35) {
      alert("YUP, it's responsive!")
      called = true
    } else {
      called = false
    };
  };
};
});
