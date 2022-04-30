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

const btnEdit = document.querySelector('.profile__edit');
const editForm = document.querySelector('.popup__edit-form');
const addImgForm = document.querySelector('.popup__add-img');
const btnCloseEditForm = editForm.querySelector('.close__edit-form');
const btnCloseAddImgForm = addImgForm.querySelector('.close__add-img');
const formTitle = editForm.querySelector('.form__title');
const formInputName = editForm.querySelector('.form__input_text_name');
const formInputWork = editForm.querySelector('.form__input_text_work');
const profileName = document.querySelector('.profile__name');
const profileWork = document.querySelector('.profile__description');
const btnAddImg = document.querySelector('.profile__add');
const listElements = document.querySelector('.elements__items');
const templateCard = document.querySelector('.template__card');

function renderCard() {
  const cardHTML = initialCards.map(getElementCard);
  listElements.append(...cardHTML);
}

function getElementCard(item) {
  const getElementTemplateCard = templateCard.content.cloneNode(true);
  const nameCard = getElementTemplateCard.querySelector('.elements__text');
  const imgCard = getElementTemplateCard.querySelector('.elements__img');
  imgCard.src = item.link;
  nameCard.textContent = item.name;
  return getElementTemplateCard;
}

function fillInput() {
  formInputName.value = profileName.textContent;
  formInputWork.value = profileWork.textContent;
}

function openEditForm() {
  fillInput();
  editForm.classList.add('popup_opened');
}

function openAddImgForm() {
  addImgForm.classList.add('popup_opened');
}

function closedEditForm() {
  fillInput();
  editForm.classList.remove('popup_opened');
}

function closedAddImgForm() {
  addImgForm.classList.remove('popup_opened');
}

function formSubmitHandler(event) {
  event.preventDefault();
  profileName.textContent = formInputName.value;
  profileWork.textContent = formInputWork.value;
  closedEditForm();
}

/*  функция сохранения формы при нажатии на оверлэй  */
// function onOverlayClick(event) {
//   if (event.target === event.currentTarget) {
//     closedEditForm();
//   }
// }
// editForm.addEventListener('click', onOverlayClick);

btnEdit.addEventListener('click', openEditForm);
btnAddImg.addEventListener('click', openAddImgForm);//
btnCloseEditForm.addEventListener('click', closedEditForm);
btnCloseAddImgForm.addEventListener('click', closedAddImgForm);
editForm.addEventListener('submit', formSubmitHandler);

renderCard();