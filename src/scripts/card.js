import { openModal } from "./modal";

export function likeCard(e) {
  if (e.target.classList.contains('card__like-button')) {
    e.target.classList.toggle('card__like-button_is-active')
  } 
}

export const container = document.querySelector('.content');
export const cardContainer = container.querySelector('.places__list');
export const cardTemplate = document.querySelector('#card-template').content;

export function createCard(card, deleteCard, likeCard, handlePopupOpening) {
  const cardElement = cardTemplate.querySelector('.card').cloneNode(true);
  const deleteBtn = cardElement.querySelector('.card__delete-button');
  const likeBtn = cardElement.querySelector('.card__like-button');
  const imagePlace = cardElement.querySelector('.card__image');

  cardElement.querySelector('.card__title').textContent = card.name;
  cardElement.querySelector('.card__image').alt  = card.name;
  cardElement.querySelector('.card__image').src = card.link; 

  deleteBtn.addEventListener('click', () => deleteCard(cardElement));

  likeBtn.addEventListener('click', (e) => likeCard(e));

  imagePlace.addEventListener('click', () => handlePopupOpening(card.name, card.link));

  return cardElement;
}

export function deleteCard(card) {
  card.remove();
}

export function renderCards(cardElement, deleteCard, likeCard, handlePopupOpening) {
  const card = createCard(cardElement, deleteCard, likeCard,handlePopupOpening);

  cardContainer.append(card);
}

export function addCardInContainer(element) {
  cardContainer.prepend(element)
}