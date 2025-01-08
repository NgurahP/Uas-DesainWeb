$(document).ready(function(){
    var navbar = $("header")
    $("header").load("./src/public/Navbar.html")
    $(window).scroll(function() {
        if ($(this).scrollTop() > 10) {
            navbar.removeClass('bg-transparent block').addClass('bg-indigo-300 fixed');
        } else {
            navbar.removeClass('bg-indigo-300 fixed').addClass('bg-transparent block');
        }
    });
});
