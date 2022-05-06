const overlayPopup = document.querySelectorAll('.popup');
const btnEdit = document.querySelector('.profile__edit');
const formEdit = document.querySelector('.popup_edit');
const imgAddForm = document.querySelector('.popup_add');
const imgShow = document.querySelector('.popup_show-img');
const btnCloseEditForm = formEdit.querySelector('.popup__close_edit-form');
const btnCloseAddImgForm = imgAddForm.querySelector('.popup__close_add-img');
const btnCloseShowImg = imgShow.querySelector('.popup__close_show-img');
const formTitle = formEdit.querySelector('.form__title');
const formInputName = formEdit.querySelector('.form__input_text_name');
const formInputWork = formEdit.querySelector('.form__input_text_work');
const formInputNameImg = imgAddForm.querySelector('.form__input_text_name-img');
const formInputSrcImg = imgAddForm.querySelector('.form__input_text_src-img');
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
    popapImg.alt = imgCard.alt;
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
  clearMsgError();
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
  const element = getElementCard({ name: inputValueImg, link: inputSrcImg });
  listElements.prepend(element);
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