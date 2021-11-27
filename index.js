import ConfirmDialog from "./confirmDialog.js";

// Here you can pass to the parent any div content
new ConfirmDialog();


const { body } = document;
const modal = document.querySelector(".modal");
const trigger = document.querySelector(".trigger");
const cancelButton = document.querySelector(".cancel");
const yesButton = document.querySelector(".yes");

function toggleModal() {
  modal.classList.toggle("show-modal");
  const question  = document.querySelector('.para');
  if(question) {
    question.innerHTML = "";
  }
}

trigger.addEventListener("click", toggleModal);
cancelButton.addEventListener("click", () => {
  toggleModal();
  const cancelled = document.createElement('p');
  cancelled.setAttribute('class', 'para');
  cancelled.textContent = "You just clicked Cancel";
  body.appendChild(cancelled);
})
yesButton.addEventListener("click", () => {
  toggleModal();
  const yes = document.createElement('p');
  yes.setAttribute('class', 'para');
  yes.textContent = "You just Clicked Yes";
  body.appendChild(yes);
})

