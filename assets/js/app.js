$(document).ready(function () {

  // banner slider slick js starts here
  $('.banner_slider').slick({
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
    fade: true,
    cssEase: 'linear',
    dots: true,
    dotsClass: 'banner_sliderDots',
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: false
        },
      }
    ]
  });
  // banner slider slick js ends here
  // feature section slick slider js starts here
  $('.featureSlider').slick({
    slidesToShow: 5,
    autoplay: true,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        },
      }
    ]
  });
  // feature section slick slider js ends here
  // top category section slick slider starts here
  $('.top_cat_slider').slick({
    slidesToShow: 6,
    slidesToScroll: 1,
    prevArrow: $('.leftArrow'),
    nextArrow: $('.rightArrow'),
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        },
      }
    ]
  });
  // top category section slick slider ends here
  // countdown jquery file starts here
  $('#cot_sale_timer').countdown('2026/04/30', function (event) {
    var $this = $(this).html(event.strftime(''
      +
      '<div class="cot_sale_timer_para"><span class="span_1">%D</span><span class="span_2">Days</span></div> ' +
      '<span class="colon_sign">:</span>' +
      '<div class="cot_sale_timer_para"><span class="span_1">%H</span><span class="span_2">Hours</span></div> ' +
      '<span class="colon_sign">:</span>' +
      '<div class="cot_sale_timer_para"><span class="span_1">%M</span><span class="span_2">Min</span></div> ' +
      '<span class="colon_sign">:</span>' +
      '<div class="cot_sale_timer_para"><span class="span_1">%S</span><span class="span_2">Sec</span></div> '

    ));
  });
  // countdown jquery file ends here
  // clients section slick slider starts here
  $('.clientsReviewSlider').slick({
    slidesToShow: 3,
    dots: true,
    dotsClass: 'clientsSliderDots',
    prevArrow: $('.clientsleftArrow'),
    nextArrow: $('.clientsrightArrow'),
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        },
      }
    ]
  });
  // clients section slick slider ends here
  // venobox usage for feature product section
  new VenoBox({
    spinner: 'swing',
    navigation: false,
    navKeyboard: false,
    navTouch: false,
  });
  $('.slider-for').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: '.slider-nav'
  });
  $('.slider-nav').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    asNavFor: '.slider-for',
    dots: false,
    arrows: true,
    vertical: true,
    verticalSwiping: true,
    centerMode: false,
    focusOnSelect: true
  });
});
document.addEventListener('DOMContentLoaded', () => {
  // Quantity Increment and Decrement Logic
  const quantityControls = document.querySelectorAll('.quantity-control');

  quantityControls.forEach(control => {
    const minusBtn = control.querySelector('.btn-minus');
    const plusBtn = control.querySelector('.btn-plus');
    const input = control.querySelector('input');

    minusBtn.addEventListener('click', () => {
      let currentValue = parseInt(input.value) || 1;
      if (currentValue > 1) {
        input.value = currentValue - 1;
      }
    });

    plusBtn.addEventListener('click', () => {
      let currentValue = parseInt(input.value) || 1;
      input.value = currentValue + 1;
    });
  });

  // Remove Item Row
  const removeButtons = document.querySelectorAll('.remove-btn');
  removeButtons.forEach(button => {
    button.addEventListener('click', (e) => {
      const row = e.target.closest('tr');
      if (row) {
        row.remove();
      }
    });
  });

  // Coupon Form Handler
  const couponForm = document.getElementById('coupon-form');
  if (couponForm) {
    couponForm.addEventListener('submit', (e) => {
      e.preventDefault();
      alert('Coupon code applied successfully, sir!');
      couponForm.reset();
    });
  }
  // preloader section js starts here (1)
  window.onload = () => {
    const preloader = document.querySelector('.preloader');

    if (preloader) {
      preloader.style.opacity = '0';

      setTimeout(() => {
        preloader.remove();
      }, 400);
    }
  };
  // preloader section js ends here (1)
}); // Close DOMContentLoaded callback