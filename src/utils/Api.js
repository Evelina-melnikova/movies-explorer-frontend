import { apiOptions } from './constants.js';

class Api {
  constructor({ url, headers }) {
    this._url = url;
    this._headers = headers;
  }

  _getReq(url, options) {
    return fetch(url, options)
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          return response.json().then((errorData) => {
            const errMessage = errorData.message || 'Request failed';
            const errWithStatus = new Error(errMessage);
            errWithStatus.status = response.status;
            throw errWithStatus;
          });
        }
      })
  }

  getUserInfo() {
    return this._getReq(`${this._url}/users/me`, {
      method: 'GET',
      headers: this._headers
    })
  }

  setUserInfo(data) {
    return this._getReq(`${this._url}/users/me`, {
      method: 'PATCH',
      headers: this._headers,
      body: JSON.stringify({
        name: data.name,
        about: data.about
      }),
    }
    )
  }

  changeAvatar({avatar}) {
    return this._getReq(`${this._url}/users/me/avatar`, {
      method: 'PATCH',
      headers: this._headers,
      body: JSON.stringify({
        avatar: avatar,
      }),
    }
    )
  }

  getInitialCards() {
    return this._getReq(`${this._url}/cards`, {
      method: 'GET',
      headers: this._headers
    })
  }

  createCard(data) {
    return this._getRequest(`${this._url}/cards`, {
      method: 'POST',
      headers: this._headers,
      body: JSON.stringify(data)
    })
  }

  deleteCard(id) {
    return this._getReq(`${this._url}/cards/${id}`, {
      method: 'DELETE',
      headers: this._headers
    })
  }

  setlike(id, isLiked) {
    return isLiked
      ? this._getReq(`${this._url}/cards/${id}/likes`, {
        method: 'PUT',
        headers: this._headers,
      })
      : this._getReq(`${this._url}/cards/${id}/likes`, {
        method: 'DELETE',
        headers: this._headers,
      });
  }
}

const api = new Api(apiOptions);
export default api;