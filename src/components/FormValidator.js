export default class FormValidator {
  _validatorForm;
  _formSelector;
  _inputSelector;
  _submitButtonSelector;
  _inactiveButtonClass;
  _inputErrorClass;
  _errorClass;
  _inputList;
  _buttom;

  constructor(data, validatorForm) {
    this._validatorForm = document.querySelector(validatorForm);
    this._formSelector = data.formSelector;
    this._inputSelector = data.inputSelector;
    this._submitButtonSelector = data.submitButtonSelector;
    this._inactiveButtonClass = data.inactiveButtonClass;
    this._inputErrorClass = data.inputErrorClass;
    this._errorClass = data.errorClass;
    this._inputList = Array.from(this._validatorForm.querySelectorAll(this._inputSelector));
    this._buttom = this._validatorForm.querySelector(this._submitButtonSelector);
  }

  enableValidation = () => {
    // this._validatorForm.addEventListener("submit", (event) => {
    //   event.preventDefault();
    // });
    this._setEventListeners();
  }

  _setEventListeners = () => {
    this._inputList.forEach((inputElement) => {
      inputElement.addEventListener('input', () => {
        this._checkInputValidity(inputElement);
        this._toggleButton();
      });
    });
  }

  _checkInputValidity = (inputElement) => {
    if (!inputElement.validity.valid) {
      this._showInputError(inputElement, inputElement.validationMessage);
    } else {
      this._hideInputError(inputElement);
    }
  };

  _showInputError = (inputElement, errorMessage) => {
    const errorElement = this._validatorForm.querySelector(`#${inputElement.id}-error`);
    errorElement.classList.add(this._inputErrorClass);
    errorElement.textContent = errorMessage;
    inputElement.classList.add(this._errorClass);
  };

  _hideInputError = (inputElement) => {
    const errorElement = this._validatorForm.querySelector(`#${inputElement.id}-error`);
    errorElement.classList.remove(this._inputErrorClass);
    errorElement.textContent = '';
    inputElement.classList.remove(this._errorClass);
  };

  _toggleButton = () => {
    this._buttom.disabled = !this._validatorForm.checkValidity();
    this._buttom.classList.toggle(this._inactiveButtonClass, !this._validatorForm.checkValidity());
  }

  resetValidation = () => {
    this._validatorForm.reset();
    this._toggleButton();
    this._inputList.forEach((inputElement) => {
      this._hideInputError(inputElement);
    });
  }
}