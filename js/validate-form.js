import { sendData } from './api.js';
import { showAlert } from './util.js';
const form = document.querySelector('.img-upload__form');
const fieldHashtags = document.querySelector('.text__hashtags');
const submitButton = document.querySelector('.social__footer-btn');
const HASHTAG = /^#[a-zа-яё0-9]{1,19}$/i;
const MAX_COUNT_HASHTAG_LENGTH = 20;
const MAX_COUNT_HASHTAG = 5;
const errorMessage = 'Поле заполнено неправильно!';
const SubmitButtonText = {
  IDLE: 'Сохранить',
  SENDING: 'Сохраняю...'
};


const pristine = new Pristine(form, {
  classTo: 'img-upload__field-wrapper',
  errorTextParent: 'img-upload__field-wrapper',
  errorClass: 'img-upload__field-wrapper--error',
});

const validateTag = (tag) => HASHTAG.test(tag);
/**
 * проверяет длину одного тега
 * @param {String} tag
 * @returns
 */
const checkLengthTag = (tag) => tag.length <= MAX_COUNT_HASHTAG_LENGTH;

/**
 * проверяет теги на уникальность
 * @param {Array} tags
 * @returns
 */
const checkUniqueTags = (tags) => {
  const lowerCaseTags = tags.map((tag) => tag.toLowerCase());
  return lowerCaseTags.length === new Set(lowerCaseTags).size;
};

const validateTags = (value) => {
  const tags = value.trim().split(' ').filter((tag) => tag.trim().length);
  return checkUniqueTags(tags) && checkLengthTag(tags) && tags.every(validateTag) && (tags.length <= MAX_COUNT_HASHTAG);
};

pristine.addValidator(
  fieldHashtags,
  validateTags,
  errorMessage,
  2,
  false,
);

const blockSubmitButton = () => {
  submitButton.disabled = true;
  submitButton.textContent = SubmitButtonText.SENDING;
};

const unblockSubmitButton = () => {
  submitButton.disabled = false;
  submitButton.textContent = SubmitButtonText.IDLE;
};

const setUserFormSubmit = (onSuccess) => {
  form.addEventListener('submit', (evt) => {
    evt.preventDefault();

    const isValid = pristine.validate();

    if (isValid) {
      blockSubmitButton();
      sendData(new FormData(evt.target))
        .then(() => {
          showAlert();
          onSuccess();
        })
        .catch((error) => {
          showAlert(error);
        })
        .finally(unblockSubmitButton());
    }
  });
};

export {setUserFormSubmit, pristine};
