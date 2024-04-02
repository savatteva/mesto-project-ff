import '../pages/index.css';
import { initialCards } from './cards.js'
import { likeCard, deleteCard, renderCards} from './card.js'
import { openModal, handlePopupOpening, closeModal } from './modal.js'
import { formEditProfile, formNewPlace, handleEditProfileFormSubmit, handleNewPlaceFormSubmit, popupEditProfile, popupAddCard } from './forms.js';

initialCards.forEach(el => renderCards(el, deleteCard, likeCard, handlePopupOpening));

function getYear() {
  const yearElement = document.querySelector('.footer__copyright');
  const year = new Date().getFullYear();
  yearElement.textContent = '© ' + `${year}` + ' Mesto Russia';
}

getYear();

const editBtn = document.querySelector('.profile__edit-button');
const addBtn = document.querySelector('.profile__add-button');

editBtn.addEventListener('click', () => openModal(popupEditProfile));
addBtn.addEventListener('click', () => openModal(popupAddCard));

formEditProfile.addEventListener('submit', handleEditProfileFormSubmit);
formNewPlace.addEventListener('submit', handleNewPlaceFormSubmit);