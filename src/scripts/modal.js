const popupImage = document.querySelector('.popup__image');
const popupCaption = document.querySelector('.popup__caption');
const popupCard = document.querySelector('.popup_type_image');

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

function handleImagePopupOpening(card) {
  openModal(popupCard);

  popupImage.src = card.link;
  popupCaption.textContent = card.name;
  popupImage.alt = card.name;
};

export { openModal, closeModal, addClosePopupByOverlayEventListener, handleImagePopupOpening, popupCard };