import Popup from "../components/Popup.js";

export class PicturePopup extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
    this._imagePopup = this._popup.querySelector(".popup__card-image");
    this._imagePopupTitle = this._popup.querySelector(".popup__card-title");
  }

  open(name, link) {
    this._imagePopupTitle.textContent = name;
    this._imagePopup.src = link;
    this._imagePopup.alt = "Изображение" + name;

    super.open();
  }
}
