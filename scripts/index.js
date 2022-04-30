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
  showImg.classList.add('popup_opened');
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
  formInputNameImg.value = '';
  formInputSrcImg.value = '';
}

function closedShowImg() {
  console.log('Closed');
  showImg.classList.remove('popup_opened');
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