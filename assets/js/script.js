$(document).ready(function() {
    $(".burger").click(function() {
        $(".nav-panel__content").toggleClass("nav-panel__content_active")
        $(".nav-panel__item").toggleClass("nav-panel__item_active")
        $(".burger").toggleClass("burger_cancel")
        $(".nav-panel__social-network").toggleClass("nav-panel__social-network_active")
    });
    $('.home__arrow-left').click(function (){
        // 3
        if($('.home__item_2').hasClass('hide_item') && $('.home__item_3').hasClass('hide_item')){
            $('.home__item_1').toggleClass('hide_item');
            $('.home__item_3').toggleClass('hide_item');
            return;
        }
        // 2
        if($('.home__item_1').hasClass('hide_item') && $('.home__item_2').hasClass('hide_item')){
            $('.home__item_3').toggleClass('hide_item');
            $('.home__item_2').toggleClass('hide_item');
            return;
        }
        // 1
        if($('.home__item_1').hasClass('hide_item') && $('.home__item_3').hasClass('hide_item')){
            $('.home__item_2').toggleClass('hide_item');
            $('.home__item_1').toggleClass('hide_item');
            return;
        }
    });
    $('.home__arrow-right').click(function (){
        // 1
        if($('.home__item_2').hasClass('hide_item') && $('.home__item_3').hasClass('hide_item')){
            $('.home__item_1').toggleClass('hide_item');
            $('.home__item_2').toggleClass('hide_item');
            return;
        }
        // 2
        if($('.home__item_1').hasClass('hide_item') && $('.home__item_3').hasClass('hide_item')){
            $('.home__item_2').toggleClass('hide_item');
            $('.home__item_3').toggleClass('hide_item');
            return;
        }
        // 3
        if($('.home__item_1').hasClass('hide_item') && $('.home__item_2').hasClass('hide_item')){
            $('.home__item_3').toggleClass('hide_item');
            $('.home__item_1').toggleClass('hide_item');
            return;
        }
    });
});