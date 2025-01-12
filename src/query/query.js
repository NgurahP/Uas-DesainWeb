var services=[
    {
        title: "Wedding Planning",
        content: "We design memorable weddings with precision and care."
    },
    {
        title: "Corporate Events",
        content: "From conferences to team-building, we've got you covered."
    },
    {
        title: "Birthday Parties",
        content: "Make your birthday unforgettable with our creative touch."
    },
]
function generateService(services){
    var servicesHTML = '';
    services.forEach(function(service){
        servicesHTML += 
        `
        <div class="bg-white shadow-md rounded-lg p-6">
            <h4 class="text-xl font-bold mb-2">${service.title}</h4>
            <p class="text-gray-600">${service.content}</p>
        </div>
        `
    });
    return servicesHTML;
}



$(document).ready(function(){
    var navbar = $("header")
    var servicesHTML = generateService(services)
    $("header").load("./src/public/Navbar.html")
    $("footer").load("./src/public/Footer.html")
    $("#hero").load("./src/public/hero.html")
    $("#services").html(servicesHTML)
    $(window).scroll(function() {
        if ($(this).scrollTop() > 1) {
            navbar.removeClass('bg-transparent block py-[0.75%]').addClass('bg-indigo-300 fixed py-[1%]')
        } else {
            navbar.removeClass('bg-indigo-300 fixed py-[1%]').addClass('bg-transparent block py-[0.75%]')
        }
    });
});
