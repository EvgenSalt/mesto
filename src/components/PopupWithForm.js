/**
 * Создайте класс PopupWithForm, который наследует от Popup. 
 */

import Popup from "./Popup.js";
export default class PopupWithForm extends Popup {
  _submit;
  _popupForm;
  _inputList;
  _listValues;

  constructor(popupSelector, submit) {
    super(popupSelector);
    this._submit = submit;
    this._popupForm = this._popup.querySelector(".form");
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
    this._popup.addEventListener("submit", (event) => {
      event.preventDefault();
      this._submit(this._getInputValues());
    });
  }

  close() {
    super.close();
    this._popupForm.reset();
  }
}