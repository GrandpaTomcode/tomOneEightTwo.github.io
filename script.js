// Footer Copyright year.

var today = new Date();
var year = today.getFullYear();
var foot = document.getElementById('footer');
foot.innerHTML = '<p>Cleaners R us Est: 2015 &copy; ' + year + ' | Handmade By Tom</p>';

// Jquery Fade Slide Show.
$("#slideshow > div:gt(0)").hide();

setInterval(function() {
  $('#slideshow > div:first')
    .fadeOut(1000)
    .next()
    .fadeIn(1000)
    .end()
    .appendTo('#slideshow');
},  5000);
