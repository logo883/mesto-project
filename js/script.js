const container = document.querySelector(".page");

const editOpenButton = container.querySelector(".profile__edit-button");
const editPopup = container.querySelector(".popup_type_edit");
const editCloseButton = editPopup.querySelector(".popup__close-button");
const editForm = editPopup.querySelector(".popup__form");
const profileNameInput = editForm.querySelector("#popup__input_user-name"); //форма отправки - имя
const profileAboutInput = editForm.querySelector("#popup__input_user-about"); //форма отправки - описание
const profile = container.querySelector(".profile");
const profileName = profile.querySelector(".profile__name"); //имя профиля
const profileAbout = profile.querySelector(".profile__brief"); //описание профиля

const cardsList = document.querySelector(".elements-grid__list");
const cardTemplate = document.querySelector(".item-template").content;

const imagePopup = container.querySelector(".popup_type_image"); //попап с развёрнутым изображением
const imagePreview = imagePopup.querySelector(".popup__image");
const imageCaption = imagePopup.querySelector(".popup__caption");
const imageCloseButton = imagePopup.querySelector(".popup__close-button");

const addPopup = container.querySelector(".popup_type_add");
const addCloseButton = addPopup.querySelector(".popup__close-button");
const addForm = addPopup.querySelector(".popup__form");
const addFormName = addForm.querySelector("#popup__input_card-name");
const addFormLink = addForm.querySelector("#popup__input_card-link");
const addOpenButton = profile.querySelector(".profile__add-button");

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

function openPopup(popup) { //функция открытия попапа
  popup.classList.add("popup_opened");
}

function closePopup(popup) { //функция закрытия попапа
  popup.classList.remove("popup_opened");
}

function formCard({name, link}) {//функция формирования карточки
  const newCard = cardTemplate.cloneNode(true);
  const cardTitle = newCard.querySelector(".elements-grid__name");
  const cardImage = newCard.querySelector(".elements-grid__image");
  const cardDeleteButton = newCard.querySelector(".elements-grid__delete-button");
  const cardLikeButton = newCard.querySelector(".elements-grid__like-button");

  cardTitle.textContent = name;
  cardImage.src = link;
  cardImage.alt = name;

  cardDeleteButton.addEventListener("click", function() { //Удаление карточки
    cardDeleteButton.closest(".elements-grid__item").remove();
  });

  cardLikeButton.addEventListener("click", function() { //Лайк карточки
    cardLikeButton.classList.toggle("elements-grid__like-button_active");
  });

  cardImage.addEventListener("click", function(){ //Открытые попапа с развёрнутым изображением
    imagePreview.src = link;
    imagePreview.alt = name;
    imageCaption.textContent = name;
    openPopup(imagePopup);
  });

  return newCard;
};

function formCardsList() {
  cardsList.append(...initialCards.map(formCard));
}


editOpenButton.addEventListener("click", function() {//Открытие попапа с изменением профиля
  profileNameInput.value = profileName.textContent;
  profileAboutInput.value = profileAbout.textContent;
  openPopup(editPopup);
});
editCloseButton.addEventListener("click", function () {//Закрытие попапа с изменением профиля
  closePopup(editPopup);
});
editForm.addEventListener("submit", function(evt) {//Функции, которые не повторяются решил писать 
  evt.preventDefault();                            //сразу в обработчике события.
  profileName.textContent = profileNameInput.value;
  profileAbout.textContent = profileAboutInput.value;
  closePopup(editPopup);
});

imageCloseButton.addEventListener("click", function () { //Закрытие попапа с развёрнутым изображением
  closePopup(imagePopup);
});

addOpenButton.addEventListener("click", function() {//Открытие попапа с добавлением новой карточки
  openPopup(addPopup);
});
addCloseButton.addEventListener("click", function() {//Закрытие попапа с добавлением новой карточки
  closePopup(addPopup);
});

addForm.addEventListener("submit", function(evt){ //Добавление новой карточки
  evt.preventDefault();
  cardsList.prepend(formCard({
    name: addFormName.value,
    link: addFormLink.value
  }));
  closePopup(addPopup);
  addForm.reset();
});

formCardsList();//Вызов функции добавляющией изначальный набор карточек на страницу
