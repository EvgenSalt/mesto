export default class FormValidator {

  _validatorForm;
  _formSelector;
  _inputSelector;
  _submitButtonSelector;
  _inactiveButtonClass;
  _inputErrorClass;
  _errorClass;
  _inputList;
  _test;

  constructor(data) {
    //this._validatorForm = document.querySelector(validatorForm);
    this._formSelector = data.formSelector;
    this._inputSelector = data.inputSelector;
    this._submitButtonSelector = data.submitButtonSelector;
    this._inactiveButtonClass = data.inactiveButtonClass;
    this._inputErrorClass = data.inputErrorClass;
    this._errorClass = data.errorClass;
    this._inputList = Array.from(document.querySelectorAll(this._formSelector));
    //this._test = Array.from(this._validatorForm.querySelectorAll(this._inputSelector));
  }
  // TESTenableValidation = () => {
  //   this._test.forEach((formElement) => {
  //     formElement.addEventListener('submit', (event) => {
  //       event.preventDefault(this._inputSelector);
  //     });
  //     this._TESTsetEventListeners(formElement);
  //   });
  // }
  // _TESTsetEventListeners = (formElement) => {
  //   const inputs = Array.from(formElement.querySelectorAll(this._inputSelector));
  //   console.log(inputs);
  //   inputs.forEach((inputElement) => {
  //     inputElement.addEventListener('input', () => {
  //       console.log(inputElement);
  //       this._TESTcheckInputValidity(formElement, inputElement);
  //     });
  //   });
  // }
  // _TESTcheckInputValidity = (formElement, inputElement) => {
  //   if (!inputElement.validity.valid) {
  //     this._TESTshowInputError(formElement, inputElement, inputElement.validationMessage);
  //   } else {
  //     this._TESThideInputError(formElement, inputElement);
  //   }
  // };
  // _TESTshowInputError = (formElement, inputElement, errorMessage) => {
  //   const errorElement = formElement.querySelector(`#${inputElement.id}-error`);

  //   errorElement.classList.add(this._inputErrorClass);
  //   errorElement.textContent = errorMessage;
  //   inputElement.classList.add(this._errorClass);
  // };

  // _TESThideInputError = (formElement, inputElement) => {
  //   const errorElement = formElement.querySelector(`#${inputElement.id}-error`);

  //   errorElement.classList.remove(this._errorClass);
  //   errorElement.textContent = '';
  //   inputElement.classList.remove(this._inputErrorClass);

  // };
  ////////////////////////////////////////////////////////////////////////
  enableValidation = () => {
    const forms = Array.from(document.querySelectorAll(this._formSelector));
    console.log(this._validatorForm);
    console.log(this._formSelector);
    console.log(this._inputSelector);
    console.log(this._submitButtonSelector);
    console.log(this._inactiveButtonClass);
    console.log(this._inputErrorClass);
    console.log(this._errorClass);
    console.log(this._inputList);
    this.forms.forEach((formElement) => {
      formElement.addEventListener('submit', (event) => {
        event.preventDefault(this._inputSelector);
      });
      this._setEventListeners(formElement);
    });
  }

  _setEventListeners = (formElement) => {
    const inputs = Array.from(formElement.querySelectorAll(this._inputSelector));

    this._toggleButton(formElement);
    inputs.forEach((inputElement) => {
      inputElement.addEventListener('input', () => {
        this._checkInputValidity(formElement, inputElement);
        this._toggleButton(formElement);
      });
    });
  }

  // _toggleButton = (formElement) => {
  //   const buttom = formElement.querySelector(this._submitButtonSelector);

  //   buttom.disabled = !formElement.checkValidity();
  //   buttom.classList.toggle(formObject.inactiveButtonClass, !formElement.checkValidity());
  // }
  _toggleButton = (formElement) => {
    const buttom = formElement.querySelector(this._submitButtonSelector);

    buttom.disabled = !formElement.checkValidity();
    buttom.classList.toggle(this._inactiveButtonClass, !formElement.checkValidity());
  }
  _checkInputValidity = (formElement, inputElement) => {
    if (!inputElement.validity.valid) {
      this._showInputError(formElement, inputElement, inputElement.validationMessage);
    } else {
      this._hideInputError(formElement, inputElement);
    }
  };



  _showInputError = (formElement, inputElement, errorMessage) => {
    const errorElement = formElement.querySelector(`#${inputElement.id}-error`);

    errorElement.classList.add(this._inputErrorClass);
    errorElement.textContent = errorMessage;
    inputElement.classList.add(this._errorClass);
  };

  _hideInputError = (formElement, inputElement) => {
    const errorElement = formElement.querySelector(`#${inputElement.id}-error`);

    errorElement.classList.remove(this._errorClass);
    errorElement.textContent = '';
    inputElement.classList.remove(this._inputErrorClass);

  };

  clearMsgError = () => {

    // const forms = Array.from(document.querySelectorAll(this._formSelector));

    this._inputList.forEach((formElement) => {
      const msg = Array.from(formElement.querySelectorAll(this._inputErrorClass));
      const type = Array.from(formElement.querySelectorAll(this._errorClass));
      const btn = Array.from(formElement.querySelectorAll(this._submitButtonSelector));

      // console.log(btn);
      // console.log(msg);
      // console.log(type);
      msg.forEach((massege) => {
        // console.log(massege);
        massege.textContent = '';
      });
      type.forEach((types) => {
        console.log(types);
        types.classList.remove(this._errorClass);
      });
      btn.forEach((button) => {
        // console.log(button);
        button.disabled = true;
        button.classList.add(this._inactiveButtonClass);
      });
    });
  }
}