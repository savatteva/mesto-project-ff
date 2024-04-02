import { popupCard } from "./forms.js";

const popupImage = document.querySelector('.popup__image');
const popupCaption = document.querySelector('.popup__caption');

function openModal(popupType) {
  popupType.classList.add('popup_is-opened');
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeModal(popupType)
    }
  })
};

function closeModal(popupType) {
  popupType.classList.remove('popup_is-opened');
};

function handlePopupOpening(card) {
  openModal(popupCard);

  popupImage.src = card.link;
  popupCaption.textContent = card.name;
  popupImage.alt = card.name;
};

export { openModal, closeModal, handlePopupOpening };