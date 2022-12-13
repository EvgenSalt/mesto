import "./index.css";
import Card from "../components/Card.js";
import {
  initialCards,
  validatorData,
} from "../utils/constants.js";
import Section from "../components/Section.js";
import FormValidator from "../components/FormValidator.js";
import PopupWithImage from "../components/PopupWithImage.js";
import PopupWithForm from "../components/PopupWithForm.js";
import UserInfo from "../components/UserInfo.js";

const btnEdit = document.querySelector('.profile__edit');
const btnAddImg = document.querySelector('.profile__add');
const btnAddAvatar = document.querySelector('.profile__avatar_edit');
const formEdit = document.querySelector('.popup_edit');
const formInputName = formEdit.querySelector('.form__input_text_name');
const formInputWork = formEdit.querySelector('.form__input_text_work');
const profileName = document.querySelector('.profile__name');
const profileWork = document.querySelector('.profile__description');

const listElements = document.querySelector('.elements__items');

const cardsList = new Section({
  renderer: (item) => {
    cardsList.addItem(createCard(item));
  },
},
  listElements
);

const user = new UserInfo(profileName, profileWork);
const showImg = new PopupWithImage('.popup_show-img');

const showEditForm = new PopupWithForm(
  '.popup_edit',
  function submit(data) {
    user.setUserInfo(data);
    showEditForm.close();
  }
);

const showAddImgForm = new PopupWithForm(
  '.popup_add',
  function submit(data) {
    const cardAdd = createCard({
      name: data.name_img,
      link: data.link_img
    });
    cardsList.addItem(cardAdd);
    showAddImgForm.close();
  }
);

const editAvatarForm = new PopupWithForm(
  '.popup_edit-avatar',
  function submit(data) {

    editAvatarForm.close();
  }
);

function createCard(nameCard) {
  return new Card(
    nameCard,
    '.template__card',
    function showFullImg() {
      showImg.open(nameCard);
    },
  ).getElementCard();
}

function createValidator(validatorClass, validatorForm) {
  return new FormValidator(validatorClass, validatorForm);
}

const profileFormValidator = createValidator(validatorData, ".form_edit");
profileFormValidator.enableValidation();

const cardFormValidator = createValidator(validatorData, ".form_add");
cardFormValidator.enableValidation();

const avatarFormValidator = createValidator(validatorData, ".form_avatar");
avatarFormValidator.enableValidation();

function renderCards() {
  cardsList.renderStartCards(initialCards);
}

function fillInput() {
  const userInfo = user.getUserInfo();
  formInputName.value = userInfo.name;
  formInputWork.value = userInfo.work;
}

function openEditForm() {
  profileFormValidator.resetValidation();
  fillInput();
  showEditForm.open();
}

function openAddImgForm() {
  cardFormValidator.resetValidation();
  showAddImgForm.open();
}

function openAddAvatarForm() {
  avatarFormValidator.resetValidation();
  editAvatarForm.open();
}

btnEdit.addEventListener('click', openEditForm);
btnAddImg.addEventListener('click', openAddImgForm);
btnAddAvatar.addEventListener('click', openAddAvatarForm);
showEditForm.setEventListeners();
showAddImgForm.setEventListeners();
showImg.setEventListeners();
editAvatarForm.setEventListeners();

renderCards();
