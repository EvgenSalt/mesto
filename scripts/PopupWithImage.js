/*
Создайте класс PopupWithImage, который наследует от Popup
*/
import Popup from "./Popup.js";

export default class PopupWithImage extends Popup {
  constructor(selectorPopup) {
    super(selectorPopup);
    this._popapImg = selectorPopup.querySelector('.popup__img');
    this._popapNameImg = selectorPopup.querySelector('.popup__text');
  }

  open(data) {
    // console.log(data);
    this._popapImg.src = data.link;
    this._popapImg.alt = data.name;
    this._popapNameImg.textContent = data.name;
    super.open();
  }
}