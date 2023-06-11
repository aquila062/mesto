const popUp = document .querySelector('.popap');
const openPopUp = document.querySelector('.profile__edit-button');
const closePopUp = document.querySelector('.popap__close');
const savePopUp = document.querySelector('.form__submit-button');
let formElement = document.querySelector('.form');
let profileName = document.querySelector('.profile__name');
let profileactivity = document.querySelector('.profile__position');
let popUpName = document.querySelector('.form__input_value_name');
let popUpActivity = document.querySelector('.form__input_value_position');

openPopUp.addEventListener("click", () => {
  popUp.classList.add('popap__open');
  popUpName.value = profileName.textContent;
  popUpActivity.value = profileactivity.textContent;

})

closePopUp.addEventListener('click', () => {
popUp.classList.remove('popap__open');

})

savePopUp.addEventListener("click", () => {
  popUp.classList .remove('popap__open');

})

function handleFormSubmit(evt) {
  evt.preventDefault();
  profileName.textContent = popUpName.value;
  profileactivity.textContent = popUpActivity.value;
}

formElement.addEventListener('submit', handleFormSubmit);
