import {renderThumbnails} from './render-photos.js';
import { comparePublicationComments, debounce } from './util.js';
const filtersButtons = document.querySelectorAll('.img-filters__button');
const RERENDER_DELAY = 500;

const shuffleArray = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};

const switchButtonFilters = (activeFilter, pictureData) => {
  filtersButtons.forEach((filter) => {
    filter.classList.remove('img-filters__button--active');
  });
  activeFilter.classList.add('img-filters__button--active');
  if (activeFilter.id === 'filter-default') {
    renderThumbnails(pictureData.sort((a,b) => a.id - b.id));
  }
  if (activeFilter.id === 'filter-random') {
    renderThumbnails(shuffleArray(pictureData));
  }
  if (activeFilter.id === 'filter-discussed') {
    renderThumbnails(pictureData.sort(comparePublicationComments));
  }
};

const addListenerByfilter = (pictureData) => {
  filtersButtons.forEach((button) => {
    button.addEventListener('click', debounce(() => switchButtonFilters(button, pictureData)), RERENDER_DELAY);
  });
};

export { switchButtonFilters, addListenerByfilter };


