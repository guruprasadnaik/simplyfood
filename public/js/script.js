$(".owl-carousel").owlCarousel({
  loop: true,
  margin: 10,
  nav: true,
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 3,
    },
    1000: {
      items: 4,
    },
  },
});

$(document).ready(function () {
  $("#checkbox").click(function () {
    console.log("Test");
    $(".menu").toggleClass("active");
  });
});
