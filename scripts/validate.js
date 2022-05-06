function enableValidation(formObject) {
    const forms = Array.from(document.querySelectorAll(formObject.formSelector));
    
    forms.forEach((formElement) => {
        formElement.addEventListener('submit', (event) => {
            event.preventDefault();
        });
        setEventListeners(formObject, formElement);
    });
}

function setEventListeners(formObject, formElement) {
    const inputs = Array.from(formElement.querySelectorAll(formObject.inputSelector));
    
    toggleButton(formObject, formElement);
    inputs.forEach((inputElement) => {
        inputElement.addEventListener('input', () => {
          checkInputValidity(formObject, formElement, inputElement);
          toggleButton(formObject, formElement);
        });
      });
}

const checkInputValidity = (formObject, formElement, inputElement) => {
    if (!inputElement.validity.valid) {
        showInputError(formObject, formElement, inputElement, inputElement.validationMessage);
    } else {
        hideInputError(formObject, formElement, inputElement);
    }
};

const showInputError = (formObject, formElement, inputElement, errorMessage) => {
    const errorElement = formElement.querySelector(`#${inputElement.id}-error`);
    
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

function toggleButton(formObject, formElement) {
    const buttom = formElement.querySelector(formObject.submitButtonSelector);
   
    buttom.disabled = !formElement.checkValidity();
    buttom.classList.toggle(formObject.inactiveButtonClass, !formElement.checkValidity());
}

function clearMsgError(formObject) {
    const forms = Array.from(document.querySelectorAll(formObject.formSelector));
    
    forms.forEach((formElement) => {
        const msg = Array.from(formElement.querySelectorAll(`.${formObject.inputErrorClass}`));
        const type = Array.from(formElement.querySelectorAll(`.${formObject.errorClass}`));
    
        msg.forEach((massege) => {
            massege.textContent = '';
        });
        type.forEach((types) => {
            types.classList.remove(formObject.errorClass);
        });
    });
}

enableValidation({
    formSelector: '.form',
    inputSelector: '.form__input',
    submitButtonSelector: '.form__btn',
    inactiveButtonClass: 'form__btn_disabled',
    inputErrorClass: 'form__msg_show',
    errorClass: 'form__input_type_error'
});