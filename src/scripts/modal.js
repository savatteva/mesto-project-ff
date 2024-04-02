const popupCard = document.querySelector('.popup_type_image');

export function openModal(popupType) {
  popupType.classList.add('popup_is-opened');
}

export function closeModal(popupType) {
  popupType.classList.remove('popup_is-opened');
}

export function handlePopupOpening(name, link) {
  openModal(popupCard);

  const popupImage = document.querySelector('.popup__image');
  const popupCaption = document.querySelector('.popup__caption');
  const popup = document.querySelector('.popup_type_image');
  const closeBtn = popup.querySelector('.popup__close');

  popupImage.src = link;
  popupCaption.textContent = name;
  popupImage.alt = name;

  closeBtn.addEventListener('click', () => {
    closeModal(popupCard);
  })
}