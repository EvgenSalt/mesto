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
        console.log('Form no good');
    } else {
        console.log('Form good');
    }
  };

enableValidation({
    formSelector: '.form',
    inputSelector: '.form__input',
    submitButtonSelector: '.form__btn',
    inactiveButtonClass: 'form__btn_disabled',
    inputErrorClass: 'form__input_type_error',
    errorClass: 'form__error_visible'
});