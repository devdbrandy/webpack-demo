import _ from 'lodash';
import './style.css';
import logo from './logo.svg';

function component() {
  const element = document.createElement('div');

  // imported lodash
  element.innerHTML = _.join(['Hello,', 'Webpack'], ' ');
  element.classList.add('hello');

  // Add the image to our existing div
  const myLogo = new Image();
  myLogo.src = logo;

  element.appendChild(myLogo);

  return element;
}

document.body.appendChild(component());
