let btnEdit = document.querySelector('.profile__edit');
let editForm = document.querySelector('.popup');
let btnCloseForm = editForm.querySelector('.popup__close');
let formInputName = editForm.querySelector('.form__input_name');
let formInputWork = editForm.querySelector('.form__input_work');
let profileName = document.querySelector('.profile__name');
let profileWork = document.querySelector('.profile__description');

function fillInput() {
  formInputName.value = profileName.textContent;
  formInputWork.value = profileWork.textContent;
}

function openEditForm() {
  fillInput();
  editForm.classList.add('popup_opened');
}

function closedEditForm() {
  fillInput();
  editForm.classList.remove('popup_opened');
}

/*  функция сохранения формы при нажатии на оверлэй  */
// function onOverlayClick(event) {
//   if (event.target === event.currentTarget) {
//     openEditForm();
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
btnCloseForm.addEventListener('click', closedEditForm);
editForm.addEventListener('submit', formSubmitHandler);