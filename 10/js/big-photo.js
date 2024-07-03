const bigPicture = document.querySelector('.big-picture');
const bigPictureImg = document.querySelector('.big-picture__img');
const likesCount = document.querySelector('.likes-count');
const socialCaption = document.querySelector('.social__caption');
const body = document.querySelector('body');
const commentCount = document.querySelector('.social__comment-count');
const containerComments = document.querySelector('.social__comments');
const commentElement = document.querySelector('.social__comment');
const commentsCount = document.querySelector('.comments-count');
const commentsLoader = document.querySelector('.comments-loader');

/**
 * отрисовывает комментарии в попапе
 * @param {Array} comments
 */
const renderComments = ((comments) => {
  containerComments.innerHTML = '';
  const fragmentComment = document.createDocumentFragment();
  comments.forEach(({avatar, name, message}) => {
    const commentClone = commentElement.cloneNode(true);
    commentClone.querySelector('.social__picture').src = avatar;
    commentClone.alt = name;
    commentClone.querySelector('.social__text').textContent = message;
    fragmentComment.appendChild(commentClone);
  });
  containerComments.appendChild(fragmentComment);
});

/**
 * @param {string} url - адрес url (путь к изображению)
 * @param {object} comments - объект, содержащий все данные комментария
 * @param {number} likes - число лайков
 * @param {string} description - описание фотографии
 */
const openBigPicture = ({url, description, comments, likes}) => {
  bigPicture.classList.remove('hidden');
  body.classList.add('modal-open');
  commentCount.classList.add('hidden');
  commentsLoader.classList.add('hidden');

  bigPictureImg.querySelector('img').src = url;
  likesCount.textContent = likes;
  commentsCount.textContent = comments.length;
  socialCaption.textContent = description;

  renderComments(comments);

};

const closeBigPhoto = (() => {
  bigPicture.classList.add('hidden');
});


export { openBigPicture, closeBigPhoto };
