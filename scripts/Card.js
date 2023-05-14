export default class Card {
    constructor(link, place, templateSelector, createFigurePopupHandler) {
        this._link = link;
        this._place = place;
        this._templateSelector = templateSelector;
        this._createFigurePopupHandler = createFigurePopupHandler;
    }

    createElement() {
        const photoTemplate = document.querySelector(this._templateSelector);
        const photo = photoTemplate.content.cloneNode(true);
        const photoImage = photo.querySelector(".photo__item");
        const photoPlace = photo.querySelector(".photo__description");
    
        photoImage.src = this._link;
        photoImage.alt = this._place;
        photoPlace.textContent = this._place;

        this._addEventListeners(photo);
    
        return photo;
    }

    _addEventListeners(photo) {
        const likeButton = photo.querySelector(".photo__like");
        const trashButton = photo.querySelector(".photo__trash");
        const photoImage = photo.querySelector(".photo__item");

        // Лайк
        likeButton.addEventListener("click", this._getLikeButtonClickListener(likeButton));
        // Удаление фото
        trashButton.addEventListener("click", this._getTrashButtonEventListener());
        // Поп ап картинки
        photoImage.addEventListener("click", this._getPhotoImageEventListener());
    }

    _getLikeButtonClickListener(likeButton) {
        return function() {
            likeButton.classList.toggle("photo__like_active");
        }
    }

    _getTrashButtonEventListener() {
        return function(event) {
            const photo = event.target.closest(".photo");
            photo.remove();
        }
    }

    _getPhotoImageEventListener() {
        const card = this;

        return function() {
            card._createFigurePopupHandler(card._link, card._place);
        }
    }
}
