const menuButton = document.querySelector('.js-menu__button');
const menu = document.querySelector('.js-menu');
const menuList = document.querySelector('.js-menu__list');


menuButton.addEventListener('click' , () => {
  menuOpenClose();
})

menuList.addEventListener('click' , () => {
  menuOpenClose();
})

function menuOpenClose(){
  menu.classList.toggle('show');
  menuButton.classList.toggle('active');
}

const menuText = document.querySelector('.js-menu__text');


 







