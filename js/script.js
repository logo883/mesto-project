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

function openPopup(popup) { //функция открытия попапа
  if(popup === editPopup) {
    profileNameInput.value = profileName.textContent;
    profileAboutInput.value = profileAbout.textContent;
  }
  popup.classList.add("popup_opened");
}

function closePopup(popup) { //функция закрытия попапа
  popup.classList.remove("popup_opened");
}

editOpenButton.addEventListener("click", function() {
  openPopup(editPopup);
});
editCloseButton.addEventListener("click", function () {
  closePopup(editPopup);
});
editForm.addEventListener("submit", function(evt) {
  evt.preventDefault();
  profileName.textContent = profileNameInput.value;
  profileAbout.textContent = profileAboutInput.value;
  closePopup(editPopup);
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

const cardsList = document.querySelector(".elements-grid__list");
const cardTemplate = document.querySelector(".item-template").content;

function formCard({name, link}) {
  const newCard = cardTemplate.cloneNode(true);
  const cardTitle = newCard.querySelector(".elements-grid__name");
  const cardImage = newCard.querySelector(".elements-grid__image");
  const cardDeleteButton = newCard.querySelector(".elements-grid__delete-button");
  const cardLikeButton = newCard.querySelector(".elements-grid__like-button");

  cardTitle.textContent = name;
  cardImage.src = link;
  cardImage.alt = name;

  cardDeleteButton.addEventListener("click", function() {
    cardDeleteButton.closest(".elements-grid__item").remove();
  });

  cardLikeButton.addEventListener("click", function() {
    cardLikeButton.classList.toggle("elements-grid__like-button_active");
  });

  return newCard;
};

function formCardsList() {
  cardsList.append(...initialCards.map(formCard));
}

formCardsList();
// ----------------------------------------------------

//форма добавления карточки----------------------------

const addPopup = container.querySelector(".popup_type_add");
const addCloseButton = addPopup.querySelector(".popup__close-button");
const addForm = addPopup.querySelector(".popup__form");
const addFormName = addForm.querySelector("#popup__input_card-name");
const addFormLink = addForm.querySelector("#popup__input_card-link");
// const addFormSubmitButton = addForm.querySelector(".popup__submit-button");
const addOpenButton = profile.querySelector(".profile__add-button");
console.log(addForm);
addOpenButton.addEventListener("click", function() {
  openPopup(addPopup);
});
addCloseButton.addEventListener("click", function() {
  closePopup(addPopup);
});

addForm.addEventListener("submit", function(evt){ //добавление новой карточки
  evt.preventDefault();
  cardsList.prepend(formCard({
    name: addFormName.value,
    link: addFormLink.value
  }));
  closePopup(addPopup);
  // addForm.reset();
});
// ----------------------------------------------------
