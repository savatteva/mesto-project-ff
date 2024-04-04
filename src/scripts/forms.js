import { addCardInContainer, createCard, likeCard, deleteCard  } from './card.js';
import { closeModal } from './modal.js';
import { handleImagePopupOpening } from './index.js';

const popupEditProfile = document.querySelector('.popup_type_edit');
const popupAddCard = document.querySelector('.popup_type_new-card');
const popupCard = document.querySelector('.popup_type_image');
const formEditProfile = document.forms.editProfile;
const formNewPlace = document.forms.newPlace;
const name = formEditProfile.elements.name;
const description = formEditProfile.elements.description;
const profileTitle = document.querySelector('.profile__title');
const profileDescription = document.querySelector('.profile__description');

function addClosePopupByOverlayEventListener(popup) {
  popup.addEventListener('click', (e) => {
    if (e.target.classList.contains('popup__close') || e.target === popup) {
      closeModal(popup)
    }
  })
};

function fillProfilePopup() {
  name.value = profileTitle.textContent;
  description.value = profileDescription.textContent;
};

function handleEditProfileFormSubmit(e) {
  e.preventDefault();

  profileTitle.textContent = name.value;
  profileDescription.textContent = description.value;

  closeModal(popupEditProfile);
};

function handleNewPlaceFormSubmit(e) {
  e.preventDefault();

  const newPlace = {
    name: formNewPlace.elements.placeName.value,
    link: formNewPlace.elements.link.value
  }

  addCardInContainer(createCard(newPlace, deleteCard, likeCard, handleImagePopupOpening));

  closeModal(popupAddCard);

  resetForm(formNewPlace);

  return newPlace
}

function resetForm(form) {
  form.reset();
};

addClosePopupByOverlayEventListener(popupEditProfile);
addClosePopupByOverlayEventListener(popupAddCard);
addClosePopupByOverlayEventListener(popupCard);

export { popupEditProfile, popupAddCard, popupCard, formEditProfile, formNewPlace, fillProfilePopup, handleEditProfileFormSubmit, handleNewPlaceFormSubmit };