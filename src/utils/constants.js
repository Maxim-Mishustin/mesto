// КНОПКИ EDIT & ADD
const profileEditButton = document.querySelector(".profile__edit-button");
const profileAddButton = document.querySelector(".profile__add-button");

// ФОРМА РЕДАКТИРОВАНИЯ
const formEditProfile = document.forms.formProfile;

// ФОРМА НОВОЕ МЕСТО
const formAddProfile = document.forms.formAddCard;

// ПОЛЯ ФОРМЫ РЕДАКТИРОВАНИЯ    editInputName: cardElementName ; editJobInput: cardElementJob
const cardElementName = formEditProfile.elements.inputName;
const cardElementJob = formEditProfile.elements.inputJob;

export {
  profileAddButton,
  profileEditButton,
  formEditProfile,
  cardElementName,
  cardElementJob,
  formAddProfile,
};
