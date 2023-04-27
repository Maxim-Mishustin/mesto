import Popup from "../components/Popup.js";

export class PicturePopup extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
    this._imagePopup = this._popup.querySelector(".popup__card-image");
    this._imagePopupTitle = this._popup.querySelector(".popup__card-title");
  }

  open = (item) => {
    this._imagePopupTitle.textContent = item.name;
    this._imagePopup.alt = item.name;
    this._imagePopup.src = item.link;

    super.open();
  };
}
