let wrapper = document.querySelector('.wrapper');
let navMain = document.querySelector('.main-nav');
let navMobile = document.querySelector('.main-nav__mobile');
let navToggleClosed = document.querySelector('.main-nav__toggle-closed');
let navToggleOpened = document.querySelector('.main-nav__toggle-opened');

navMain.classList.remove('main-nav--nojs');

navToggleClosed.addEventListener('click', function () {
  if (navMain.classList.contains('main-nav--closed')) {
    navMain.classList.remove('main-nav--closed');
    navMain.classList.add('main-nav--opened');
  } else {
    navMain.classList.add('main-nav--closed');
    navMain.classList.remove('main-nav--opened');
  }
});

navToggleClosed.addEventListener('click', function () {
  if (wrapper.classList.contains('wrapper--closed')) {
    wrapper.classList.remove('wrapper--closed');
    wrapper.classList.add('wrapper--opened');
  } else {
    wrapper.classList.add('wrapper--closed');
    wrapper.classList.remove('wrapper--opened');
  }
});

navToggleOpened.addEventListener('click', function () {
  if (navMain.classList.contains('main-nav--closed')) {
    navMain.classList.remove('main-nav--closed');
    navMain.classList.add('main-nav--opened');
  } else {
    navMain.classList.add('main-nav--closed');
    navMain.classList.remove('main-nav--opened');
  }
});

navToggleOpened.addEventListener('click', function () {
  if (wrapper.classList.contains('wrapper--closed')) {
    wrapper.classList.remove('wrapper--closed');
    wrapper.classList.add('wrapper--opened');
  } else {
    wrapper.classList.add('wrapper--closed');
    wrapper.classList.remove('wrapper--opened');
  }
});

document.addEventListener('click', function (e) {
  const target = e.target;
  const itsTavMobile = target === navMobile || navMobile.contains(target);
  const itsTavToggleClosed = target === navToggleClosed;
  const navMainActive = navMain.classList.contains('main-nav--opened');

  if (!itsTavMobile && !itsTavToggleClosed && navMainActive) {
    navMain.classList.add('main-nav--closed');
    navMain.classList.remove('main-nav--opened');
  }
});

document.addEventListener('click', function (e) {
  const target = e.target;
  const itsTavMobile = target === navMobile || navMobile.contains(target);
  const itsTavToggleClosed = target === navToggleClosed;
  const wrapperActive = wrapper.classList.contains('wrapper--opened');

  if (!itsTavMobile && !itsTavToggleClosed && wrapperActive) {
    wrapper.classList.add('wrapper--closed');
    wrapper.classList.remove('wrapper--opened');
  }
});
