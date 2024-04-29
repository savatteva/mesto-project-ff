function openModal(popupType) {
  popupType.classList.add('popup_is-opened');
  document.addEventListener('keydown', hangKeyListener)
};

function hangKeyListener(e) {
  if (e.key === 'Escape') {
    closeModal(document.querySelector('.popup_is-opened'));
  }
};

function closeModal(popupType) {
  popupType.classList.remove('popup_is-opened');
  document.removeEventListener('keydown', hangKeyListener);
};

function addClosePopupByOverlayEventListener(popup) {
  popup.addEventListener('click', (e) => {
    if (e.target.classList.contains('popup__close') || e.target === popup) {
      closeModal(popup)
    }
  })
};

export { openModal, closeModal, addClosePopupByOverlayEventListener };