import { initialCards, openPopup, closePopup, onOverlayClick, closeEscapeAllForm } from "./utils.js";
export default class Card {
  _name;
  _link;
  _template;
  _element;

  constructor(data, template) {
    this._name = data.name;
    this._link = data.link;
    this._template = template;
  }

  _getElementTemplateCard = () => {
    const getElementTemplateCard = document.querySelector(this._template).content.cloneNode(true);
    return getElementTemplateCard;
  }

  getElementCard = () => {
    this._element = this._getElementTemplateCard();
    const nameCard = this._element.querySelector('.elements__text');
    const imgCard = this._element.querySelector('.elements__img');

    imgCard.src = this._link;
    imgCard.alt = this._name;
    nameCard.textContent = this._name;
    this._setEventListeners();

    return this._element;
  }
  _setEventListeners() {
    const nameCard = this._element.querySelector('.elements__text');
    const imgCard = this._element.querySelector('.elements__img');
    const btnlike = this._element.querySelector('.elements__like');
    const btnTrash = this._element.querySelector('.elements__trash');
    const imgShow = document.querySelector('.popup_show-img');
    const popapImg = document.querySelector('.popup__img');
    const popapNameImg = document.querySelector('.popup__text');

    btnlike.addEventListener('click', () => { // toggle like
      btnlike.classList.toggle('elements__like_active');
    });

    btnTrash.addEventListener('click', (e) => { // delete card
      e.target.closest('.elements__item').remove();
    });

    imgCard.addEventListener('click', () => {
      popapImg.src = imgCard.src;
      popapImg.alt = imgCard.alt;
      popapNameImg.textContent = nameCard.textContent;
      openPopup(imgShow);
    });
  }
}