export class FormValidator {
    constructor(form, config) {
        this._form = form;
        this._inputList = Array.from(this._form.querySelectorAll(config.inputSelector)); // создали массив из полей ввода формы
        this._errorClassTemplate = config.errorClassTemplate;
        this._activeErrorClass = config.activeErrorClass;
        this._submitButton = this._form.querySelector(config.submitButtonSelector);
        this._submitButtonDisabled = config.inactiveButtonClass;
        this._errorElement = config._errorElementSelector;
    }
    
    // метод показа ошибки
    _showError(input) {
        this._form.querySelector(`${this._errorClassTemplate}${input.name}`).textContent = input.validationMessage;
        this._form.querySelector(`${this._errorClassTemplate}${input.name}`).classList.add(this._activeErrorClass);
    }

    // метод сокрытия ошибки
    _hideError(input) {
        this._form.querySelector(`${this._errorClassTemplate}${input.name}`).textContent = '';
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
            input.addEventListener('input', () => {
                this._checkInputValidity(input);
                this._toggleButtonState();
            })
        })
    }

    // метод включения валидации
    enableValidation() {
        this._setEventListeners();
        this._deleteErrors();
        this._toggleButtonState();

    }

    _toggleButtonState() {
        if(!this._hasInvalidInput()) {
            this._enableButton();    
        } else {this._disableButton();}
    }

    _disableButton() {
        this._submitButton.classList.add(this._submitButtonDisabled);
    }

    _enableButton() {
        this._submitButton.classList.remove(this._submitButtonDisabled);
    }

    _hasInvalidInput() {
        return this._inputList.some(input => !input.validity.valid);
    }

    resetValidation() {
        this._toggleButtonState();
        this._inputList.forEach(input => {
            this._hideError(input);
        });
    }

    _deleteErrors() {
        const errors = Array.from(document.querySelectorAll(this._errorElement));
        errors.forEach(error => {error.textContent = ''});
    }
}

