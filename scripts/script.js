const profileEditButton = document.querySelector('.profile__edit-button');
const popup = document.querySelector('.popup');
const popupButtonClose = document.querySelector('.popup__button-close');
const profileTitle = document.querySelector('.profile__title');
const popupInputTypeName = document.querySelector('.popup__input_type_name');
const profileText = document.querySelector('.profile__text');
const popupInputTypeJob = document.querySelector('.popup__input_type_job');
const popupForm = document.querySelector('.popup__form');

function formSave (evt) {
    evt.preventDefault(); 
    profileTitle.textContent = popupInputTypeName.value;
    profileText.textContent = popupInputTypeJob.value;
    popup.classList.add('popup_hidden');
}

profileEditButton.addEventListener('click', function () {
    popup.classList.remove('popup_hidden');
    console.log(popup);
    popupInputTypeName.value = profileTitle.textContent;
    popupInputTypeJob.value = profileText.textContent;
});

popupButtonClose.addEventListener('click', function () {
    popup.classList.add('popup_hidden');
});

popupForm.addEventListener('submit', formSave);