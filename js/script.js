$(function (){
    $('input[name=phone]').mask('+7 (999) 999-99-99');

    $('.news-slide').owlCarousel({
        loop:true,
        // autoplay : true,
        // autoplayTimeout : 8000,
        margin:20,
        nav:true,
        dots:true,
        center: false,
        smartSpeed:900,
        items:2,
        navText: ['<img src="images/slide-left-arrow.png">','<img src="images/slide-right-arrow.png">'],
        responsive:{
            0:{
                items:1.1,
            },
            600:{
                items:1,
            },
            1000:{
                items:1.4,
                margin:20,
            }
        }
    });

    $('.students-slide').owlCarousel({
        loop:true,
        margin:20,
        nav:true,
        dots:false,
        center: false,
        smartSpeed:900,
        items:4,
        navText: ['<img src="images/slide-left-arrow.png">','<img src="images/slide-right-arrow.png">'],
        responsive:{
            0:{
                items:1.2,
                margin: 0,
            },
            600:{
                items:3,
            },
            1000:{
                items:3.4,
            }
        }
    });

    $('.spec-slide').owlCarousel({
        loop:false,
        margin:20,
        nav:true,
        dots:false,
        center: false,
        smartSpeed:900,
        items:3,
        navText: ['<span><svg width="8" height="13" viewBox="0 0 8 13" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7 1L1.34315 6.65685L7 12.3137" stroke="#5E419D" stroke-width="1.5"/></svg></span>','<span><svg width="8" height="13" viewBox="0 0 8 13" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1 1L6.65685 6.65685L1 12.3137" stroke="white" stroke-width="1.5"/></svg></span>'],
        responsive:{
            0:{
                items:1,
            },
            600:{
                items:3,
            },
            1000:{
                items:3,
            }
        }
    });

    $('.event-slide').owlCarousel({
        loop:false,
        margin:20,
        nav:true,
        dots:false,
        center: false,
        smartSpeed:900,
        items:2,
        navText: ['<span><svg width="8" height="13" viewBox="0 0 8 13" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7 1L1.34315 6.65685L7 12.3137" stroke="#5E419D" stroke-width="1.5"/></svg></span>','<span><svg width="8" height="13" viewBox="0 0 8 13" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1 1L6.65685 6.65685L1 12.3137" stroke="white" stroke-width="1.5"/></svg></span>'],
        responsive:{
            0:{
                items:1,
            },
            600:{
                items:1.5,
            },
            1000:{
                items:2,
            }
        }
    });

    $('.inner-slide-one').owlCarousel({
        loop:false,
        margin:20,
        nav:true,
        dots:false,
        center: false,
        smartSpeed:900,
        items:2,
        navText: ['<span><svg width="8" height="13" viewBox="0 0 8 13" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7 1L1.34315 6.65685L7 12.3137" stroke="#5E419D" stroke-width="1.5"/></svg></span>','<span><svg width="8" height="13" viewBox="0 0 8 13" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1 1L6.65685 6.65685L1 12.3137" stroke="white" stroke-width="1.5"/></svg></span>'],
        responsive:{
            0:{
                items:1,
            },
            600:{
                items:1.5,
            },
            1000:{
                items:2,
            }
        }
    });

    $('.inner-slide-two').owlCarousel({
        loop:false,
        margin:0,
        nav:true,
        dots:false,
        center: false,
        smartSpeed:900,
        items:1,
        navText: ['<span><svg width="8" height="13" viewBox="0 0 8 13" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7 1L1.34315 6.65685L7 12.3137" stroke="#5E419D" stroke-width="1.5"/></svg></span>','<span><svg width="8" height="13" viewBox="0 0 8 13" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1 1L6.65685 6.65685L1 12.3137" stroke="white" stroke-width="1.5"/></svg></span>'],
        responsive:{
            0:{
                items:1,
            },
            600:{
                items:1,
            },
            1000:{
                items:1,
            }
        }
    });

    $('.additional-slide').owlCarousel({
        loop:false,
        margin:20,
        nav:true,
        dots:false,
        center: false,
        smartSpeed:900,
        items:3,
        navText: ['<span><svg width="8" height="13" viewBox="0 0 8 13" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7 1L1.34315 6.65685L7 12.3137" stroke="#5E419D" stroke-width="1.5"/></svg></span>','<span><svg width="8" height="13" viewBox="0 0 8 13" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1 1L6.65685 6.65685L1 12.3137" stroke="white" stroke-width="1.5"/></svg></span>'],
        responsive:{
            0:{
                items:1,
            },
            600:{
                items:2,
            },
            1000:{
                items:3,
            }
        }
    });

    $('.sa-slide').owlCarousel({
        loop:false,
        margin:20,
        nav:true,
        dots:false,
        center: false,
        smartSpeed:900,
        items:2,
        navText: ['<span><svg width="8" height="13" viewBox="0 0 8 13" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7 1L1.34315 6.65685L7 12.3137" stroke="#5E419D" stroke-width="1.5"/></svg></span>','<span><svg width="8" height="13" viewBox="0 0 8 13" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1 1L6.65685 6.65685L1 12.3137" stroke="white" stroke-width="1.5"/></svg></span>'],
        responsive:{
            0:{
                items:1,
            },
            600:{
                items:1.5,
            },
            1000:{
                items:2,
            }
        }
    });

    $('.why-slide').owlCarousel({
        loop:false,
        margin:20,
        nav:true,
        dots:false,
        center: false,
        smartSpeed:900,
        items:1,
        navText: ['<span><svg width="8" height="13" viewBox="0 0 8 13" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7 1L1.34315 6.65685L7 12.3137" stroke="#5E419D" stroke-width="1.5"/></svg></span>','<span><svg width="8" height="13" viewBox="0 0 8 13" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1 1L6.65685 6.65685L1 12.3137" stroke="white" stroke-width="1.5"/></svg></span>'],
        responsive:{
            0:{
                items:1,
            },
            600:{
                items:1,
            },
            1000:{
                items:1,
            }
        }
    });

    $('.nh-slide').owlCarousel({
        loop:true,
        margin:40,
        nav:false,
        dots:false,
        // center: true,
        smartSpeed:900,
        items:1,
        navText: ['<span><svg width="8" height="13" viewBox="0 0 8 13" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7 1L1.34315 6.65685L7 12.3137" stroke="#5E419D" stroke-width="1.5"/></svg></span>','<span><svg width="8" height="13" viewBox="0 0 8 13" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1 1L6.65685 6.65685L1 12.3137" stroke="white" stroke-width="1.5"/></svg></span>'],
        responsive:{
            0:{
                items:1,
            },
            600:{
                items:1,
            },
            1000:{
                items:1.4,
            }
        }
    });
    


    $('.accordion-button').on('click',function(e){
        e.preventDefault();
        $(this).toggleClass('active');
    });
    

    $('.menu-opener a').on('click',function(e){
        e.preventDefault();
        $(this).toggleClass('active');
        $('.menu-block').toggleClass('active');
        $('.overlay').toggleClass('active');
        $('header').toggleClass('active');
        $('.left-menu').toggleClass('active');
    });
    

    $('.search-opener').on('click',function(e){
        e.preventDefault();
        $(this).toggleClass('active');
        $('.searchbox').toggleClass('active');
    });
    $(document).mouseup(function (e){
        var div = $(".searchbox, .search-opener");
        if (!div.is(e.target) 
            && div.has(e.target).length === 0) {
            div.removeClass('active');
        }
    });

    
    $('#demo').daterangepicker({
        "singleDatePicker": true,
        "autoApply": true,
        "locale": {
            "format": "DD.MM.YYYY",
            "separator": " - ",
            // "applyLabel": "Apply",
            // "cancelLabel": "Cancel",
            "fromLabel": "From",
            "toLabel": "To",
            "customRangeLabel": "Custom",
            "weekLabel": "W",
            "daysOfWeek": [
                "Вс",
                "Пн",
                "Вт",
                "Ср",
                "Чт",
                "Пт",
                "Сб"
            ],
            "monthNames": [
                "Январь",
                "Февраль",
                "Март",
                "Апрель",
                "Май",
                "Июнь",
                "Июль",
                "Август",
                "Сентябрь",
                "Октябрь",
                "Ноябрь",
                "Декабрь"
            ],
            "firstDay": 1
        },
        "startDate": true,
        "endDate": "11/15/2021"
    });

    
});

