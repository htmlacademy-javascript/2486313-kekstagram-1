import { defaultImgElement } from './new-publication.js';
const errorMessage = document.querySelector('#error').content.querySelector('.error');
const body = document.querySelector('body');
const successMessage = document.querySelector('#success').content.querySelector('.success');

const hiddenPopup = (popup) => {
  popup.classList.add('hidden');
};


const closePopupSuccess = ((popup) => {
  window.addEventListener('keydown', (evt) => {
    if (evt.key === 'Escape') {
      hiddenPopup(popup);
      defaultImgElement();
    }
  });
});

const closePopupError = ((popup) => {
  window.addEventListener('keydown', (evt) => {
    if (evt.key === 'Escape') {
      hiddenPopup(popup);
      defaultImgElement();
    }
  });
});

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

export {getRandomArrayElement, getRandomInteger};


const showAlert = (message) => {
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

const showAlerts = (error = null) => {
  if (error) {
    const cloneErrorMessage = errorMessage.cloneNode(true);
    body.appendChild(cloneErrorMessage);
    closePopupError(cloneErrorMessage);
    cloneErrorMessage.querySelector('.error__button').addEventListener('click', () => {
      hiddenPopup(cloneErrorMessage);
      defaultImgElement();
    });
  } else {
    const cloneSuccessMessage = successMessage.cloneNode(true);
    body.appendChild(cloneSuccessMessage);
    closePopupSuccess(cloneSuccessMessage);
    cloneSuccessMessage.querySelector('.success__button').addEventListener('click', () => {
      hiddenPopup(cloneSuccessMessage);
      defaultImgElement();
    });
  }
  return body;
};


export {showAlerts, showAlert};
