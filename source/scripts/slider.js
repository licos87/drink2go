const slider = document.querySelector('.hero__slider');
const section = document.querySelector('.hero');
const prevButton = document.querySelector('.hero__control--prev');
const nextButton = document.querySelector('.hero__control--next');
const slides = Array.from(slider.querySelectorAll('.hero__item'));
const slideCount = slides.length;
const colors = ['#f3ebe1', '#eae6fc', '#e5e6e8'];
const pagination = document.querySelector('.hero__pagination-list');
const paginationItems = Array.from(pagination.querySelectorAll('.hero__pagination-button'));
let slideIndex = 0;
let prewIndex = 0;

prevButton.addEventListener('click', showPreviousSlide);
nextButton.addEventListener('click', showNextSlide);
pagination.addEventListener('click',(e) => updateSliderFromPagination(e))

function showPreviousSlide() {
  if (slideIndex !== 0) {
    slideIndex = (slideIndex - 1);
    updateSlider(slideIndex);
  }
}

function showNextSlide() {
  if (slideIndex !== slideCount - 1) {
    slideIndex = (slideIndex + 1);
    updateSlider(slideIndex);
  }
}

function updateSliderFromPagination(e) {
  const target = e.target.closest('.hero__pagination-button');
  const neededIndex = paginationItems.indexOf(target);
  updateSlider(neededIndex);
}

function updatePagination(index) {
  paginationItems[prewIndex].classList.remove('hero__pagination-button--active');
  paginationItems[index].classList.add('hero__pagination-button--active');
  prewIndex = index;
}

function updateSlider(slideIndex = 0) {
  slides.forEach((slide, index) => {
    if (index === slideIndex) {
      slide.style.display = 'block'
      slide.style.width = '100%';
      slide.style.opacity = '100%';
      slide.style.transition = 'width 1s, opacity 0.3s ease';
      if (window.innerWidth > 768 & window.innerWidth < 1440) {
        section.style.background = `linear-gradient(180deg, ${colors[index]} 77%, #ffffff 77%)`

      }
      updatePagination(index);
    } else {
      slide.style.width = '0';
      slide.style.opacity = '0';
      slide.style.transition = 'width 1s, opacity 0.3s';
      setTimeout(()=> slide.style.display = 'none',1000)
    }
  });

}

updateSlider();
