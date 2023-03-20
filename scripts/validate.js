const showInputError = (errorTextElement, validationMessage, activeErrorClass) => {
  errorTextElement.textContent = validationMessage;
  errorTextElement.classList.add(activeErrorClass);
}

const hideInputError = (errorTextElement, activeErrorClass) => {
  errorTextElement.classList.remove(activeErrorClass);
  errorTextElement.textContent = '';
}

const disableButton = (submitButton, inactiveButtonClass) => {
  submitButton.classList.add(inactiveButtonClass);
  submitButton.disabled = true;
}

const enableButton = (submitButton, inactiveButtonClass) => {
  submitButton.classList.remove(inactiveButtonClass);
  submitButton.disabled = false;
}

// функция проверки валидности поля
const checkInputValidity = (input, errorClassTemplate, activeErrorClass) => {
  const errorTextElement = document.querySelector(`${errorClassTemplate}${input.name}`);
  if(!input.validity.valid) {
    showInputError(errorTextElement, input.validationMessage, activeErrorClass);
  } else {
    hideInputError(errorTextElement, activeErrorClass);
  }
}

const hasInvalidInput = (inputList) => {
  return Array.from(inputList).some(input => !input.validity.valid);

}

const toggleButtonState = (submitButton, inactiveButtonClass, inputList) => {
  if(hasInvalidInput(inputList)) {
    disableButton(submitButton, inactiveButtonClass);
  } else {
    enableButton(submitButton, inactiveButtonClass);
  }
}

const setEventListeners = (element, inputSelector, errorClassTemplate, activeErrorClass, submitButtonSelector, inactiveButtonClass) => {
  const inputList = element.querySelectorAll(inputSelector);
  const submitButton = element.querySelector(submitButtonSelector);
  toggleButtonState(submitButton, inactiveButtonClass, inputList);

  inputList.forEach((input) => {
    input.addEventListener('input', (e) => {
      checkInputValidity(e.target, errorClassTemplate, activeErrorClass);
      toggleButtonState(submitButton, inactiveButtonClass, inputList);
    });
  });
}

const enableValidation = (config) => {
  const formElements = Array.from(document.querySelectorAll(config.formSelector));
  formElements.forEach(element => {
    setEventListeners(element, config.inputSelector, config.errorClassTemplate, config.activeErrorClass, config.submitButtonSelector, config.inactiveButtonClass);  

  });


  // setEventListeners(form, inputList, config.errorClassTemplate, config.activeErrorClass, submitButton, config.inactiveButtonClass);  
}

// включение валидации вызовом enableValidation
// все настройки передаются при вызове в конце файла вызывать
enableValidation({
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  errorClassTemplate: '.popup__input-error_type_',
  activeErrorClass: 'popup__input-error_type_active',
  submitButtonSelector: '.popup__button',
  inactiveButtonClass: 'popup__button_type_disabled'
});


