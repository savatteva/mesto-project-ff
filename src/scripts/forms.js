import { addCardInContainer, createCard, likeCard, deleteCard } from './card.js';
import { closeModal } from './modal.js';
import { handleImagePopupOpening, avatar, setAvatar } from './index.js';
import { validationConfig, clearValidation } from './validation.js'
import { addNewCardUsingApi, editProfile, changeAvatarUsingApi } from './api.js';

const popupEditProfile = document.querySelector('.popup_type_edit');
const popupAddCard = document.querySelector('.popup_type_new-card');
const popupCard = document.querySelector('.popup_type_image');
const formEditProfile = document.forms.editProfile;
const formNewPlace = document.forms.newPlace;
const profileTitle = document.querySelector('.profile__title');
const profileDescription = document.querySelector('.profile__description');
const profileImage = document.querySelector('.profile__image');
const nameInput = formEditProfile.elements.name;
const descriptionInput = formEditProfile.elements.description;
const changeAvatarPopup = document.querySelector('.popup_type_change-avatar');
const changeAvatarForm = document.forms.newAvatar;
const avatarUrlInput = changeAvatarForm.elements.avatar;
const popupDeleteCard = document.querySelector('.popup_type_delete-card');
const deleteCardBtn = popupDeleteCard.querySelector('.popup__button');

function addClosePopupByOverlayEventListener(popup) {
  popup.addEventListener('click', (e) => {
    if (e.target.classList.contains('popup__close') || e.target === popup) {
      closeModal(popup)
    }
  })
};

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

  editProfile(userInfo.name, userInfo.about)
    .then(res => {
      profileTitle.textContent = res.name;
      profileDescription.textContent = res.about;
    });

  closeModal(popupEditProfile);
};

function handleNewPlaceFormSubmit(e) {
  e.preventDefault();

  const newPlace = {
    name: formNewPlace.elements.placeName.value,
    link: formNewPlace.elements.link.value,
    likes: [],
  }

  addNewCardUsingApi(newPlace.name, newPlace.link, newPlace.likes)
    .then(res => addCardInContainer(createCard(res, deleteCard, likeCard, handleImagePopupOpening)))

  closeModal(popupAddCard);

  resetForm(formNewPlace);

  return newPlace
}

function handleChangeAvatarFormSubmit(e) {
  e.preventDefault();

  const newAvatar = avatarUrlInput.value;

  changeAvatarUsingApi(newAvatar)
    .then(res => {
      setAvatar(res.avatar);
    });

  closeModal(changeAvatarPopup);

  resetForm(changeAvatarForm);
}

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

addClosePopupByOverlayEventListener(popupEditProfile);
addClosePopupByOverlayEventListener(popupAddCard);
addClosePopupByOverlayEventListener(popupCard);
addClosePopupByOverlayEventListener(popupDeleteCard);
addClosePopupByOverlayEventListener(changeAvatarPopup);

export { popupEditProfile, popupAddCard, popupCard, formEditProfile, formNewPlace, fillProfilePopup, fillProfile, handleEditProfileFormSubmit, handleNewPlaceFormSubmit, resetForm, handleChangeAvatarFormSubmit, changeAvatarForm, renderLoading, popupDeleteCard, deleteCardBtn };