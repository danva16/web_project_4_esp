class FormValidator {
  constructor(config, formElement) {
    this._config = config;
    this._formElement = formElement;
    this._inputList = Array.from(formElement.querySelectorAll(config.inputSelector));
    this._buttonElement = formElement.querySelector(config.submitButtonSelector);
  }

  _showInputError(inputElement, errorMessage) {
    const errorElement = this._formElement.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.add(this._config.inputErrorClass);
    errorElement.textContent = errorMessage;
    errorElement.classList.add(this._config.errorClass);
  }

  _hideInputError(inputElement) {
    const errorElement = this._formElement.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.remove(this._config.inputErrorClass);
    errorElement.classList.remove(this._config.errorClass);
    errorElement.textContent = "";
  }

  _checkInputValidity(inputElement) {
    if(!inputElement.validity.valid) {
      this._showInputError(inputElement, inputElement.validationMessage);
    } else {
      this._hideInputError(inputElement);
    }
  }

  _hasInvalidInput() {
    return this._inputList.some((inputElement) => {
      return !inputElement.validity.valid;
    });
  }

  _toggleButtonState() {
    if(this._hasInvalidInput()) {
      this._buttonElement.classList.add(this._config.inactiveButtonClass);
    } else {
      this._buttonElement.classList.remove(this._config.inactiveButtonClass);
    }
  }

  _setEventListeners() {
    this._toggleButtonState();

    this._inputList.forEach((inputElement) => {
      inputElement.addEventListener("input", () => {
        this._checkInputValidity(inputElement);
        this._toggleButtonState();
      });
    });

    document.querySelector(".button_action_edit").addEventListener("click", () => {
      form.classList.add("form_mode_active");
      profileFormElement.classList.add("form__set_mode_active");
    })

    document.querySelector(".button_action_add").addEventListener("click", () => {
      form.classList.add("form_mode_active");
      imageFormElement.classList.add("form__set_mode_active");
    })
  }

  enableValidation() {
    this._formElement.addEventListener("submit", (evt) => {
      evt.preventDefault();
    });

    this._setEventListeners();
    this._toggleButtonState();
  }
}

const form = document.querySelector(".form");

const profileFormConfig = {
  formSelector: ".form__set",
  inputSelector: ".form__input",
  submitButtonSelector: "#submit-profile",
  inactiveButtonClass: "button_action_create-inactive",
  inputErrorClass: "form__input-error",
  errorClass: "form__input-error_active"
}

const profileFormElement = document.querySelector("#profile");
const profileFormValidator = new FormValidator(profileFormConfig, profileFormElement);
profileFormValidator.enableValidation();

const imageFormConfig = {
  formSelector: ".form__set",
  inputSelector: ".form__input",
  submitButtonSelector: "#submit-image",
  inactiveButtonClass: "button_action_create-inactive",
  inputErrorClass: "form__input-error",
  errorClass: "form__input-error_active"
}

const imageFormElement = document.querySelector("#image");
const imageFormValidator = new FormValidator(imageFormConfig, imageFormElement);
imageFormValidator.enableValidation();