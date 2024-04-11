import { getRandomArrayElement, getRandomInteger } from './util';

const DESCRIPTION = [
  'Это я в дубае',
  'Это мои ноги',
  'this is my friends',
  'Это олег',
];

const MESSAGE = [
  'Всё отлично!',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
];

const NAME = [
  'Петя',
  'Вася',
  'Паша',
  'Вова',
  'Виктор',
];

/**
 *
 * @param {Number} index - число, с каждым последующим вызовом, увеличивающееся на 1
 * @returns {object} - объект-фотография
 */
const generatePhoto = (index) => ({
  photoId: index,
  addressUrl: `photos/${index}.jpg`,
  photoDescription: getRandomArrayElement(DESCRIPTION),
  quantityLikes: getRandomInteger(15, 200),
  comments: [{
    commentsId: index,
    Avatar: `img/avatar-${getRandomInteger(1, 6)}.svg`,
    commentsMessage:  getRandomArrayElement(MESSAGE),
    commentsName: getRandomArrayElement(NAME),
  }
  ],
});

/**
 *
 * @param {Number} count - число объектов-фотографий в массиве
 * @returns {Array} - массив из объектов-фотографий
 */
const generatePhotos = (count) => Array.from({length: count}, (_, index) => generatePhoto(++index));

export {generatePhotos};
