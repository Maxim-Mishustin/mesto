import "./index.css";
import { Card } from "../components/Card.js";
import { FormValidator } from "../components/FormValidator.js";
import { PicturePopup } from "../components/PicturePopup.js";
import { PopupWithForm } from "../components/PopupWithForm.js";
import { Section } from "../components/Section.js";
import { UserInfo } from "../components/UserInfo.js";

import { cards } from "../utils/cards.js";
import { config } from "../utils/config.js";
import {
  profileAddButton,
  profileEditButton,
  formEditProfile,
  editInputName,
  editJobInput,
  formAddProfile,
} from "../utils/constants.js";

/////////////////////////////
///                       ///
///       ФУНКЦИИ         ///
///                       ///
/////////////////////////////

// СОЗДАЕМ КАРТОЧКИ ИЗ МАССИВА CARDS
function creatingCards(element) {
  return new Card(element, "#templateCards", () =>
    popupOpenCardImage.open(element)
  ).createInitialCard();
}

// ОТКРЫТИЕ ПОПАПА РЕДАКТИРОВАНИЯ ПРОФИЛЯ
function popupEditProfile() {
  const { title, subtitle } = userInformation.getUserInfo();
  editInputName.value = title;
  editJobInput.value = subtitle;

  formEditValidator.disableSubmitButton();
  popupEditorClass.open();
}

// ОТКРЫТИИ ПОПАПА ДЛЯ СОЗДАНИЯ НОВОЙ КАРТОЧКИ
function popupAddCard() {
  formCardValidator.disableSubmitButton();
  popupAddCardClass.open();
}

// ОТРИСОВКА ДАННЫХ О ПОЛЬЗОВАТЕЛЕ НА СТРАНИЦЕ
function setFormValues(value) {
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
const popupEditorClass = new PopupWithForm(".popup_type_edit", setFormValues);
popupEditorClass.setEventListeners();

// ИНИЦИАЛИЗАЦИЯ КАРТОЧЕК ЧЕРЕЗ ЭКЗЕМПЛЯР КЛАССА SECTION
const cardSection = new Section(
  {
    renderer: (element) => cardSection.addItem(creatingCards(element)),
  },
  ".elements"
);
// ЭКЗЕМПЛЯР КЛАССА НОВОЕ МЕСТО
const popupAddCardClass = new PopupWithForm(".popup_type_add", (element) => {
  cardSection.addItem(creatingCards(element));
  popupAddCardClass.close();
});
popupAddCardClass.setEventListeners();

// ЭКЗЕМПЛЯР КЛАССА С БОЛЬШОЙ КАРТИНКОЙ
const popupOpenCardImage = new PicturePopup(".popup_type_big-card");
popupOpenCardImage.setEventListeners();

// ЭКЗЕМЛЯР КЛАССА ВАЛИДАЦИИ-РЕДАКТИРОВАНИЯ ПРОФИЛЯ
const formEditValidator = new FormValidator(config, formEditProfile);
formEditValidator.enableValidation();

// ЭКЗЕМЛЯР КЛАССА ВАЛИДАЦИИ-НОВОЕ МЕСТО
const formCardValidator = new FormValidator(config, formAddProfile);
formCardValidator.enableValidation();

///////////////////////////////
///                         ///
///         КНОПКИ          ///
///                         ///
///////////////////////////////

// КНОПКА ОТКРЫТИЯ ПОПАПА РЕДАКТИРОВАНИЕ ПРОФИЛЯ
profileEditButton.addEventListener("click", () => popupEditProfile());

// КНОПКА ОТКРЫТИЯ ПОПАПА НОВОЕ МЕСТО
profileAddButton.addEventListener("click", () => popupAddCard());

// ИНИЦИАЛИЗАЦИЯ СЕКЦИИ С КАРТОЧКАМИ НА СТРАНИЦЕ
cardSection.renderItems(cards.reverse());
