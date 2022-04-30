const btnEdit = document.querySelector('.profile__edit');
const formEdit = document.querySelector('.popup_edit');
const addImgForm = document.querySelector('.popup_add');
const imgShow = document.querySelector('.popup_show-img');
const btnCloseEditForm = formEdit.querySelector('.popup__close_edit-form');
const btnCloseAddImgForm = addImgForm.querySelector('.popup__close_add-img');
const btnCloseShowImg = imgShow.querySelector('.popup__close_show-img');
const formTitle = formEdit.querySelector('.form__title');
const formInputName = formEdit.querySelector('.form__input_text_name');
const formInputWork = formEdit.querySelector('.form__input_text_work');
const formInputNameImg = addImgForm.querySelector('.form__input_text_name-img');
const formInputSrcImg = addImgForm.querySelector('.form__input_text_src-img');
const profileName = document.querySelector('.profile__name');
const profileWork = document.querySelector('.profile__description');
const btnAddImg = document.querySelector('.profile__add');
const listElements = document.querySelector('.elements__items');
const templateCard = document.querySelector('.template__card');
const popapImg = document.querySelector('.popup__img');
const popapNameImg = document.querySelector('.popup__text');

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

  imgCard.src = item.link;
  imgCard.alt = item.name;
  nameCard.textContent = item.name;

  btnlike.addEventListener('click', () => btnlike.classList.toggle('elements__like_active'));

  btnTrash.addEventListener('click', handleDeletCard);

  imgCard.addEventListener('click', () => {
    popapImg.src = imgCard.src;
    popapNameImg.textContent = nameCard.textContent;
    openPopapShowImg();
  });

  return getElementTemplateCard;
}

function openPopapShowImg() {
  openPopup(imgShow);
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
  openPopup(formEdit);
}

function openAddImgForm() {
  openPopup(addImgForm);
}

function closeEditForm() {
  fillInput();
  closedPopup(formEdit);
}

function closedAddImgForm() {
  closedPopup(addImgForm);
  formInputNameImg.value = '';
  formInputSrcImg.value = '';
}

function closedShowImg() {
  closedPopup(imgShow);
}

function closedPopup(element) {
  element.classList.remove('popup_show');
}

function openPopup(element) {
  element.classList.add('popup_show');
}

function formSubmitHandlerEdit(event) {
  event.preventDefault();
  profileName.textContent = formInputName.value;
  profileWork.textContent = formInputWork.value;
  closeEditForm();
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
//     closedPopup(event.target);
//   }
// }

btnEdit.addEventListener('click', openEditForm);
btnAddImg.addEventListener('click', openAddImgForm);
btnCloseEditForm.addEventListener('click', closeEditForm);
btnCloseAddImgForm.addEventListener('click', closedAddImgForm);
btnCloseShowImg.addEventListener('click', closedShowImg);
formEdit.addEventListener('submit', formSubmitHandlerEdit);
addImgForm.addEventListener('submit', formSubmitHandlerAddImg);


renderCard();