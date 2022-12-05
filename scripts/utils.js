const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
];

const validatorData = {
  formSelector: '.form',
  inputSelector: '.form__input',
  submitButtonSelector: '.form__btn',
  inactiveButtonClass: 'form__btn_disabled',
  inputErrorClass: 'form__msg_show',
  errorClass: 'form__input_type_error'
};

// function openPopup(element) {
//   element.classList.add('popup_show');
//   document.addEventListener('keydown', closeEscapeAllForm);
// }
// function closePopup(element) {
//   element.classList.remove('popup_show');
//   document.removeEventListener('keydown', closeEscapeAllForm);
// }

function onOverlayClick(event) {
  if (event.target === event.currentTarget) {
    closePopup(event.target);
  }
}

// function closeEscapeAllForm(event) {
//   if (event.key === 'Escape') {
//     const openedPopup = document.querySelector('.popup_show');
//     closePopup(openedPopup);
//   }
// }
export { initialCards, validatorData, /*openPopup, closePopup, onOverlayClick, closeEscapeAllForm*/ }
