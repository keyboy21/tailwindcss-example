const btn = document.querySelector('#menu-btn');
const menu = document.querySelector('#menu-mobile');

btn.addEventListener('click', () => {
  btn.classList.toggle('open');
  menu.classList.toggle('hidden');

})
