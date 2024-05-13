const bigPicture = document.querySelector('.big-picture');
const bigPictureImg = document.querySelector('.big-picture__img');
const likesCount = document.querySelector('.likes-count');
const commentsCount = document.querySelector('.comments-count');
const containerComments = document.querySelector('.social__comments');
const socialCaption = document.querySelector('.social__caption');
const comment = containerComments.querySelector('.social__comment');
const body = document.querySelector('body');
const commentCount = document.querySelector('.social__comment-count');
const commentLoader = document.querySelector('.comments-loader');

const createComments = function({comments}) {
  const commentClone = comment.cloneNode(true).content;
  commentClone.src = comments.avatar;
  commentClone.alt = comments.name;
  commentClone.querySelector('.social__text').textContent = comments.name;
  containerComments.append(commentClone);
};

/**
 * @param {string} url - адрес url (путь к изображению)
 * @param {object} comments - объект, содержащий все данные комментария
 * @param {number} likes - число лайков
 * @param {string} description - описание фотографии
 */
const openBigPicture = ({url, description, comments, likes}) => {
  bigPicture.classList.remove('.hidden');
  body.classList.add('.modal-open');
  commentCount.classList.add('.hidden');
  commentLoader.classList.add('.hidden');

  bigPictureImg.querySelector('img').src = url;
  likesCount.textContent = likes;
  commentsCount.textContent = comments.length;
  socialCaption.textContent = description;

  /* comments.forEach((commenter) => {
    createComments(commenter);
  });*/
};

export { openBigPicture };
