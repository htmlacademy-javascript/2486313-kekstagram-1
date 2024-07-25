import { getInitiallyImgElement } from './new-publication.js';
const errorMessage = document.querySelector('#error').content.querySelector('.error');
const body = document.querySelector('body');
const successMessage = document.querySelector('#success').content.querySelector('.success');
const ALERT_SHOW_TIME = 5000;
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
  }, ALERT_SHOW_TIME);
};


const closePopup = () => {
  const success = document.querySelector('.success');
  const error = document.querySelector('.error');
  if (success) {
    success.remove();
  } else if (error) {
    error.remove();
  }
};


const closePopupByEscape = (() => {
  window.addEventListener('keydown', (evt) => {
    if (evt.key === 'Escape') {
      closePopup();
      getInitiallyImgElement();
    }
  });
});

const showAlert = (error = null) => {
  const cloneSuccessMessage = successMessage.cloneNode(true);
  const cloneErrorMessage = errorMessage.cloneNode(true);

  if (error) {
    body.appendChild(cloneErrorMessage);
    closePopupByEscape(cloneErrorMessage);
    cloneErrorMessage.querySelector('.error__button').addEventListener('click', () => {
      closePopup();
      getInitiallyImgElement();
    });
    const handleShowErrorAlerts = (evt) => {
      if (evt.target.className !== 'error__inner') {
        if (evt.target.className === 'error__title') {
          evt.stopImmediatePropagation();
        } else {
          closePopup();
          window.removeEventListener('click', handleShowErrorAlerts);
        }
      }
    };
    window.addEventListener('click', handleShowErrorAlerts);
  } else {
    body.appendChild(cloneSuccessMessage);
    closePopupByEscape(cloneSuccessMessage);
    cloneSuccessMessage.querySelector('.success__button').addEventListener('click', () => {
      closePopup();
      getInitiallyImgElement();
    });
    const handleShowSuccessAlerts = (evt) => {
      if (evt.target.className !== 'success__inner') {
        if (evt.target.className === 'success__title') {
          evt.stopImmediatePropagation();
        } else {
          closePopup();
          window.removeEventListener('click', handleShowSuccessAlerts);
        }
      }
    };
    window.addEventListener('click', handleShowSuccessAlerts);
  }

  return body;
};

function debounce (callback, timeoutDelay = 500) {
  // Используем замыкания, чтобы id таймаута у нас навсегда приклеился
  // к возвращаемой функции с setTimeout, тогда мы его сможем перезаписывать
  let timeoutId;

  return (...rest) => {
    // Перед каждым новым вызовом удаляем предыдущий таймаут,
    // чтобы они не накапливались
    clearTimeout(timeoutId);

    // Затем устанавливаем новый таймаут с вызовом колбэка на ту же задержку
    timeoutId = setTimeout(() => callback.apply(this, rest), timeoutDelay);

    // Таким образом цикл «поставить таймаут - удалить таймаут» будет выполняться,
    // пока действие совершается чаще, чем переданная задержка timeoutDelay
  };
}

// function throttle (callback, delayBetweenFrames) {
//   // Используем замыкания, чтобы время "последнего кадра" навсегда приклеилось
//   // к возвращаемой функции с условием, тогда мы его сможем перезаписывать
//   let lastTime = 0;

//   return (...rest) => {
//     // Получаем текущую дату в миллисекундах,
//     // чтобы можно было в дальнейшем
//     // вычислять разницу между кадрами
//     const now = new Date();

//     // Если время между кадрами больше задержки,
//     // вызываем наш колбэк и перезаписываем lastTime
//     // временем "последнего кадра"
//     if (now - lastTime >= delayBetweenFrames) {
//       callback.apply(this, rest);
//       lastTime = now;
//     }
//   };
// }

const getQuantityComments = (publication) => {
  const comments = publication.comments;
  return comments.length;
};

const comparePublicationComments = (publicationA, publicationB) => {
  const quantityCommentsA = getQuantityComments(publicationA);
  const quantityCommentsB = getQuantityComments(publicationB);

  return quantityCommentsB - quantityCommentsA;
};


export { showAlert, showAlertError, getRandomArrayElement, getRandomInteger, debounce, comparePublicationComments };
