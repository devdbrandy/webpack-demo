import _ from 'lodash';

function component() {
  const element = document.createElement('div');

  // imported lodash
  element.innerHTML = _.join(['Hello,', 'Webpack'], ' ');

  return element;
}

document.body.appendChild(component());
