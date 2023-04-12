const burger = document.querySelector('.burger');
const menuHeaderList = document.querySelector('.menu-header__list');
const body = document.querySelector('body')

burger.addEventListener('click', function() {
  burger.classList.toggle('active');
  menuHeaderList.classList.toggle('show-menu');
  body.classList.toggle('hid');
})
const form = document.querySelector('.form');
const formText = document.querySelector('.form__text');

formText.addEventListener('focus', () => form.classList.add('form-focus'));
formText.addEventListener('blur', () => form.classList.remove('form-focus'));