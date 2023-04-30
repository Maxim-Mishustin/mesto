import Popup from "../components/Popup.js";

export class PopupWithForm extends Popup {
  constructor(popupSelector, callbackSubmit) {
    super(popupSelector);
    this._callbackSubmit = callbackSubmit;
    this._form = this._popup.querySelector(".popup__form");
    this._inputs = [...this._form.querySelectorAll(".popup__input")];
    this._form.addEventListener("submit", this._handleSubmit.bind(this))

  }

  _getInputValues() {
    const values = {};
    this._inputs.forEach((input) => {
      values[input.name] = input.value;
    });
    return values;
  }

  close() {
    super.close();
    this._form.reset();
  }

  _handleSubmit(event) {
    event.preventDefault();
    this._callbackSubmit(this._getInputValues());

  }

}
