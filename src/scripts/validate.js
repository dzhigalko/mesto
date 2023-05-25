import FormValidator from "./FormValidator.js";

const formValidators = {};

export const validationConfig = {  //объект с набором ключей
    formSelector: '.popup__form', //формы
    inputSelector: '.popup__input',  //инпуты
    submitButtonSelector: '.popup__button',  //кнопки сохранить
    inactiveButtonClass: 'popup__button_disabled',  //неактивная кнопка сохранить
    inputErrorClass: 'popup__input_error', //красное подчеркивание инпута
    errorClass: 'popup__error_visible' //span
};

//добавляет валидацию на все формы
export function enableValidation(validationConfig) {
    const { formSelector, ...config } = validationConfig;
    const forms = Array.from(document.querySelectorAll(formSelector));

    forms.forEach(function(form) {
        const validator = new FormValidator(form, config);
        validator.enableValidation();

        formValidators[form.name] = validator;
    })
}

//сбрасывает валиацию для формы попапа
export function resetPopupFormValidation(popup) {
    const form = popup.querySelector("form");
    const validator = formValidators[form.name];
    validator.resetValidation();
}
    