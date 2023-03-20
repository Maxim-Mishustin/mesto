const profileEditButton = document.querySelector('.profile__edit-button');
const popupTypeEdit = document.querySelector('.popup_type_edit');
const popupButtonCloseEdit = document.querySelector('.popup__button-close-edit');
// создание переменной для кнопки добавления карточки Add
const profileAddButton = document.querySelector('.profile__add-button');
const popupTypeAdd = document.querySelector('.popup_type_add');
const popupFormAdd = document.querySelector('.popup__form-add');
const popupButtonCloseAdd = document.querySelector('.popup__button-close-add');
// записали в переменную поле для названия нового места
const popupInputTypeNewPlace = document.querySelector('.popup__input_type_new-place');
// записали в переменную поле для ссылки
const popupInputTypeUrl = document.querySelector('.popup__input_type_url');
// всё что касается биг кард и его попапа
const popupTypeBigCard = document.querySelector('.popup_type_big-card');
const popupButtonCloseBigCard = document.querySelector('.popup__button-close-big-card');
const popupCardImage = document.querySelector('.popup__card-image');
const popupCardTitle = document.querySelector('.popup__card-title');
const profileTitle = document.querySelector('.profile__title');
// про popup profile (кнопка edit)
const popupInputTypeName = document.querySelector('.popup__input_type_name');
const profileText = document.querySelector('.profile__text');
const popupInputTypeJob = document.querySelector('.popup__input_type_job');
const popupProfileForm = document.querySelector('.popup__form-edit');
// записали в переменную весь элементс
const elementGallery = document.querySelector('.elements');
// записали в переменную по айди весь темплейт с контентом
const templateCards = document.querySelector('#templateCards').content;
const popupAll = document.querySelectorAll('.popup');
const closePopupOverflow = (popupAll) => {
  popupAll.forEach(popup => {
    popup.addEventListener('click', (e) => {
      if(e.target === popup) {
        closePopup(popup);
      }
    });
  });
};

// функция submit сохранить 
function handleProfileFormSubmit (evt) {
  evt.preventDefault();
  profileTitle.textContent = popupInputTypeName.value;
  profileText.textContent = popupInputTypeJob.value;
  closePopup(popupTypeEdit);
};

const closePopupEscape = (e) => {
  if(e.key === 'Escape') {
    const popup = document.querySelector('.popup_opened');
    closePopup(popup);
  }
}

// функция открытия попапа общая
function openPopup(popup) {
  popup.classList.add('popup_opened');
  document.addEventListener('keydown', closePopupEscape);
};

// функция закрытия попапа общая
function closePopup(popup) {
  popup.classList.remove('popup_opened');
  document.removeEventListener('keydown', closePopupEscape);
};

// функция открытия попапа общая
function openPopup(popup) {
  popup.classList.add('popup_opened');
};

// функция создания карточки |||||||||||||||||||||||||||||||||||||||||
const createCard = card => {
  // записали в newElement темплейт с содержимым по айди
  const newElement = templateCards.cloneNode(true);

  // назначили переменную с заголовком темплейта
  const elementTitle = newElement.querySelector('.element__title');
  // записали в переменную класс фото из темплейта
  const elementImage = newElement.querySelector('.element__image');
  // записали в elementTitle текст из массива
  elementTitle.textContent = card.name;
  // задаём значение в elementImage фото по сслыке из массива
  elementImage.setAttribute('src', card.link);
  elementImage.setAttribute('alt', card.alt);

  elementImage.addEventListener('click', function () {
    openPopup(popupTypeBigCard);
    popupCardImage.setAttribute('src', elementImage.src);
    popupCardTitle.textContent = card.name;
    popupCardImage.setAttribute('alt', card.name);
  });
  
  // лайк эктив
  const elementLike = newElement.querySelector('.element__like');
  elementLike.addEventListener('click', function(evt) {
    evt.target.classList.add('element__like_active');
  });

  // добавление функции удаления карточки
  const deleteButton = newElement.querySelector('.element__delete');
  deleteButton.addEventListener('click', handleDeleteButtonClick);

  return newElement;
};


// функция добавления карточки из формы
const addCardFormSubmit = evt => {
  evt.preventDefault();
  const newCard = new Object();
  newCard.name = popupInputTypeNewPlace.value;
  newCard.link = popupInputTypeUrl.value;
  newCard.alt = popupInputTypeNewPlace.value;
  addCard(newCard);
  closePopup(popupTypeAdd);
  const addCardFormSubmitButton = popupTypeAdd.querySelector('.popup__button-submit');
  addCardFormSubmitButton.classList.add('popup__button_type_disabled');
  addCardFormSubmitButton.disabled = true;
};

// функция удаления карточки вынесенная отдельно
function handleDeleteButtonClick(event) {
  const button = event.target
  const element = button.closest('.element')
  element.remove()
};

// функция добавления карточки в dom
const addCard = card => {
  elementGallery.prepend(createCard(card));
};

// добавили слушатель клика для Edit
profileEditButton.addEventListener('click', function () {
  openPopup(popupTypeEdit);
  popupInputTypeName.value = profileTitle.textContent;
  popupInputTypeJob.value = profileText.textContent;
});

// добавили слушатель для кнопки закрытия Edit
popupButtonCloseEdit.addEventListener('click', function () {
  closePopup(popupTypeEdit);
});

// добавили слушатель для кнопки закрытия Add
popupButtonCloseAdd.addEventListener('click', function () {
  closePopup(popupTypeAdd);
});

// добавили слушатель для кнопки закрытия Big Card
popupButtonCloseBigCard.addEventListener('click', function () {
  closePopup(popupTypeBigCard);
});

// добавили слушатель для кнопки сохранить
popupProfileForm.addEventListener('submit', handleProfileFormSubmit);

// добавили слушатель клика для открытия PopupAdd
profileAddButton.addEventListener('click', function () {
<<<<<<< HEAD
  openPopup(popupTypeAdd);
=======
  openPopup(popupTypeAdd); 
>>>>>>> develop

  // сброс значений в кнопке Add
  popupFormAdd.reset();
});

// вызов функции addcard на каждый элемент массива
cards.forEach(addCard);

// вызов функции для кнопки создать
popupFormAdd.addEventListener('submit', addCardFormSubmit);

closePopupOverflow(popupAll);