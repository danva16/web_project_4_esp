class FormValidator {
  constructor(config, formElement) {
    this._config = config;
    this._formElement = formElement;
  }

  _showInputError(inputElement, errorMessage) {
    const errorElement = this._formElement.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.add("form__input_type_error");
    errorElement.textContent = errorMessage;
    errorElement.classList.add("form__input-error_active");
  }

  _hideInputError(inputElement) {
    const errorElement = this._formElement.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.remove("form__input_type_error");
    errorElement.classList.remove("form__input-error_active");
    errorElement.textContent = "";
  }

  _checkInputValidity(inputElement) {
    if(!inputElement.validity.valid) {
      this._showInputError(inputElement, inputElement.validationMessage);
    } else {
      this._hideInputError(inputElement);
    }
  }

  _hasInvalidInput(inputList) {
    return inputList.some(inputElement => !inputElement.validity.valid);
  }

  _toggleButtonState(inputList, buttonElement) {
    if(this._hasInvalidInput(inputList)) {
      buttonElement.classList.add("button_action_create-inactive");
    } else {
      buttonElement.classList.remove("button_action_create-inactive");
    }
  }

  _setEventListeners() {
    const inputList = Array.from(this._formElement.querySelectorAll(".form__input"));
    const buttonElement = this._formElement.querySelector(".button_action_create");

    this._toggleButtonState(inputList, buttonElement);

    inputList.forEach(inputElement => {
      inputElement.addEventListener("input", () => {
        this._checkInputValidity(inputElement);
        this._toggleButtonState(inputList, buttonElement);
      });
    });
  }

  enableValidation() {
    this._formElement.addEventListener("submit", evt => {
      evt.preventDefault();
    });

    this._setEventListeners();
  }
}

const formValidatorConfig = {
  formSelector: ".form",
  inputSelector: ".form__input",
  submitButtonSelector: ".button_action_create",
  inactiveButtonClass: "button_action_create-inactive",
  inputErrorClass: "form__input-error",
  errorClass: "form__input-error_active"
}

const formElement = document.querySelector(".form");
const formValidator = new FormValidator(formValidatorConfig, formElement);
formValidator.enableValidation();