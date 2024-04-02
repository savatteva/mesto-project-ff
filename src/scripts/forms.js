import { addCardInContainer, createCard, likeCard, deleteCard  } from "./card.js";
import { closeModal, openModal } from "./modal.js";

const popupEditProfile = document.querySelector('.popup_type_edit');const popupAddCard = document.querySelector('.popup_type_new-card');
const popupCard = document.querySelector('.popup_type_image');
const formEditProfile = document.forms.editProfile;

function eventListener(popup) {
  popup.addEventListener('click', (e) => {
    if (e.target.classList.contains('popup__close') || e.target === popup) {
      closeModal(popup)
    }
  })
};

const name = formEditProfile.elements.name;
const description = formEditProfile.elements.description;
const profileTitle = document.querySelector('.profile__title');
const profileDescription = document.querySelector('.profile__description');

name.value = profileTitle.textContent;
description.value = profileDescription.textContent;

eventListener(popupEditProfile);
eventListener(popupAddCard);
eventListener(popupCard);

function handleEditProfileFormSubmit(e) {
  e.preventDefault();

  profileTitle.textContent = name.value;
  profileDescription.textContent = description.value;

  closeModal(popupEditProfile);
}

const formNewPlace = document.forms.newPlace;

function handleNewPlaceFormSubmit(e) {
  e.preventDefault();

  const newPlace = {};

  newPlace.name = formNewPlace.elements.placeName.value;
  newPlace.link = formNewPlace.elements.link.value;

  addCardInContainer(createCard(newPlace, deleteCard, likeCard, openModal));

  closeModal(popupAddCard);

  resetForm(formNewPlace);

  return newPlace
}

function resetForm(form) {
  form.reset();
}

export { popupEditProfile, popupAddCard, popupCard, formEditProfile, formNewPlace, handleEditProfileFormSubmit, handleNewPlaceFormSubmit }