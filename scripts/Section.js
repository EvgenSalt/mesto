/*
Создайте класс Section, который отвечает за отрисовку элементов на странице.
*/

export default class Section {
  _renderer;
  _containerSelector;

  constructor({ renderer }, containerSelector) {
    this._renderer = renderer;
    this._containerSelector = containerSelector;
  }

  addItem(element) {
    this._containerSelector.prepend(element);
  }

  renderStartCards(listItems) {
    // console.log(listItems);
    listItems.forEach((item) => {
      // console.log(item);
      this._renderer(item);
    });
  }
}