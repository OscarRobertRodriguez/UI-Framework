

import searchSvg from '../styles/assets/search.svg';

import twitterSvg from '../styles/assets/twitter.svg';
import githubSvg from '../styles/assets/github.svg';
import bookSvg from '../styles/assets/book.svg';
import editSvg from '../styles/assets/edit.svg';
import uploadSvg from '../styles/assets/arrow-up.svg';


const searchElement = document.createElement("span");
searchElement.classList.add('search-logo');
searchElement.innerHTML = searchSvg;
document.getElementById('search').appendChild(searchElement);



//button icons

let editButtons = document.querySelectorAll('.btn--edit');
let uploadButtons = document.querySelectorAll('.btn--upload');

const editElement = document.createElement("span");
editElement.innerHTML = editSvg;

editButtons.forEach(item => {
  item.prepend(editElement);
});


const uploadElement = document.createElement('span');
uploadElement.innerHTML = uploadSvg;

uploadButtons.forEach(item => {
  item.prepend(uploadElement);
});


// footer icons
let footerIcons = document.querySelectorAll('.footer__icon');

const twitterElement = document.createElement("a");
twitterElement.href = '#';
twitterElement.innerHTML =  twitterSvg;

const githubElement = document.createElement("a");
githubElement.href = '#';
githubElement.innerHTML =  githubSvg;

const bookElement = document.createElement("a");
bookElement.href = '#';
bookElement.innerHTML =  bookSvg;

footerIcons[0].appendChild(twitterElement);
footerIcons[1].appendChild(githubElement);
footerIcons[2].appendChild(bookElement);


// accordion



