// КНОПКИ EDIT & ADD
const profileEditButton = document.querySelector(".profile__edit-button");
const profileAddButton = document.querySelector(".profile__add-button");

// ФОРМА РЕДАКТИРОВАНИЯ
const formEditProfile = document.forms.formProfile;

// ФОРМА НОВОЕ МЕСТО
const formAddProfile = document.forms.formAddCard;

// ПОЛЯ ФОРМЫ РЕДАКТИРОВАНИЯ
const editInputName = formEditProfile.elements.inputName;
const editJobInput = formEditProfile.elements.inputJob;

export {
  profileAddButton,
  profileEditButton,
  formEditProfile,
  editInputName,
  editJobInput,
  formAddProfile,
};
