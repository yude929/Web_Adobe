const $slideLs = $("#SlideLs");
const $btn1 = $("#Btn1");
const $btn2 = $("#Btn2");
const $btn3 = $("#Btn3");
const $btn4 = $("#Btn4");
const $btn5 = $("#Btn5");
const $btn6 = $("#Btn6");
const isMobile = $(window).width() <= 480;



$btn1.addClass("js-nav-btn")

$btn1.click(function () {
    if ($(this).hasClass("js-nav-btn")) {
        return;
    }

    $(this).addClass("js-nav-btn").siblings().removeClass("js-nav-btn");
    $slideLs.css({
        left: 0,
        top: 0,
    })

    if(isMobile){
        $nav.removeClass("js-nav");
    }
})

$btn2.click(function () {
    $(this).addClass("js-nav-btn").siblings().removeClass("js-nav-btn");
    $slideLs.css({
        left: "-100vw",
        top: 0,
    })
})

$btn3.click(function () {
    $(this).addClass("js-nav-btn").siblings().removeClass("js-nav-btn");
    $slideLs.css({
        left: "-200vw",
        top: 0,
    })
})

$btn4.click(function () {
    $(this).addClass("js-nav-btn").siblings().removeClass("js-nav-btn");
    $slideLs.css({
        left: 0,
        top: "-100vh",
    })
})


$btn5.click(function () {
    $(this).addClass("js-nav-btn").siblings().removeClass("js-nav-btn");
    $slideLs.css({
        left: "-100vw",
        top: "-100vh",
    })
})

$btn6.click(function () {
    $(this).addClass("js-nav-btn").siblings().removeClass("js-nav-btn");
    $slideLs.css({
        left: "-200vw",
        top: "-100vh",
    })
})

if (isMobile) {

    const $slideItem = $slideLs.find(".slide-item");
    const $nav = $("#Nav");
    $slideItem.scroll(function () {
        if ($(this).scrollTop() == 0) {
            $nav.removeClass("js-nav");
        } else {
            $nav.addClass("js-nav");
        }
    })
}

// $(".pd-item > a").fancybox();