const toTopButton = document.querySelector(".back-to-top");

// when the user scrolls down 100px from the top of the document, show the button
window.onscroll = function () {
  scrollFunction();
  console.log("hello");
};

function scrollFunction() {
  if (
    document.body.scrollTop > 100 ||
    document.documentElement.scrollTop > 100
  ) {
    toTopButton.style.display = "block";
  } else {
    toTopButton.style.display = "none";
  }
}

// when the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.documentElement.scrollTop = 0;
}

//owl carousel
$(".owl-carousel").owlCarousel({
  loop: true,
  margin: 10,
  nav: true,
  autoplay: true,
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 3,
    },
    1000: {
      items: 5,
      nav: true,
    },
  },
});
