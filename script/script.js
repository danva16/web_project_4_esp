let popup = document.querySelector('.profile-popup');
let editButton = document.querySelector('.button__action_edit');
let closeButton = popup.querySelector('.button__action_close');

function openPopup() {
  popup.classList.remove('profile-popup_mode_disabled');
}

function closePopup() {
  popup.classList.add('profile-popup_mode_disabled');
}

editButton.addEventListener('click', openPopup);
closeButton.addEventListener('click', closePopup);