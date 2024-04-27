import '../pages/index.css';
import { likeCard, deleteCard, renderCards} from './card.js';
import { closeModal, openModal } from './modal.js';
import { formEditProfile, formNewPlace, handleEditProfileFormSubmit, handleNewPlaceFormSubmit, popupEditProfile, popupAddCard, popupCard, fillProfilePopup, fillProfile, handleChangeAvatarFormSubmit, changeAvatarForm } from './forms.js';
import { validationConfig, enableValidation, clearValidation } from './validation.js';
import { getUserInfo, getInitialCards } from './api';

const editBtn = document.querySelector('.profile__edit-button');
const addBtn = document.querySelector('.profile__add-button');
const popupImage = document.querySelector('.popup__image');
const popupCaption = document.querySelector('.popup__caption');
const avatar = document.querySelector('.profile__image');
const changeAvatarPopup = document.querySelector('.popup_type_change-avatar');

Promise.all([getInitialCards(), getUserInfo()])
  .then(([cards, userInfo]) => {
    setAvatar(userInfo.avatar)
    fillProfile(userInfo.name, userInfo.about)
    cards.forEach(card => renderCards(card, deleteCard, likeCard, handleImagePopupOpening, userInfo));
  });

function setAvatar(avatarUrl) {
  avatar.style.backgroundImage = `url(${avatarUrl})`
}

function handleImagePopupOpening(card) {
  openModal(popupCard);

  popupImage.src = card.link;
  popupCaption.textContent = card.name;
  popupImage.alt = card.name;
};

addBtn.addEventListener('click', () => {
  clearValidation(formNewPlace, validationConfig);
  openModal(popupAddCard);
});

avatar.addEventListener('click', () =>{
  clearValidation(changeAvatarForm, validationConfig)
  openModal(changeAvatarPopup)
})

function hangEventListenerForm(form, handleFunction) {
  form.addEventListener('submit', handleFunction)
};

function setYear() {
  const yearElement = document.querySelector('.footer__copyright');
  const year = new Date().getFullYear();
  yearElement.textContent = '© ' + `${year}` + ' Mesto Russia';
}

editBtn.addEventListener('click', () => {
  fillProfilePopup();
  openModal(popupEditProfile);
})

hangEventListenerForm(formEditProfile, handleEditProfileFormSubmit);
hangEventListenerForm(formNewPlace, handleNewPlaceFormSubmit);
hangEventListenerForm(changeAvatarForm, handleChangeAvatarFormSubmit);

setYear();

enableValidation(validationConfig);

export { handleImagePopupOpening, changeAvatarPopup, avatar, setAvatar };