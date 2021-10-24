const container = document.querySelector(".page");
//форма изменения профиля - начало (пункт 1)
const editOpenButton = container.querySelector(".profile__edit-button");
const editPopup = container.querySelector(".popup_type_edit");
const editCloseButton = editPopup.querySelector(".popup__close-button");
const editForm = editPopup.querySelector('.popup__form_type_edit');
let profileNameInput = editForm.querySelector("#popup__input_user-name");//форма отправки - имя
let profileAboutInput = editForm.querySelector("#popup__input_user-about");//форма отправки - описание
const profile = container.querySelector(".profile");
let profileName = profile.querySelector(".profile__name");//имя
let profileAbout = profile.querySelector(".profile__brief");//описание

function openPopup() {
    profileNameInput.value = profileName.textContent;
    profileAboutInput.value = profileAbout.textContent;
    editPopup.classList.add("popup_opened");
}

function closePopup() {
    editPopup.classList.remove("popup_opened");
}

function submitPopup (evt) {
    evt.preventDefault();
    profileName.textContent = profileNameInput.value;
    profileAbout.textContent = profileAboutInput.value;
    closePopup();
}

editOpenButton.addEventListener("click", openPopup);
editCloseButton.addEventListener("click", closePopup);
editForm.addEventListener("submit", submitPopup);
//форма изменения профиля - конец 

