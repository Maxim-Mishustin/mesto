export default class Popup {
  constructor(popupSelector) {
    this._popup = document.querySelector(popupSelector);
    // ОПРЕДЕЛЯЕМ КНОПКУ SUBMIT У ПОПАП
    this._buttonClose = this._popup.querySelector(".popup__button-close");
    // ПРИМЕНЯЕМ BIND ЧТОБЫ НЕ ТЕРЯЛСЯ КОНТЕКСТ У _handleEscClose
    this._handleEscClose = this._handleEscClose.bind(this);
    // ПРИМЕНЯЕМ BIND ЧТОБЫ НЕ ТЕРЯЛСЯ КОНТЕКСТ У _handleCloseByOverlay
    this._handleCloseByOverlay = this._handleCloseByOverlay.bind(this);
  }

  open() {
    // ВЕШАЕМ ОБРАБОТЧИКИ POPUP
    document.addEventListener("keydown", this._handleEscClose);
    // И ТОЛЬКО ПОТОМ ПОКАЗЫВАЕМ POPUP
    this._popup.classList.add("popup_opened");
  }

  close() {
    // СНАЧАЛА СКРЫВАЕМ POPUP
    this._popup.classList.remove("popup_opened");
    // УБИРАЕМ ОБРАБОТЧИКИ POPUP
    document.removeEventListener("keydown", this._handleEscClose);
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
    this._popup.addEventListener("mouseup", this._handleCloseByOverlay);
    // ВЕШАЕМ ОБРАБОТЧИК НАЖАТИЯ НА КРЕСТИК
    this._buttonClose.addEventListener("click", () => {
      this.close();
    });
  }
}
