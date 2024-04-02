import '../pages/index.css';
import { initialCards } from './cards.js';
import { likeCard, deleteCard, renderCards} from './card.js';
import { openModal, handlePopupOpening } from './modal.js';
import { formEditProfile, formNewPlace, handleEditProfileFormSubmit, handleNewPlaceFormSubmit, popupEditProfile, popupAddCard } from './forms.js';

const editBtn = document.querySelector('.profile__edit-button');
const addBtn = document.querySelector('.profile__add-button');

function renderCardsfromDatabase() {
  initialCards.forEach(el => renderCards(el, deleteCard, likeCard, handlePopupOpening));
}

function hangEventListenerOpenPopup(btn, popup) {
  btn.addEventListener('click', () => openModal(popup));
}

function hangEventListenerForm(form, handleFunction) {
  form.addEventListener('submit', handleFunction)
};

function getYear() {
  const yearElement = document.querySelector('.footer__copyright');
  const year = new Date().getFullYear();
  yearElement.textContent = '© ' + `${year}` + ' Mesto Russia';
}

renderCardsfromDatabase();

hangEventListenerOpenPopup(editBtn, popupEditProfile);
hangEventListenerOpenPopup(addBtn, popupAddCard);

hangEventListenerForm(formEditProfile, handleEditProfileFormSubmit);
hangEventListenerForm(formNewPlace, handleNewPlaceFormSubmit);

getYear();