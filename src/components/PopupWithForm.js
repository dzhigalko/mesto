import Popup from "./Popup.js";

export default class PopupWithForm extends Popup {
    constructor(popupSelector, submitHandler, resetFormValidation) {
        super(popupSelector);

        this._submitHandler = submitHandler;
        this._form = this._element.querySelector("form");
        this._formInputs = {};
        this._resetFormValidation = resetFormValidation;

        this._form.querySelectorAll("input").forEach(input => {
            this._formInputs[input.name] = input;
        });
    }

    _getInputValues() {
        const values = {};
        
        Object.keys(this._formInputs).forEach((inputName) => {
            values[inputName] = this._formInputs[inputName].value;
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
        this._resetFormValidation(this._element);
    }

    setInputValues(values) {
        Object.keys(values).forEach((key) => {
            if (this._formInputs[key]) {
                this._formInputs[key].value = values[key];
            }
        });
    }
}