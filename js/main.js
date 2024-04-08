/*
!!! создания массива из 25 сгенерированных объектов-фотографий!!!
Структура каждого объекта:
  id, число от 1 до 25. Числа не должны повторяться.
  url, строка - адрес картинки вида photos/{{i}}.jpg, где {{i}} — это число от 1 до 25. Адреса картинок не должны повторяться.
  description, строка — описание фотографии. Описание придумать самостоятельно.
  likes, число — количество лайков, поставленных фотографии. Случайное число от 15 до 200.
  comments, массив объектов:
    id — любое число, идентификатор. Идентификаторы не должны повторяться.
    avatar — это строка, значение которой формируется по правилу img/avatar-{{случайное число от 1 до 6}}.svg.
    message — взять одно или два случайных предложения из представленных.
    name - набор имён для комментаторов составьте сами. Подставить любое имя.
*/

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
 * Выбирает рандомное число из диапозона
 * @param {Number} a - начальное значение
 * @param {Number} b - конечное значение
 * @returns {Number} - случайное число
 */
const getRandomInteger = (a, b) => {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};

/**
 *
 * @param {Array} elements - массив с временными данными
 * @returns {String} - элемент массива, в нашем случае это строка
 */
const getRandomArrayElement = (elements) => elements[getRandomInteger(0, elements.length - 1)];

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

console.log(generatePhotos(25));

