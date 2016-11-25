// Footer Copyright year.
//
// var today = new Date();
// var year = today.getFullYear();
// var foot = document.getElementById('footer');
// foot.innerHTML = '<p>Cleaners R us Est: 2014 &copy; ' + year + ' | Handmade By Tom</p>';

var bg = jQuery("#colOne");
jQuery(window).resize("resizeBackground");
function resizeBackground() {
    bg.height(jQuery(window).height());
}
resizeBackground();
