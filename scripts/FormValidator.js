export default class FormValidator {
    constructor(form, validationConfig) {
        this._form = form;
        this._inputSelector = validationConfig.inputSelector,  //инпуты
        this._submitButtonSelector = validationConfig.submitButtonSelector,  //кнопки сохранить
        this._inactiveButtonClass = validationConfig.inactiveButtonClass,  //неактивная кнопка сохранить
        this._inputErrorClass = validationConfig.inputErrorClass, //красное подчеркивание инпута
        this._errorClass = validationConfig.errorClass //span
    }

    _setInputValid(input) {
        const currentInputErrorContainer = this._form.querySelector(`#${input.name}-error`);

        input.classList.remove(this._inputErrorClass);
        currentInputErrorContainer.textContent = "";
        currentInputErrorContainer.classList.remove(this._errorClass);
    }

    //проверяется валидность инпута
    _checkInputValidity(input) {
        const isInputValid = input.checkValidity();
        const currentInputErrorContainer = this._form.querySelector(`#${input.name}-error`);
    
        if (isInputValid) {
            this._setInputValid(input);
        } else {
            input.classList.add(this._inputErrorClass);
            currentInputErrorContainer.textContent = input.validationMessage;
            currentInputErrorContainer.classList.add(this._errorClass);
        }
    }

    //возвращает валидны ли все поля в форме
    _hasInvalidInput(formInputs) {
        return formInputs.some(item => !item.validity.valid)
    }
    
    //проверяется валидность всех инпутов в форме
    _checkFormValidity() {
        const formInputs = Array.from(this._form.querySelectorAll(this._inputSelector));
        const formButton = this._form.querySelector(this._submitButtonSelector);
        const formHasInvalidInputs = this._hasInvalidInput(formInputs);
    
        if (formHasInvalidInputs) {
            formButton.classList.add(this._inactiveButtonClass);
            formButton.setAttribute("disabled", "");
        } else {
            formButton.classList.remove(this._inactiveButtonClass);
            formButton.removeAttribute("disabled");
        }
    }

    _getInputEventListener(input) {
        const form = this;

        return function() {
            form._checkInputValidity(input);
            form._checkFormValidity();
        }
    }

    //устанавливает обработчики для валидации всех инпутов в форме
    _addEventListeners() {
        const formInputs = Array.from(this._form.querySelectorAll(this._inputSelector));
    
        formInputs.forEach((input) => {
            input.addEventListener("input", this._getInputEventListener(input)); 
        });
    }

    enableValidation() {
        this._addEventListeners();
    }

    resetValidation() {
        const formInputs = Array.from(this._form.querySelectorAll(this._inputSelector));

        formInputs.forEach((input) => {
            this._setInputValid(input);
        });
    
        this._checkFormValidity();
    }
}