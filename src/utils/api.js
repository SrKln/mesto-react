class Api {
    constructor({ baseUrl, headers }) {
        this._baseUrl = baseUrl;
        this._headers = headers;
    }

    _getJson(res) {
        if (res.ok) {
            return res.json();
        }
        return Promise.reject(`Ошибка: ${res.status}`);
    }

    getInitialCards() {
        return fetch(`${this._baseUrl}/cards`, {
            headers: this._headers,
        }).then(this._getJson);
    }

    getUserInfo() {
        return fetch(`${this._baseUrl}/users/me`, {
            headers: this._headers,
        }).then(this._getJson);
    }

    setUserInfo(name, about) {
        return fetch(`${this._baseUrl}/users/me`, {
            method: "PATCH",
            headers: this._headers,
            body: JSON.stringify({ name: name, about: about }),
        }).then(this._getJson);
    }

    addCard(name, link) {
        return fetch(`${this._baseUrl}/cards`, {
            method: "POST",
            headers: this._headers,
            body: JSON.stringify({ name: name, link: link }),
        }).then(this._getJson);
    }

    setAvatar({ avatar }) {
        return fetch(`${this._baseUrl}/users/me/avatar`, {
            headers: this._headers,
            method: "PATCH",
            body: JSON.stringify({ avatar }),
        }).then(this._getJson);
    }

    changeLikeCardStatus(cardId, isLiked) {
        let method = isLiked ? 'PUT' : 'DELETE';

        return fetch(`${this._baseUrl}/cards/${cardId}/likes`, {
            method: method,
            headers: this._headers
        })
            .then(this._getJson);
    }

    deleteCard(id) {
        return fetch(`${this._baseUrl}/cards/${id}`, {
            method: "DELETE",
            headers: this._headers,
        }).then(this._getJson);
    }
}


export const api = new Api({
    baseUrl: "https://mesto.nomoreparties.co/v1/cohort-61",
    headers: {
        authorization: "24747cee-051c-47bf-ba30-2cb89fe40c27",
        "Content-Type": "application/json",
    }
});

