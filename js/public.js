/**
 * @author      OA Wu <comdan66@gmail.com>
 * @copyright   Copyright (c) 2015 - 2019, Ginkgo
 * @license     http://opensource.org/licenses/MIT  MIT License
 * @link        https://www.ioa.tw/
 */
 
$(function() {

    // mobile menu 
    $('.hamburger').on('click', function() {
        $('nav').addClass('mobile-menu');
    })

    $('.icon-x').on('click', function() {
        $('nav').removeClass('mobile-menu');
    })

    $('.dropmenu').on('click', function() {
        $('.icon-add').toggleClass('icon-remove');
        $('.dropmenu-items').slideToggle();
    })

    $('nav').find('.item').on('click', function() {
        $('.icon-x').click(); 
    })

    // news 
    $('.item-content').on('click', function() {
        $(this).find('.icon-add').toggleClass('icon-remove')
        $(this).find('.content').slideToggle();
    });
    $('.events-box').on('click', function() {
        $('.events-box').removeClass('active');
        let day = $(this).data('day');
        $(this).addClass('active');

        if($(window).width() <= 450) {
            $('.m-detail').slideUp();
            $(this).find('.m-detail').slideDown(); 
        } else {
            $('.detail').removeClass('active');
            $('.detail[data-detail="'+ day + '"]').addClass('active'); 
        }
        
        
    });
    //events 
    $('.day').find('[data-day="2-1"]').click();
});
