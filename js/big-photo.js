const COMMENTS_PER_PORTION = 5;

const bigPicture = document.querySelector('.big-picture');
const bigPictureImg = document.querySelector('.big-picture__img');
const likesCount = document.querySelector('.likes-count');
const socialCaption = document.querySelector('.social__caption');
const body = document.querySelector('body');
const commentCount = document.querySelector('.social__comment-count');
const containerComments = document.querySelector('.social__comments');
const commentElements = document.querySelector('.social__comment');
const commentsCount = document.querySelector('.comments-count');
const commentsLoader = document.querySelector('.comments-loader');

let commentsShown = 0;


/**
 * отрисовывает комментарии в попапе
 * @param {Array} comments
 */
const createComment = (({ avatar, name, message }) => {
  const commentClone = commentElements.cloneNode(true);
  commentClone.querySelector('.social__picture').src = avatar;
  commentClone.alt = name;
  commentClone.querySelector('.social__text').textContent = message;

  return commentClone;
});

const renderComments = (comments) => {
  commentsShown += COMMENTS_PER_PORTION;
  if (commentsShown >= comments.length) {
    commentsLoader.classList.add('hidden');
    commentsShown = comments.length;
  } else {
    commentsLoader.classList.remove('hidden');
  }

  const fragment = document.createDocumentFragment();
  for (let i = 0; i < commentsShown; i++) {
    const commentElement = createComment(comments[i]);
    fragment.append(commentElement);
  }

  containerComments.innerHTML = '';
  containerComments.append(fragment);
  commentCount.innerHTML = `${commentsShown} из <span class="comments-count">${comments.length}`;
};


/**
 * @param {string} url - адрес url (путь к изображению)
 * @param {object} comments - объект, содержащий все данные комментария
 * @param {number} likes - число лайков
 * @param {string} description - описание фотографии
 */
const openBigPicture = ({url, description, comments, likes}) => {
  bigPicture.classList.remove('hidden');
  body.classList.add('modal-open');
  commentCount.classList.remove('hidden');

  commentsShown = 0;
  renderComments(comments);
  commentsLoader.addEventListener('click', () => {
    renderComments(comments);
  });

  bigPictureImg.querySelector('img').src = url;
  likesCount.textContent = likes;
  commentsCount.textContent = comments.length;
  socialCaption.textContent = description;

};

const closeBigPhoto = () => {
  bigPicture.classList.add('hidden');
  body.classList.remove('modal-open');
};


export { openBigPicture, closeBigPhoto };
