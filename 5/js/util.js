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

export {getRandomArrayElement, getRandomInteger};
