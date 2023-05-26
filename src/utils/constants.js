export const initialCards = [
    {
      place: 'Архыз',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
    },
    {
      place: 'Челябинская область',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
    },
    {
      place: 'Иваново',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
    },
    {
      place: 'Камчатка',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
    },
    {
      place: 'Холмогорский район',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
    },
    {
      place: 'Байкал',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
    }
  ];

export const nameSelector = ".profile__name";
export const aboutSelector = ".profile__about";
export const fullImagePopupSelector = ".popup_type_image-full";
export const profilePopupSelector = ".popup_type_profile";
export const addPhotoPopupSelector = ".popup_type_add-photo";
export const photoAreaSelector = ".photos";
export const photoTemplateSelector = "#photo__template";
export const buttonOpenAddCardPopup = document.querySelector(".profile__button-add");
export const buttonOpenEditProfilePopup = document.querySelector(".profile__button-edit");
export const validationConfig = {  //объект с набором ключей
  formSelector: '.popup__form', //формы
  inputSelector: '.popup__input',  //инпуты
  submitButtonSelector: '.popup__button',  //кнопки сохранить
  inactiveButtonClass: 'popup__button_disabled',  //неактивная кнопка сохранить
  inputErrorClass: 'popup__input_error', //красное подчеркивание инпута
  errorClass: 'popup__error_visible' //span
};