const popup = document.querySelector('.popup');
const popupProfile = document.querySelector('#profile');
const popupImage = document.querySelector('#image');
const editButton = document.querySelector('.button__action_edit');
const addButton = document.querySelector('.button__action_add');
const closeButtons = document.querySelectorAll('.button__action_close');
const submitButton = document.querySelector('.button__action_create');
let nameInput = popup.querySelector('input[placeholder="Nombre"]');
let employmentInput = popup.querySelector('input[placeholder="Acerca de mí"]');
const overlay = document.querySelector('.overlay');

function openPopupProfile() {
  let name = document.querySelector('.profile__username');
  let employment = document.querySelector('.profile__useremployment');

  nameInput.value = name.textContent;
  employmentInput.value = employment.textContent;
}

function closePopup() {
  overlay.classList.remove('overlay_popup_active');
  popupProfile.classList.add('popup_mode_disabled');
  popupImage.classList.add('popup_mode_disabled');
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

editButton.addEventListener('click', function () {
  overlay.classList.add('overlay_popup_active');
  popupProfile.classList.remove('popup_mode_disabled');
  openPopupProfile();
});
addButton.addEventListener('click', function () {
  overlay.classList.add('overlay_popup_active');
  popupImage.classList.remove('popup_mode_disabled');
});
closeButtons.forEach((button) => {
  button.addEventListener('click', closePopup);
});
submitButton.addEventListener('click', handleProfileFormSubmit);
document.addEventListener('keydown', closePopupOnEsc);
document.addEventListener('keydown', handleProfileFormSubmitOnEnter);