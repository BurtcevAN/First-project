
const body = document.querySelector('body');
const menuBurger = document.querySelector('.menu__burger');
if (menuBurger) {
   const menuNav = document.querySelector('.menu');
   menuBurger.addEventListener('click', function (e) {
      body.classList.toggle('toggled');
      //menuNav.classList.toggle('_active');
      //menuBurger.classList.toggle('_active');
   });

   if (menuNav) {
      menuNav.addEventListener('click', function (e) {
         body.classList.remove('toggled');
         //menuNav.classList.remove('_active');
         //menuBurger.classList.remove('_active');
      });
   }
}