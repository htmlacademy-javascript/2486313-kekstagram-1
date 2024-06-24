import { getRandomArrayElement, getRandomInteger } from './util.js';

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

const generateComment = (index) => ({
  id: index,
  avatar: `img/avatar-${getRandomInteger(1, 6)}.svg`,
  message:  getRandomArrayElement(MESSAGE),
  name: getRandomArrayElement(NAME),
});

const generateComments = (count) => Array.from({length: count}, (_, index) => generateComment(++index));

/**
 *
 * @param {Number} index - число, с каждым последующим вызовом, увеличивающееся на 1
 * @returns {object} - объект-фотография
 */
const generatePhoto = (index) => ({
  id: index,
  url: `photos/${index}.jpg`,
  description: getRandomArrayElement(DESCRIPTION),
  likes: getRandomInteger(15, 200),
  comments: generateComments(getRandomInteger(0, 30)),
});

/**
 *
 * @param {Number} count - число объектов-фотографий в массиве
 * @returns {Array} - массив из объектов-фотографий
 */
const generatePhotos = (count) => Array.from({length: count}, (_, index) => generatePhoto(++index));

export { generatePhotos };
