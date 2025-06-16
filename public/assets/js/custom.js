const dealsCarousel = $("#deals_carousel").owlCarousel({
  loop: true,
  margin: 10,
  nav: false,
  responsive: {
    0: { items: 1 },
    600: { items: 2 },
    1000: { items: 3 },
  },
});

// Custom Navigation
$("#prev_deals_carousel").click(function () {
  dealsCarousel.trigger("prev.owl.carousel");
});

$("#next_deals_carousel").click(function () {
  dealsCarousel.trigger("next.owl.carousel");
});

const testimonialsCarousel = $("#testimonials_carousel").owlCarousel({
  loop: true,
  margin: 10,
  nav: false,
  responsive: {
    0: { items: 1 },
    600: { items: 1 },
    1000: { items: 1 },
  },
});

var target_nav = document.getElementById("nav_menu");
var target_nav_toggle = document.getElementById("nav_trigger");

function toggle_nav() {
  target_nav.classList.toggle("active");
  target_nav_toggle.classList.toggle("active");
}
