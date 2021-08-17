
//Слайдер

$(document).ready(function(){
    $('.owl-carousel').owlCarousel({
        loop:true,
        autoplay: true,
        //margin:10,
        nav:false,
        items: 1,
        mouseDrag: true,
        touchDrag: true,
        rtl: false,
        responsive : {
            // breakpoint from 0 up
            0 : {
                //autoWidth: true,
                //autoHeight: true,
                center: true,
            },
            760 : {
                autoWidth: false,
                autoHeight: false,
            }
        }
    });
});

//Фильтр кликов и swipe для слайдера
var dragging = 0;
    $(document).mousedown(function() {
        dragging = 0;
        $(document).mousemove(function(){
            dragging = 1;
    });
});

//POPUP
orderBtn = $('.order__buttons__right');
popup = $('.popup');
popupClose = $('.popup__cancel-btn');
body = $('body');


orderBtn.on('click', function(e) {
    e.preventDefault();
	popup.css('display', 'block');
	body.css('overflow', 'hidden');
});

popupClose.on('click', function(e) {
    e.preventDefault();
	popup.css('display', 'none');
	body.css('overflow', 'auto');
});