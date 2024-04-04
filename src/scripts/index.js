import '../pages/index.css';
import { initialCards } from './cards.js';
import { likeCard, deleteCard, renderCards} from './card.js';
import { openModal } from './modal.js';
import { formEditProfile, formNewPlace, handleEditProfileFormSubmit, handleNewPlaceFormSubmit, popupEditProfile, popupAddCard, popupCard, fillProfilePopup } from './forms.js';

const editBtn = document.querySelector('.profile__edit-button');
const addBtn = document.querySelector('.profile__add-button');
const popupImage = document.querySelector('.popup__image');
const popupCaption = document.querySelector('.popup__caption');

function renderCardsfromDatabase() {
  initialCards.forEach(el => renderCards(el, deleteCard, likeCard, handleImagePopupOpening));
}

function handleImagePopupOpening(card) {
  openModal(popupCard);

  popupImage.src = card.link;
  popupCaption.textContent = card.name;
  popupImage.alt = card.name;
};

function hangEventListenerOpenPopup(btn, popup) {
 btn.addEventListener('click', () => openModal(popup));
};

function hangEventListenerForm(form, handleFunction) {
  form.addEventListener('submit', handleFunction)
};

function setYear() {
  const yearElement = document.querySelector('.footer__copyright');
  const year = new Date().getFullYear();
  yearElement.textContent = '© ' + `${year}` + ' Mesto Russia';
}

renderCardsfromDatabase();

editBtn.addEventListener('click', () => {
  fillProfilePopup();
  openModal(popupEditProfile)
})

hangEventListenerOpenPopup(addBtn, popupAddCard);

hangEventListenerForm(formEditProfile, handleEditProfileFormSubmit);
hangEventListenerForm(formNewPlace, handleNewPlaceFormSubmit);

setYear();

export { handleImagePopupOpening };