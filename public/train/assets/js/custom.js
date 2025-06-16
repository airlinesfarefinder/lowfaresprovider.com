var nav_target = document.getElementById("navigation_menu");
var nav_trigger = document.getElementById("nav_toggle");

$("#service-carousel").owlCarousel({
  loop: true,
  margin: 10,
  nav: false,
  dots: true,
  lazyLoad: true,
  autoplay: {
    delay: 2500,
  },
  responsive: {
    0: {
      items: 1,
    },
    400: {
      items: 2,
    },
    600: {
      items: 3,
    },
    800: {
      items: 3,
    },
    1100: {
      items: 4,
    },
  },
});

function toggle_nav_menu() {
  if (nav_target && nav_trigger) {
    nav_target.classList.toggle("active");
    nav_trigger.classList.toggle("active");
  }
}

// popup
var popup_target = document.getElementById("popup");
var section_popup_target = document.getElementById("section_popup");

var toggle_popup = function () {
  popup_target.classList.toggle("active");
};

function active_tab(tab_id, target_id, trigger) {
  var tabs = document.getElementById(tab_id);
  var pills = tabs.getElementsByClassName("pill");
  var contents = tabs.getElementsByClassName("tab_content");

  // Remove 'active' class from all pills
  for (var i = 0; i < pills.length; i++) {
    pills[i].classList.remove("active");
  }

  // Remove 'active' class from all contents
  for (var i = 0; i < contents.length; i++) {
    contents[i].classList.remove("active");
  }

  // Add 'active' class to the clicked tab and corresponding content
  trigger.classList.add("active");
  var target = document.getElementById(target_id);
  target.classList.add("active");
}

document.addEventListener("DOMContentLoaded", function () {
  setTimeout(function () {
    var element = document.getElementById("contact_number_mobile");
    if (element) {
      element.classList.add("active");
    }
  }, 5000);
});
