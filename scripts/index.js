const initialCards = [
    {
      name: 'Архыз',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
    },
    {
      name: 'Челябинская область',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
    },
    {
      name: 'Иваново',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
    },
    {
      name: 'Камчатка',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
    },
    {
      name: 'Холмогорский район',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
    },
    {
      name: 'Байкал',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
    }
  ];

let editButton = document.querySelector(".profile__button-edit");
let profileName = document.querySelector(".profile__name");
let profileAbout = document.querySelector(".profile__about");
let popup = document.querySelector(".popup");
let popupCloseButtons = document.querySelectorAll(".popup__close-button");
let popupProfileForm = document.querySelector(".popup__profile__form");
let popupAddPhotoForm = document.querySelector(".popup__add-photo__form");
let popupNameInput = document.querySelector(".popup__text_type_name");
let popupAboutInput = document.querySelector(".popup__text_type_about");

// Константы для разных типов попапов
const popupProfile = document.querySelector(".popup__profile");
const popupAddPhoto = document.querySelector(".popup__add-photo");
const popupImage = document.querySelector(".popup__image");
const popupImageName = document.querySelector(".popup__image-name");
const popupFigure = document.querySelector(".popup__image-full");

//Константы для фото
const photoArea = document.querySelector("#photos__list");
const photoTemplate = document.querySelector(".photo__template");

//Константы для добавления фото
const popupPlace = document.querySelector(".popup__text_type_place");
const popupLink = document.querySelector(".popup__text_type_link");

//Блок фото
function addPhoto(place, link) {
    const photo = photoTemplate.content.cloneNode(true);
    const photoImage = photo.querySelector(".photo__item");
    const photoPlace = photo.querySelector(".photo__description");
    const likeButton = photo.querySelector(".photo__like");
    const trashButton = photo.querySelector(".photo__trash");

    photoImage.src = link;
    photoPlace.textContent = place;

    photoArea.append(photo);

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
        popupFigure.classList.add("popup_opened");
    });
}

initialCards.forEach(function(type) {
    addPhoto(type.name, type.link);
});

//Добавление нового фото В процессе
function addNewPhoto (event) {
    photoTemplate.prepend (addPhoto(popupPlace.value, popupLink.value));
    popupPlace.value = "";
    popupLink.value = "";
    event.preventDefault();
}

// Кнопка Добавить
const addButton = document.querySelector(".profile__button-add");

// Открывание попапа Добавления фото
function onAddButtonClick() {
    popupAddPhoto.classList.add("popup_opened");
}

//Закрывание попапа добавления по крестику В процессе
function onPopupCloseButtonClick(event) {
    const popup = event.target.closest(".popup");
    popup.classList.remove("popup_opened");
}


// Открывание попапа Редактирования профиля
function onEditButtonClick() {
    popupNameInput.value = profileName.textContent;
    popupAboutInput.value = profileAbout.textContent;
    popupProfile.classList.add("popup_opened");
}

//Сохранение пользовательских данных только на странице
function onPopupProfileFormSubmit(event) {
    profileName.textContent = popupNameInput.value;
    profileAbout.textContent = popupAboutInput.value;
    onPopupCloseButtonClick(event);
    event.preventDefault();
}

editButton.addEventListener("click", onEditButtonClick);
popupCloseButtons.forEach(function(button) {
    button.addEventListener("click", onPopupCloseButtonClick);
});
popupProfileForm.addEventListener("submit", onPopupProfileFormSubmit);
addButton.addEventListener("click", onAddButtonClick); // Слушатель кнопки Добавить
popupAddPhotoForm.addEventListener("submit", addNewPhoto);
