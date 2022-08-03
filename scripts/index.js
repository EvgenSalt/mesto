import Card from "./Card.js";
import { initialCards } from "./Card.js";
import FormValidator from "./FormValidator.js";

const btnEdit = document.querySelector('.profile__edit');
const formEdit = document.querySelector('.popup_edit');
const imgAddForm = document.querySelector('.popup_add');
const imgShow = document.querySelector('.popup_show-img');
const btnCloseEditForm = formEdit.querySelector('.popup__close_edit-form');
const btnCloseAddImgForm = imgAddForm.querySelector('.popup__close_add-img');
const btnCloseShowImg = imgShow.querySelector('.popup__close_show-img');
const formInputName = formEdit.querySelector('.form__input_text_name');
const formInputWork = formEdit.querySelector('.form__input_text_work');
const formInputNameImg = imgAddForm.querySelector('.form__input_text_name-img');
const formInputSrcImg = imgAddForm.querySelector('.form__input_text_src-img');
const profileName = document.querySelector('.profile__name');
const profileWork = document.querySelector('.profile__description');
const btnAddImg = document.querySelector('.profile__add');
const listElements = document.querySelector('.elements__items');

const validator = new FormValidator({
  formSelector: '.form',
  inputSelector: '.form__input',
  submitButtonSelector: '.form__btn',
  inactiveButtonClass: 'form__btn_disabled',
  inputErrorClass: 'form__msg_show',
  errorClass: 'form__input_type_error'
});

validator.enableValidation();

function renderCard() {
  initialCards.forEach(el => {
    const cardHTML = new Card(el, '.template__card')
    const renderCard = cardHTML.getElementCard();
    listElements.append(renderCard);
  })
}

function fillInput() {
  formInputName.value = profileName.textContent;
  formInputWork.value = profileWork.textContent;
}

function openEditForm() {
  validator.clearMsgError();
  fillInput();
  openPopup(formEdit);
}

function openAddImgForm() {
  validator.clearMsgError();
  formInputNameImg.value = '';
  formInputSrcImg.value = '';
  openPopup(imgAddForm);
}

function closeEditForm() {
  closePopup(formEdit);
}

function closeAddImgForm() {
  closePopup(imgAddForm);
}

function closeShowImg() {
  closePopup(imgShow);
}

function closePopup(element) {
  element.classList.remove('popup_show');
  document.removeEventListener('keydown', closeEscapeAllForm);
}

function openPopup(element) {
  element.classList.add('popup_show');
  document.addEventListener('keydown', closeEscapeAllForm);
}

function submitFormHandlerEdit(event) {
  event.preventDefault();
  profileName.textContent = formInputName.value;
  profileWork.textContent = formInputWork.value;
  closeEditForm();
}

function submitFormHandlerAddImg(event) {
  event.preventDefault();
  const inputValueImg = formInputNameImg.value;
  const inputSrcImg = formInputSrcImg.value;

  const element = new Card({ name: inputValueImg, link: inputSrcImg }, '.template__card');
  const addCard = element.getElementCard();
  listElements.prepend(addCard);

  closeAddImgForm();
}

function onOverlayClick(event) {
  if (event.target === event.currentTarget) {
    closePopup(event.target);
  }
}

function closeEscapeAllForm(event) {
  if (event.key === 'Escape') {
    const openedPopup = document.querySelector('.popup_show');
    closePopup(openedPopup);
  }
}

btnEdit.addEventListener('click', openEditForm);
btnAddImg.addEventListener('click', openAddImgForm);
btnCloseEditForm.addEventListener('click', closeEditForm);
btnCloseAddImgForm.addEventListener('click', closeAddImgForm);
btnCloseShowImg.addEventListener('click', closeShowImg);
formEdit.addEventListener('submit', submitFormHandlerEdit);
imgAddForm.addEventListener('submit', submitFormHandlerAddImg);
formEdit.addEventListener('click', onOverlayClick);
imgAddForm.addEventListener('click', onOverlayClick);
imgShow.addEventListener('click', onOverlayClick);

renderCard();
