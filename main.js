const menuButton = document.querySelector('.js-menu__button');
const menu = document.querySelector('.js-menu');

menuButton.addEventListener('click', () => {
  menuopen();
})

function menuopen(){
  menu.classList.toggle('show');
}
