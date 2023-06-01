export default class Card {
    constructor(data, templateSelector, handleImageClick, handleRemoveCard, handleLikeCard) {
        this._data = data;
        this._templateSelector = templateSelector;
        this._handleImageClick = handleImageClick;
        this._handleRemoveCard = handleRemoveCard;
        this._handleLikeCard = handleLikeCard;

        const photoTemplate = document.querySelector(this._templateSelector);
        this._cardElement = photoTemplate.content.cloneNode(true);
        this._photoImage = this._cardElement.querySelector(".photo__item");
        this._photoPlace = this._cardElement.querySelector(".photo__description");
        this._likeButton = this._cardElement.querySelector(".photo__like");
        this._trashButton = this._cardElement.querySelector(".photo__trash");
        this._likesCounter = this._cardElement.querySelector(".photo__like-counter");
    }

    createElement() {
        this._photoImage.src = this._data.link;
        this._photoImage.alt = this._data.name;
        this._photoPlace.textContent = this._data.name;

        if (!this._data.isMyCard) {
            this._trashButton.remove();
        }

        if (this._data.isLikedByMe) {
            this._likeButton.classList.add("photo__like_active")
        }

        if (this._data.likes.length > 0) {
            this._likesCounter.textContent = this._data.likes.length;
        }

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

    _handleLikeButtonClick = () => {
        this._handleLikeCard(this._data).then((data) => {
            this._data.isLikedByMe = !this._data.isLikedByMe;

            if (data.likes.length > 0) {
                this._likesCounter.textContent = data.likes.length;
            } else {
                this._likesCounter.textContent = "";
            }
            
            this._likeButton.classList.toggle("photo__like_active")
        });
    }

    _handleTrashButtonClick = (event) => {
        this._handleRemoveCard(this._data).then(() => {
            const photo = event.target.closest(".photo");
            photo.remove();
        }).catch(() => {});
    }

    _getImageClickHandler() {
        return () => {
            this._handleImageClick(this._data.link, this._data.name);
        }
    }
}
