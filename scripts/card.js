// создаем класс карточки, в конструктор которого передаем название, ссылку на изобр, альт и шаблон
export class Card {
    constructor(name, alt, link, cardTemplate, handleBigCardPopup) {
        this._name = name;
        this._alt = alt;
        this._link = link;
        this._cardTemplate = cardTemplate;
        this._handleBigCardPopup = handleBigCardPopup; 
    }
  
  // создаем метод который возращает шаблон новой карточки
    _getTemplate() {
        const newCardTemplate = this._cardTemplate.querySelector('.element').cloneNode(true);
        console.log(newCardTemplate)
  
        return newCardTemplate;
        }
  
  // метод добавления слушателя на элементы карточки
    _setEventListeners() {
      this._initialCard.querySelector('.element__like').addEventListener('click', () => {this._setLikeButton()})
      this._initialCard.querySelector('.element__delete').addEventListener('click', () => {this._setDeleteButton()})
      this._initialCard.querySelector('.element__image').addEventListener('click', () => {this._handleBigCardPopup(this._name, this._link)})
    }
  
  // реализация рабочего лайка
    _setLikeButton() {
      this._initialCard.querySelector('.element__like').classList.toggle('element__like_active'); // выбираем лайк внутри каждой карточки. + тагл
    } 
    
  // метод удаления карточки
    _setDeleteButton() {
      this._initialCard.querySelector('.element__delete').closest('.element').remove();
    }
  
  // публ метод к-й заполнит шаблон новой карточки необходимыми данными (картинка, название и тд)
    createInitialCard() {
        this._initialCard = this._getTemplate(); // записываем в переменную шаблон новой карточки
        this._setEventListeners();
        this._initialCard.querySelector('.element__image').src = this._link;
        this._initialCard.querySelector('.element__title').textContent = this._name;
        this._initialCard.querySelector('.element__image').alt = this._alt;
  
        return this._initialCard;
    }    
  
  }