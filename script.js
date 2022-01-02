$(".owl-video").owlCarousel({
   loop: true,
   nav: false,
   dots: false,
   responsive : {
       0: {
           items: 1
       },
       600: {
           items: 2
       },
       1000 : {
           items: 3
       }
   }
});

$('.owl-basic').owlCarousel({
    items:6,
    loop:true,
    margin:10,
    merge:true,
    nav: true,
    responsive:{
        678:{
            mergeFit:true
        },
        1000:{
            mergeFit:false
        }
    }
});

const changePic = (e)=>{
  document.getElementById("main-life-img").src = e;
}
