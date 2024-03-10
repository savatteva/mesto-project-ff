const addCardBtn = document.querySelector('.profile__add-button');
const popupAddCard = document.querySelector('.popup_type_new-card');
const btnClose = popupAddCard.querySelector('.popup__close');
const saveBtn = document.querySelector('.popup__button');
const container = document.querySelector('.content');
const cardContainer = container.querySelector('.places__list');
const cardTemplate = document.querySelector('#card-template').content;

function renderCards(card) {
  const cardElement = cardTemplate.cloneNode(true);
  const deleteBtn = cardElement.querySelector('.card__delete-button');

  cardElement.querySelector('.card__title').textContent = card.name;
  cardElement.querySelector('.card__image').alt  = card.name;
  cardElement.querySelector('.card__image').src = card.link; 

  cardContainer.append(cardElement);

  deleteBtn.addEventListener('click', () => {
    const card = deleteBtn.closest('.card');
    card.remove();
  });
}

initialCards.forEach(element => {
  renderCards(element);
});

function getYear() {
  const yearElement = document.querySelector('.footer__copyright');
  const year = new Date().getFullYear();
  yearElement.textContent =     '© ' + `${year}` + ' Mesto Russia';
}

getYear();

// const container = document.querySelector('.content');
// const cardContainer = container.querySelector('.places__list');
// const cardTemplate = document.querySelector('#card-template').content;

// function addCard() {

// }

// function renderCards(card) {
  

//   cardElement.querySelector('.card__title').textContent = card.name;
//   cardElement.querySelector('.card__image').src = card.link; 

//   cardContainer.append(cardElement);

//   deleteBtn.addEventListener('click', () => {
//     const card = deleteBtn.closest('.card');
//     card.remove();
//   });
// }

// initialCards.forEach(element => {
//   renderCards(element);
// });
