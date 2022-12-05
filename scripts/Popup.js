/*
Создайте класс Popup, который отвечает за открытие и закрытие попапа.
*/
export default class Popup {
  _selector;

  constructor(selector) {
    this._selector = selector;
  }

  open() {
    // console.log(this._selector);
    this._selector.classList.add('popup_show');
    document.addEventListener('keydown', (event) => {
      // console.log(event);
      this._handleEscClose(event);
    });
  }

  close() {
    this._selector.classList.remove('popup_show');
    document.removeEventListener('keydown', (event) => {
      this._handleEscClose(event);
    });
  }

  _handleEscClose(event) {
    // console.log(event);
    if (event.key === 'Escape') {
      // console.log(event.key);
      this.close();
    }
  }

  setEventListeners() {
    this._selector.addEventListener('click', (event) => {
      // console.log(event);
      if (event.target === event.currentTarget) {
        this.close();
      }
    });
  }
}