import Card from "./Card.js"
import { resetPopupFormValidation, enableValidation, validationConfig } from "./validate.js";
import { initialCards } from "./constants.js";

const profileName = document.querySelector(".profile__name");
const profileAbout = document.querySelector(".profile__about");

const popupFigure = document.querySelector(".popup_type_image-full");
const popupProfile = document.querySelector(".popup_type_profile");
const popupAddPhoto = document.querySelector(".popup_type_add-photo");

const popupImage = document.querySelector(".popup__image");
const popupImageName = document.querySelector(".popup__image-name");

const profileForm = document.forms.profile; // форма профиля
const inputName = profileForm.elements.name; //инпут "ФИО"
const inputAbout = profileForm.elements.about; //инпут "о себе"
const photoForm = document.forms.photo; //форма добавления фото
const inputPlace = photoForm.elements["place-title"]; //инпут названия места
const inputLink = photoForm.elements.link; //инпут ссылки на фото

const photoArea = document.querySelector(".photos");
const photoTemplateSelector = "#photo__template";

const buttonOpenAddCardPopup = document.querySelector(".profile__button-add");
const buttonOpenEditProfilePopup = document.querySelector(".profile__button-edit");
const buttonCloseAddCardPopup = document.querySelector(".popup__close-button_type_add-photo");
const buttonCloseEditProfilePopup = document.querySelector(".popup__close-button_type_profile");
const buttonCloseFigurePopup = document.querySelector(".popup__close-button_type_image-full");
const submitButton = document.querySelector(".popup__button"); //кнопка сохранить формы профиля


function createFigurePopupHandler(link, place) {
    popupImage.src = link;
    popupImage.alt = place;  //alt прописывает
    popupImageName.textContent = place;
    openPopup(popupFigure); //открывает попап фул фото
}

//Блок фото
function createPhoto(place, link) {
    const card = new Card(link, place, photoTemplateSelector, createFigurePopupHandler);
    const photo = card.createElement();

    return photo;
}

initialCards.forEach(function(type) {
    appendPhoto(type.name, type.link);
});

//Добавление фото в конец
function appendPhoto(place, link) {
    photoArea.append(createPhoto(place, link));
}

//Добавление фото в начало
function prependPhoto(place, link) {
    photoArea.prepend(createPhoto(place, link));
}

//Добавление нового фото
function addNewPhoto (event) {
    prependPhoto(inputPlace.value, inputLink.value);
    photoForm.reset();
    closePopup(popupAddPhoto);
    event.preventDefault();
}

//Открывание попапов общая
function openPopup (popup) {
    document.addEventListener('keydown', closeByEscape);
    popup.classList.add("popup_opened");
}

// Открывание попапа Редактирования профиля c сохранение данных в полях ввода
function onButtonOpenEditProfilePopupClick() {
    inputName.value = profileName.textContent;
    inputAbout.value = profileAbout.textContent;
    resetPopupFormValidation(popupProfile);
    openPopup(popupProfile);
}

// Открывание попапа Добавления фото
function onButtonOpenAddCardPopup() {
    photoForm.reset();
    resetPopupFormValidation(popupAddPhoto);

    openPopup(popupAddPhoto);
}

// Закрывание попапов общая
function closePopup(popup) {
    popup.classList.remove("popup_opened");
    document.removeEventListener('keydown', closeByEscape);
}

//закрывает попап добавления фото 
function onButtonCloseAddCardPopupClick() {
    closePopup(popupAddPhoto);
}

//закрывает попап редактирования профиля
function onButtonCloseEditProfilePopupClick() {
    closePopup(popupProfile);
}

//Закрывает попап фулл фото
function onButtonCloseFigurePopupClick() {
    closePopup(popupFigure);
}

//Сохранение пользовательских данных только на странице по кнопке сохранить
function onProfileFormSubmit(event) {
    profileName.textContent = inputName.value;
    profileAbout.textContent = inputAbout.value;
    closePopup(popupProfile); 
    event.preventDefault();
}


//закрытие по клику на оверлэй//
function closePopupByClickOutside(popup) {
    popup.addEventListener("mousedown", function(event) {
        if (event.target === popup) {
            closePopup(popup);
        }
    });
}

//закрытие попапа по Esc
function closeByEscape(event) {
    if (event.key === 'Escape') {
        const popup = document.querySelector(".popup_opened");
        closePopup(popup);
    }
}

closePopupByClickOutside(popupAddPhoto);
closePopupByClickOutside(popupProfile);
closePopupByClickOutside(popupFigure);


profileForm.addEventListener("submit", onProfileFormSubmit);
photoForm.addEventListener("submit", addNewPhoto);

buttonOpenAddCardPopup.addEventListener("click", onButtonOpenAddCardPopup); //Открывает попап добавления фото
buttonOpenEditProfilePopup.addEventListener("click", onButtonOpenEditProfilePopupClick); // Открывание попапа Редактирования профиля

buttonCloseAddCardPopup.addEventListener("click", onButtonCloseAddCardPopupClick); //Закрывает попап добавления фото
buttonCloseEditProfilePopup.addEventListener("click", onButtonCloseEditProfilePopupClick);
buttonCloseFigurePopup.addEventListener("click", onButtonCloseFigurePopupClick);
enableValidation(validationConfig);