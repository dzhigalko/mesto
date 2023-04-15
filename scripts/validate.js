const validationConfig = {  //объект с набором ключей
    formSelector: '.popup__form', //формы
    inputSelector: '.popup__input',  //инпуты
    submitButtonSelector: '.popup__button',  //кнопки сохранить
    inactiveButtonClass: 'popup__button_disabled',  //неактивная кнопка сохранить
    inputErrorClass: 'popup__input_error', //красное подчеркивание инпута
    errorClass: 'popup__error_visible' //span
};

//проверяется валидность инпута
function checkInputValidity(form, input, {errorClass, inputErrorClass}) {
    const currentInputErrorContainer = form.querySelector(`#${input.name}-error`);
    const isInputValid = input.checkValidity();

    if (isInputValid) {
        currentInputErrorContainer.textContent = "";
        input.classList.remove(inputErrorClass);
        currentInputErrorContainer.classList.remove(errorClass);
    } else {
        currentInputErrorContainer.textContent = input.validationMessage;
        input.classList.add(inputErrorClass);
        currentInputErrorContainer.classList.add(errorClass);
    }
}

//возвращает валидны ли все поля в форме
function hasInvalidInput(formInputs) {
    return formInputs.some(item => !item.validity.valid)
}

//проверяется валидность всех инпутов в форме
function checkFormValidity(form, {inactiveButtonClass, inputSelector, submitButtonSelector}) {
    const formInputs = Array.from(form.querySelectorAll(inputSelector));
    const formButton = form.querySelector(submitButtonSelector);
    const formHasInvalidInputs = hasInvalidInput(formInputs);

    if (formHasInvalidInputs) {
        formButton.classList.add(inactiveButtonClass);
        formButton.setAttribute("disabled", "");
    } else {
        formButton.classList.remove(inactiveButtonClass);
        formButton.removeAttribute("disabled");
    }
}

//устанавливает обработчики для валидации всех инпутов в форме
function setEventListeners(form, validationConfig) {
    const { inputSelector } = validationConfig;
    const formInputs = Array.from(form.querySelectorAll(inputSelector));

    formInputs.forEach(function(input) {
        input.addEventListener("input", () => {
            checkInputValidity(form, input, validationConfig);
            checkFormValidity(form, validationConfig);
       }); 
    });
}

//добавляет валидацию на все формы
function enableValidation(validationConfig) {
    const { formSelector } = validationConfig;
    const forms = Array.from(document.querySelectorAll(formSelector));

    forms.forEach(function(form) {
        setEventListeners(form, validationConfig);
    })
}

//сбрасывает валиацию для формы попапа
function resetPopupForm(popup) {
    const form = popup.querySelector(validationConfig.formSelector);
    const formInputs = Array.from(form.querySelectorAll(validationConfig.inputSelector));

    formInputs.forEach(function(input) {
        checkInputValidity(form, input, validationConfig);
    });

    checkFormValidity(form, validationConfig);
}

enableValidation(validationConfig);
    