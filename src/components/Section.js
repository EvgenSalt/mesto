/*
Создайте класс Section, который отвечает за отрисовку элементов на странице.
*/
export default class Section {
  _renderer;
  _container;

  constructor({ renderer }, container) {
    this._renderer = renderer;
    this._container = container;
  }

  addItem(element) {
    this._container.prepend(element);
  }

  renderStartCards(listItems) {
    listItems.forEach((item) => {
      this._renderer(item);
    });
  }
}