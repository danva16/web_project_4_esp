const form = document.querySelector(".form");
const buttonEdit = document.querySelector(".button_action_edit");
const buttonAdd = document.querySelector(".button_action_add");
const submitButtonProfile = document.querySelector('#submit-profile');
const submitButtonImage = document.querySelector('#submit-image');
const popupElement = document.querySelector(".popup");
const places = document.querySelector(".places");
const profileFormElement = document.querySelector("#profile");
const imageFormElement = document.querySelector("#image");
const name = document.querySelector('.profile__username');
const employment = document.querySelector('.profile__useremployment');
const nameInput = profileFormElement.querySelector('input[placeholder="Nombre"]');
const employmentInput = profileFormElement.querySelector('input[placeholder="Acerca de mí"]');

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

export { form, buttonEdit, buttonAdd, popupElement, places, initialCards, profileFormElement, imageFormElement, name, employment,
   nameInput, employmentInput, submitButtonImage, submitButtonProfile };