let editButton = document.querySelector(".profile__button-edit");
let profileName = document.querySelector(".profile__name");
let profileAbout = document.querySelector(".profile__about");
let popup = document.querySelector(".popup");
let popupCloseButton = document.querySelector(".popup__close-button");
let popupForm = document.querySelector(".popup__form");
let popupNameInput = document.querySelector(".popup__form_name");
let popupAboutInput = document.querySelector(".popup__form_about");

function onEditButtonClick() {
    popup.classList.add("popup_opened");
    popupNameInput.value = profileName.textContent;
    popupAboutInput.value = profileAbout.textContent;
}

function onPopupCloseButtonClick() {
    popup.classList.remove("popup_opened");
}

function onPopupFormSubmit(event) {
    profileName.textContent = popupNameInput.value;
    profileAbout.textContent = popupAboutInput.value;
    onPopupCloseButtonClick();
    event.preventDefault();
}

editButton.addEventListener("click", onEditButtonClick);
popupCloseButton.addEventListener("click", onPopupCloseButtonClick);
popupForm.addEventListener("submit", onPopupFormSubmit);