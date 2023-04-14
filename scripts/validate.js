const validationConfig = {  //объект с набором ключей
    formSelector: '.popup__form', //формы
    inputSelector: '.popup__input',  //инпуты
    submitButtonSelector: '.popup__button',  //кнопки сохранить
    inactiveButtonClass: 'popup__button_disabled',  //неактивная кнопка сохранить
    inputErrorClass: 'popup__input_error', //красное подчеркивание инпута
    errorClass: 'popup__error_visible' //span
  };

  formSelector.addEventListener("submit", function(event) {
    event.preventDefault()
  })