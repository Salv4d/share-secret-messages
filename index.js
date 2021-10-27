const { hash } = window.location;

const message = atob(hash.replace("#", ""));
const messageOnScreen = document.querySelector("#secret-message");
const showMessage = document.querySelector("#show-message");
const messageForm = document.querySelector("form");
const createMessageBtn = document.querySelector("#create-your-message");
const messageInput = document.querySelector("#message-input");

if (message) {
  messageOnScreen.innerText = message;
  showMessage.classList.remove("hide");

  toggleForm();
}

messageForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const linkInput = document.querySelector("#link-input");

  const encrypted = btoa(messageInput.value);
  const currentUrl = window.location.href.split("#")[0];
  linkInput.value = `${currentUrl}#${encrypted}`;
  linkInput.select();
  linkInput.setSelectionRange(0, 99999);
  navigator.clipboard.writeText(linkInput.value);

  toggleForm();
  toggleShowLink();
});

createMessageBtn.addEventListener("click", toggleForm);

function toggleForm() {
  document.querySelector("#message-form").classList.toggle("hide");
  clearInput();
}

function toggleShowLink() {
  document.querySelector("#show-link").classList.toggle("hide");
}

function clearInput() {
  messageInput.value = "";
}
