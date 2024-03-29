export default class Card {
  _name;
  _link;
  _likes;
  _template;
  _element;
  _nameCard;
  _imgCard;
  _btnlike;
  _btnTrash;
  _showFullImg;
  _likesImg;

  constructor(data, userId, template, showFullImg, confirm,
    toggleLikes) {
    this._name = data.name;
    this._link = data.link;
    this._likes = data.likes;
    this._id = data.id;
    this._userId = userId;
    this._userOwner = data.owner;
    this._template = template;
    this._showFullImg = showFullImg;
    this._confirm = confirm;
    this._toggleLikes = toggleLikes;
  }

  _getElementTemplateCard = () => {
    const getElementTemplateCard = document.querySelector(this._template).content.querySelector('.elements__item').cloneNode(true);
    return getElementTemplateCard;
  }

  getElementCard = () => {
    this._element = this._getElementTemplateCard();
    this._nameCard = this._element.querySelector('.elements__text');
    this._imgCard = this._element.querySelector('.elements__img');
    this._btnlike = this._element.querySelector('.elements__like');
    this._btnTrash = this._element.querySelector('.elements__trash');
    this._likesImg = this._element.querySelector('.elements__like_count');

    this._imgCard.src = this._link;
    this._imgCard.alt = this._name;
    this._nameCard.textContent = this._name;

    this.setLikes(this._likes);

    this._setEventListeners();

    if (this._userOwner !== this._userId) {
      this._btnTrash.style.display = 'none';
    }
    return this._element;
  }

  isLiked() {
    const toogleUserLikes = this._likes.find(user => user._id === this._userId);
    return toogleUserLikes;
  }

  setLikes(like) {
    this._likes = like;
    this._likesImg.textContent = this._likes.length;

    if (this.isLiked()) {
      this._btnlike.classList.add('elements__like_active');
    }
    else {
      this._btnlike.classList.remove('elements__like_active');
    }
  }

  deletCard() {
    this._element.remove();
    this._element = null;
  }

  _setEventListeners() {
    this._btnlike.addEventListener('click', () => { // toggle like
      this._toggleLikes(this._id);
    });

    this._btnTrash.addEventListener('click', (e) => { // delete card
      this._confirm(this._id);
    });
    this._imgCard.addEventListener("click", () => this._showFullImg());
  }
}