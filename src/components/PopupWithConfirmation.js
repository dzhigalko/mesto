import Popup from "./Popup.js";

export default class PopupWithConfirmation extends Popup {
    constructor(popupSelector) {
        super(popupSelector);

        this._resolve = null;
        this._reject = null;
        this._confirmationButton = this._element.querySelector(".popup__button");
    }

    setEventListeners() {
        super.setEventListeners();

        this._confirmationButton.addEventListener("click", () => {
            if (this._resolve) {
                this._resolve();
            }

            this.close();
        });
    }

    open() {
        super.open()

        const promise = new Promise((resolve, reject) => {
            this._resolve = resolve;
            this._reject = reject;
        });

        return promise;
    }

    close() {
        super.close();

        if (this._reject) {
            this._reject();
        }
    }
}