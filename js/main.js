const menuButton = document.querySelector('.menu-button');
const navContainer = document.querySelector('.nav-container');
const navLinks = document.querySelectorAll('.nav-link');


for (let navLink of navLinks){
  navLink.addEventListener('click', () => {
    if (navContainer.classList.contains('show')){
      navContainer.classList.remove('show');
      document.body.style.overflow = 'scroll';
    }
  })
}

menuButton.addEventListener('click', () => {
  navContainer.classList.toggle('show');
  if (navContainer.classList.contains('show')){
    document.body.style.overflow = 'hidden';
  }else{
    document.body.style.overflow = 'scroll';
  }
})
