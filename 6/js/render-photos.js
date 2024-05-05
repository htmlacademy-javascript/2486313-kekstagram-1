const photoTemplate = document.querySelector('#picture').content.querySelector('.picture');
const container = document.querySelector('.pictures');

/**
 *
 * @param {string} addressUrl - адрес url (путь к изображению)
 * @param {object} comments - объект, содержащий все данные комментария
 * @param {number} quantityLikes - число лайков
 * @returns {} - готовый HTML-элемент
 */
const createPublication = ({addressUrl, photoDescription, comments, quantityLikes}) => {
  const publication = photoTemplate.cloneNode(true);
  publication.querySelector('.picture__img').src = addressUrl;
  publication.querySelector('.picture__img').alt = photoDescription;
  publication.querySelector('.picture__comments').textContent = comments.length;
  publication.querySelector('.picture__likes').textContent = quantityLikes;

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
