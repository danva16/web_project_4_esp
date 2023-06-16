const popup = document.querySelector('.popup');
const popupProfile = document.querySelector('#profile');
const popupImage = document.querySelector('#image');
const editButton = document.querySelector('.button__action_edit');
const addButton = document.querySelector('.button__action_add');
const closeButtons = document.querySelectorAll('.button__action_close');
const submitButtonProfile = document.querySelector('#submit-profile');
const submitButtonImage = document.querySelector('#submit-image');
let nameInput = popup.querySelector('input[placeholder="Nombre"]');
let employmentInput = popup.querySelector('input[placeholder="Acerca de mí"]');
const placeInput = document.querySelector('input[placeholder="Título"]');
const imageInput = document.querySelector('input[placeholder="Enlace a la imagen"]');
const overlay = document.querySelector('.overlay');
const places = document.querySelector('.places');

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

function addImage(titleValue, imageValue) {
  const placeTemplate = document.querySelector('#place-template').content;
  const placeElement = placeTemplate.querySelector('.place').cloneNode(true);

  placeElement.querySelector('.place__title').textContent = titleValue;
  const placeImage = placeElement.querySelector('.place__image');
  placeImage.setAttribute("src", imageValue);
  placeElement.querySelector('.button__action_like').addEventListener('click', function(evt) {
    evt.target.classList.toggle('')
  })
  places.append(placeElement);
}

const initialCards = [
  {
    name: "Valle de Yosemite",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/yosemite.jpg"
  },
  {
    name: "Lago Louise",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/lake-louise.jpg"
  },
  {
    name: "Montañas Calvas",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/bald-mountains.jpg"
  },
  {
    name: "Latemar",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/latemar.jpg"
  },
  {
    name: "Parque Nacional de la Vanoise",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/vanoise.jpg"
  },
  {
    name: "Lago di Braies",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/lago.jpg"
  }
];

initialCards.forEach((card) => {
  addImage(card.name, card.link);
});

function handleImageFormSubmit(evt) {
  evt.preventDefault();

  const titleValue = placeInput.value;
  const imageValue = imageInput.value;

  addImage(titleValue, imageValue);
  initialCards.push({name: titleValue, link: imageValue});
  closePopup();
}

function handleFormSubmitOnEnter(evt) {
  if (evt.key === 'Enter' || evt.keyCode === 13) {
    if(!popupImage.classList.contains('popup_mode_disabled')) {
      handleImageFormSubmit(evt);
    } else if (!popupProfile.classList.contains('popup_mode_disabled')) {
      handleProfileFormSubmit(evt);
    }
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
submitButtonProfile.addEventListener('click', handleProfileFormSubmit);
submitButtonImage.addEventListener('click', handleImageFormSubmit);
document.addEventListener('keydown', closePopupOnEsc);
document.addEventListener('keydown', handleFormSubmitOnEnter);