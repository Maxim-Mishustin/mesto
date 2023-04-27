export default class Popup {
  constructor(popupSelector) {
    this._popup = document.querySelector(popupSelector);

    // ПРИМЕНЯЕМ BIND ЧТОБЫ НЕ ТЕРЯЛСЯ КОНТЕКСТ
    this._handleEscClose = this._handleEscClose.bind(this);
  }

  open() {
    this._popup.classList.add("popup_opened");
    document.addEventListener("keydown", (evt) => {
      this._handleEscClose(evt);
    });
  }

  close() {
    this._popup.classList.remove("popup_opened");
    document.removeEventListener("keydown", (evt) => {
      this._handleEscClose(evt);
    });
  }

  // ЗАКРЫТИЕ ПОПАПА ЧЕРЕЗ ESCAPE
  _handleEscClose(evt) {
    if (evt.key === "Escape") {
      this.close();
    }
  }

  // ЗАКРЫТИЕ ПОПАПА ЧЕРЕЗ ОВЕРЛЕЙ
  _handleClose(evt) {
    if (evt.target.classList.contains("popup_opened")) {
      this.close();
    }
  }
  
  // МЕТОДЫ ЗАКРЫТИЯ ПОПАПОВ ПО КРЕСТИКУ И ОВЕРЛЕЮ
  setEventListeners() {
    document.addEventListener("mouseup", (evt) => {
      this._handleClose(evt);
    });
    this._popup
      .querySelector(".popup__button-close")
      .addEventListener("click", () => {
        this.close();
      });
  }
}
