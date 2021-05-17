const menubar = document.querySelector(".js-menu")

let clientRect = menubar.getBoundingClientRect() ;



window.addEventListener('scroll', () =>{
  let clientRect = menubar.getBoundingClientRect() ;
  let y = clientRect.top ;
  let scroolLength = window.pageYOffset;
  console.log(y,scroolLength);

  if(y < 10){
    menubar.classList.add("fixed");
  }
  
  if(scroolLength < 600){
    menubar.classList.remove("fixed");
  }

})

