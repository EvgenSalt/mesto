class Api {
  constructor({ baseUrl, headers }) {
    this._baseUrl = baseUrl;
    this._headers = headers;
  }

  getInitialCards() {
    return fetch(`${this._baseUrl}/cards`, {
      headers: this._headers
    })
      .then(res => res.ok ? res.json() : Promise.reject(res.status))
      .catch(console.log)
  }

  getUserProfile() {
    return fetch(`${this._baseUrl}/users/me`, {
      headers: this._headers
    })
      .then(res => res.ok ? res.json() : Promise.reject(res.status))
      .catch(console.log)
  }

  editProfile(data) {
    return fetch(`${this._baseUrl}/users/me`, {
      method: "PATCH",
      headers: this._headers,
      body: JSON.stringify({
        name: data.username,
        about: data.userwork
      })
    })
      .then(res => res.ok ? res.json() : Promise.reject(res.status))
      .catch(console.log)
  }

  addNewCard(data) {
    return fetch(`${this._baseUrl}/cards`, {
      method: "POST",
      headers: this._headers,
      body: JSON.stringify({
        name: data.name_img,
        link: data.link_img
      })
    })
      .then(res => res.ok ? res.json() : Promise.reject(res.status))
      .catch(console.log)
  }

  deleteCard(card_id) {
    return fetch(`${this.baseUrl}/cards/${card_id}`, {
      method: "DELETE",
      headers: this.headers,
    })
      .then(res => res.ok ? res.json() : Promise.reject(res.status))
      .catch(console.log)
  }
}



export const api = new Api({
  baseUrl: 'https://mesto.nomoreparties.co/v1/cohort-54',
  headers: {
    authorization: 'ebbf4de8-113f-4170-86f1-c0542b4c5864',
    'Content-Type': 'application/json'
  }
});