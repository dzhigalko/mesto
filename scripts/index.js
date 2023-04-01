const profileName = document.querySelector(".profile__name");
const profileAbout = document.querySelector(".profile__about");

const popup = document.querySelector(".popup");

const popupFigure = document.querySelector(".popup_type_image-full");
const popupProfile = document.querySelector(".popup_type_profile");
const popupAddPhoto = document.querySelector(".popup_type_add-photo");

const popupNameInput = document.querySelector(".popup__text_type_name");
const popupAboutInput = document.querySelector(".popup__text_type_about");
const popupImage = document.querySelector(".popup__image");
const popupImageName = document.querySelector(".popup__image-name");

const popupProfileForm = document.querySelector(".popup__profile-form");
const popupAddPhotoForm = document.querySelector(".popup__add-photo-form");

const photoArea = document.querySelector(".photos");
const photoTemplate = document.querySelector("#photo__template");

const popupPlace = document.querySelector(".popup__text_type_place");
const popupLink = document.querySelector(".popup__text_type_link");

const buttonOpenAddCardPopup = document.querySelector(".profile__button-add");
const buttonOpenEditProfilePopup = document.querySelector(".profile__button-edit");
const buttonCloseAddCardPopup = document.querySelector(".popup__close-button_type_add-photo");
const buttonCloseEditProfilePopup = document.querySelector(".popup__close-button_type_profile");
const buttonCloseFigurePopup = document.querySelector(".popup__close-button_type_image-full");

//Блок фото
function createPhoto(place, link) {
    const photo = photoTemplate.content.cloneNode(true);
    const photoImage = photo.querySelector(".photo__item");
    const photoPlace = photo.querySelector(".photo__description");
    const likeButton = photo.querySelector(".photo__like");
    const trashButton = photo.querySelector(".photo__trash");

    photoImage.src = link;
    photoPlace.textContent = place;
    photoImage.alt = place;

    // Лайк
    likeButton.addEventListener("click", function() {
        likeButton.classList.toggle("photo__like_active");
    });

    // Удаление фото
    trashButton.addEventListener("click", function(event) {
        const photo = event.target.closest(".photo");
        photo.remove();
    });

    photoImage.addEventListener("click", function(event) {
        popupImage.src = link;
        popupImageName.textContent = place;
        popupImage.alt = place;  //alt прописывает
        openPopup(popupFigure); //открывает попап фул фото
    });

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
    prependPhoto(popupPlace.value, popupLink.value);
    popupPlace.value = "";
    popupLink.value = "";
    closePopup(popupAddPhoto);
    event.preventDefault();
}

//Открывание попапов общая
function openPopup (popup) {
    popup.classList.add("popup_opened");
}

// Открывание попапа Редактирования профиля c сохранение данных в полях ввода
function onButtonOpenEditProfilePopupClick() {
    popupNameInput.value = profileName.textContent;
    popupAboutInput.value = profileAbout.textContent;
    openPopup(popupProfile);
}

// Открывание попапа Добавления фото
function onButtonOpenAddCardPopup() {
    openPopup(popupAddPhoto);
}

// Закрывание попапов общая
function closePopup(popup) {
    popup.classList.remove("popup_opened");
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
function onPopupProfileFormSubmit(event) {
    profileName.textContent = popupNameInput.value;
    profileAbout.textContent = popupAboutInput.value;
    closePopup(popupProfile);
    event.preventDefault();
}

popupProfileForm.addEventListener("submit", onPopupProfileFormSubmit);
popupAddPhotoForm.addEventListener("submit", addNewPhoto);

buttonOpenAddCardPopup.addEventListener("click", onButtonOpenAddCardPopup); //Открывает попап добавления фото
buttonOpenEditProfilePopup.addEventListener("click", onButtonOpenEditProfilePopupClick); // Открывание попапа Редактирования профиля

buttonCloseAddCardPopup.addEventListener("click", onButtonCloseAddCardPopupClick); //Закрывает попап добавления фото
buttonCloseEditProfilePopup.addEventListener("click", onButtonCloseEditProfilePopupClick);
buttonCloseFigurePopup.addEventListener("click", onButtonCloseFigurePopupClick);