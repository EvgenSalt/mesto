import "./index.css";
import { api } from '../components/Api.js'
import Card from "../components/Card.js";
import {
  validatorData,
} from "../utils/constants.js";
import Section from "../components/Section.js";
import FormValidator from "../components/FormValidator.js";
import PopupWithImage from "../components/PopupWithImage.js";
import PopupWithForm from "../components/PopupWithForm.js";
import PopupWithConfirmation from "../components/PopupWithConfirmation.js";
import UserInfo from "../components/UserInfo.js";

const btnEdit = document.querySelector('.profile__edit');
const btnAddImg = document.querySelector('.profile__add');
const btnAddAvatar = document.querySelector('.profile__avatar_edit');
const formEdit = document.querySelector('.popup_edit');
const formInputName = formEdit.querySelector('.form__input_text_name');
const formInputWork = formEdit.querySelector('.form__input_text_work');
const profileName = document.querySelector('.profile__name');
const profileWork = document.querySelector('.profile__description');
const profilAvatar = document.querySelector('.profile__avatar');
const listElements = document.querySelector('.elements__items');

let userId;

const showImg = new PopupWithImage('.popup_show-img');

api.getUserProfile()
  .then(res => {
    user.setUserInfo(
      {
        username: res.name,
        userwork: res.about,
        avatar: res.avatar
      }
    );
    userId = res._id;

  })

const user = new UserInfo(profileName, profileWork, profilAvatar);

const cardsList = new Section({
  renderer: (item) => {
    cardsList.addItem(createCard(
      {
        name: item.name,
        link: item.link,
        likes: item.likes,
        id: item._id,
        owner: item.owner._id
      }
    ));
  },
},
  listElements
);

function loadingInformBtn(pupup, statusBtn) {
  const loadingBtn = pupup.querySelector('.form__btn');
  if (statusBtn) {
    return (loadingBtn.textContent = 'Сохранение...')
  }
  else {
    return (loadingBtn.textContent = "Сохранить");
  }
}

const showEditForm = new PopupWithForm(
  '.popup_edit',
  function submit(data) {
    loadingInformBtn(document.querySelector('.popup_edit'), true)
    api.editProfile(data)
      .then(res => {
        user.setUserInfo(
          {
            username: res.name,
            userwork: res.about,
            avatar: res.avatar
          }
        );
      })
      .finally(() => {
        loadingInformBtn(document.querySelector('.popup_edit'), false)
      });
    showEditForm.close();
  }
);

const showAddImgForm = new PopupWithForm(
  '.popup_add',
  function submit(data) {
    api.addNewCard(data)
      .then(res => {
        const cardAdd = createCard({
          name: res.name,
          link: res.link,
          likes: res.likes,
          id: res._id,
          owner: res.owner._id
        });
        cardsList.addItem(cardAdd);
        showAddImgForm.close();
      })

  }
);

const editAvatarForm = new PopupWithForm(
  '.popup_edit-avatar',
  function submit(data) {
    api.editAvatarProfile(data)
      .then(res => {
        user.setAvatar(res.avatar)
        editAvatarForm.close();
      })
  }
);

const popupWithConfirmation = new PopupWithConfirmation(
  '.popup_delet-img',
  function submit(card) {
    api.deleteCard(card._id)
      .then(res => {
        card._element.remove();
        popupWithConfirmation.close();
      })
  }
);

function createCard(nameCard) {
  const newCard = new Card(
    nameCard,
    userId,
    '.template__card',
    function showFullImg() {
      showImg.open(nameCard);
    },
    function confirm(element) {
      popupWithConfirmation.open(element);
    },
    function toggleLikes(card_id) {
      if (newCard.isLiked()) {
        api.deleteLike(card_id)
          .then((res) => {
            newCard.setLikes(res.likes)
          })
      }
      else {
        api.addLike(card_id)
          .then((res) => {
            newCard.setLikes(res.likes)
          })
      }
    }
  );
  return newCard.getElementCard();
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
  api.getInitialCards()
    .then(res => {
      cardsList.renderStartCards(res);
    }
    )
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
popupWithConfirmation.setEventListeners();

renderCards();
