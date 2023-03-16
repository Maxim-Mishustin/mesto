const showInputError = () => {

}

const hideInputError = () => {

}

const checkInputValidity = (input) => {
  if(input.validity.valid) {
    showInputError();
    console.log('инпут валиден');
  } else {
    hideInputError();
    console.log('инпут не валиден');
  }
}

const setEventListeners = (form, inputList) => {
  form.addEventListener('submit', (e) => {
    e.preventDefault();
  });

  inputList.forEach((input) => {
    input.addEventListener('input', (e) => {
      checkInputValidity(input);
    });
  });
}

const enableValidation = (config) => {
  const form = document.querySelector(config.formSelector);
  const inputList = form.querySelectorAll(config.inputSelector);
  
  setEventListeners(form, inputList);  
}

// включение валидации вызовом enableValidation
// все настройки передаются при вызове в конце файла вызывать

enableValidation({
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__button',
  inactiveButtonClass: 'popup__button_disabled',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__error_visible'
});