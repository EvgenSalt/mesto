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

  constructor(data, userId, template, showFullImg, confirm) {
    this._name = data.name;
    this._link = data.link;
    this._likes = data.likes;
    this._id = data._id;
    this._userId = userId;
    this._userOwner = data.owner;
    this._template = template;
    this._showFullImg = showFullImg;
    this._confirm = confirm;
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
    this._likesImg.textContent = this._likes.length;
    this._setEventListeners();

    // console.log('_userId', this._userId);
    // console.log('_userOwner', this._userOwner);
    if (this._userOwner !== this._userId) {
      this._btnTrash.style.display = 'none';
    }
    return this._element;
  }

  _setEventListeners() {
    this._btnlike.addEventListener('click', () => { // toggle like
      this._btnlike.classList.toggle('elements__like_active');
    });

    this._btnTrash.addEventListener('click', (e) => { // delete card
      this._confirm(this);
      // e.target.closest('.elements__item').remove();
    });
    this._imgCard.addEventListener("click", () => this._showFullImg());
  }
}