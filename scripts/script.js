// Находим форму в DOM
const editProfileButton = document.querySelector('.profile__edit-button');
editProfileButton.addEventListener('click', function () {
    const editPopup = document.querySelector('.popup');
    console.log(editPopup);
    editPopup.classList.add('popup_opened'); // почему класс попап с кобках без точки?
}); 
 
const editPopupCloseButton = document.querySelector('.popup');
editPopupCloseButton.addEventListener('click', function() {
    const editPopup = document.querySelector('.popup');
    console.log(editPopup); 
    editPopup.classList.add('popup_opened');
});


// Находим поля формы в DOM
let nameInput = document.querySelector('.popup__input_type_job');// Воспользуйтесь инструментом .querySelector()
let jobInput = // Воспользуйтесь инструментом .querySelector()

// Обработчик «отправки» формы, хотя пока
// она никуда отправляться не будет
function handleFormSubmit (evt) {
    evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы.
                                                // Так мы можем определить свою логику отправки.
                                                // О том, как это делать, расскажем позже.

    // Получите значение полей jobInput и nameInput из свойства value

    // Выберите элементы, куда должны быть вставлены значения полей

    // Вставьте новые значения с помощью textContent
}

// Прикрепляем обработчик к форме:
// он будет следить за событием “submit” - «отправка»
formElement.addEventListener('submit', handleFormSubmit); 

