document.addEventListener('DOMContentLoaded', () => {

  let myBtns=document.querySelectorAll('.card__like');
  myBtns.forEach(function(btn) {

      btn.addEventListener('click', () => {
        btn.classList.add('card__like_active');
      });
  });
});

window.onload=function(){
  // Открыть модальное окно
document.getElementById("popap-open").addEventListener("click", function() {
  document.getElementById("popap").classList.add("popap__open")
})

// Закрыть модальное окно
document.getElementById("popap__close").addEventListener("click", function() {
  document.getElementById("popap").classList.remove("popap__open")
})

// Закрыть модальное окно при нажатии на Esc
window.addEventListener('keydown', (e) => {
  if (e.key === "Escape") {
      document.getElementById("popap").classList.remove("popap__open")
  }
});

// Закрыть модальное окно при клике вне его
document.querySelector("#popap .popap__container").addEventListener('click', event => {
  event._isClickWithInModal = true;
});
document.getElementById("popap").addEventListener('click', event => {
  if (event._isClickWithInModal) return;
  event.currentTarget.classList.remove('popap__open');
});
};