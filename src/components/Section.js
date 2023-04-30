export class Section {
  constructor({ renderer }, containerSelector) {
    this._renderer = renderer;
    this._container = document.querySelector(containerSelector);
  }

  addItem = (cardData) => {
    this._container.prepend(cardData);
  };

  renderItems(items) {
    items.forEach((cardData) => {
      return this._renderer(cardData);
    });
  }
}