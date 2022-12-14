import Popup from "./Popup.js";

export default class PopupWithConfirmation extends Popup {
  _element;

  constructor(popupSelector, submit) {
    super(popupSelector);
    this._submit = submit;
  }

  open(element) {
    super.open();
    this._element = element;
  }

  setEventListeners() {
    super.setEventListeners();
    this._popup.addEventListener("submit", (evt) => {
      evt.preventDefault();
      this._submit(this._element);
    });
  }
}