

let burger = document.querySelector('.hamburger');


burger.addEventListener('click', (e) => {
  moveRadio();
});



// moves radio inline with top header so the page doesn't scroll up
function moveRadio() {
  let radio = document.getElementById("show-menu");
  let y = pageYOffset;
  radio.style.top = 0 + 'px';
  if (y > 0) {
    radio.style.top = y + 'px';
  }
}



