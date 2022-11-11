import Card from "./Card.js";
import { initialCards, validatorData, openPopup, closePopup, onOverlayClick, closeEscapeAllForm } from "./utils.js";
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

function createCard(nameCard, linkCard) {
  return new Card(nameCard, linkCard, '.template__card');
}

function createValidator(validatorClass, validatorForm) {
  return new FormValidator(validatorClass, validatorForm);
}

const formValidator1 = createValidator(validatorData, ".form_edit");
const formValidator2 = createValidator(validatorData, ".form_add");

function renderCard() {
  initialCards.forEach(el => {
    const cardHTML = createCard(el, '.template__card')
    const cardRender = cardHTML.getElementCard();
    listElements.append(cardRender);
  })
}

function fillInput() {
  formInputName.value = profileName.textContent;
  formInputWork.value = profileWork.textContent;
}

function openEditForm() {
  formValidator1.enableValidation();
  formValidator1.clearMsgError();
  fillInput();
  openPopup(formEdit);
}

function openAddImgForm() {
  formValidator2.enableValidation();
  formValidator2.clearMsgError();
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

  const element = createCard({ name: inputValueImg, link: inputSrcImg }, '.template__card');
  const cardAdd = element.getElementCard();
  listElements.prepend(cardAdd);

  closeAddImgForm();
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
