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
import {addListenerByfilter} from './filters-publication.js';
import { renderThumbnails } from './render-photos.js';
import './new-publication.js';
import { getData } from './api.js';
import './validate-form.js';
import './slider-form.js';
import { setUserFormSubmit } from './validate-form.js';
import { closeWindowPublication } from './new-publication.js';
import { showAlertError } from './util.js';
import './avatar.js';


getData()
  .then((photoData) => {
    renderThumbnails(photoData);
    addListenerByfilter(photoData);
  })
  .catch((err) => {
    showAlertError(err.message);
  });
setUserFormSubmit(closeWindowPublication);
