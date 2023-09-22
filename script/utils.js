import { buttonEdit, buttonAdd, form, profileFormElement, imageFormElement, name, employment, nameInput,
 employmentInput, popupElement, submitButtonImage, submitButtonProfile } from "./index.js";

buttonEdit.addEventListener("click", () => {
  form.classList.add("form_mode_active");
  profileFormElement.classList.add("form__set_mode_active");
  openformProfile();
})

buttonAdd.addEventListener("click", () => {
  form.classList.add("form_mode_active");
  imageFormElement.classList.add("form__set_mode_active");
})

submitButtonProfile.addEventListener("click", handleProfileFormSubmit);

function openformProfile() {
  nameInput.value = name.textContent;
  employmentInput.value = employment.textContent;
}

function closePopup() {
  form.classList.remove("form_mode_active");
  profileFormElement.classList.remove("form__set_mode_active");
  imageFormElement.classList.remove("form__set_mode_active");
  popupElement.classList.remove("popup_mode_active")
}

function handleProfileFormSubmit(evt) {
  evt.preventDefault();

  const nameValue = nameInput.value;
  const employmentValue = employmentInput.value;

  name.textContent = nameValue;
  employment.textContent = employmentValue;
  closePopup();
}

function closePopupOnEsc(evt) {
  if(evt.key === 'Escape' || evt.keyCode === 27) {
    closePopup();
  }
}

function handleFormSubmitOnEnter() {
  if (evt.key === 'Enter' || evt.keyCode === 13) {
    if (imageFormElement.classList.contains('form__set_mode_active') && !submitButtonImage.classList.contains('button_action_create-inactive')) {
      handleImageFormSubmit(evt);
    } else if (profileFormElement.classList.contains('form__set_mode_active') && !submitButtonProfile.classList.contains('button_action_create-inactive')) {
      handleProfileFormSubmit(evt);
    }
    evt.preventDefault();
}
}