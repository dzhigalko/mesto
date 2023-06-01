export default class Api {
    constructor(options) {
        const { baseUrl, token, errorHandler } = options;

        this._baseUrl = baseUrl
        this._token = token
        this._errorHandler = errorHandler
    }

    _makeRequest(url, options) {
        options = options || {}
        const { method = "GET", body } = options;
        let jsonBody = null;

        if (body) {
            jsonBody = JSON.stringify(body)
        }

        return fetch(`${this._baseUrl}/${url}`, {
            method: method,
            body: jsonBody,
            headers: {
                authorization: this._token,
                'Content-Type': 'application/json'
            }
        })
        .catch(this._errorHandler)
        .then((res) => {
            if (!res.ok) {
                return Promise.reject({"response": res})
            } 

            return res.json()
        });
    }

    getInitialCards() {
        return this._makeRequest("/cards")
    }

    getUserProfile() {
        return this._makeRequest("/users/me")
    }

    changeUserProfile(name, about) {
        return this._makeRequest("/users/me", {
            method: "PATCH", 
            body: {
                name: name,
                about: about
            }
        })
    }

    addCard(name, link) {
        return this._makeRequest("/cards", {
            method: "POST",
            body: {
                name: name,
                link: link
            }
        })
    }

    deleteCard(id) {
        return this._makeRequest(`/cards/${id}`, { method: "DELETE" });
    }

    addCardLike(id) {
        return this._makeRequest(`/cards/${id}/likes`, { method: "PUT" });
    }

    deleteCardLike(id) {
        return this._makeRequest(`/cards/${id}/likes`, { method: "DELETE" });
    }

    changeAvatar(avatar) {
        return this._makeRequest("/users/me/avatar", {
            method: "PATCH", 
            body: {
                avatar: avatar
            }
        })
    }
}