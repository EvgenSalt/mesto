/**
 * Создайте класс PopupWithForm, который наследует от Popup. 
 */

import Popup from "./Popup.js";
export default class PopupWithForm extends Popup {
  _submit;

  constructor(selector, submit) {
    super(selector);
    this._submit = submit;
    this._popupForm = this._selector.querySelector(".form");
    this._inputList = Array.from(this._popupForm.querySelectorAll(".form__input"));
    this._listValues = {};
  }

  _getInputValues() {
    this._inputList.forEach((item) => {
      this._listValues[item.name] = item.value;
    });
    return this._listValues;
  }

  setEventListeners() {
    super.setEventListeners();
    this._selector.addEventListener("submit", (event) => {
      event.preventDefault();
      this._submit(this._getInputValues());
      console.log(`setEventListeners`);
    });
  }

  close() {
    super.close();
    this._popupForm.reset();
  }
}