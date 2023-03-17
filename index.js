let editButton = document.querySelector(".profile__button-edit");
let profileTitle = document.querySelector(".profile__title");
let profileSubtitle = document.querySelector(".profile__subtitle");
let popup = document.querySelector(".popup");
let popupCloseButton = document.querySelector(".popup__close-button");
let popupForm = document.querySelector(".popup__form");
let popupNameInput = document.querySelector(".popup__form_name");
let popupAboutInput = document.querySelector(".popup__form_about");

function onEditButtonClick() {
    popup.classList.add("popup_opened");
    popupNameInput.value = profileTitle.textContent;
    popupAboutInput.value = profileSubtitle.textContent;
}

function onPopupCloseButtonClick() {
    popup.classList.remove("popup_opened");
}

function onPopupFormSubmit(event) {
    profileTitle.textContent = popupNameInput.value;
    profileSubtitle.textContent = popupAboutInput.value;
    onPopupCloseButtonClick();
    event.preventDefault();
}

editButton.addEventListener("click", onEditButtonClick);
popupCloseButton.addEventListener("click", onPopupCloseButtonClick);
popupForm.addEventListener("submit", onPopupFormSubmit);