function resetForm(form) {
  form.reset();
}; 

function renderLoading(isLoading, button) {
  if (isLoading) {
    button.textContent = 'Сохранение...'
  } else {
    button.textContent = 'Сохранить'
  }
}

function setYear() {
  const yearElement = document.querySelector('.footer__copyright');
  const year = new Date().getFullYear();
  yearElement.textContent = '© ' + `${year}` + ' Mesto Russia';
}

export { resetForm, renderLoading, setYear }