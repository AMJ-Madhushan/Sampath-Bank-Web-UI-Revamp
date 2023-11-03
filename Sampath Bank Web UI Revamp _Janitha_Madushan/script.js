
const multipleCardCarousel = document.querySelector
("#carouselExampleControls");
  

if(window.matchMedia("(min-width:576px)").matches){

    const carousel = new bootstrap.Carousel(multipleItemCarousel,
    {
        interval: false
    })

var carouselWidth = $("#ci")[0].scrollWidth;
var cardWidth = $("#im1,#im2,#im3,#im4,#im5,#im6,#im7").width();

var scrollPosition = 0;


}else{
    
}


