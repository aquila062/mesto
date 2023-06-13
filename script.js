const popUp = document .querySelector('.popap');
const openPopUp = document.querySelector('.profile__edit-button');
const closePopUp = document.querySelector('.popap__close');
let formElement = document.querySelector('.form');
let profileName = document.querySelector('.profile__name');
let profileactivity = document.querySelector('.profile__position');
let popUpName = document.querySelector('.form__input_value_name');
let popUpActivity = document.querySelector('.form__input_value_position');

openPopUp.addEventListener("click", () => {
  popUp.classList.add('popap__profile_visible');
  popUpName.value = profileName.textContent;
  popUpActivity.value = profileactivity.textContent;

})

closePopUp.addEventListener('click', () => {
popUp.classList.remove('popap__profile_visible');

})

function handleFormSubmit(evt) {
  evt.preventDefault();
  profileName.textContent = popUpName.value;
  profileactivity.textContent = popUpActivity.value;
  popUp.classList.remove('popap__profile_visible');
}

formElement.addEventListener('submit', handleFormSubmit);
