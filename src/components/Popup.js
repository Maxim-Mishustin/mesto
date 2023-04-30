export default class Popup {
  constructor(popupSelector) {
    this._popup = document.querySelector(popupSelector);
    // ОПРЕДЕЛЯЕМ КНОПКУ SUBMIT У ПОПАП
    this._button = this._popup.querySelector(".popup__button-close");
    // ПРИМЕНЯЕМ BIND ЧТОБЫ НЕ ТЕРЯЛСЯ КОНТЕКСТ У _handleSubmit
    this._clickCloseButton = this._handleSubmit.bind(this);
    // ПРИМЕНЯЕМ BIND ЧТОБЫ НЕ ТЕРЯЛСЯ КОНТЕКСТ У _handleEscClose
    this._clickEscClose = this._handleEscClose.bind(this);
    // ПРИМЕНЯЕМ BIND ЧТОБЫ НЕ ТЕРЯЛСЯ КОНТЕКСТ У _handleCloseByOverlay
    this._clickClose = this._handleCloseByOverlay.bind(this);
    // ВЕШАЕМ ОБРАБОТЧИК НАЖАТИЯ НА КРЕСТИК
    this._button.addEventListener("click", this._clickCloseButton);
  }

  open() {
    console.log("*");
    // УСТАНАВЛИВАЕМ ОБРАБОТЧИКИ СОБЫТИЙ
    this.setEventListeners();
    // И ТОЛЬКО ПОТОМ ПОКАЗЫВАЕМ POPUP
    this._popup.classList.add("popup_opened");
    console.log("#");
  }

  close() {
    console.log("0");
    // СНАЧАЛА СКРЫВАЕМ POPUP
    this._popup.classList.remove("popup_opened");
    // ПОТОМ УДАЛЯЕМ ОБРАБОТЧИК СОБЫТИЙ
    this.delEventListeners();
    console.log("-0");
  }

  _handleSubmit() {
    // ВЫЗЫВАЕМ ЗАКРЫТИЕ
    this.close();
  }

  // ЗАКРЫТИЕ ПОПАПА ЧЕРЕЗ ESCAPE
  _handleEscClose(evt) {
    if (evt.key === "Escape") {
      this.close();
    }
  }

  // ЗАКРЫТИЕ ПОПАПА ЧЕРЕЗ ОВЕРЛЕЙ
  _handleCloseByOverlay(evt) {
    if (evt.target.classList.contains("popup_opened")) {
      this.close();
    }
  }

  setEventListeners() {
    console.log("1");
    // ВЕШАЕМ ОБРАБОТЧИКИ POPUP
    document.addEventListener("keydown", this._clickEscClose);
    console.log("2");
    document.addEventListener("mouseup", this._clickClose);
    console.log("3");
  }

  delEventListeners() {
    console.log("-3");
    // УБИРАЕМ ОБРАБОТЧИКИ POPUP
    document.removeEventListener("keydown", this._clickEscClose);
    console.log("-2");
    document.removeEventListener("mouseup", this._clickClose);
    console.log("-1");
  }
}
