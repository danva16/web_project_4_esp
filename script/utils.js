import { buttonEdit, buttonAdd, form, profileFormElement, imageFormElement, name, employment, nameInput,
 employmentInput, popupElement } from "./index.js";

buttonEdit.addEventListener("click", () => {
  form.classList.add("form_mode_active");
  profileFormElement.classList.add("form__set_mode_active");
  openformProfile();
})

buttonAdd.addEventListener("click", () => {
  form.classList.add("form_mode_active");
  imageFormElement.classList.add("form__set_mode_active");
})

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