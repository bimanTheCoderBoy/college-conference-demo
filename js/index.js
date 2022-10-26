
let i=1;
setInterval(function () {

    if(i==8)
    i=1;
    $('.sub-header').animate({opacity:0.8});
    $('.sub-header').css("background-image",`linear-gradient(rgba(4,9,30,0.7),rgba(4,9,30,0.7)),url(img/aot-pic-${i++}.jpg)`);
    $('.sub-header').animate({opacity:1});
}, 2000);


var swiper = new Swiper(".brand-slider", {
    spaceBetween: 20,
    loop:true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    breakpoints: {
        450: {
          slidesPerView: 2,
        },
        768: {
          slidesPerView: 3,
        },
        991: {
          slidesPerView: 4,
        },
        1200: {
          slidesPerView: 5,
        },
      },
});




// const bt = document.getElementById('bt');

        const scroll = () => {
            window.scrollTo({ top: 0, behavior: 'smooth' })
        }
        bt.addEventListener('click', scroll);










// sticky-navbar
window.onscroll = function() {myFunction()};

var navbar = document.getElementsByClassName("navbar1")[0];
var sticky = navbar.offsetTop;

function myFunction() {
  if (window.pageYOffset >= sticky) {
    // $('#bt').fadeIn();
   
    $('#bt').css("visibility","visible");
    $('#bt').css("top","90%");
    navbar.classList.add("sticky1")
  } else {
    navbar.classList.remove("sticky1");
    $('#bt').css("visibility","hidden");
    $('#bt').css("top","100%");
  }


}