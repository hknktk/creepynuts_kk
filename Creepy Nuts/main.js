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


// テキストアニメーション
const cb = function (el, isIntersecting) {
  if(isIntersecting) {
      const ta = new TextAnimation(el);
      ta.animate();
  }
}

const so = new ScrollObserver('.box__title', cb);


const callback = function (el, isIntersecting) {
  if(isIntersecting) {
      el.classList.add('inview');
  }
} 


const so2 = new ScrollObserver('.person__img', callback);

const so3 = new ScrollObserver('.emphasis', callback);




 







