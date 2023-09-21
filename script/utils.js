import { buttonEdit, buttonAdd, form, profileFormElement, imageFormElement } from "./index";

buttonEdit.addEventListener("click", () => {
  form.classList.add("form_mode_active");
  profileFormElement.classList.add("form__set_mode_active");
})

buttonAdd.addEventListener("click", () => {
  form.classList.add("form_mode_active");
  imageFormElement.classList.add("form__set_mode_active");
})