function openModal(popupType) {
  popupType.classList.add('popup_is-opened');

  hangKeyListener();
};

function hangKeyListener() {
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeModal(popupType)
    }
  })
};

function closeModal(popupType) {
  popupType.classList.remove('popup_is-opened');
  document.removeEventListener('keydown', hangKeyListener);
};

export { openModal, closeModal };