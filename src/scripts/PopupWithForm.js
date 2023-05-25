import Popup from "./Popup.js";
import { resetPopupFormValidation } from "./validate.js";

export default class PopupWithForm extends Popup {
    constructor(popupSelector, submitHandler) {
        super(popupSelector);

        this._submitHandler = submitHandler;
        this._form = this._element.querySelector("form");
    }

    _getInputValues() {
        const values = {};
        
        this._form.querySelectorAll("input").forEach((input) => {
            values[input.name] = input.value;
        });

        return values;
    }

    setEventListeners() {
        super.setEventListeners();
        
        this._form.addEventListener("submit", (event) => {
            event.preventDefault();

            this._submitHandler(this._getInputValues());
            this.close();
        });
    }

    close() {
        super.close();

        this._form.reset();
        resetPopupFormValidation(this._element);
    }
}