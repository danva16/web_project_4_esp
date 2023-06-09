let popup = document.querySelector('.popup');
let editButton = document.querySelector('.button__action_edit');
let closeButton = popup.querySelector('.button__action_close');
let submitButton = popup.querySelector('.button__action_create');
let nameInput = popup.querySelector('input[placeholder="Nombre"]');
let employmentInput = popup.querySelector('input[placeholder="Acerca de mí"]');
let overlay = document.querySelector('.overlay');

function openPopupProfile() {
  let name = document.querySelector('.profile__username');
  let employment = document.querySelector('.profile__useremployment');

  nameInput.value = name.textContent;
  employmentInput.value = employment.textContent;
}

function openPopupImage() {

}

function closePopup() {
  overlay.classList.remove('overlay_popup_active');
  popup.classList.add('popup_mode_disabled');
}

function handleProfileFormSubmit(evt) {
  evt.preventDefault();

  let nameOutput = document.querySelector('.profile__username');
  let employmentOutput = document.querySelector('.profile__useremployment');

  let nameValue = nameInput.value;
  let employmentValue = employmentInput.value;

  nameOutput.textContent = nameValue;
  employmentOutput.textContent = employmentValue;

  closePopup();
}

function handleProfileFormSubmitOnEnter(evt) {
  if (evt.key === 'Enter' || evt.keyCode === 13) {
    handleProfileFormSubmit(evt);
  }
}

function closePopupOnEsc(evt) {
  if (evt.key === 'Escape' || evt.keyCode === 27) {
    closePopup();
  }
}

editButton.addEventListener('click', function (evt) {
  const buttonClicked = evt.target;
  overlay.classList.add('overlay_popup_active');
  popup.classList.remove('popup_mode_disabled');
  openPopupProfile();
}
);
document.querySelector(".button__action_add").addEventListener('click', function () {
  overlay.classList.add('overlay_popup_active');
  popup.classList.remove('popup_mode_disabled');
})
closeButton.addEventListener('click', closePopup);
submitButton.addEventListener('click', handleProfileFormSubmit);
document.addEventListener('keydown', closePopupOnEsc);
document.addEventListener('keydown', handleProfileFormSubmitOnEnter);