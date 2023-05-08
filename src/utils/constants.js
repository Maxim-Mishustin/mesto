// КНОПКИ EDIT & ADD & AVATAR
const profileEditButton = document.querySelector(".profile__edit-button");
const profileAddButton = document.querySelector(".profile__add-button");
const profileUpdateAvatar = document.querySelector(
  ".profile__edit-button-avatar"
);

// КОНСТАНТЫ ПОЛЕЙ ФОРМЫ
const nameProfile = document.querySelector(".profile__title");
const aboutProfile = document.querySelector(".profile__text");
const avatarProfile = document.querySelector(".profile__avatar");

// ФОРМА РЕДАКТИРОВАНИЯ
const formEditProfile = document.forms.formProfile;

// ФОРМА НОВОЕ МЕСТО
const formAddProfile = document.forms.formAddCard;

//ФОРМА РЕДАКТИРОВАНИЯ АВАТАРА
const formUpdateAvatar = document.forms.editAvatar;

export {
  profileAddButton,
  profileEditButton,
  formEditProfile,
  formAddProfile,
  profileUpdateAvatar,
  nameProfile,
  aboutProfile,
  avatarProfile,
  formUpdateAvatar,
};
