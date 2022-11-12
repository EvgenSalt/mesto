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
  return new Card(nameCard, linkCard, '.template__card').getElementCard();;
}

function createValidator(validatorClass, validatorForm) {
  return new FormValidator(validatorClass, validatorForm);
}

const profileFormValidator = createValidator(validatorData, ".form_edit");
profileFormValidator.enableValidation();
const cardFormValidator = createValidator(validatorData, ".form_add");
cardFormValidator.enableValidation();

function renderCard() {
  initialCards.forEach(el => {
    const cardRender = createCard(el, '.template__card');
    listElements.append(cardRender);
  })
}

function fillInput() {
  formInputName.value = profileName.textContent;
  formInputWork.value = profileWork.textContent;
}

function openEditForm() {
  // profileFormValidator.enableValidation();
  profileFormValidator.clearMsgError();
  fillInput();
  openPopup(formEdit);
}

function openAddImgForm() {
  // cardFormValidator.enableValidation();
  cardFormValidator.clearMsgError();
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

  const cardAdd = createCard({ name: inputValueImg, link: inputSrcImg }, '.template__card');
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
