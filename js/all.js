//FOR header捲軸往下滑時，將nav釘在頂端

/*$(window).scroll(function () {
    if ($(window).scrollTop() >= 1) {
        $('.nav_ham').addClass('fixed-header');
    } else {
        $('.nav_ham').removeClass('fixed-header');
    }
});*/

//For hamburger控制點選hamburger後，將遮罩下方body部分，讓使用者著重在ham選單裡的項目
$(function () {
    $("#hamburger").on('click', function () {
        $(".overlay").toggleClass("overlay-visible"); //控制點選hamburger後，將遮罩下方body部分，讓使用者著重在ham選單裡的項目(方法:利用toggle控制增減overlay-visible這個class到<div class="overlay"></div>這個區塊裡來達到目的)
    });
});

//For 密碼眼睛開關
$(function () {
    $('.passbtn').on('click', function () {
        var $inp = $('.pass');
        $inp.attr('type') === 'password' ?
            $inp.attr('type', 'text') :
            $inp.attr('type', 'password')
    });
});