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
const editForm = document.querySelector('.popup__edit_form');
const addImgForm = document.querySelector('.popup__add-img');
const showImg = document.querySelector('.popup__show-img');
const btnCloseEditForm = editForm.querySelector('.popup__close_edit-form');
const btnCloseAddImgForm = addImgForm.querySelector('.popup__close_add-img');
const btnCloseShowImg = showImg.querySelector('.popup__close_show-img');
const formTitle = editForm.querySelector('.form__title');
const formInputName = editForm.querySelector('.form__input_text_name');
const formInputWork = editForm.querySelector('.form__input_text_work');
const formInputNameImg = addImgForm.querySelector('.form__input_text_name-img');
const formInputSrcImg = addImgForm.querySelector('.form__input_text_src-img');
const profileName = document.querySelector('.profile__name');
const profileWork = document.querySelector('.profile__description');
const btnAddImg = document.querySelector('.profile__add');
const listElements = document.querySelector('.elements__items');
const templateCard = document.querySelector('.template__card');

let popapImg = document.querySelector('.popup__img-card');
let popapNameImg = document.querySelector('.popup__text');

function renderCard() {
  const cardHTML = initialCards.map(getElementCard);
  listElements.append(...cardHTML);
}

function getElementCard(item) {
  const getElementTemplateCard = templateCard.content.cloneNode(true);
  const nameCard = getElementTemplateCard.querySelector('.elements__text');
  const imgCard = getElementTemplateCard.querySelector('.elements__img');
  const btnlike = getElementTemplateCard.querySelector('.elements__like');
  const btnTrash = getElementTemplateCard.querySelector('.elements__trash');
  const btnImg = getElementTemplateCard.querySelector('.elements__img');

  imgCard.src = item.link;
  nameCard.textContent = item.name;

  btnlike.addEventListener('click', () => btnlike.classList.toggle('elements__like_active'));
  btnTrash.addEventListener('click', handleDeletCard);
  btnImg.addEventListener('click', () => {
    popapImg.src = imgCard.src;
    popapNameImg.textContent = nameCard.textContent;
    openPopapShowImg();
  });

  return getElementTemplateCard;
}

function openPopapShowImg() {
  openPopup(showImg);
}

function handleDeletCard(event) {
  const element = event.target.closest('.elements__item').remove();
}

function fillInput() {
  formInputName.value = profileName.textContent;
  formInputWork.value = profileWork.textContent;
}

function openEditForm() {
  fillInput();
  openPopup(editForm);
}

function openAddImgForm() {
  openPopup(addImgForm);
}

function closedEditForm() {
  fillInput();
  closedPopup(editForm);
}

function closedAddImgForm() {
  closedPopup(addImgForm);
  formInputNameImg.value = '';
  formInputSrcImg.value = '';
}

function closedShowImg() {
  closedPopup(showImg);
}

function closedPopup(element) {
  element.style.opacity = 1;
  element.style.transition = `opacity 1s ease`;
  element.style.opacity = 0;
  setTimeout(() => {
    element.classList.remove('popup_opened');
    element.style.opacity = 1;
    element.style.transition = `opacity 1s ease`;
  }, 200);
}

function openPopup(element) {
  element.style.opacity = 0;
  element.style.transition = `opacity 1s ease`;
  element.style.opacity = 1;
  setTimeout(() => {
    element.classList.add('popup_opened');
    element.style.opacity = 1;
    element.style.transition = `opacity 1s ease`;
  }, 200);
}

function formSubmitHandlerEdit(event) {
  event.preventDefault();
  profileName.textContent = formInputName.value;
  profileWork.textContent = formInputWork.value;
  closedEditForm();
}

function formSubmitHandlerAddImg(event) {
  event.preventDefault();
  const inputValueImg = formInputNameImg.value;
  const inputSrcImg = formInputSrcImg.value;
  const element = getElementCard({ name: inputValueImg, link: inputSrcImg });
  listElements.prepend(element);
  closedAddImgForm();
}

/*  функция закрытия формы при нажатии на оверлэй  */
// function onOverlayClick(event) {
//   if (event.target === event.currentTarget) {
//     closedEditForm();
//   }
// }
// editForm.addEventListener('click', onOverlayClick);

btnEdit.addEventListener('click', openEditForm);
btnAddImg.addEventListener('click', openAddImgForm);
btnCloseEditForm.addEventListener('click', closedEditForm);
btnCloseAddImgForm.addEventListener('click', closedAddImgForm);
btnCloseShowImg.addEventListener('click', closedShowImg);
editForm.addEventListener('submit', formSubmitHandlerEdit);
addImgForm.addEventListener('submit', formSubmitHandlerAddImg);


renderCard();