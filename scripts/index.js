import Card from "./Card.js";
import { initialCards, openPopup, closePopup, onOverlayClick, closeEscapeAllForm } from "./utils.js";
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
const validator = new FormValidator({
  formSelector: '.form',
  inputSelector: '.form__input',
  submitButtonSelector: '.form__btn',
  inactiveButtonClass: 'form__btn_disabled',
  inputErrorClass: 'form__msg_show',
  errorClass: 'form__input_type_error'
});
const formValidator1 = createValidator(validator, ".popup_add");
const formValidator2 = createValidator(validator, ".popup_edit");
validator.enableValidation();
//formValidator1.TESTenableValidation();
//formValidator2.TESTenableValidation();
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
  //const formValidator = createValidator(validator, ".popup_edit");
  //formValidator.enableValidation();
  //validator.clearMsgError();
  fillInput();
  openPopup(formEdit);
}

function openAddImgForm() {
  //const formValidator = createValidator(validator, ".popup_add");

  //formValidator.enableValidation();
  //validator.clearMsgError();
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



// function openPopup(element) {
//   element.classList.add('popup_show');
//   document.addEventListener('keydown', closeEscapeAllForm);
// }

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
