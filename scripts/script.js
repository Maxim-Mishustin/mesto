// создание переменной для кнопки редактирования
const profileEditButton = document.querySelector('.profile__edit-button');
// создали переменную попап
const popup = document.querySelector('.popup');
// создали переменную закрытия попапа
const popupButtonClose = document.querySelector('.popup__button-close');
console.log(popupButtonClose);
// создали переменную для профайл тайтл
const profileTitle = document.querySelector('.profile__title');
console.log(profileTitle.textContent);
// создали переменную для попап нейм в попапе
const popupInputTypeName = document.querySelector('.popup__input_type_name');
console.log(popupInputTypeName.value);
// создали переменную для профайл текст
const profileText = document.querySelector('.profile__text');
console.log(profileText.textContent);
// создали переменную для попап профессии
const popupInputTypeJob = document.querySelector('.popup__input_type_job');
console.log(popupInputTypeJob.value);
// создали переменную для профайл нейм в попапе
const popupForm = document.querySelector('.popup__form');
console.log(popupForm);

// функция сохранить (дали готовую в ТЗ)
function handleFormSubmit (evt) {
    evt.preventDefault();
    profileTitle.textContent = popupInputTypeName.value;
    profileText.textContent = popupInputTypeJob.value;
    closePopup();
}

// функция закрытия попапа
function closePopup() {
    popup.classList.remove('popup_opened');
}

// добавили слушатель клика
profileEditButton.addEventListener('click', function () {
    popup.classList.add('popup_opened');
    console.log(popup);
    popupInputTypeName.value = profileTitle.textContent;
    popupInputTypeJob.value = profileText.textContent;
});

// добавили слушатель для кнопки закрытия попапа
popupButtonClose.addEventListener('click', closePopup);

// добавили слушатель для кнопки сохранить
popupForm.addEventListener('submit', handleFormSubmit);


// -------------------------------------------------------



// создание переменной для кнопки добавления карточки
const profileAddButton = document.querySelector('.profile__add-button');



















// массив карточек
const cards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
];