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
let popupCloseButton = document.querySelector(".popup__close-button");
let popupForm = document.querySelector(".popup__form");
let popupNameInput = document.querySelector(".popup__text_type_name");
let popupAboutInput = document.querySelector(".popup__text_type_about");

// Константы для разных типов попапов
const popupProfile = document.querySelector(".popup__profile");
const popupAddPhoto = document.querySelector(".popup__add-photo");

//Константы для фото
const photoArea = document.querySelector("#photos__list");
const photoTemplate = document.querySelector(".photo__template");
const likeButtonActive = document.querySelectorAll(".photo__like_active");

//Добавление фото
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
}

initialCards.forEach(function(type) {
    addPhoto(type.name, type.link);
});

// Кнопка Добавить
const addButton = document.querySelector(".profile__button-add");

// Открывание попапа Добавления фото
function onAddButtonClick() {
    popupAddPhoto.classList.add("popup_opened");
}

// Открывание попапа Редактирования профиля
function onEditButtonClick() {
    popupNameInput.value = profileName.textContent;
    popupAboutInput.value = profileAbout.textContent;
    popupProfile.classList.add("popup_opened");
}

// Закрывание попапа по нажатию на крестик
function onPopupCloseButtonClick() {
    popup.classList.remove("popup_opened");
}

// Отображает введеные пользователем данные
function onPopupFormSubmit(event) {
    profileName.textContent = popupNameInput.value;
    profileAbout.textContent = popupAboutInput.value;
    onPopupCloseButtonClick();
    event.preventDefault();
}

editButton.addEventListener("click", onEditButtonClick);
popupCloseButton.addEventListener("click", onPopupCloseButtonClick);
popupForm.addEventListener("submit", onPopupFormSubmit);
addButton.addEventListener("click", onAddButtonClick); // Слушатель кнопки Добавить
