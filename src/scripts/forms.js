import { addCardInContainer } from "./card.js";
import { createCard, likeCard, deleteCard } from "./card.js";
import { closeModal, openModal } from "./modal.js";


export const popupEditProfile = document.querySelector('.popup_type_edit');
export const popupAddCard = document.querySelector('.popup_type_new-card');

export const formEditProfile = document.forms.editProfile;

export function handleEditProfileFormSubmit(e) {
  e.preventDefault();
  
  const name = formEditProfile.elements.name;
  const description = formEditProfile.elements.description;
  const profileTitle = document.querySelector('.profile__title');
  const profileDescription = document.querySelector('.profile__description');
  const closeBtn = popupEditProfile.querySelector('.popup__close');

  closeBtn.addEventListener('click', () => closeModal(popupEditProfile));

  profileTitle.textContent = name.value;
  profileDescription.textContent = description.value;

  closeModal(popupEditProfile);
}

export const formNewPlace = document.forms.newPlace;

export function handleNewPlaceFormSubmit(e) {
  e.preventDefault();

  const newPlace = {};

  newPlace.name = formNewPlace.elements.placeName.value;
  newPlace.link = formNewPlace.elements.link.value;

  addCardInContainer(createCard(newPlace, deleteCard, likeCard, openModal));

  closeModal(popupAddCard);

  resetForm(formNewPlace);
}

function resetForm(form) {
  form.reset();
}