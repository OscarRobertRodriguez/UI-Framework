
let accordions = document.querySelectorAll('.markup');

accordions.forEach(accordion => {
  accordion.addEventListener('click', (e) => {
     let button = e.target;
     let content = button.nextElementSibling;

     content.classList.toggle('markup__content--open');
     button.classList.toggle('markup__button--active');
  })
})
