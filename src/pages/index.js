import "./index.css";
import { Card } from "../components/Card.js";
import { FormValidator } from "../components/FormValidator.js";
import { PicturePopup } from "../components/PicturePopup.js";
import { PopupWithForm } from "../components/PopupWithForm.js";
import { Section } from "../components/Section.js";
import { UserInfo } from "../components/UserInfo.js";
import { PopupWithConfirmation } from "../components/PopupWithConfirmation.js";
import Api from "../components/Api.js";

import { validationConfig } from "../utils/validationConfig.js";
import {
  profileAddButton,
  profileEditButton,
  formEditProfile,
  formAddProfile,
  profileUpdateAvatar,
  nameProfile,
  aboutProfile,
  avatarProfile,
  formUpdateAvatar,
} from "../utils/constants.js";

let userId;

/////////////////////////////
///                       ///
///       ФУНКЦИИ         ///
///                       ///
/////////////////////////////

// СОЗДАЕМ КАРТОЧКИ ИЗ КЛАССА CARD createCards
function createCard(data) {
  const card = new Card(
    data,
    "#templateCards",
    popupOpenCardImage,

    userId,
    async () => {
      try {
        const response = await api.putLike(data._id);
        card.like();
        card.likesCount(response);
      } catch (error) {
        return console.log(`Ошибка: ${error}`);
      }
    },
    async () => {
      try {
        const response = await api.deleteLike(data._id);
        card.dislike();
        card.likesCount(response);
      } catch (error) {
        return console.log(`Ошибка: ${error}`);
      }
    },
    () => {
      popupConfirmation.open(card);
    }
  );

  return card.generateCard();
}

// ФУНКЦИЯ ОТКРЫТИЯ БОЛЬШОЙ КАРТИНКИ
function popupOpenCardImage(name, link) {
  popupImage.open(name, link);
}

// РЕДАКТИРОВАНИЕ ПРОФИЛЯ
async function handleFormSubmitProfile(data) {
  try {
    const userProfile = await api.editProfileUser(data);
    user.setUserInfo(userProfile);
  } catch (error) {
    return console.log(`Ошибка: ${error}`);
  }
}

// ОБОНЛВЕНИЕ АВАТАРКИ
async function handleFormSubmitAvatar(data) {
  try {
    const userProfile = await api.editProfileAvatar(data);
    user.setUserInfo(userProfile);
  } catch (error) {
    return console.log(`Ошибка: ${error}`);
  }
}

// ДОБАВЛЕНИЕ КАРТОЧЕК
async function handleFormSubmitCreateCard(data) {
  try {
    const newCard = await api.createCard(data);
    cardList.addItem(createCard(newCard));
  } catch (error) {
    return console.log(`Ошибка: ${error}`);
  }
}

//////////////////////////////////////
///                                ///
///       ЭКЗЕМПЛЯРЫ КЛАССОВ       ///
///                                ///
//////////////////////////////////////

// СОЗДАНИЕ ОТДЕЛЬНОГО ЭКЗЕМПЛЯРА КЛАССА ДЛЯ КАЖДОГО ПОПАПА
const popupImage = new PicturePopup(".popup_type_big-card");
popupImage.setEventListeners()

const popupAdd = new PopupWithForm(
  ".popup_type_add",
  handleFormSubmitCreateCard
);

popupAdd.setEventListeners()
const popupEdit = new PopupWithForm(
  ".popup_type_edit",
  handleFormSubmitProfile
);

popupEdit.setEventListeners()
const popupAvatar = new PopupWithForm(
  ".popup_type_edit-avatar",
  handleFormSubmitAvatar
);

popupAvatar.setEventListeners()
const user = new UserInfo({
  name: nameProfile,
  about: aboutProfile,
  avatar: avatarProfile,
});

const popupConfirmation = new PopupWithConfirmation(
  ".popup_type_delete",
  async (card) => {
    api
      .deleteCard(card._id)
      .then(() => {
        card.remove();
        popupConfirmation.close();
      })
      .catch((error) => console.log(`Ошибка: ${error}`));
  }
);

popupConfirmation.setEventListeners()
// ЗАГРУЗКА КАРТОЧЕК С СЕРВЕРА
const cardList = new Section(
  {
    renderer: (data) => {
      const card = createCard(data);

      cardList.addItem(card);
    },
  },
  ".elements"
);

///////////////////////////////
///                         ///
///         КНОПКИ          ///
///                         ///
///////////////////////////////

// КНОПКА ОТКРЫТИЯ ПОПАПА РЕДАКТИРОВАНИЕ ПРОФИЛЯ
profileEditButton.addEventListener(
  "click",
  () => {
    popupEdit.open();
    popupEdit.setInputValue(user.getUserInfo());
    validatorFormEditProfile.disableSubmitButton();
  },
  false
);

// КНОПКА ОТКРЫТИЯ ПОПАПА РЕДАКИТИРОВАНИЯ АВАТАРА
profileUpdateAvatar.addEventListener(
  "click",
  () => {
    popupAvatar.open();
    validatorFormUpdateAvatar.disableSubmitButton();
  },
  false
);

// КНОПКА ОТКРЫТИЯ ПОПАПА НОВОЕ МЕСТО
profileAddButton.addEventListener(
  "click",
  () => {
    popupAdd.open();
    validatorFormAddProfile.disableSubmitButton();
  },
  false
);

///////////////////////////////
///                         ///
///        ВАЛИДАЦИЯ        ///
///                         ///
///////////////////////////////

// ДЛЯ КАЖДОЙ ФОРМЫ СОЗДАЕМ НОВЫЙ КЛАСС FormValidator
const validatorFormEditProfile = new FormValidator(
  validationConfig,
  formEditProfile
);

validatorFormEditProfile.enableValidation();

const validatorFormAddProfile = new FormValidator(
  validationConfig,
  formAddProfile
);

validatorFormAddProfile.enableValidation();

const validatorFormUpdateAvatar = new FormValidator(
  validationConfig,
  formUpdateAvatar
);

validatorFormUpdateAvatar.enableValidation();

// ЭКЗЕМПЛЯР КЛАССА Api
const api = new Api({
  baseUrl: "https://mesto.nomoreparties.co/v1/cohort-65",
  headers: {
    authorization: "3214d118-6e50-4726-ad0d-555baedd0477",
    "Content-Type": "application/json",
  },
});

// ОТРИСОВКА КАРТОЧЕК С СЕРВЕРА, ОТРИСОВКА ДАННЫХ ЮЗЕРА
Promise.all([api.getUserInfo(), api.getCards()])
  .then(([userProfile, cards]) => {
    user.setUserInfo(userProfile);
    userId = userProfile._id;
    // ИНИЦИАЛИЗАЦИЯ СЕКЦИИ С КАРТОЧКАМИ НА СТРАНИЦЕ
    cardList.renderItems(cards);
  })

  .catch((error) => console.log(`Ошибка: ${error}`));
