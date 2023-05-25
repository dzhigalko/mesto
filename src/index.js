import "./styles/pages/index.css";
import Card from "./scripts/Card.js"
import Section from "./scripts/Section.js";
import PopupWithImage from "./scripts/PopupWithImage.js";
import PopupWithForm from "./scripts/PopupWithForm.js";
import UserInfo from "./scripts/UserInfo.js";
import { enableValidation, validationConfig } from "./scripts/validate.js";
import { initialCards } from "./scripts/constants.js";

const nameSelector = ".profile__name";
const aboutSelector = ".profile__about";

const fullImagePopupSelector = ".popup_type_image-full";
const profilePopupSelector = ".popup_type_profile";
const addPhotoPopupSelector = ".popup_type_add-photo";

const profileForm = document.forms.profile; // форма профиля
const inputName = profileForm.elements.name; //инпут "ФИО"
const inputAbout = profileForm.elements.about; //инпут "о себе"

const photoAreaSelector = ".photos";
const photoTemplateSelector = "#photo__template";

const buttonOpenAddCardPopup = document.querySelector(".profile__button-add");
const buttonOpenEditProfilePopup = document.querySelector(".profile__button-edit");

const fullImagePopup = new PopupWithImage(fullImagePopupSelector);
const userInfo = new UserInfo(nameSelector, aboutSelector);

const profilePopup = new PopupWithForm(profilePopupSelector, (values) => {
    const { name, about } = values;
    
    userInfo.setUserInfo(name, about);
});
const addPhotoPopup = new PopupWithForm(addPhotoPopupSelector, (values) => {
    const { place, link } = values;

    cardsSection.addItem(cardRenderer({ place: place, link: link }), true)
});

const cardRenderer = item => {
    const { name: place, link } = item;

    const card = new Card(link, place, photoTemplateSelector, (link, place) => {
        fullImagePopup.open(place, link);
    });
    const photo = card.createElement();

    return photo;
}

const cardsSection = new Section({ items: initialCards, renderer: cardRenderer }, photoAreaSelector);
cardsSection.render();


// Открывание попапа Редактирования профиля c сохранение данных в полях ввода
function handleButtonOpenEditProfilePopupClick() {
    const { name, about } = userInfo.getUserInfo();
    
    inputName.value = name;
    inputAbout.value = about;
    profilePopup.open();
}

// Открывание попапа Добавления фото
function handleButtonOpenAddCardPopup() {
    addPhotoPopup.open();
}

[fullImagePopup, profilePopup, addPhotoPopup].forEach((popup) => {
    popup.setEventListeners();
});

buttonOpenAddCardPopup.addEventListener("click", handleButtonOpenAddCardPopup); //Открывает попап добавления фото
buttonOpenEditProfilePopup.addEventListener("click", handleButtonOpenEditProfilePopupClick); // Открывание попапа Редактирования профиля

enableValidation(validationConfig);