export default class Card {
  _name;
  _link;
  _template;
  _element;

  constructor(data, template) {
    this._name = data.name;
    this._link = data.link;
    this._template = template;
  }

  _getElementTemplateCard = () => {
    const getElementTemplateCard = document.querySelector(this._template).content.cloneNode(true);
    return getElementTemplateCard;
  }

  getElementCard = () => {
    this._element = this._getElementTemplateCard();
    const nameCard = this._element.querySelector('.elements__text');
    const imgCard = this._element.querySelector('.elements__img');
    const btnlike = this._element.querySelector('.elements__like');
    const btnTrash = this._element.querySelector('.elements__trash');
    const popapImg = document.querySelector('.popup__img');
    const popapNameImg = document.querySelector('.popup__text');
    const imgShow = document.querySelector('.popup_show-img');

    imgCard.src = this._link;
    imgCard.alt = this._name;
    nameCard.textContent = this._name;

    btnlike.addEventListener('click', () => { // toggle like
      btnlike.classList.toggle('elements__like_active');
    });

    btnTrash.addEventListener('click', (e) => { // delete card
      e.target.closest('.elements__item').remove();
    });

    imgCard.addEventListener('click', () => {
      popapImg.src = imgCard.src;
      popapImg.alt = imgCard.alt;
      popapNameImg.textContent = nameCard.textContent;
      imgShow.classList.add('popup_show');
      document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
          imgShow.classList.remove('popup_show');
          document.removeEventListener('keydown', (e));
        }
      });
    });

    return this._element;
  }
}

export const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
];