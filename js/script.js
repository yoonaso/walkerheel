/*Page reload*/
function reStart() {
    location.reload();
}

$(window).scroll(function(){
    var scrollHeight =$(this).scrollTop();
    console.log(scrollHeight);

    if(scrollHeight > 1000){
        $(".fixedMenu > .upBtn").css({
            opacity:1,
            
        });
    }else{
        $(".fixedMenu > .upBtn").css({
            opacity:0,
        });  
    }

    if(scrollHeight > 20){
        $(".headWrap > .logo").css({
            "background":"url(../img/hotel-logo_black.png)",
            "margin-left":"5rem",
            "margin-top":"1rem",
            "width":"9.2rem",
            "height":"2.2rem",
            "background-repeat":"no-repeat",
            "float":"left",
            "background-size":"cover"
        });
        $(".headWrap").css({
            "background":"White",
            "width":"100%",
            "position":"fixed",
            "top":"0",
            "height":"4.5rem",
            "box-shadow":"5px 3px 20px rgba(115, 115, 115, 0.2)",
          
           
        });

        $(".headWrap>.menu>ul>li").css({
            "color":"black",
            "line-height":"4rem"
        });

        $(".headWrap>.hamburgerWrap>button").css({
            "margin-top":"1.3rem",
            "margin-right":"6rem",
            "margin-left":"-4rem"
          
        });

        $(".headWrap>.hamburgerWrap>button>span").css({
            "background-color":"black"
        });
    }
    else{
        $(".headWrap > .logo").css({
            "background":"url(../img/hotel-logo.png)",
            "margin-left":"0",
            "margin-top":"0",
            "width":"9.2rem",
            "height":"2.2rem",
            "background-repeat":"no-repeat",
            "background-size":"cover"
        });
        $(".headWrap").css({
            "background":"none",
            "width":"78vw",
            "position":"absolute",
            "top":"2.5rem",
            "height":"0",
            "box-shadow":"none",
           
        });

        $(".headWrap>.menu>ul>li").css({
            "color":"white",
            "line-height":"2rem"
        });

        $(".headWrap>.hamburgerWrap>button").css({
            "margin-top":"0.3rem",
            "margin-right":"0"
        });

        $(".headWrap>.hamburgerWrap>button>span").css({
            "background-color":"white"
        });

    }
})

/*slick slide */
$(function () {
    $(".mainSlide").slick({
        
        dots: true,
        arrows: false,
        autoplay: true,
        autoplayspeed: 3000,
        fade:true
    });

    $(".staySlide").slick({
        dots: false,
        arrows: true,
        //prevArrow:"",
        //nextArrow:"",
        
    });

    $(".wineSlide").slick({
        dots: true,
        arrows: false,
        centerMode:true,
        slideToshow:1,
        variableWidth: true
       /* responsive: [
            {
                breakpoint:1024,
                settings: {
                    centerMode:false,
                    slideToshow:3,
                }
            }
        ]*/
        
    });

    $(".upBtn").click(function(){
        $("html, body").animate({
            scrollTop:0
        }, 500);
    });

    
    const trigger = new ScrollTrigger.default({
       trigger: {
           //once:true,
           offset: {
              element:{
                  x:0,
                  y: (trigger, rect, direction) =>{
                      return 0.3
                  }
              },
           }
       }
    });

    trigger.add('[data-trigger]');
    trigger.add('[data-trigger-2]');
    trigger.add('[data-trigger-3]');
    trigger.add('[data-trigger-4]');
    trigger.add('[data-trigger-5]');
    trigger.add('[data-trigger-6]');
    trigger.add('[data-trigger-7]');
    trigger.add('[data-trigger-8]');

});
