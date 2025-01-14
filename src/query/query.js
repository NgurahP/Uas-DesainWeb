var services=[
    {
        image : "/src/img/Wedding.jpeg",
        title: "Weddings",
        content: "A sacred ceremony that involves many guests. It typically consists of various events, from the wedding ceremony, reception, to the after-party."
    },
    {
        image : "/src/img/birthday.jpeg",
        title: "Birthdays",
        content: "A celebration of someone's birthday. This type of event is very flexible, it can be done simply at home or grandly with a specific theme."
    },
    {
        image : "/src/img/corporate.jpeg",
        title: "Corporate Events",
        content: "Events organized by companies, such as meetings, seminars, gatherings, or product launches."
    },
    {
        image : "/src/img/seminar.jpeg",
        title: "Seminars and Workshops",
        content: "Events aimed at providing specific knowledge and skills."
    },
    {
        image : "/src/img/product.jpeg",
        title: "Product Launches",
        content: "Events to introduce new products to the public."
    },
    {
        image : "/src/img/outdoor_activity.jpg",
        title: "Gatherings",
        content: "Informal meetings among members of a community or organization."
    }
]
function generateService(services){
    var servicesHTML = '';
    services.forEach(function(service){
        servicesHTML += 
        `
        <div class="bg-white shadow-md rounded-lg p-3">
            <img class="sm:rounded-lg object-cover h-24 sm:h-96" src="${service.image}" width="100%">
            <div class="p-8">
                <h4 class="text-xl font-bold mb-2">${service.title}</h4>
                <p class="text-gray-600">${service.content}</p>
            </div>
        </div>
        `
    });
    return servicesHTML;
}



$(document).ready(function(){
    var navbar = $("header")
    var servicesHTML = generateService(services)
    $("header").load("./src/public/Navbar.html", function() {
        $(document).on("click", "#nav-button", function(){
            console.log("Nav button clicked");
            $("#res-nav").slideToggle("slow")
            $(this).toggleClass("cross");
            // if ($(this).html() === "&#9776;") {
            //     $(this).html("&times;");
            // } else {
            //     $(this).html("&#9776;");
            // }
        })
    })
    $("footer").load("./src/public/Footer.html")
    $("#hero").load("./src/public/hero.html")
    $("#services").html(servicesHTML)

    
    $(window).scroll(function() {
        if ($(this).scrollTop() > 0) {
            navbar.removeClass('bg-transparent block py-[0.75%]').addClass('backdrop-blur-sm bg-transparent fixed py-[1%]')
        } else {
            navbar.removeClass('backdrop-blur-sm bg-transparent fixed py-[1%]').addClass('bg-transparent block py-[0.75%]')
        }
    });
});


$(document).ready(function(){
    $("#why").hover(function(){
        $("#desc").slideDown("slow");
    });
});
