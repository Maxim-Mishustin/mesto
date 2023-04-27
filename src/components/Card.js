// СОЗДАЕМ КЛАСС КАРТОЧКИ, В КОНСТРУКТОР КОТОРОГО ПЕРЕДАЕМ НАЗВАНИЕ, ССЫЛКУ НА ИЗОБРАЖЕНИЕ, АЛЬТ И ШАБЛОН
export class Card {
  constructor(data, cardTemplate, handleBigCardPopup) {
    this._name = data.name;
    this._link = data.link;
    this._cardTemplate = cardTemplate;
    this._handleBigCardPopup = handleBigCardPopup;
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
      this._setLikeButton()
    );
    this._elementDeleteButton.addEventListener("click", () =>
      this._setDeleteButton()
    );
    this._elementImage.addEventListener("click", () =>
      this._handleBigCardPopup(this._name, this._link)
    );
  }

  // РЕАЛИЗАЦИЯ РАБОЧЕГО ЛАЙКА
  _setLikeButton() {
    this._elementLikeButton.classList.toggle("element__like_active"); // выбираем лайк внутри каждой карточки. + тагл
  }

  // МЕТОД УДАЛЕНИЯ КАРТОЧКИ
  _setDeleteButton() {
    this._initialCard.remove();
    this._initialCard = null;
  }
  // ПУБЛИЧНЫЙ МЕТОД, КОТОРЫЙ ЗАПОЛНИТ ШАБЛОН НОВОЙ КАРТОЧКИ НЕОБХОДИМЫМИ ДАННЫМИ (КАРТИНКА, НАЗВАНИЕ И ТД)
  createInitialCard() {
    this._initialCard = this._getTemplate(); // ЗАПИСЫВАЕМ В ПЕРЕМЕННУЮ ШАБЛОН НОВОЙ КАРТОЧКИ
    this._elementImage = this._initialCard.querySelector(".element__image");
    this._elementTitle = this._initialCard.querySelector(".element__title");
    this._elementLikeButton = this._initialCard.querySelector(".element__like");
    this._elementDeleteButton =
      this._initialCard.querySelector(".element__delete");
    this._fillCard();
    this._setEventListeners();

    return this._initialCard;
  }

  _fillCard = () => {
    this._elementImage.src = this._link;
    this._elementImage.alt = this._name;
    this._elementTitle.textContent = this._name;
  };
}
