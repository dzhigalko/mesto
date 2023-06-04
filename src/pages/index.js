import "../pages/index.css";
import Card from "../components/Card.js"
import Section from "../components/Section.js";
import PopupWithImage from "../components/PopupWithImage.js";
import PopupWithForm from "../components/PopupWithForm.js";
import UserInfo from "../components/UserInfo.js";
import Api from "../components/Api";
import PopupWithConfirmation from "../components/PopupWithConfirmation";
import { 
    enableValidation,
    resetPopupFormValidation
} from "../utils/validate.js";
import {
    nameSelector,
    aboutSelector,
    fullImagePopupSelector,
    profilePopupSelector,
    addPhotoPopupSelector,
    photoAreaSelector,
    photoTemplateSelector,
    buttonOpenAddCardPopup,
    buttonOpenEditProfilePopup,
    validationConfig,
    avatarSelector,
    deletePhotoConfirmationPopupSelector,
    editAvatarPopupSelector,
    editAvatarButton
 } from "../utils/constants.js";

const api = new Api({
    baseUrl: "https://mesto.nomoreparties.co/v1/cohort-66",
    token: "31abe394-3f89-489d-9ccd-e96da397bf7c",
    errorHandler: (args) => console.log(args)}
)

const fullImagePopup = new PopupWithImage(fullImagePopupSelector);
const userInfo = new UserInfo(nameSelector, aboutSelector, avatarSelector);

const profilePopup = new PopupWithForm(profilePopupSelector, (onResponse, values) => {
    const { name, about } = values;
    
    api.changeUserProfile(name, about).then(() => {
        userInfo.setUserInfo(name, about);
    }).finally(onResponse);
}, resetPopupFormValidation);

const addPhotoPopup = new PopupWithForm(addPhotoPopupSelector, (onResponse, values) => {
    const { name, link } = values;

    api.addCard(name, link).then((card) => {
        cardsSection.addItem(cardRenderer({isMyCard: true, ...card}), true);
    }).finally(onResponse);
}, resetPopupFormValidation);

const deletePhotoConfirmationPopup = new PopupWithConfirmation(deletePhotoConfirmationPopupSelector, () => {
    console.log("delete");
});

const editAvatarPopup = new PopupWithForm(editAvatarPopupSelector, (onResponse, values) => {
    const { avatar } = values;

    api.changeAvatar(avatar).then(() => {
        userInfo.setUserAvatar(avatar);
    }).finally(onResponse);
}, resetPopupFormValidation)

const cardRenderer = item => {
    const makeLikeCardRequest = (onResponse, card) => {
        if (card.isLikedByMe()) {
            api.deleteCardLike(card.getId()).then(onResponse)
        } else {
            api.addCardLike(card.getId()).then(onResponse);
        }
    }

    const makeRemoveCardRequest = (onResponse, card) => {
        deletePhotoConfirmationPopup.open(() => {
            api.deleteCard(card.getId()).then(onResponse)
        })
    }

    const card = new Card(
        item,
        photoTemplateSelector, 
        (link, name) => {
            fullImagePopup.open(name, link);
        },
        makeRemoveCardRequest,
        makeLikeCardRequest
    );

    const photo = card.createElement();

    return photo;
}

const cardsSection = new Section(cardRenderer, photoAreaSelector);

Promise.all([api.getUserProfile(), api.getInitialCards()]).then(([ profile, cards ]) => {
    userInfo.setUserInfo(profile.name, profile.about);
    userInfo.setUserAvatar(profile.avatar);

    cards.forEach(c => {
        c.isLikedByMe = c.likes.some(l => l._id == profile._id),
        c.isMyCard = c.owner._id == profile._id
    });

    cardsSection.renderItems(cards);
})

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

function handleEditAvatarButtonClick() {
    editAvatarPopup.open();
}

[fullImagePopup, profilePopup, addPhotoPopup, deletePhotoConfirmationPopup, editAvatarPopup].forEach((popup) => {
    popup.setEventListeners();
});

buttonOpenAddCardPopup.addEventListener("click", handleButtonOpenAddCardPopup); //Открывает попап добавления фото
buttonOpenEditProfilePopup.addEventListener("click", handleButtonOpenEditProfilePopupClick); // Открывание попапа Редактирования профиля
editAvatarButton.addEventListener("click", handleEditAvatarButtonClick);

enableValidation(validationConfig);