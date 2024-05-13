import { openBigPicture } from './big-photo.js';
const photoTemplate = document.querySelector('#picture').content.querySelector('.picture');
const container = document.querySelector('.pictures');

/**
 *
 * @param {string} url - адрес url (путь к изображению)
 * @param {object} comments - объект, содержащий все данные комментария
 * @param {number} likes - число лайков
 * @param {string} description - описание фотографии
 * @returns {HTMLElement} - готовый HTML-элемент
 */
const createPublication = ({url, description, comments, likes}) => {
  const publication = photoTemplate.cloneNode(true);
  publication.querySelector('.picture__img').src = url;
  publication.querySelector('.picture__img').alt = description;
  publication.querySelector('.picture__comments').textContent = comments.length;
  publication.querySelector('.picture__likes').textContent = likes;
  publication.addEventListener('click', () => {
    openBigPicture({url, description, comments, likes});
  });

  return publication;
};

/**
 *
 * @param {Array} pictures - массив из объектов-фотографий
 */
const renderThumbnails = function (pictures) {
  const fragment = document.createDocumentFragment();

  pictures.forEach((picture) => {
    const thumbnail = createPublication(picture);
    fragment.append(thumbnail);
  });
  container.append(fragment);
};

export { renderThumbnails };
