const profileEditButton = document.querySelector('.profile__edit-button');
const popup = document.querySelector('.popup');
const popupButtonClose = document.querySelector('.popup__button-close');
// console.log(popupButtonClose);
const profileTitle = document.querySelector('.profile__title');
// console.log(profileTitle.textContent);
const popupInputTypeName = document.querySelector('.popup__input_type_name');
// console.log(popupInputTypeName.value);
const profileText = document.querySelector('.profile__text');
// console.log(profileText.textContent);
const popupInputTypeJob = document.querySelector('.popup__input_type_job');
// console.log(popupInputTypeJob.value);
const popupForm = document.querySelector('.popup__form');
// console.log(popupForm);

function handleFormSubmit (evt) {
    evt.preventDefault();
    profileTitle.textContent = popupInputTypeName.value;
    profileText.textContent = popupInputTypeJob.value;
    closePopup();
}

function closePopup() {
    popup.classList.remove('popup_opened');
}

profileEditButton.addEventListener('click', function () {
    popup.classList.add('popup_opened');
    // console.log(popup);
    popupInputTypeName.value = profileTitle.textContent;
    popupInputTypeJob.value = profileText.textContent;
});

popupButtonClose.addEventListener('click', closePopup);

popupForm.addEventListener('submit', handleFormSubmit);