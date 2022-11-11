export default class FormValidator {

  _validatorElement;
  _formSelector;
  _inputSelector;
  _submitButtonSelector;
  _inactiveButtonClass;
  _inputErrorClass;
  _errorClass;
  _inputList;
  _test;

  constructor(data, validatorForm) {
    this._validatorElement;
    this._formSelector = validatorForm;
    this._inputSelector = data.inputSelector;
    this._submitButtonSelector = data.submitButtonSelector;
    this._inactiveButtonClass = data.inactiveButtonClass;
    this._inputErrorClass = data.inputErrorClass;
    this._errorClass = data.errorClass;
    this._inputList = Array.from(document.querySelectorAll(this._formSelector));
  }

  enableValidation = () => {
    const forms = this._inputList;
    this._inputList.forEach((formElement) => {
      this._validatorElement = formElement;
      this._validatorElement.addEventListener('submit', (event) => {
        event.preventDefault();
      });
      this._setEventListeners();
    });
  }

  _setEventListeners = () => {
    const inputs = Array.from(this._validatorElement.querySelectorAll(this._inputSelector));
    this._toggleButton();
    inputs.forEach((inputElement) => {
      inputElement.addEventListener('input', () => {
        this._checkInputValidity(inputElement);
        this._toggleButton();
      });
    });
  }
  _toggleButton = () => {
    const buttom = this._validatorElement.querySelector(this._submitButtonSelector);
    buttom.disabled = !this._validatorElement.checkValidity();
    buttom.classList.toggle(this._inactiveButtonClass, !this._validatorElement.checkValidity());
  }

  _checkInputValidity(inputElement) {
    if (!inputElement.validity.valid) {
      this._showInputError(inputElement, inputElement.validationMessage);
    } else {
      this._hideInputError(inputElement);
    }
  };

  _showInputError = (inputElement, errorMessage) => {
    const errorElement = this._validatorElement.querySelector(`#${inputElement.id}-error`);
    errorElement.classList.add(this._inputErrorClass);
    errorElement.textContent = errorMessage;
    inputElement.classList.add(this._errorClass);
  };

  _hideInputError = (inputElement) => {
    const errorElement = this._validatorElement.querySelector(`#${inputElement.id}-error`);
    errorElement.classList.remove(this._inputErrorClass);
    errorElement.textContent = '';
    inputElement.classList.remove(this._errorClass);
  };

  clearMsgError = () => {
    this._inputList.forEach((inputElement) => {
      const inputs = Array.from(this._validatorElement.querySelectorAll(this._inputSelector));
      inputs.forEach((inputElement) => {
        this._hideInputError(inputElement);
      });
    });
  }
}