$(document).ready(function() {
    $(window).scroll(function() {
        if(this.scrollY > 20){
            $('.nav-bar').addClass("sticky");
        }else{
            $('.nav-bar').removeClass("sticky");
        }
    });
      
    // toggle menu-nav-bar //
    $('.menu-button').click(function(){
       $('.nav-bar .menu').toggleClass("active"); 
       $('.menu-button i').toggleClass("active");
    })


$('.navbar .menu li a').click(function () {
    $('html').css("scrollBehavior", "smooth");
});

// typing text animation //
var typed = new Typed(".typing", {
    strings: ["App designer"," App Developer", "Trader", "Entrepreneur", "Coder" ],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true
});

var typed = new Typed(".typing-2", {
    strings: ["Trader", "App Developer", "Trader", "Entrepreneur", "Coder"],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true
});


});