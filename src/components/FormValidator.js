export default class FormValidator {
    constructor(form, validationConfig) {
        this._form = form;
        this._inputSelector = validationConfig.inputSelector,  //инпуты
        this._submitButtonSelector = validationConfig.submitButtonSelector,  //кнопки сохранить
        this._inactiveButtonClass = validationConfig.inactiveButtonClass,  //неактивная кнопка сохранить
        this._inputErrorClass = validationConfig.inputErrorClass, //красное подчеркивание инпута
        this._errorClass = validationConfig.errorClass //span
        this.formInputs = Array.from(this._form.querySelectorAll(this._inputSelector));
        this.formButton = this._form.querySelector(this._submitButtonSelector);
    }

    _setInputValid(input) {
        const currentInputErrorContainer = this._form.querySelector(`[name="${input.name}-error"]`);

        input.classList.remove(this._inputErrorClass);
        currentInputErrorContainer.textContent = "";
        currentInputErrorContainer.classList.remove(this._errorClass);
    }

    //проверяется валидность инпута
    _checkInputValidity(input) {
        const isInputValid = input.checkValidity();
        const currentInputErrorContainer = this._form.querySelector(`[name="${input.name}-error"]`);
    
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
        const formHasInvalidInputs = this.formInputs.some(item => !item.validity.valid)
    
        if (formHasInvalidInputs) {
            this.formButton.classList.add(this._inactiveButtonClass);
            this.formButton.setAttribute("disabled", "");
        } else {
            this.formButton.classList.remove(this._inactiveButtonClass);
            this.formButton.removeAttribute("disabled");
        }
    }

    _getInputEventListener(input) {
        return () => {
            this._checkInputValidity(input);
            this._checkFormValidity();
        }
    }

    //устанавливает обработчики для валидации всех инпутов в форме
    _addEventListeners() {
        this.formInputs.forEach((input) => {
            input.addEventListener("input", this._getInputEventListener(input)); 
        });
    }

    enableValidation() {
        this._addEventListeners();
    }

    resetValidation() {
        this.formInputs.forEach((input) => {
            this._setInputValid(input);
        });
    
        this._checkFormValidity();
    }
}