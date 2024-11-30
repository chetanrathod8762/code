const progress_bars = document.querySelectorAll('.progress');

progress_bars.forEach(bar => {
  setTimeout(() => {
    const { size } = bar.dataset;
    bar.style.width = `${size}%`
  }, 1000);
});

$(document).ready(function() {
  $('.owl-review').owlCarousel({
      loop: true,
      margin: 18,
      nav: true,
  });
});

$(document).ready(function() {
  $('.owl-blog').owlCarousel({
      loop: true,
      margin: 20,
      nav: true,
  });
});