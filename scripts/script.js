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





// создание переменной для кнопки добавления карточки Add
const profileAddButton = document.querySelector('.profile__add-button');




// массив карточек
const cards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg',
    alt: 'Архыз'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg',
    alt: 'Челябинская область'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg',
    alt: 'Иваново'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg',
    alt: 'Камчатка'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg',
    alt: 'Холмогорский район'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg',
    alt: 'Байкал'
  }
];



// записали в переменную весь элементс
const elementGallery = document.querySelector('.elements');
console.log(elementGallery);

// записали в переменную по айди весь темплейт с контентом
const templateCards = document.querySelector('#templateCards').content;
console.log(templateCards);

const createCard = card => {
  // записали в newElement весь темплейт по айди
  const newElement = templateCards.cloneNode(true);
  console.log(newElement);

  // назначили переменную с заголовком темплейта
  const elementTitle = newElement.querySelector('.element__title');
  console.log(elementTitle);

  // записали в переменную класс фото из темплейта
  const elementImage = newElement.querySelector('.element__image');
  console.log(elementImage);

  // записали в elementTitle текст из массива
  elementTitle.textContent = card.name;
  console.log(elementTitle);

  // задаём значение в elementImage фото по сслыке из массива
  elementImage.setAttribute('src', card.link);
  console.log(elementImage);


  // добавление функции удаления карточки
  const deleteButton = newElement.querySelector('.element__delete');
  deleteButton.addEventListener('click', handleDeleteButtonClick)

  elementGallery.prepend(newElement); // вынести в новую функцию
  
};

cards.forEach(createCard);

// функция удаления карточки вынесенная отдельно
function handleDeleteButtonClick(event) {
  const button = event.target
  const element = button.closest('.element')
  element.remove()
}




// добавление лайка
const elementLike = elementsTemplate.querySelector('.element__like');
console.log(elementLike);

function like() {
  elementLike.classList.toggle('.element__like_active');
  console.log(click);

  elementLike.addEventListener('click', like);
};



