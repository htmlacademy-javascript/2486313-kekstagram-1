const slider = document.querySelector('.effect-level__slider');
const valueSlider = document.querySelector('.effect-level__value');
const effects = document.querySelectorAll('.effects__item');
const containerSlider = document.querySelector('.img-upload__effect-level');
const filterImage = document.querySelector('.img-upload__preview');

noUiSlider.create(slider, {
  range: {
    min: 0,
    max: 100,
  },
  start: 0,
  step: 1,
  connect: 'lower',
});

let activeFilter = '';

slider.noUiSlider.on('update' , () => {
  valueSlider.value = slider.noUiSlider.get();
  if (activeFilter === 'invert') {
    filterImage.style.filter = `${activeFilter}(${valueSlider.value}%)`;
  } else if (activeFilter === 'blur') {
    filterImage.style.filter = `${activeFilter}(${valueSlider.value}px)`;
  } else {
    filterImage.style.filter = `${activeFilter}(${valueSlider.value})`;
  }
});
containerSlider.classList.add('hidden');


effects.forEach((effect) => {
  effect.addEventListener('click', () => {
    containerSlider.classList.add('hidden');
    if (effect.querySelector('.effects__radio').value === 'chrome') {
      activeFilter = 'grayscale';
      containerSlider.classList.remove('hidden');
      slider.noUiSlider.updateOptions({
        range: {
          min: 0,
          max: 1,
        },
        start: 1,
        step: 0.1,
      });
    } else if (effect.querySelector('.effects__radio').value === 'none') {
      containerSlider.classList.add('hidden');
    } else if (effect.querySelector('.effects__radio').value === 'sepia') {
      activeFilter = 'sepia';
      containerSlider.classList.remove('hidden');
      slider.noUiSlider.updateOptions({
        range: {
          min: 0,
          max: 1,
        },
        start: 1,
        step: 0.1,
      });
    } else if (effect.querySelector('.effects__radio').value === 'marvin') {
      activeFilter = 'invert';
      containerSlider.classList.remove('hidden');
      slider.noUiSlider.updateOptions({
        range: {
          min: 0,
          max: 100,
        },
        start: 100,
        step: 1,
      });
    } else if (effect.querySelector('.effects__radio').value === 'phobos') {
      activeFilter = 'blur';
      containerSlider.classList.remove('hidden');
      slider.noUiSlider.updateOptions({
        range: {
          min: 0,
          max: 3,
        },
        start: 3,
        step: 0.1,
      });
    } else if (effect.querySelector('.effects__radio').value === 'heat') {
      activeFilter = 'brightness';
      containerSlider.classList.remove('hidden');
      slider.noUiSlider.updateOptions({
        range: {
          min: 0,
          max: 3,
        },
        start: 3,
        step: 0.1,
      });
    }
  });
});

