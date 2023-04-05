export class FormValidator {
    constructor(form, config) {
        this._form = form;
        this._inputList = Array.from(this._form.querySelectorAll(config.inputSelector)) // создали массив из полей ввода формы
        this._errorClassTemplate = config.errorClassTemplate;
        this._activeErrorClass = config.activeErrorClass;
    }
    
    // метод показа ошибки
    _showError(input) {
        this._form.querySelector(`${this._errorClassTemplate}${input.name}`).textContent = input.validationMessage;
        this._form.querySelector(`${this._errorClassTemplate}${input.name}`).classList.Add(this._activeErrorClass);
    }

    // метод скрытия ошибки
    _hideError() {
        this._form.querySelector(`${this._errorClassTemplate}${input.name}`).textContent = input.validationMessage;
        this._form.querySelector(`${this._errorClassTemplate}${input.name}`).classList.remove(this._activeErrorClass);
    }

    // метод проверки поля ввода на валидность
    _checkInputValidity(input) {
        if(!input.validity.valid) {
            this._showError(input)
        } else {
            this._hideError(input)
        }
    }
    
    // метод добавления слушателей
    _setEventListeners() {
        this._inputList.forEach(input => {
            input.addEventListeners('input', () => {
                this._checkInputValidity(input);
            })
        })
    }

    // метод включения валидации
    enableValidation() {
        this._setEventListeners();
    }
}