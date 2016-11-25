(() => {
  const $slider = document.querySelector('.slider-list');

  const $sliderSlides = document.querySelectorAll('.slider-slide');

  const $sliderLeft = document.querySelector('.js-slider-left');

  const $sliderRight = document.querySelector('.js-slider-right');

  // Create method for going on the previous slide
  const slideLeft = (e) => {
    e.preventDefault();

    // Get current slide
    let $currentSlide = document.querySelector('.slider-slide-active');

    // Find the previous slide
    let $previousSlide = $currentSlide.previousElementSibling;

    if ($previousSlide !== null) {
      // If we are not on the first slide
      $currentSlide.classList.add('slider-slide-hidden');

      $currentSlide.classList.remove('slider-slide-active');

      $previousSlide.classList.remove('slider-slide-hidden');

      $previousSlide.classList.add('slider-slide-active');
    } else {
      // If we are on the first slide
      $currentSlide.classList.add('slider-slide-hidden');

      $currentSlide.classList.remove('slider-slide-active');

      $slider.lastElementChild.classList.remove('slider-slide-hidden');

      $slider.lastElementChild.classList.add('slider-slide-active');
    }
  };

  // Create method for going on the next slide
  const slideRight = (e) => {
    e.preventDefault();

    // Get current slide
    let $currentSlide = document.querySelector('.slider-slide-active');

    // Find the next slide
    let $nextSlide = $currentSlide.nextElementSibling;

    if ($nextSlide !== null) {
      // If we are not on the last slide
      $currentSlide.classList.add('slider-slide-hidden');

      $currentSlide.classList.remove('slider-slide-active');

      $nextSlide.classList.remove('slider-slide-hidden');

      $nextSlide.classList.add('slider-slide-active');
    } else {
      // If we are on the last slide
      $currentSlide.classList.add('slider-slide-hidden');

      $currentSlide.classList.remove('slider-slide-active');

      $slider.firstElementChild.classList.remove('slider-slide-hidden');

      $slider.firstElementChild.classList.add('slider-slide-active');
    }
  };

  // Create new custom event for sliding to the left
  const slideLeftEvent = new Event('slideLeft');

  // Create new custom event for sliding to the right
  const slideRightEvent = new Event('slideRight');

  // Create eventListener for click on the left arrow
  $sliderLeft.addEventListener('click', slideLeft, false);

  // Create eventListener for click on the right arrow
  $sliderRight.addEventListener('click', slideRight, false);

  // Create eventListener for pressing the left key
  $sliderLeft.addEventListener('slideLeft', slideLeft, false);

  // Create eventListener for pressing the right key
  $sliderRight.addEventListener('slideRight', slideRight, false);

  // Listen for keydown event
  document.addEventListener('keydown', (e) => {
    e = e || window.event;

    if (e.keyCode === 37) {
      // If pressed key was left arrow
      $sliderLeft.dispatchEvent(slideLeftEvent);
    } else if (e.keyCode === 39) {
      // If pressed key was right arrow
      $sliderRight.dispatchEvent(slideRightEvent);
    }
  }, false);
})();
