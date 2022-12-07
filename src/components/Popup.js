/*
Создайте класс Popup, который отвечает за открытие и закрытие попапа.
*/
export default class Popup {
  _popup;

  constructor(popupSelector) {
    this._popup = document.querySelector(popupSelector);
    this._handleEscClose = this._handleEscClose.bind(this)
    this._btnClose = this._popup.querySelector('.popup__close');
  }

  open() {
    this._popup.classList.add('popup_show');
    document.addEventListener('keydown', this._handleEscClose);
  }

  close() {
    this._popup.classList.remove('popup_show');
    document.removeEventListener('keydown', this._handleEscClose);
  }

  _handleEscClose(event) {
    if (event.key === 'Escape') {
      this.close();
    }
  }

  setEventListeners() {
    this._popup.addEventListener('mousedown', (event) => {
      if (event.target === event.currentTarget) {
        this.close();
      }
    });
    this._btnClose.addEventListener('click', () => {
      this.close();
    });
  }
}