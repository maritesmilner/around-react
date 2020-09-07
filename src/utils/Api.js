import {
  meEntity,
  avatarEntity,
  cardsEntity,
  cardLikesEntity,
} from "./constants.js";

class Api {
  constructor(baseUrl, options) {
    this._baseUrl = baseUrl;
    this._options = options;
  }

  _getDataPromise(entity) {
    return fetch(`${this._baseUrl}/${entity}`, this._options).then((res) => {
      return res.ok ? res.json() : Promise.reject(`Error: ${res.statusText}`);
    });
  }

  getUserInfo() {
    this._options.method = "GET";
    return this._getDataPromise(meEntity);
  }

  getCards() {
    this._options.method = "GET";
    return this._getDataPromise(cardsEntity);
  }

  updateUserInfo(user) {
    this._options.method = "PATCH";
    this._options.body = JSON.stringify(user);
    return this._getDataPromise(meEntity);
  }

  updateUserAvatar(imageLink) {
    this._options.method = "PATCH";
    this._options.body = JSON.stringify({ avatar: imageLink });
    return this._getDataPromise(avatarEntity);
  }

  addCard(name, link) {
    this._options.method = "POST";
    this._options.body = JSON.stringify({
      name: name,
      link: link,
    });
    return this._getDataPromise(cardsEntity);
  }

  removeCard(cardId) {
    this._options.method = "DELETE";
    return this._getDataPromise(`${cardsEntity}/${cardId}`);
  }

  changeLikeCardStatus(cardId, isLiked) {
    return isLiked ? this._addCardLike(cardId) : this._removeCardLike(cardId);
  }

  _addCardLike(cardId) {
    this._options.method = "PUT";
    return this._getDataPromise(`${cardLikesEntity}/${cardId}`);
  }

  _removeCardLike(cardId) {
    this._options.method = "DELETE";
    return this._getDataPromise(`${cardLikesEntity}/${cardId}`);
  }
}

const api = new Api("https://around.nomoreparties.co/v1/group-3", {
  headers: {
    authorization: "aae17431-b773-4b38-a586-5c35cb6461b9",
    "Content-Type": "application/json",
  },
});

export default api;
