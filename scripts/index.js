let btnEdit = document.querySelector('.profile__info_button-edit');
let editForm = document.querySelector('.form');
let btnCloseForm = editForm.querySelector('.form__close');
let formInputName = editForm.querySelector('.name');
let formInputWork = editForm.querySelector('.work');
let saveEditInfo = editForm.querySelector('.form__btn');
let profileName = document.querySelector('.profile__name');
let profileWork = document.querySelector('.profile__info_description');

function fillInput() {
  formInputName.value = profileName.textContent;
  formInputWork.value = profileWork.textContent;
}

function openEditForm() {
  editForm.classList.toggle('form__active');
  fillInput();
}

function onOverlayClick(event) {
  if (event.target === event.currentTarget) {
    openEditForm();
  }
}

function formSubmitHandler(event) {
  event.preventDefault();
  profileName.textContent = formInputName.value;
  profileWork.textContent = formInputWork.value;
  openEditForm();
}

btnEdit.addEventListener('click', openEditForm);
btnCloseForm.addEventListener('click', openEditForm);
editForm.addEventListener('click', onOverlayClick);
saveEditInfo.addEventListener('click', formSubmitHandler);
