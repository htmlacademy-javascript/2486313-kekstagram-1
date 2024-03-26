function checkPalidrome (str) {
  str = str.toLowerCase();
  let newString = '';

  for (let i = str.length - 1; i >= 0; i--) {
    newString += str[i];
  }

  newString = newString.toLowerCase();

  if (str === newString) {
    return true;
  }

  return false;
}

checkPalidrome ('ДовОд');


function extractNumbers (str) {
  let integers = '';

  for (let i = 0; i <= str.length - 1; i++) {
    if (str[i] >= '0' && str[i] <= '9') {
      integers += str[i];
    }
  }
  if (integers === '') {
    return NaN;
  }

  return Math.round(integers);
}

extractNumbers('1 кефир, 0.5 батона');

/**
 * Добавляем доп символ если длина строки меньше заданного числа
 * @param {string} str - строка для проверки
 * @param {number} minLength - мин длина строки
 * @param {string} characters - строка для дополнения
 * @returns {string} - готовая строка с дополнениями
 */
function addingLines(str, minLength, characters) {
  // пока строка меньше мин длины, то добавляем в строку доп символы
  while (str.length < minLength) {
    str = characters + str;
  }
  return str;
}

addingLines('1', 2, '0');

function checkStrLength(checkString, comparyLength) {
  if (checkString.length >= comparyLength) {
    return true;
  }
  return false;
}

checkStrLength('проверяемая строка', 18);
