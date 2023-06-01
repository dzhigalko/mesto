import FormValidator from "../components/FormValidator.js";

const formValidators = {};

//добавляет валидацию на все формы
export function enableValidation(validationConfig) {
    const { formSelector, ...config } = validationConfig;
    const forms = Array.from(document.querySelectorAll(formSelector));

    forms.forEach(function(form) {
        const validator = new FormValidator(form, config);
        validator.enableValidation();

        const formName = form.getAttribute("name");
        formValidators[formName] = validator;
    })
}

//сбрасывает валиацию для формы попапа
export function resetPopupFormValidation(popup) {
    const form = popup.querySelector("form");
    const formName = form.getAttribute("name");

    const validator = formValidators[formName];
    validator.resetValidation();
}
    