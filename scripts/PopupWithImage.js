/*
Создайте класс PopupWithImage, который наследует от Popup
*/
import Popup from "./Popup.js";


export default class PopupWithImage extends Popup {
  _popapImg;
  _popapNameImg;
  constructor(selector) {
    super(selector);
    this._popapImg = selector.querySelector('.popup__img');
    this._popapNameImg = selector.querySelector('.popup__text');
  }

  open(data) {
    // console.log(data);
    this._popapImg.src = data.link;
    this._popapImg.alt = data.name;
    this._popapNameImg.textContent = data.name;
    super.open();
  }
}