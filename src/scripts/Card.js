export default class Card {
    constructor(link, place, templateSelector, handleImageClick) {
        this._link = link;
        this._place = place;
        this._templateSelector = templateSelector;
        this._handleImageClick = handleImageClick;

        const photoTemplate = document.querySelector(this._templateSelector);
        this._cardElement = photoTemplate.content.cloneNode(true);
        this._photoImage = this._cardElement.querySelector(".photo__item");
        this._photoPlace = this._cardElement.querySelector(".photo__description");
        this._likeButton = this._cardElement.querySelector(".photo__like");
        this._trashButton = this._cardElement.querySelector(".photo__trash");
    }

    createElement() {
        this._photoImage.src = this._link;
        this._photoImage.alt = this._place;
        this._photoPlace.textContent = this._place;

        this._addEventListeners();
    
        return this._cardElement;
    }

    _addEventListeners() {
        // Лайк
        this._likeButton.addEventListener("click", this._handleLikeButtonClick);
        // Удаление фото
        this._trashButton.addEventListener("click", this._handleTrashButtonClick);
        // Поп ап картинки
        this._photoImage.addEventListener("click", this._getImageClickHandler());
    }

    _handleLikeButtonClick() {
        this.classList.toggle("photo__like_active");
    }

    _handleTrashButtonClick(event) {
        const photo = event.target.closest(".photo");
        photo.remove();
    }

    _getImageClickHandler() {
        return () => {
            this._handleImageClick(this._link, this._place);
        }
    }
}
