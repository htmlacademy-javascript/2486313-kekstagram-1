
const uploadLogo = document.querySelector('#upload-file');
const imageEditor = document.querySelector('.img-upload__overlay');
const body = document.querySelector('body');
const uploadCancel = document.querySelector('#upload-cancel');
const controlSmaller = document.querySelector('.scale__control--smaller');
const controlBigger = document.querySelector('.scale__control--bigger');
const controlValue = document.querySelector('.scale__control--value');
const image = document.querySelector('.img-upload__preview');
const effectsRadio = document.querySelectorAll('.effects__radio');
const fieldHashtags = document.querySelector('.text__hashtags');
const fieldComments = document.querySelector('.text__description');
const containerSlider = document.querySelector('.img-upload__effect-level');
const MIN_VALUE = 25;
const MAX_VALUE = 100;
const STEP_VALUE = 25;


const addEffect = (effect) => `${'effects__preview--'}${effect.value}` ;

const changeScale = (value) => {
  image.style.transform = `scale(${value / 100})`;
  controlValue.value = `${value}%`;
};

const hiddenWindowPublication = () => {
  imageEditor.classList.add('hidden');
  body.classList.remove('modal-open');
  uploadLogo.value = '';
};

const closeDocumentKeydown = (evt) => {
  if (evt.key === 'Escape') {
    hiddenWindowPublication();
  }
};

let currentEffect = '';
effectsRadio.forEach((effect) => {
  effect.addEventListener('click', () => {
    image.classList.remove('effects__preview--chrome');
    image.classList.remove('effects__preview--none');
    image.classList.remove('effects__preview--sepia');
    image.classList.remove('effects__preview--marvin');
    image.classList.remove('effects__preview--phobos');
    image.classList.remove('effects__preview--heat');
    currentEffect = addEffect(effect);
    image.classList.add(currentEffect);
  });
});

const getInitiallyImgElement = () => {
  image.style.transform = 'scale(1)';
  if (currentEffect) {
    image.classList.remove(currentEffect);
  }
  if (fieldHashtags.value) {
    fieldHashtags.value = '';
  }
  if (fieldComments.value) {
    fieldComments.value = '';
  }
  image.classList.add('effects__preview--none');
  controlValue.value = `${100}%`;
  image.style.filter = '';
  containerSlider.classList.add('hidden');
};

uploadLogo.addEventListener('change', () => {
  imageEditor.classList.remove('hidden');
  body.classList.add('modal-open');
  getInitiallyImgElement();
});

uploadCancel.addEventListener('click', () => {
  hiddenWindowPublication();
});


controlBigger.addEventListener('click', () => {
  const NumberControlValue = parseInt(controlValue.value, 10);
  let newValue = NumberControlValue + STEP_VALUE;
  if (newValue > MAX_VALUE) {
    newValue = MAX_VALUE;
  }
  changeScale(newValue);
});

controlSmaller.addEventListener('click', () => {
  const NumberControlValue = parseInt(controlValue.value, 10);
  let newValue = NumberControlValue - STEP_VALUE;
  if (newValue < MIN_VALUE) {
    newValue = MIN_VALUE;
  }
  changeScale(newValue);
});


fieldHashtags.addEventListener('focus', () => {
  document.removeEventListener('keydown', closeDocumentKeydown);
});
fieldComments.addEventListener('focus', () => {
  document.removeEventListener('keydown', closeDocumentKeydown);
});

fieldHashtags.addEventListener('blur', () => {
  document.addEventListener('keydown', closeDocumentKeydown);
});
fieldComments.addEventListener('blur', () => {
  document.addEventListener('keydown', closeDocumentKeydown);
});

export {hiddenWindowPublication, getInitiallyImgElement};
