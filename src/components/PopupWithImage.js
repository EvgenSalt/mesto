/*
Создайте класс PopupWithImage, который наследует от Popup
*/
import Popup from "./Popup.js";
export default class PopupWithImage extends Popup {
  _popapImg;
  _popapNameImg;

  constructor(popupSelector) {
    super(popupSelector);
    this._popapImg = this._popup.querySelector('.popup__img');
    this._popapNameImg = this._popup.querySelector('.popup__text');
  }

  open(data) {
    this._popapImg.src = data.link;
    this._popapImg.alt = data.name;
    this._popapNameImg.textContent = data.name;
    super.open();
  }
}