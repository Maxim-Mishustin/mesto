export class Section {
    constructor({items, renderer}, containerSelector) {
      this._renderer = rendere;
      this.container = document.querySelector(containerSelector);
      this._initialCard = data;
    }
  
    renderItems() {
      this._items.forEach((item)=>this._renderer(item))
    }
  
    addItem(itemHtml) {
      this._container.prepend(itemHtml)
    }
  }
  
  function renderCard(cardData) {
    const cardElement = createCard(cardData) // подумайте как реализовать эту функцию, она просто создает карточку и возвращает её html представление
    section.addItem(cardElement)
  }
  
  // и обновим функцию передаваемую в конструктор
  const section = new Section({items: [], renderer: renderCard}, '.cards__list')
  section.renderItems()