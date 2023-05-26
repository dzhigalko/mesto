export default class Popup {
    constructor(popupSelector) {
        this._element = document.querySelector(popupSelector);
        this._closeButton = this._element.querySelector(".popup__close-button")
    }

    _handleEscClose = (event) => {
        if (event.key === 'Escape') {
            this.close();
        }
    }

    setEventListeners() {
        this._closeButton.addEventListener("click", () => {
            this.close();
        });

        this._element.addEventListener("mousedown", (event) => {
            if (event.target === this._element) {
                this.close();
            }
        });
    }

    open() {
        document.addEventListener('keydown', this._handleEscClose);
        this._element.classList.add("popup_opened");
    }

    close() {
        this._element.classList.remove("popup_opened");
        document.removeEventListener('keydown', this._handleEscClose);
    }
}