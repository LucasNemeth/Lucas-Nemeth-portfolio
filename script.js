$(function () {
    $(".hamburger").click(function () {
        $("#menu").toggleClass('active');
        
    })
});


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