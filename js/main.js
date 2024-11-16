(function ($) {
    "use strict";

    // Spinner
    var spinner = function () {
        setTimeout(function () {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 1);
    };
    spinner();
    
    
    // Initiate the wowjs
    new WOW().init();


    // Sticky Navbar
    $(window).scroll(function () {
        if ($(this).scrollTop() > 45) {
            $('.navbar').addClass('sticky-top shadow-sm');
        } else {
            $('.navbar').removeClass('sticky-top shadow-sm');
        }
    });
    
    
    // Dropdown on mouse hover
    const $dropdown = $(".dropdown");
    const $dropdownToggle = $(".dropdown-toggle");
    const $dropdownMenu = $(".dropdown-menu");
    const showClass = "show";
    
    $(window).on("load resize", function() {
        if (this.matchMedia("(min-width: 992px)").matches) {
            $dropdown.hover(
            function() {
                const $this = $(this);
                $this.addClass(showClass);
                $this.find($dropdownToggle).attr("aria-expanded", "true");
                $this.find($dropdownMenu).addClass(showClass);
            },
            function() {
                const $this = $(this);
                $this.removeClass(showClass);
                $this.find($dropdownToggle).attr("aria-expanded", "false");
                $this.find($dropdownMenu).removeClass(showClass);
            }
            );
        } else {
            $dropdown.off("mouseenter mouseleave");
        }
    });
    
    
    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });


    // Testimonials carousel
    $(".testimonial-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1000,
        margin: 25,
        dots: false,
        loop: true,
        center: true,
        responsive: {
            0:{
                items:1
            },
            576:{
                items:1
            },
            768:{
                items:2
            },
            992:{
                items:3
            }
        }
    });


    // events isotope and filter
    var eventsIsotope = $('.events-container').isotope({
        itemSelector: '.events-item',
        layoutMode: 'fitRows'
    });
    $('#events-flters li').on('click', function () {
        $("#events-flters li").removeClass('active');
        $(this).addClass('active');

        eventsIsotope.isotope({filter: $(this).data('filter')});
    });
    
})(jQuery);

var item = jQuery('.extended-parallax')
    if (item.length !== 0 ) {
        item.each( function() {
            jQuery(this).paroller();
        })
    }
// scroll on blog
document.addEventListener('scroll', function() {
    const article = document.querySelector('.blog-article');
    const progressBar = document.querySelector('.nav__scroll-bar');
  
    const articleRect = article.getBoundingClientRect();
    const articleTop = articleRect.top;
    const articleHeight = articleRect.height;
  
    const windowHeight = window.innerHeight;
    const totalScroll = articleHeight - windowHeight;
  
    if (articleTop < 0 && Math.abs(articleTop) <= totalScroll) {
      const progress = (Math.abs(articleTop) / totalScroll) * 100;
      progressBar.style.width = `${progress}%`;
    } else if (Math.abs(articleTop) > totalScroll) {
      progressBar.style.width = '100%';
    } else {
      progressBar.style.width = '0%';
    }
  });
