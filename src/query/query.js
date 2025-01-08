$(document).ready(function(){
    var navbar = $("header")
    $("header").load("./src/public/Navbar.html")
    $(window).scroll(function() {
        if ($(this).scrollTop() > 10) {
            navbar.removeClass('bg-transparent block py-[0.75%]').addClass('bg-indigo-300 fixed');
            navbar.animate({
                padding: "1% 0 1% 0",
            })
        } else {
            navbar.removeClass('bg-indigo-300 fixed py-[1%]').addClass('bg-transparent block py-[0.75%]');
        }
    });
});
