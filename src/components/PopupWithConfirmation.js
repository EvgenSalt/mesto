import Popup from "./Popup.js";

export default class PopupWithConfirmation extends Popup {

  constructor(popupSelector) {
    super(popupSelector);
  }

  changeSubmit(data) {
    this._submit = data;
  }

  setEventListeners() {
    super.setEventListeners();
    this._popup.addEventListener("submit", (evt) => {
      evt.preventDefault();
      this._submit();
    });
  }
}