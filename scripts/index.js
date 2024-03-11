const container = document.querySelector('.content');
const cardContainer = container.querySelector('.places__list');
const cardTemplate = document.querySelector('#card-template').content;

function createCard(card, deleteCard) {
  const cardElement = cardTemplate.querySelector('.card').cloneNode(true);
  const deleteBtn = cardElement.querySelector('.card__delete-button');

  cardElement.querySelector('.card__title').textContent = card.name;
  cardElement.querySelector('.card__image').alt  = card.name;
  cardElement.querySelector('.card__image').src = card.link; 

  deleteBtn.addEventListener('click', () => deleteCard(cardElement));

  return cardElement;
}

function deleteCard(card) {
  card.remove()
}

function renderCards(cardElement, deleteCard) {
  const card = createCard(cardElement, deleteCard);

  cardContainer.append(card);
}

initialCards.forEach(el => renderCards(el, deleteCard));

function getYear() {
  const yearElement = document.querySelector('.footer__copyright');
  const year = new Date().getFullYear();
  yearElement.textContent =     '© ' + `${year}` + ' Mesto Russia';
}

getYear();