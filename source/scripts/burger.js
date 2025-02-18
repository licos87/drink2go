const burgerBtn = document.querySelector('.menu-nav__toggle');
const menuList = document.querySelector('.menu-nav__list');
const header = document.querySelector('.header');

header.classList.remove('header--no-script');
burgerBtn.classList.remove('menu-nav__toggle--opened');
menuList.classList.remove('menu-nav__list--opened');

burgerBtn.addEventListener('click', burgerToggleHandler);
menuList.addEventListener('click', burgerToggleHandler);

function burgerToggleHandler() {
  burgerBtn.classList.toggle('menu-nav__toggle--opened');
  menuList.classList.toggle('menu-nav__list--opened');
}
