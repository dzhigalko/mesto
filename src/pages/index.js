import "../pages/index.css";
import Card from "../components/Card.js"
import Section from "../components/Section.js";
import PopupWithImage from "../components/PopupWithImage.js";
import PopupWithForm from "../components/PopupWithForm.js";
import UserInfo from "../components/UserInfo.js";
import { 
    enableValidation,
    resetPopupFormValidation
} from "../utils/validate.js";
import { 
    initialCards,
    nameSelector,
    aboutSelector,
    fullImagePopupSelector,
    profilePopupSelector,
    addPhotoPopupSelector,
    photoAreaSelector,
    photoTemplateSelector,
    buttonOpenAddCardPopup,
    buttonOpenEditProfilePopup,
    validationConfig
 } from "../utils/constants.js";

const fullImagePopup = new PopupWithImage(fullImagePopupSelector);
const userInfo = new UserInfo(nameSelector, aboutSelector);

const profilePopup = new PopupWithForm(profilePopupSelector, (values) => {
    const { name, about } = values;
    
    userInfo.setUserInfo(name, about);
}, resetPopupFormValidation);
const addPhotoPopup = new PopupWithForm(addPhotoPopupSelector, (values) => {
    const { place, link } = values;

    cardsSection.addItem(cardRenderer({ place: place, link: link }), true)
}, resetPopupFormValidation);

const cardRenderer = item => {
    const { place, link } = item;

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
    
    profilePopup.setInputValues({name, about});
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