import '../pages/index.css';
import { createCard, likeCard, deleteCard, cardContainer, popupDeleteCard } from './card.js';
import { closeModal, openModal, addClosePopupByOverlayEventListener, handleImagePopupOpening, popupCard } from './modal.js';
import { validationConfig, enableValidation, clearValidation } from './validation.js';
import { getUserInfo, getInitialCards, addCard, editProfile, changeAvatar } from './api';
import { setYear, renderLoading, resetForm } from './utils';

const editBtn = document.querySelector('.profile__edit-button');
const addBtn = document.querySelector('.profile__add-button');
const avatar = document.querySelector('.profile__image');
const changeAvatarPopup = document.querySelector('.popup_type_change-avatar');
const popupEditProfile = document.querySelector('.popup_type_edit');
const popupAddCard = document.querySelector('.popup_type_new-card');
const formEditProfile = document.forms.editProfile;
const formNewPlace = document.forms.newPlace;
const profileTitle = document.querySelector('.profile__title');
const profileDescription = document.querySelector('.profile__description');
const nameInput = formEditProfile.elements.name;
const descriptionInput = formEditProfile.elements.description;
const changeAvatarForm = document.forms.newAvatar;
const avatarUrlInput = changeAvatarForm.elements.avatar;

Promise.all([getInitialCards(), getUserInfo()])
  .then(([cards, userInfo]) => {
    setAvatar(userInfo.avatar)
    fillProfile(userInfo.name, userInfo.about)
    cards.forEach(card => renderCards(card, deleteCard, likeCard, handleImagePopupOpening, userInfo))
  })
  .catch((err) => {
    console.log(err);
  });

function fillProfile(name, about) {
  profileTitle.textContent = name;
  profileDescription.textContent = about;
}

function fillProfilePopup() {
  clearValidation(formEditProfile, validationConfig);
  nameInput.value = profileTitle.textContent;
  descriptionInput.value = profileDescription.textContent;
}

function handleEditProfileFormSubmit(e) {
  e.preventDefault();
  
  const userInfo = {
    name: nameInput.value,
    about: descriptionInput.value
  }

  editProfile(userInfo.name, userInfo.about, formEditProfile)
    .then(res => {
      profileTitle.textContent = res.name;
      profileDescription.textContent = res.about;
      closeModal(popupEditProfile);
    })
    .catch((err) => {
      console.log(err);
    })
    .finally(() => renderLoading(false, formEditProfile.querySelector('.popup__button')))
};

function handleNewPlaceFormSubmit(e) {
  e.preventDefault();

  const newPlace = {
    name: formNewPlace.elements.placeName.value,
    link: formNewPlace.elements.link.value,
    likes: [], 
  }

  addCard(newPlace.name, newPlace.link, newPlace.likes, formNewPlace)
    .then(res => {
      addCardInContainer(createCard(res, deleteCard, likeCard, handleImagePopupOpening, res.owner))
      closeModal(popupAddCard);
    })
    .catch((err) => {
      console.log(err);
    })
    .finally(() => renderLoading(false, formNewPlace.querySelector('.popup__button')))

  return newPlace
}

function handleChangeAvatarFormSubmit(e) {
  e.preventDefault();

  const newAvatar = avatarUrlInput.value;

  changeAvatar(newAvatar, changeAvatarForm)
    .then(res => {
      setAvatar(res.avatar);
      closeModal(changeAvatarPopup);
    })
    .catch((err) => {
      console.log(err);
    })
    .finally(() => renderLoading(false, changeAvatarForm.querySelector('.popup__button')))
}

function renderCards(cardElement, deleteCard, likeCard, handlePopupOpening, userInfo) {
  const card = createCard(cardElement, deleteCard, likeCard,handlePopupOpening, userInfo);
  
  cardContainer.append(card);
};

function addCardInContainer(element) {
  cardContainer.prepend(element)
};

function setAvatar(avatarUrl) {
  avatar.style.backgroundImage = `url(${avatarUrl})`
}

addBtn.addEventListener('click', () => {
  resetForm(formNewPlace);
  clearValidation(formNewPlace, validationConfig);
  openModal(popupAddCard);
});

avatar.addEventListener('click', () => {
  resetForm(changeAvatarForm);
  clearValidation(changeAvatarForm, validationConfig)
  openModal(changeAvatarPopup)
})

function hangEventListenerForm(form, handleFunction) {
  form.addEventListener('submit', handleFunction)
};

editBtn.addEventListener('click', () => {
  fillProfilePopup();
  openModal(popupEditProfile);
})

hangEventListenerForm(formEditProfile, handleEditProfileFormSubmit);
hangEventListenerForm(formNewPlace, handleNewPlaceFormSubmit);
hangEventListenerForm(changeAvatarForm, handleChangeAvatarFormSubmit);

addClosePopupByOverlayEventListener(popupEditProfile);
addClosePopupByOverlayEventListener(popupAddCard);
addClosePopupByOverlayEventListener(popupCard);
addClosePopupByOverlayEventListener(popupDeleteCard);
addClosePopupByOverlayEventListener(changeAvatarPopup);

setYear();

enableValidation(validationConfig);