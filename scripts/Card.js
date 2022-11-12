import { initialCards, openPopup, closePopup, onOverlayClick, closeEscapeAllForm } from "./utils.js";
export default class Card {
  _name;
  _link;
  _template;
  _element;
  _nameCard;
  _imgCard;
  _btnlike;
  _btnTrash;


  constructor(data, template) {
    this._name = data.name;
    this._link = data.link;
    this._template = template;
    this._imgShow = document.querySelector('.popup_show-img');
    this._popapImg = document.querySelector('.popup__img');
    this._popapNameImg = document.querySelector('.popup__text');
  }

  _getElementTemplateCard = () => {
    const getElementTemplateCard = document.querySelector(this._template).content.cloneNode(true);
    return getElementTemplateCard;
  }

  getElementCard = () => {
    this._element = this._getElementTemplateCard();
    this._nameCard = this._element.querySelector('.elements__text');
    this._imgCard = this._element.querySelector('.elements__img');
    this._btnlike = this._element.querySelector('.elements__like');
    this._btnTrash = this._element.querySelector('.elements__trash');

    this._imgCard.src = this._link;
    this._imgCard.alt = this._name;
    this._nameCard.textContent = this._name;
    this._setEventListeners();

    return this._element;
  }
  _setEventListeners() {
    this._btnlike.addEventListener('click', () => { // toggle like
      this._btnlike.classList.toggle('elements__like_active');
    });

    this._btnTrash.addEventListener('click', (e) => { // delete card
      e.target.closest('.elements__item').remove();
    });

    this._imgCard.addEventListener('click', () => {
      this._popapImg.src = this._imgCard.src;
      this._popapImg.alt = this._imgCard.alt;
      this._popapNameImg.textContent = this._nameCard.textContent;
      openPopup(this._imgShow);
    });
  }
}