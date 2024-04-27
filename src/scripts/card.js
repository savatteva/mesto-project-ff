import { likeCardUsingApi, deleteCardUsingApi, unlikeCardUsingApi } from './api.js'
import { closeModal, openModal } from './modal.js';
import { deleteCardBtn, popupDeleteCard } from './forms'

const container = document.querySelector('.content');
const cardContainer = container.querySelector('.places__list');
const cardTemplate = document.querySelector('#card-template').content;

function createCard(card, deleteCard, likeCard, handlePopupOpening, userInfo) {
  const cardElement = cardTemplate.querySelector('.card').cloneNode(true);
  const deleteBtn = cardElement.querySelector('.card__delete-button');
  const likeBtn = cardElement.querySelector('.card__like-button');
  const imagePlace = cardElement.querySelector('.card__image');
  const likeQuantity = cardElement.querySelector('.like-button__quantity');
  const cardTitle = cardElement.querySelector('.card__title');

  card.likes.forEach(like => {
    if (like._id === userInfo._id) {
      likeBtn.classList.add('card__like-button_is-active')
    }
  })

  cardTitle.textContent = card.name;
  imagePlace.alt  = card.name;
  imagePlace.src = card.link;
  likeQuantity.textContent = card.likes.length;
  cardElement.id = card._id;

  deleteBtn.addEventListener('click', () => {
    openModal(popupDeleteCard);
    deleteCardUsingModal(cardElement, deleteCard, closeModal);
  });

  likeBtn.addEventListener('click', (e) => likeCard(e, cardElement));

  imagePlace.addEventListener('click', () => handlePopupOpening(card));

  return cardElement;
};

function deleteCardUsingModal(cardElement, deleteCard, closeModal) {
  deleteCardBtn.addEventListener('click', () => {
    deleteCard(cardElement);
    closeModal(popupDeleteCard);
  })
}

function deleteCard(card) {
  card.remove();
  deleteCardUsingApi(card.id)
};

function likeCard(e, cardElement) {
  if (e.target.classList.contains('card__like-button_is-active') && e.target.classList.contains('card__like-button')) {
    e.target.classList.toggle('card__like-button_is-active')
    unlikeCardUsingApi(cardElement.id)
      .then(res => {
        cardElement.querySelector('.like-button__quantity').textContent = res.likes.length
      })
    } else if (e.target.classList.contains('card__like-button')) {
        e.target.classList.toggle('card__like-button_is-active')
        likeCardUsingApi(cardElement.id)
          .then(res => {
            cardElement.querySelector('.like-button__quantity').textContent = res.likes.length
          })
    }
};

function renderCards(cardElement, deleteCard, likeCard, handlePopupOpening, userInfo) {
  const card = createCard(cardElement, deleteCard, likeCard,handlePopupOpening, userInfo);

  const deleteBtn = card.querySelector('.card__delete-button');

  if (userInfo._id !== cardElement.owner._id) {
    deleteBtn.remove();
  }

  cardContainer.append(card);
};

function addCardInContainer(element) {
  cardContainer.prepend(element)
};

export { container, cardContainer, cardTemplate, createCard, likeCard, deleteCard, renderCards, addCardInContainer };