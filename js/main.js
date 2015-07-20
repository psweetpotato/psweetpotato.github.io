function contactFunction() {
  $('html,body').animate({
      scrollTop: $(".wrapper").offset().top},
      'slow');
};

function topPage() {
  $('html,body').animate({
      scrollTop: $("#top-page").offset().top},
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
      swal({
        title: "Yay!",
        text: "YUP, it's responsive!",
        type: "success",   confirmButtonText: "Cool" });
      called = true
    } else {
      called = false
    };
  };
};
});
