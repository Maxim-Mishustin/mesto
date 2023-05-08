// СОЗДАЕМ КЛАСС КАРТОЧКИ, В КОНСТРУКТОР КОТОРОГО ПЕРЕДАЕМ НАЗВАНИЕ, ССЫЛКУ НА ИЗОБРАЖЕНИЕ, АЛЬТ И ШАБЛОН, UserId  И ТД
export class Card {
  constructor(
    data,
    cardTemplate,
    handleImageClick,
    userId,
    like,
    dislike,
    deleteCard
  ) {
    this._cardTemplate = cardTemplate;
    this._handleImageClick = handleImageClick;
    this._userId = userId;
    this._like = like;
    this._dislike = dislike;
    this._deleteCard = deleteCard;
    this._likes = data.likes;
    this._id = data._id;
    this._name = data.name;
    this._link = data.link;
    this._ownerId = data.owner._id;
  }

  like() {
    this._likeButton.classList.add("element__like_active");
  }

  dislike() {
    this._likeButton.classList.remove("element__like_active");
  }

  _userLiked() {
    this._likes.forEach((elementId) => {
      if (elementId._id === this._userId) {
        this.like();
      } else {
        this.dislike();
      }
    });
  }

  likesCount(res) {
    this._likesCount.textContent = `${res.likes.length}`;
  }

  remove() {
    this._card.remove();
    this._card = null;
  }

  // СОЗДАЕМ МЕТОД, КОТОРЫЙ ВОЗВРАЩАЕТ ШАБЛОН НОВОЙ КАРТОЧКИ
  _getTemplate() {
    const newCardTemplate = document
      .querySelector(this._cardTemplate)
      .content.querySelector(".element")
      .cloneNode(true);

    return newCardTemplate;
  }

  // ПУБЛИЧНЫЙ МЕТОД, КОТОРЫЙ ЗАПОЛНИТ ШАБЛОН НОВОЙ КАРТОЧКИ НЕОБХОДИМЫМИ ДАННЫМИ (КАРТИНКА, НАЗВАНИЕ И ТД)
  generateCard() {
    this._card = this._getTemplate(); // ЗАПИСЫВАЕМ В ПЕРЕМЕННУЮ ШАБЛОН НОВОЙ КАРТОЧКИ
    console.log();
    this._likeButton = this._card.querySelector(".element__like");

    // Устанавливаю счетчик для подсчета лайков
    this._likesCount = this._card.querySelector(".element__count-like");
    this._likesCount.textContent = this._likes.length;
    this._deleteButtonTrash = this._card.querySelector(".element__delete");
    if (this._ownerId !== this._userId) {
      this._deleteButtonTrash.remove();
    }

    this.elementImage = this._card.querySelector(".element__image");
    this.elementImage.src = this._link;
    this.elementImage.alt = this._name;
    this._card.querySelector(".element__title").textContent = this._name;

    this._setEventListeners();

    this._userLiked();

    return this._card;
  }

  // МЕТОД ДОБАВЛЕНИЯ СЛУШАТЕЛЯ НА ЭЛЕМЕНТЫ КАРТОЧКИ
  _setEventListeners() {
    this._likeButton.addEventListener("click", () => {
      if (this._likeButton.classList.contains("element__like_active")) {
        this._dislike();
      } else {
        this._like();
      }
    });
    this._deleteButtonTrash.addEventListener("click", () => {
      this._deleteCard(this._id);
    });
    this.elementImage.addEventListener("click", () => {
      this._handleImageClick(this._name, this._link);
    });
  }
}
