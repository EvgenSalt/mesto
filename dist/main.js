(()=>{"use strict";class e{_name;_link;_template;_element;_nameCard;_imgCard;_btnlike;_btnTrash;_showFullImg;constructor(e,t,s){this._name=e.name,this._link=e.link,this._template=t,this._showFullImg=s}_getElementTemplateCard=()=>document.querySelector(this._template).content.cloneNode(!0);getElementCard=()=>(this._element=this._getElementTemplateCard(),this._nameCard=this._element.querySelector(".elements__text"),this._imgCard=this._element.querySelector(".elements__img"),this._btnlike=this._element.querySelector(".elements__like"),this._btnTrash=this._element.querySelector(".elements__trash"),this._imgCard.src=this._link,this._imgCard.alt=this._name,this._nameCard.textContent=this._name,this._setEventListeners(),this._element);_setEventListeners(){this._btnlike.addEventListener("click",(()=>{this._btnlike.classList.toggle("elements__like_active")})),this._btnTrash.addEventListener("click",(e=>{e.target.closest(".elements__item").remove()})),this._imgCard.addEventListener("click",(()=>this._showFullImg()))}}const t={formSelector:".form",inputSelector:".form__input",submitButtonSelector:".form__btn",inactiveButtonClass:"form__btn_disabled",inputErrorClass:"form__msg_show",errorClass:"form__input_type_error"};class s{_validatorForm;_formSelector;_inputSelector;_submitButtonSelector;_inactiveButtonClass;_inputErrorClass;_errorClass;_inputList;_buttom;constructor(e,t){this._validatorForm=document.querySelector(t),this._formSelector=e.formSelector,this._inputSelector=e.inputSelector,this._submitButtonSelector=e.submitButtonSelector,this._inactiveButtonClass=e.inactiveButtonClass,this._inputErrorClass=e.inputErrorClass,this._errorClass=e.errorClass,this._inputList=Array.from(this._validatorForm.querySelectorAll(this._inputSelector)),this._buttom=this._validatorForm.querySelector(this._submitButtonSelector)}enableValidation=()=>{this._validatorForm.addEventListener("submit",(e=>{e.preventDefault()})),this._setEventListeners()};_setEventListeners=()=>{this._inputList.forEach((e=>{e.addEventListener("input",(()=>{this._checkInputValidity(e),this._toggleButton()}))}))};_checkInputValidity=e=>{e.validity.valid?this._hideInputError(e):this._showInputError(e,e.validationMessage)};_showInputError=(e,t)=>{const s=this._validatorForm.querySelector(`#${e.id}-error`);s.classList.add(this._inputErrorClass),s.textContent=t,e.classList.add(this._errorClass)};_hideInputError=e=>{const t=this._validatorForm.querySelector(`#${e.id}-error`);t.classList.remove(this._inputErrorClass),t.textContent="",e.classList.remove(this._errorClass)};_toggleButton=()=>{this._buttom.disabled=!this._validatorForm.checkValidity(),this._buttom.classList.toggle(this._inactiveButtonClass,!this._validatorForm.checkValidity())};resetValidation=()=>{this._validatorForm.reset(),this._toggleButton(),this._inputList.forEach((e=>{this._hideInputError(e)}))}}class r{_selector;constructor(e){this._selector=e}open(){this._selector.classList.add("popup_show"),document.addEventListener("keydown",(e=>{this._handleEscClose(e)}))}close(){this._selector.classList.remove("popup_show"),document.removeEventListener("keydown",(e=>{this._handleEscClose(e)}))}_handleEscClose(e){"Escape"===e.key&&this.close()}setEventListeners(){this._selector.addEventListener("click",(e=>{e.target===e.currentTarget&&this.close()}))}}class n extends r{_submit;_popupForm;_inputList;_listValues;constructor(e,t){super(e),this._submit=t,this._popupForm=this._selector.querySelector(".form"),this._inputList=Array.from(this._popupForm.querySelectorAll(".form__input")),this._listValues={}}_getInputValues(){return this._inputList.forEach((e=>{this._listValues[e.name]=e.value})),this._listValues}setEventListeners(){super.setEventListeners(),this._selector.addEventListener("submit",(e=>{e.preventDefault(),this._submit(this._getInputValues())}))}close(){super.close(),this._popupForm.reset()}}const o=document.querySelector(".profile__edit"),i=document.querySelector(".popup_edit"),l=document.querySelector(".popup_add"),a=document.querySelector(".popup_show-img"),_=i.querySelector(".popup__close_edit-form"),c=l.querySelector(".popup__close_add-img"),u=a.querySelector(".popup__close_show-img"),p=i.querySelector(".form__input_text_name"),m=i.querySelector(".form__input_text_work"),d=document.querySelector(".profile__name"),h=document.querySelector(".profile__description"),v=document.querySelector(".profile__add"),f=document.querySelector(".elements__items"),g=new class{_renderer;_containerSelector;constructor({renderer:e},t){this._renderer=e,this._containerSelector=t}addItem(e){this._containerSelector.prepend(e)}renderStartCards(e){e.forEach((e=>{this._renderer(e)}))}}({renderer:e=>{g.addItem(C(e))}},f),k=new class{_profileName;_profileWork;constructor(e,t){this._profileName=e,this._profileWork=t}getUserInfo(){return{name:this._profileName.textContent,work:this._profileWork.textContent}}setUserInfo(e){this._profileName.textContent=e.username,this._profileWork.textContent=e.userwork}}(d,h),y=new class extends r{_popapImg;_popapNameImg;constructor(e){super(e),this._popapImg=e.querySelector(".popup__img"),this._popapNameImg=e.querySelector(".popup__text")}open(e){this._popapImg.src=e.link,this._popapImg.alt=e.name,this._popapNameImg.textContent=e.name,super.open()}}(a),E=new n(i,(function(e){k.setUserInfo(e),E.close()})),S=new n(l,(function(e){const t=C({name:e.name_img,link:e.link_img});g.addItem(t),S.close()}));function C(t){return new e(t,".template__card",(function(){y.open(t)})).getElementCard()}function L(e,t){return new s(e,t)}const b=L(t,".form_edit");b.enableValidation();const q=L(t,".form_add");q.enableValidation(),o.addEventListener("click",(function(){b.resetValidation(),function(){const e=k.getUserInfo();p.value=e.name,m.value=e.work}(),E.open()})),v.addEventListener("click",(function(){q.resetValidation(),S.open()})),_.addEventListener("click",(function(){E.close()})),c.addEventListener("click",(function(){S.close()})),u.addEventListener("click",(function(){y.close()})),E.setEventListeners(),S.setEventListeners(),y.setEventListeners(),g.renderStartCards([{name:"Архыз",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg"},{name:"Челябинская область",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg"},{name:"Иваново",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg"},{name:"Камчатка",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg"},{name:"Холмогорский район",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg"},{name:"Байкал",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg"}].map((e=>({name:e.name,link:e.link}))))})();