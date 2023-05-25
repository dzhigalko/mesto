import Popup from "./Popup.js";

export default class PopupWithImage extends Popup {
    constructor(popupSelector) {
        super(popupSelector);
        this._image = this._element.querySelector(".popup__image");
        this._imagePlace = this._element.querySelector(".popup__image-name");
    }

    open(place, link) {
        this._image.src = link;
        this._image.alt = place;
        this._imagePlace.textContent = place;
        super.open();
    }
}