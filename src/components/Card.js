// СОЗДАЕМ КЛАСС КАРТОЧКИ, В КОНСТРУКТОР КОТОРОГО ПЕРЕДАЕМ НАЗВАНИЕ, ССЫЛКУ НА ИЗОБРАЖЕНИЕ, АЛЬТ И ШАБЛОН
export class Card {
  constructor(data, cardTemplate, handleImageClick) {
    this._name = data.name;
    this._link = data.link;
    this._cardTemplate = cardTemplate;
    this._handleImageClick = handleImageClick;
  }

  // СОЗДАЕМ МЕТОД, КОТОРЫЙ ВОЗВРАЩАЕТ ШАБЛОН НОВОЙ КАРТОЧКИ
  _getTemplate() {
    const newCardTemplate = document
      .querySelector(this._cardTemplate)
      .content.querySelector(".element")
      .cloneNode(true);

    return newCardTemplate;
  }

  // МЕТОД ДОБАВЛЕНИЯ СЛУШАТЕЛЯ НА ЭЛЕМЕНТЫ КАРТОЧКИ
  _setEventListeners() {
    this._elementLikeButton.addEventListener("click", () =>
      this._handleLikeClick()
    );
    this._elementDeleteButton.addEventListener("click", () =>
      this._handleDeleteClick()
    );
    this._elementImage.addEventListener("click", () =>
      this._handleImageClick(this._name, this._link)
    );
  }

  // РЕАЛИЗАЦИЯ РАБОЧЕГО ЛАЙКА 
  _handleLikeClick() {
    this._elementLikeButton.classList.toggle("element__like_active"); // выбираем лайк внутри каждой карточки. + тагл
  }

  // МЕТОД УДАЛЕНИЯ КАРТОЧКИ  
  _handleDeleteClick() {
    this._card.remove();
    this._card = null;
  }
  // ПУБЛИЧНЫЙ МЕТОД, КОТОРЫЙ ЗАПОЛНИТ ШАБЛОН НОВОЙ КАРТОЧКИ НЕОБХОДИМЫМИ ДАННЫМИ (КАРТИНКА, НАЗВАНИЕ И ТД)
  generateCard() {
    this._card = this._getTemplate(); // ЗАПИСЫВАЕМ В ПЕРЕМЕННУЮ ШАБЛОН НОВОЙ КАРТОЧКИ
    this._elementImage = this._card.querySelector(".element__image");
    this._elementTitle = this._card.querySelector(".element__title");
    this._elementLikeButton = this._card.querySelector(".element__like");
    this._elementDeleteButton =
      this._card.querySelector(".element__delete");
    this._fillCard();
    this._setEventListeners();

    return this._card;
  }

  _fillCard = () => {
    this._elementImage.src = this._link;
    this._elementImage.alt = this._name;
    this._elementTitle.textContent = this._name;
  };
}
