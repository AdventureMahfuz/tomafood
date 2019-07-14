(function($) {
    $(document).ready(function() {
        //sticky menu when scroll
        $(window).on('scroll', function() {
            var scroll = $(window).scrollTop();
            if (scroll > 0) {
                $(".header-section").addClass("sticky_top_section");
            } else {
                $(".header-section").removeClass("sticky_top_section");
            }
        });


        //hero slider
        $('#hero-slider').owlCarousel({
            animateIn: 'fadeIn',
            animateOut: 'fadeOut',
            loop: true,
            margin: 0,
            autoplay: true,
            autoplayHoverPause: true,
            responsiveClass: true,
            nav: true,
            dots: false,
            mouseDrag: false,
            touchDrag: false,
            responsive: {
                0: {
                    items: 1,
                },
                600: {
                    items: 1,
                },
                1000: {
                    items: 1,
                }
            }
        });

        //mobile menu custom js
        $(".mobile-home-btn").on("click", function() {
            $("html").animate({
                scrollTop: 0
            }, 800);
        });
        $(".mobile-menu-btn").on("click", function() {
            $('ul.mobile-menu').css({
                'right': '0',
                'opacity': '1',
                'transition': 'all .5s',
            });
        });
        $("#close").on("click", function() {
            $('ul.mobile-menu').css({
                'right': '-100%',
                'opacity': '0',
                'transition': 'all .8s',
            });
        });
        $("ul.mobile-menu li a").on("click", function() {
            $('ul.mobile-menu').css({
                'right': '-100%',
                'opacity': '0',
                'transition': 'all .8s',
            });
        });

        //back to top show when scroll
        $(".back_to_top i.fa").css("display", "none");
        $(window).on('scroll', function() {
            var scroll = $(window).scrollTop();
            if (scroll < 300) {
                $(".back_to_top i.fa").css("display", "none");
            } else {
                $(".back_to_top i.fa").css("display", "block");
            }
        });
        $(".back_to_top i.fa").on("click", function() {
            $("html").animate({
                scrollTop: 0
            }, 800);
        });

    });
})(jQuery);