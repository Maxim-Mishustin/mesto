import "./index.css";
import { Card } from "../components/Card.js";
import { FormValidator } from "../components/FormValidator.js";
import { PicturePopup } from "../components/PicturePopup.js";
import { PopupWithForm } from "../components/PopupWithForm.js";
import { Section } from "../components/Section.js";
import { UserInfo } from "../components/UserInfo.js";

import { cards } from "../utils/cards.js";
import { validationConfig } from "../utils/validationConfig.js";
import {
  profileAddButton,
  profileEditButton,
  formEditProfile,
  cardElementName,
  cardElementJob,
  formAddProfile,
} from "../utils/constants.js";

/////////////////////////////
///                       ///
///       ФУНКЦИИ         ///
///                       ///
/////////////////////////////

// СОЗДАЕМ КАРТОЧКИ ИЗ МАССИВА CARDS creatingCards    : createCard
function createCard(cardData) {
  return new Card(cardData, "#templateCards", () =>
    popupOpenCardImage.open(cardData)
  ).generateCard();
}

// ОТКРЫТИЕ ПОПАПА РЕДАКТИРОВАНИЯ ПРОФИЛЯ
function openPopupProfile() {
  const { title, subtitle } = userInformation.getUserInfo();
  cardElementName.value = title;
  cardElementJob.value = subtitle;

  formEditValidator.disableSubmitButton();
  popupEditorClass.open();
}

// ОТКРЫТИИ ПОПАПА ДЛЯ СОЗДАНИЯ НОВОЙ КАРТОЧКИ
function openPopupAddCard() {
  formCardValidator.disableSubmitButton();
  popupAddCardClass.open();
}

// ОТРИСОВКА ДАННЫХ О ПОЛЬЗОВАТЕЛЕ НА СТРАНИЦЕ   setFormValues: handleProfileFormSubmit
function handleProfileFormSubmit(value) {
  userInformation.setUserInfo(value.inputName, value.inputJob);
  popupEditorClass.close();
}

//////////////////////////////////////
///                                ///
///       ЭКЗЕМПЛЯРЫ КЛАССОВ       ///
///                                ///
//////////////////////////////////////

// ЭКЗЕМЛЯР КЛАССА USERINFO
const userInformation = new UserInfo({
  titleSelector: ".profile__title",
  subtitleSelector: ".profile__text",
});

// ЭКЗЕМПЛЯР КЛАССА РЕДАКТИРОВАНИЯ ПРОФИЛЯ
const popupEditorClass = new PopupWithForm(
  ".popup_type_edit",
  handleProfileFormSubmit
);
popupEditorClass.setEventListeners();

// ИНИЦИАЛИЗАЦИЯ КАРТОЧЕК ЧЕРЕЗ ЭКЗЕМПЛЯР КЛАССА SECTION
const cardSection = new Section(
  {
    renderer: (cardData) => cardSection.addItem(createCard(cardData)),
  },
  ".elements"
);
// ЭКЗЕМПЛЯР КЛАССА НОВОЕ МЕСТО
const popupAddCardClass = new PopupWithForm(".popup_type_add", (cardData) => {
  cardSection.addItem(createCard(cardData));
  popupAddCardClass.close();
});
popupAddCardClass.setEventListeners();

// ЭКЗЕМПЛЯР КЛАССА С БОЛЬШОЙ КАРТИНКОЙ
const popupOpenCardImage = new PicturePopup(".popup_type_big-card");
popupOpenCardImage.setEventListeners();

// ЭКЗЕМЛЯР КЛАССА ВАЛИДАЦИИ-РЕДАКТИРОВАНИЯ ПРОФИЛЯ
const formEditValidator = new FormValidator(validationConfig, formEditProfile);
formEditValidator.enableValidation();

// ЭКЗЕМЛЯР КЛАССА ВАЛИДАЦИИ-НОВОЕ МЕСТО
const formCardValidator = new FormValidator(validationConfig, formAddProfile);
formCardValidator.enableValidation();

///////////////////////////////
///                         ///
///         КНОПКИ          ///
///                         ///
///////////////////////////////

// КНОПКА ОТКРЫТИЯ ПОПАПА РЕДАКТИРОВАНИЕ ПРОФИЛЯ
profileEditButton.addEventListener("click", () => openPopupProfile());

// КНОПКА ОТКРЫТИЯ ПОПАПА НОВОЕ МЕСТО
profileAddButton.addEventListener("click", () => openPopupAddCard());

// ИНИЦИАЛИЗАЦИЯ СЕКЦИИ С КАРТОЧКАМИ НА СТРАНИЦЕ
cardSection.renderItems(cards.reverse());
