$("#Btn1").addClass("js-nav-btn")

$("#Btn1").click(function(){
    $(this).addClass("js-nav-btn").siblings().removeClass("js-nav-btn");
    $("#SlideLs").css({
        left: 0,
        top: 0,
    })
})

$("#Btn2").click(function(){
    $(this).addClass("js-nav-btn").siblings().removeClass("js-nav-btn");
    $("#SlideLs").css({
        left: "-100vw",
        top: 0,
    })
})

$("#Btn3").click(function(){
    $(this).addClass("js-nav-btn").siblings().removeClass("js-nav-btn");
    $("#SlideLs").css({
        left: "-200vw",
        top: 0,
    })
})

$("#Btn4").click(function(){
    $(this).addClass("js-nav-btn").siblings().removeClass("js-nav-btn");
    $("#SlideLs").css({
        left: 0,
        top: "-100vh",
    })
})


$("#Btn5").click(function(){
    $(this).addClass("js-nav-btn").siblings().removeClass("js-nav-btn");
    $("#SlideLs").css({
        left: "-100vw",
        top: "-100vh",
    })
})

$("#Btn6").click(function(){
    $(this).addClass("js-nav-btn").siblings().removeClass("js-nav-btn");
    $("#SlideLs").css({
        left: "-200vw",
        top: "-100vh",
    })
})