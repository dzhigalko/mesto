import Popup from "./Popup.js";

export default class PopupWithConfirmation extends Popup {
    constructor(popupSelector) {
        super(popupSelector);

        this._onConfirm = null;
        this._confirmationButton = this._element.querySelector(".popup__button");
    }

    setEventListeners() {
        super.setEventListeners();

        this._confirmationButton.addEventListener("click", () => {
            if (this._onConfirm) {
                this._onConfirm();
            }

            this.close();
        });
    }

    open(onConfirm) {
        super.open()
        this._onConfirm = onConfirm;
    }
}