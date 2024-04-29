import { submitLikedCard, submitDeletedCard, unlikeCard } from './api.js'
import { closeModal, openModal } from './modal.js';
import { renderLoading } from './utils';

const container = document.querySelector('.content');
const cardContainer = container.querySelector('.places__list');
const cardTemplate = document.querySelector('#card-template').content;
const popupDeleteCard = document.querySelector('.popup_type_delete-card');
const deleteCardBtn = popupDeleteCard.querySelector('.popup__button');

function createCard(card, deleteCard, likeCard, handlePopupOpening, userInfo) {
  const cardElement = cardTemplate.querySelector('.card').cloneNode(true);
  const deleteBtn = cardElement.querySelector('.card__delete-button');
  const likeBtn = cardElement.querySelector('.card__like-button');
  const imagePlace = cardElement.querySelector('.card__image');
  const likeQuantity = cardElement.querySelector('.like-button__quantity');
  const cardTitle = cardElement.querySelector('.card__title');

  card.likes.forEach(like => {
    if (like._id === card.owner._id) {
      likeBtn.classList.add('card__like-button_is-active')
    }
  })
  
  if (userInfo._id !== card.owner._id) {
    deleteBtn.remove();
  }

  cardTitle.textContent = card.name;
  imagePlace.alt  = card.name;
  imagePlace.src = card.link;
  likeQuantity.textContent = card.likes.length;
  cardElement.id = card._id;

  deleteBtn.addEventListener('click', () => {
    openModal(popupDeleteCard);
    deleteCardUsingModal(cardElement, deleteCard);
  });

  likeBtn.addEventListener('click', (e) => likeCard(e, cardElement));

  imagePlace.addEventListener('click', () => handlePopupOpening(card));

  return cardElement;
};

function deleteCardUsingModal(cardElement, deleteCard) {
  deleteCardBtn.addEventListener('click', () => {
    deleteCard(cardElement, popupDeleteCard);
  })
}

function deleteCard(card, form) {
  renderLoading(true, form.querySelector('.popup__button'));
  card.remove();
  submitDeletedCard(card.id, form)
    .then(closeModal(popupDeleteCard))
    .catch((err) => {
      console.log(err);
    })
    .finally(() => renderLoading(false, form.querySelector('.popup__button')))
};

function likeCard(e, cardElement) {
  if (e.target.classList.contains('card__like-button_is-active') && e.target.classList.contains('card__like-button')) {
    e.target.classList.toggle('card__like-button_is-active')
    unlikeCard(cardElement.id)
      .then(res => {
        cardElement.querySelector('.like-button__quantity').textContent = res.likes.length
      })
      .catch((err) => {
        console.log(err); 
      });
    } else if (e.target.classList.contains('card__like-button')) {
        e.target.classList.toggle('card__like-button_is-active')
        submitLikedCard(cardElement.id)
          .then(res => {
            cardElement.querySelector('.like-button__quantity').textContent = res.likes.length
          })
          .catch((err) => {
            console.log(err);
          });
    }
};

export { container, cardContainer, cardTemplate, createCard, likeCard, deleteCard, popupDeleteCard };