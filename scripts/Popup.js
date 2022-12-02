/*
Создайте класс Popup, который отвечает за открытие и закрытие попапа.
*/
export default class Popup {
  _selectorPopup;

  constructor(selectorPopup) {
    this._selectorPopup = selectorPopup;
  }

  open() {
    // console.log(this._selectorPopup);
    this._selectorPopup.classList.add('popup_show');
    document.removeEventListener('keydown', (event) => {
      this._handleEscClose(event);
    });
  }
  close() {
    this._selectorPopup.remove('popup_show');
    document.removeEventListener('keydown', (event) => {
      this._handleEscClose(event);
    });
  }

  _handleEscClose(event) {
    if (event.key === 'Escape') {
      this.close();
    }
  }

  setEventListeners() {
    this._selectorPopup.addEventListener('click', (event) => {
      if (event.target === event.currentTarget) {
        this.close();
      }
    });
  }
}