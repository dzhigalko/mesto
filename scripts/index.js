const profileName = document.querySelector(".profile__name");
const profileAbout = document.querySelector(".profile__about");

const popupList = document.querySelector(".popup");
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
const photoTemplate = document.querySelector("#photo__template");

const buttonOpenAddCardPopup = document.querySelector(".profile__button-add");
const buttonOpenEditProfilePopup = document.querySelector(".profile__button-edit");
const buttonCloseAddCardPopup = document.querySelector(".popup__close-button_type_add-photo");
const buttonCloseEditProfilePopup = document.querySelector(".popup__close-button_type_profile");
const buttonCloseFigurePopup = document.querySelector(".popup__close-button_type_image-full");
const submitButton = document.querySelector(".popup__button"); //кнопка сохранить формы профиля


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
        closePopupByEscape(popupFigure);
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
    prependPhoto(inputPlace.value, inputLink.value);
    photoForm.reset();
    closePopup(popupAddPhoto);
    event.preventDefault();
}

//Открывание попапов общая
function openPopup (popup) {
    popup.classList.add("popup_opened");
}

// Открывание попапа Редактирования профиля c сохранение данных в полях ввода
function onButtonOpenEditProfilePopupClick() {
    inputName.value = profileName.textContent;
    inputAbout.value = profileAbout.textContent;
    resetPopupFormValidation(popupProfile);
    closePopupByEscape(popupProfile);
    openPopup(popupProfile);
}

// Открывание попапа Добавления фото
function onButtonOpenAddCardPopup() {
    photoForm.reset();
    resetPopupFormValidation(popupAddPhoto);
    closePopupByEscape(popupAddPhoto);
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
function onProfileFormSubmit(event) {
    profileName.textContent = inputName.value;
    profileAbout.textContent = inputAbout.value;
    closePopup(popupProfile); 
    event.preventDefault();
}

//отвечавет за состояние кнопки Сохранить//
function setSubmitButtonState(isFormValid) {
    if (isFormValid) {
        submitButton.removeAttribute('disabled');
        submitButton.classList.remove("popup__button_disabled");
    } else {
        submitButton.setAttribute('disabled', true);
        submitButton.classList.add("popup__button_disabled");
    }
}


//закрытие по клику на оверлэй//
function closePopupByClickOutside(popup) {
    popup.addEventListener("mousedown", function(event) {
        if (event.target === popup) {
            closePopup(popup);
        }
    });
}

closePopupByClickOutside(popupAddPhoto);
closePopupByClickOutside(popupProfile);
closePopupByClickOutside(popupFigure);

//закрытие попапа по Esc
function closePopupByEscape(popup) {
    document.addEventListener('keydown', function(event) {
        if (event.key === 'Escape') {
            closePopup(popup);
        }
    })
}

profileForm.addEventListener("submit", onProfileFormSubmit);
photoForm.addEventListener("submit", addNewPhoto);

buttonOpenAddCardPopup.addEventListener("click", onButtonOpenAddCardPopup); //Открывает попап добавления фото
buttonOpenEditProfilePopup.addEventListener("click", onButtonOpenEditProfilePopupClick); // Открывание попапа Редактирования профиля

buttonCloseAddCardPopup.addEventListener("click", onButtonCloseAddCardPopupClick); //Закрывает попап добавления фото
buttonCloseEditProfilePopup.addEventListener("click", onButtonCloseEditProfilePopupClick);
buttonCloseFigurePopup.addEventListener("click", onButtonCloseFigurePopupClick);