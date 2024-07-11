import { defaultImgElement } from './new-publication.js';
const errorMessage = document.querySelector('#error').content.querySelector('.error');
const body = document.querySelector('body');
const successMessage = document.querySelector('#success').content.querySelector('.success');

/**
 * Выбирает рандомное число из диапозона
 * @param {Number} a - начальное значение
 * @param {Number} b - конечное значение
 * @returns {Number} - случайное число
 */
const getRandomInteger = (a, b) => {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};

/**
 *
 * @param {Array} elements - массив с временными данными
 * @returns {String} - элемент массива, в нашем случае это строка
 */
const getRandomArrayElement = (elements) => elements[getRandomInteger(0, elements.length - 1)];

const showAlertError = (message) => {
  const alertContainer = document.createElement('div');
  alertContainer.style.zIndex = '100';
  alertContainer.style.position = 'absolute';
  alertContainer.style.left = '0';
  alertContainer.style.top = '0';
  alertContainer.style.right = '0';
  alertContainer.style.padding = '10px 3px';
  alertContainer.style.fontSize = '30px';
  alertContainer.style.textAlign = 'center';
  alertContainer.style.backgroundColor = 'red';

  alertContainer.textContent = message;

  document.body.append(alertContainer);

  setTimeout(() => {
    alertContainer.remove();
  }, 5000);
};


const hiddenPopup = () => {
  const success = document.querySelector('.success');
  if (success) {
    success.remove();
  }
};


const closePopupByEscape = (() => {
  window.addEventListener('keydown', (evt) => {
    if (evt.key === 'Escape') {
      hiddenPopup();
      defaultImgElement();
    }
  });
});

const showAlert = (error = null) => {
  const cloneSuccessMessage = successMessage.cloneNode(true);
  const cloneErrorMessage = errorMessage.cloneNode(true);

  const callbackShowAlerts = (evt) => {
    if (evt.target.className !== 'success__inner') {
      if (evt.target.className === 'success__title') {
        evt.stopImmediatePropagation();
      } else {
        hiddenPopup();
        window.removeEventListener('click', callbackShowAlerts);
      }
    }
  };
  window.addEventListener('click', callbackShowAlerts);

  if (error) {
    body.appendChild(cloneErrorMessage);
    closePopupByEscape(cloneErrorMessage);
    cloneErrorMessage.querySelector('.error__button').addEventListener('click', () => {
      hiddenPopup();
      defaultImgElement();
    });
  } else {
    body.appendChild(cloneSuccessMessage);
    closePopupByEscape(cloneSuccessMessage);
    cloneSuccessMessage.querySelector('.success__button').addEventListener('click', () => {
      hiddenPopup();
      defaultImgElement();
    });
  }
  return body;
};


export { showAlert, showAlertError, getRandomArrayElement, getRandomInteger };
