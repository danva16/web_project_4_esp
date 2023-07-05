const popup = document.querySelector('.popup');
const form = document.querySelector('.form');
const formProfile = form.querySelector('#profile');
const formImage = form.querySelector('#image');
const editButton = document.querySelector('.button_action_edit');
const addButton = document.querySelector('.button_action_add');
const closeButtons = document.querySelectorAll('.button_action_close');
const submitButtonProfile = document.querySelector('#submit-profile');
const submitButtonImage = document.querySelector('#submit-image');
const nameInput = formProfile.querySelector('input[placeholder="Nombre"]');
const employmentInput = formProfile.querySelector('input[placeholder="Acerca de mí"]');
const placeInput = document.querySelector('input[placeholder="Título"]');
const imageInput = document.querySelector('input[placeholder="Enlace a la imagen"]');
const places = document.querySelector('.places');
const showImage = document.querySelector('.popup__image');
const showTitle = document.querySelector('.popup__title');

function openformProfile() {
  const name = document.querySelector('.profile__username');
  const employment = document.querySelector('.profile__useremployment');

  nameInput.value = name.textContent;
  employmentInput.value = employment.textContent;
}

function closePopup() {
  form.classList.remove('form_mode_active');
  formProfile.classList.remove('form__set_mode_active');
  formImage.classList.remove('form__set_mode_active');
  popup.classList.remove('popup_mode_active');
}

function handleProfileFormSubmit(evt) {
  evt.preventDefault();

  const nameOutput = document.querySelector('.profile__username');
  const employmentOutput = document.querySelector('.profile__useremployment');

  const nameValue = nameInput.value;
  const employmentValue = employmentInput.value;

  nameOutput.textContent = nameValue;
  employmentOutput.textContent = employmentValue;

  closePopup();
}

function addImage(titleValue, imageValue) {
  const placeTemplate = document.querySelector('#place-template').content;
  const placeElement = placeTemplate.querySelector('.place').cloneNode(true);

  placeElement.querySelector('.place__title').textContent = titleValue;
  placeElement.querySelector('.place__image').setAttribute("src", imageValue);
  placeElement.querySelector('.place__image').setAttribute("alt", titleValue);
  placeElement.querySelector('.place__image').addEventListener('click', function() {
    form.classList.add('form_mode_active');
    popup.classList.add('popup_mode_active');
    showImage.setAttribute('src', imageValue);
    showImage.setAttribute('alt', titleValue);
    showTitle.textContent = titleValue;
  });

  placeElement.querySelector('.button_action_like').addEventListener('click', function(evt) {
    evt.target.classList.toggle('button_action_like--active');
  });
  placeElement.querySelector('.button_action_trash').addEventListener('click', function() {
    placeElement.remove();
    const index = initialCards.findIndex(card => !(card.name === titleValue && card.link === imageValue));
    if(index !== -1) {
      initialCards.splice(index, 1);
    };
  });
  places.prepend(placeElement);
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
  placeInput.value = '';
  imageInput.value = '';
}

function handleFormSubmitOnEnter(evt) {
  if (evt.key === 'Enter' || evt.keyCode === 13) {
    if(formImage.classList.contains('form__set_mode_active')) {
      handleImageFormSubmit(evt);
    } else if (formProfile.classList.contains('form__set_mode_active')) {
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
  form.classList.add('form_mode_active');
  formProfile.classList.add('form__set_mode_active');
  openformProfile();
});
addButton.addEventListener('click', function () {
  form.classList.add('form_mode_active');
  formImage.classList.add('form__set_mode_active');
});
closeButtons.forEach((button) => {
  button.addEventListener('click', closePopup);
});

submitButtonProfile.addEventListener('click', handleProfileFormSubmit);
submitButtonImage.addEventListener('click', handleImageFormSubmit);
document.addEventListener('keydown', closePopupOnEsc);
document.addEventListener('keydown', handleFormSubmitOnEnter);
