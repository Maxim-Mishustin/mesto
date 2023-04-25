import "./index.css"
import { cards } from "../components/Constants.js";
import { FormValidator } from "../components/FormValidator.js";
import { Card } from "../components/Card.js";


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
const popupInputTypeName = document.querySelector('.popup__input_type_name');
const profileText = document.querySelector('.profile__text');
const popupInputTypeJob = document.querySelector('.popup__input_type_job');
const formEditProfile = document.querySelector('.popup__form');
// записали в переменную весь элементс
const elementGallery = document.querySelector('.elements');
// записали в переменную по айди весь темплейт с контентом
const templateCards = document.querySelector('#templateCards').content;
const popupAll = document.querySelectorAll('.popup');
const formList = Array.from(document.querySelectorAll('.popup__form'));
const formsValidators = {};

const config = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  errorClassTemplate: '.popup__input-error_type_',
  activeErrorClass: 'popup__input-error_type_active',
  submitButtonSelector: '.popup__button',
  inactiveButtonClass: 'popup__button_type_disabled',
  errorElementSelector: '.popup__input-error'
}

// функция закрытия попапа при клике за пределы попапа
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
function submitEditProfileForm (evt) {
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

// ф-я открытия большой карточки
const handleBigCardPopup = (name, link) => {
  openPopup(popupTypeBigCard);
  popupCardImage.setAttribute('src', link);
  popupCardTitle.textContent = name;
  popupCardImage.setAttribute('alt', name);
}  

// ф-я создания карточки
const createNewCard = (name, link, alt) => {
  const card = new Card(name, alt, link, templateCards, handleBigCardPopup);
  const newCardItem = card.createInitialCard();
  return newCardItem;
}

// проходим по массиву методом форИч и создаем на основе элемента массива карточку (в начале)  
cards.forEach (item => {
    elementGallery.prepend(createNewCard(item.name, item.link, item.alt));
});

// функция добавления карточки из формы
const addCardFormSubmit = evt => {
  evt.preventDefault();
  elementGallery.prepend(createNewCard(popupInputTypeNewPlace.value, popupInputTypeUrl.value, popupInputTypeNewPlace.value));
  closePopup(popupTypeAdd);
  popupFormAdd.reset();
};

// функция удаления карточки вынесенная отдельно
function handleDeleteButtonClick(event) {
  const button = event.target
  const element = button.closest('.element')
  element.remove()
};

// добавили слушатель клика для Edit
profileEditButton.addEventListener('click', function () {
  openPopup(popupTypeEdit);
  popupInputTypeName.value = profileTitle.textContent;
  popupInputTypeJob.value = profileText.textContent;
  formsValidators[formEditProfile.getAttribute('name')].resetValidation();
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
formEditProfile.addEventListener('submit', submitEditProfileForm);

// добавили слушатель клика для закрытия PopupAdd
profileAddButton.addEventListener('click', function () {
  openPopup(popupTypeAdd);
  formsValidators[popupFormAdd.getAttribute('name')].resetValidation();
});

// вызов функции для кнопки создать
popupFormAdd.addEventListener('submit', addCardFormSubmit);

closePopupOverflow(popupAll);

const enableValidation = config => {
  formList.forEach(form => {
    const validation = new FormValidator(form, config);
    const formName = form.getAttribute('name');
    formsValidators[formName] = validation;
    validation.enableValidation();
  })
}

enableValidation(config);
