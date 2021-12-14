// slick slider
$('.testimonial-slider').slick({
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: true,
  prevArrow:"<button type='button' class='slick-prev pull-left'><i class='fa fa-angle-left' aria-hidden='true'></i></button>",
  nextArrow:"<button type='button' class='slick-next pull-right'><i class='fal fa-angle-right' aria-hidden='true'></i></button>"
});

// toogle menu 
const headerToggle = document.querySelector(".header-toggle");
const headerMenu = document.querySelector(".header-menu");
const expandClass = "is-expand";
headerToggle.addEventListener("click", () => {
  headerMenu.classList.add(expandClass);
});
window.addEventListener("click", (e) => {
  if (!headerMenu.contains(e.target) && !e.target.matches(".header-toggle")) {
    headerMenu.classList.remove(expandClass);
  }
});

