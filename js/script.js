

$(document).ready(function(){
   
    $("header > .header-wrap > .right-menu > .menu-box > ul > li:nth-child(4)").click(function(){
        $("header > .header-wrap > .right-menu > .menu-box > ul .language-box-two").toggleClass("active");
    })
    
    $(".slider").slick({
        infinite:true,
        arrows:false,
        dots:true,
        fade:true,
        autoplay:true,
        speed:800,
         slidesToShow: 1,
        slidesToScroll: 1,
    });
    
    
       $(".stay-slide").slick({
       arrows:true,
           dots:false,
            prevArrow: "<div class='slick-prev'><img src='./img/l_btn.jpg'></div>",
             nextArrow: "<div class='slick-next'><img src='./img/r_btn.jpg'></div>",
           autoplay:true,
           speed:800,
    });
    
       $(".wine-slider").slick({
       
           slidesToShow:3,
            slidesToScroll: 3,
           arrows:false,
           dots:true,
           autoplay:true,
           speed:800,
           responsive: [
            {
      breakpoint: 1024,
      settings: {
        slidesToShow: 1.5,
        slidesToScroll: 1,
      centerMode:true,
          autoplay:true,
          dots:true,
          
         
      }
    },
               
               {
                   
     breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        centerMode:true,
          autoplay:true,
          dots:true,
          
         
      }
                   
               },
               ]
           
    });
    
   const trigger = new ScrollTrigger.default({
       trigger:{
           once:false,
           offset: {

            viewport: {
                x: 0,
                y: (trigger, frame, direction) => {
                   
                    return trigger.visible ? 0 : 0.2
                }
            }
        },
       }
       
       
        
   }); 
    //const 변경될 일이 없는 변수 지정 할 때 사용하기
    
   trigger.add('[data-trigger]')
    
   trigger.add('[data-trigger-2]')
    
     trigger.add('[data-trigger-2-1]')
    
   trigger.add('[data-trigger-3]')
    
   trigger.add('[data-trigger-4]')
    
   trigger.add('[data-trigger-5]')
    
   trigger.add('[data-trigger-6]')
    
   trigger.add('[data-trigger-7]')
    
   trigger.add('[data-trigger-8]')
    
   trigger.add('[data-trigger-9]')
    
   trigger.add('[data-trigger-10]')
    
   trigger.add('[data-trigger-11]')
    
   trigger.add('[data-trigger-12]')
  
     trigger.add('[data-trigger-13]')
    
 trigger.add('[data-trigger-14]')    
    
trigger.add('[data-trigger-2_2]')    
    
   $("aside > .nav-box > .hotel-wrap > .right-hotel-name > .hotel-name-box > ul > li:first-of-type").mouseover(function(){
       
   });
    
      
   $("aside > .nav-box > .hotel-wrap > .right-hotel-name > .hotel-name-box > ul > li:nth-child(2)").mouseover(function(){
       
       $("aside > .nav-box > .hotel-wrap > .left-hotels > .ho-img:nth-child(2)").addClass("active");
       
        $("aside > .nav-box > .hotel-wrap > .left-hotels > .ho-img:nth-child(3)").removeClass("active");
       
        $("aside > .nav-box > .hotel-wrap > .left-hotels > .ho-img:nth-child(1)").removelass("active");
   });
    
     $("aside > .nav-box > .hotel-wrap > .right-hotel-name > .hotel-name-box > ul > li:nth-child(2)").mouseleave(function(){
       
       $("aside > .nav-box > .hotel-wrap > .left-hotels > .ho-img:nth-child(2)").removeClass("active");
       
        $("aside > .nav-box > .hotel-wrap > .left-hotels > .ho-img:nth-child(3)").removeClass("active");
       
        $("aside > .nav-box > .hotel-wrap > .left-hotels > .ho-img:nth-child(1)").addclass("active");
   });
    
       $("aside > .nav-box > .hotel-wrap > .right-hotel-name > .hotel-name-box > ul > li:nth-child(3)").mouseover(function(){
       
       $("aside > .nav-box > .hotel-wrap > .left-hotels > .ho-img:nth-child(3)").addClass("active");
       
        $("aside > .nav-box > .hotel-wrap > .left-hotels > .ho-img:nth-child(2)").removeClass("active");
       
        $("aside > .nav-box > .hotel-wrap > .left-hotels > .ho-img:nth-child(1)").removelass("active");
   });
    
     $("aside > .nav-box > .hotel-wrap > .right-hotel-name > .hotel-name-box > ul > li:nth-child(3)").mouseleave(function(){
       
       $("aside > .nav-box > .hotel-wrap > .left-hotels > .ho-img:nth-child(2)").removeClass("active");
       
        $("aside > .nav-box > .hotel-wrap > .left-hotels > .ho-img:nth-child(3)").removeClass("active");
       
        $("aside > .nav-box > .hotel-wrap > .left-hotels > .ho-img:nth-child(1)").addclass("active");
   });
    
    $("header > .header-wrap > .right-menu > .hamburger").click(function(){
        $("aside").addClass("active");
    })
    
    $("aside > .nav-box > .close-box").click(function(){
         $("aside").removeClass("active");
    });
    
    $(".animate-box").click(function(){
       $("html,body").animate({scrollTop:0}, 1500); 
    });
    
});

$(window).scroll(function(){
   var sct = $(this).scrollTop();
    
    if(sct > 3500){
        $(".animate-box").addClass("active");
    }
    
    else{
        $(".animate-box").removeClass("active");
    }
    
    if(sct > 0)
    {
        $("header").addClass("active");
    }
    
    else{
        $("header").removeClass("active");
    }
    
    if(sct > 5500){
        $("header").css({display:"none"});
    }
    
    else{
         $("header").css({display:"block"});
    }
});
