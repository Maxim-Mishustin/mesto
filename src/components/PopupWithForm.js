import Popup from "../components/Popup.js";

export class PopupWithForm extends Popup {
  constructor(popupSelector, callbackSubmit) {
    super(popupSelector);
    this._callbackSubmit = callbackSubmit;
    this._form = this._popup.querySelector(".popup__form");
    this._inputs = [...this._form.querySelectorAll(".popup__input")];
    
  }

  // ПРИСВОЕНИЕ ДАННЫХ В ИНПУТЫ
  _getInputValues() {
    const values = {};
    this._inputs.forEach((input) => {
      values[input.name] = input.value;
    });
    return values;
  }

  // РЕДАКТРИРОВАНИЕ ДАННЫХ ПОЛЕЙ ФОРМЫ
  setInputValue(data) {
    this._inputs.forEach((input) => {
      input.value = data[input.name];
    });
  }

  close() {
    super.close();
    this._form.reset();
  }

  setEventListeners() {
    super.setEventListeners()
    this._form.addEventListener("submit", (event) => {
      event.preventDefault();
      const saveButtonText = event.submitter.textContent;
      // ИЗМЕНЕНИЕ ТЕКСТА КНОПКИ ПРИ СОХРАНЕНИИ ДАННЫХ
      event.submitter.textContent = "Сохранение...";
      this._callbackSubmit(this._getInputValues())
        .then(() => this.close())
        .finally(() => {
          event.submitter.textContent = saveButtonText;
        });
    });
  }
}
