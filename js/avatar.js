const FILE_TYPES = ['jpg', 'jpeg', 'png'];

const fileChoose = document.querySelector('input[type=file]');
const preview = document.querySelector('.img-upload__preview img');

fileChoose.addEventListener('change', () => {
  const file = fileChoose.files[0];
  const fileName = file.name.toLowerCase();

  const matches = FILE_TYPES.some((it) => fileName.endsWith(it));

  if (matches) {
    preview.src = URL.createObjectURL(file);
  }
});
