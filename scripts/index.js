let btnEdit = document.querySelector('.profile__edit');
let editForm = document.querySelector('.popup');
let btnCloseForm = editForm.querySelector('.popup__close');
let formTitle = editForm.querySelector('.form__title');
let formInputName = editForm.querySelector('.form__input_text_name');
let formInputWork = editForm.querySelector('.form__input_text_work');
let profileName = document.querySelector('.profile__name');
let profileWork = document.querySelector('.profile__description');
let btnAddImg = document.querySelector('.profile__add');

function fillInput() {
  formInputName.value = profileName.textContent;
  formInputWork.value = profileWork.textContent;
}

function openEditForm() {
  console.log('btnN');
  formTitle.textContent = `Редактировать профиль`;
  fillInput();
  editForm.classList.add('popup_opened');
}

function openAddImgForm() {
  console.log('2');
  formTitle.textContent = `Новое место`;
  formInputName.value = `Название`;
  formInputWork.value = `Ссылка на картинку`;
  editForm.classList.add('popup_opened');
}

function closedEditForm() {
  fillInput();
  editForm.classList.remove('popup_opened');
}

/*  функция сохранения формы при нажатии на оверлэй  */
// function onOverlayClick(event) {
//   if (event.target === event.currentTarget) {
//     closedEditForm();
//   }
// }
// editForm.addEventListener('click', onOverlayClick);

function formSubmitHandler(event) {
  event.preventDefault();
  profileName.textContent = formInputName.value;
  profileWork.textContent = formInputWork.value;
  closedEditForm();
}

btnEdit.addEventListener('click', openEditForm);
btnAddImg.addEventListener('click', openAddImgForm);
btnCloseForm.addEventListener('click', closedEditForm);
editForm.addEventListener('submit', formSubmitHandler);