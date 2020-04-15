$(function () {
    //----click on hamburger button to drop down the menu----//
    $(".hamburger").click(function () {
        // ---toggling class ----//
        $("#menu").toggleClass('active');
        console.log("hi")
        
    })
});


// $('.menu-toggle').on('click', function () {
//     $('.menu').addClass('open');
// });

// $('.menu li').on("click", function () {
//     $('.menu').removeClass('open');
// });

noSlide = (maxWidth) => {
    if (maxWidth.matches) {
        ('data-aos') === null;
        $('.left-container').removeData('data-aos');
        $('.right-container').removeClass('data-aos');
    }
}

const maxWidth = window.matchMedia("(max-width:410px)")
noSlide(maxWidth)
maxWidth.addListener(noSlide)