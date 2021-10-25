const container = document.querySelector(".page");
//форма изменения профиля -----------------------------
const editOpenButton = container.querySelector(".profile__edit-button");
const editPopup = container.querySelector(".popup_type_edit");
const editCloseButton = editPopup.querySelector(".popup__close-button");
const editForm = editPopup.querySelector(".popup__form");
const profileNameInput = editForm.querySelector("#popup__input_user-name"); //форма отправки - имя
const profileAboutInput = editForm.querySelector("#popup__input_user-about"); //форма отправки - описание
const profile = container.querySelector(".profile");
const profileName = profile.querySelector(".profile__name"); //имя
const profileAbout = profile.querySelector(".profile__brief"); //описание

// function openPopup() {
//   profileNameInput.value = profileName.textContent;
//   profileAboutInput.value = profileAbout.textContent;
//   editPopup.classList.add("popup_opened");
// }

// function closePopup(popup) {
//   popup.classList.remove("popup_opened");
// }

// function submitPopup(evt) {
//   evt.preventDefault();
//   profileName.textContent = profileNameInput.value;
//   profileAbout.textContent = profileAboutInput.value;
//   closePopup();
// }

editOpenButton.addEventListener("click", function() {
    profileNameInput.value = profileName.textContent;
    profileAboutInput.value = profileAbout.textContent;
    editPopup.classList.add("popup_opened"); 
});
editCloseButton.addEventListener("click", function(){
    editPopup.classList.remove("popup_opened");
});
editForm.addEventListener("submit", function(evt) {
    evt.preventDefault();
    profileName.textContent = profileNameInput.value;
    profileAbout.textContent = profileAboutInput.value;
    editPopup.classList.remove("popup_opened");
});
// ----------------------------------------------------

//форма добавления карточки----------------------------
const addPopup = container.querySelector(".popup_type_add");
const addCloseButton = addPopup.querySelector(".popup__close-button");
const addForm = addPopup.querySelector(".popup__form");
const addOpenButton = profile.querySelector(".profile__add-button");

addOpenButton.addEventListener("click", function() {
    addPopup.classList.add("popup_opened");
});
addCloseButton.addEventListener("click", function() {
    addPopup.classList.remove("popup_opened");
});
// ----------------------------------------------------

//Загрузка карточек на страницу------------------------
const initialCards = [
    {
      name: 'Архыз',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
    },
    {
      name: 'Челябинская область',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
    },
    {
      name: 'Иваново',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
    },
    {
      name: 'Камчатка',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
    },
    {
      name: 'Холмогорский район',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
    },
    {
      name: 'Байкал',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
    }
];

const elementsList = document.querySelector(".elements-grid__list");
const elementTemplate = document.querySelector(".item-template").content;

initialCards.forEach(function (card) {
    const newElement = elementTemplate.cloneNode(true);
    newElement.querySelector(".elements-grid__name").textContent = card.name;
    newElement.querySelector(".elements-grid__image").src = card.link;

    elementsList.append(newElement);
});
// ----------------------------------------------------
