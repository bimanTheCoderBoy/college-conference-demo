
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










// important area
const a=8,b=5,c=12,d=350;
let e=f=g=h=0,t=1;
// sticky-navbar
window.onscroll = function() {myFunction()};

var navbar = document.getElementsByClassName("navbar1")[0];
var sticky = navbar.offsetTop;
var st=document.getElementsByClassName("st")[0].offsetTop;
console.log(window.pageYOffset);
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




  if(window.pageYOffset>= st && t==1){
  t=0;
    const interval1=setInterval(() => {
      $(".counterUp1").text(`${e}`)
      e++;
      if(e>a)
      {
        clearInterval(interval1)
      }
    }, 600,(0));
    const interval2=setInterval(() => {
      $(".counterUp2").text(`${f}`)
      f++;
      if(f>b)
      {
        clearInterval(interval2)
      }
    }, 350,(1));
    const interval3=setInterval(() => {
      $(".counterUp3").text(`${g}`)
      g++;
      if(g>c)
      {
        clearInterval(interval3)
      }
    }, 200,(2));
    const interval4=setInterval(() => {
      $(".counterUp4").text(`${h}`)
      h++;
      if(h>d)
      {
        clearInterval(interval4)
      }
    }, 10,(3));
    
    }


}
window.onload=function(){
  // $(".home h1").slideUp();
  $(".home h1, .home h2, .home h3, #timer").css("top","0rem")
  $(".home-btn").removeClass("fade");
  $(".home-btn").css("font-size","1.5rem")
}















// hldslxjl





// card-pop-up
// console.log($(".sp-card"))
$(".sp-card").on('click',function(e){
 
 let modal=$(".modal-body img")
 console.log($(".pop-img")[0].currentSrc);
 $(".pop-img").attr('src',`${e.target.src}`);
$(".modal").removeClass("fade");
});
$(".pop-btn").on('click',function(){
  $(".modal").addClass("fade");
})










// time
let time=new Date(2022,25,11,7,56,12);

// console.log(tim.getMinutes())
setInterval(() => {
  let tim=new Date();
  let tt=Math.abs(time-tim)
  let t=new Date(tt)
  $(".dd").text(`: ${t.getDay()}`)
  $(".hh").text(`: ${t.getHours()}`)
  $(".m").text(`: ${t.getMinutes()}`)
  $(".s").text(`: ${t.getSeconds()}`)
  // time.setSeconds(time.getSeconds()-1);
}, 1000);
// console.log(time.getHours())










