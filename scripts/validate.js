function enableValidation(formObject) {
    const forms = Array.from(document.querySelectorAll(formObject.formSelector));
    console.log(forms);
    forms.forEach((formElement) => {
        console.log(formElement);
        formElement.addEventListener('submit', (event) => {
            event.preventDefault();
        });
        setEventListeners(formObject, formElement);
    });
}

function setEventListeners(formObject, formElement) {
    const inputs = Array.from(formElement.querySelectorAll(formObject.inputSelector));
    console.log(inputs);

    inputs.forEach((inputElement) => {
        inputElement.addEventListener('input', () => {
          checkInputValidity(formObject, formElement, inputElement);
        });
      });
}

const checkInputValidity = (formObject, formElement, inputElement) => {
    if (!inputElement.validity.valid) {
        console.log(inputElement.validationMessage);
        showInputError(formObject, formElement, inputElement, inputElement.validationMessage);
    } else {
        hideInputError(formObject, formElement, inputElement);
    }
};

const showInputError = (formObject, formElement, inputElement, errorMessage) => {
    const errorElement = formElement.querySelector(`#${inputElement.id}-error`);
    console.log(inputElement.id);
    errorElement.classList.add(formObject.inputErrorClass);
    errorElement.textContent = errorMessage;
    inputElement.classList.add(formObject.errorClass);
};

const hideInputError = (formObject, formElement, inputElement) => {
    const errorElement = formElement.querySelector(`#${inputElement.id}-error`);
    
    errorElement.classList.remove(formObject.errorClass);
    errorElement.textContent = '';
    inputElement.classList.remove(formObject.inputErrorClass);
  };

enableValidation({
    formSelector: '.form',
    inputSelector: '.form__input',
    submitButtonSelector: '.form__btn',
    inactiveButtonClass: 'form__btn_disabled',
    inputErrorClass: 'form__msg_show',
    errorClass: 'form__input_type_error'
});