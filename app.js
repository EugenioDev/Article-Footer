const emailButton = document.getElementById("email-button");
const lastIconRight = document.getElementById("more");

//Creare una funzione che richiama un div con all'interno un input
//Appendere il div appena creato sotto il bottone.
// Evento click al bottone email
// Input Validation

//Creo elemento div con interno input
function createInput() {
  const inputContainer = document.createElement("div");
  const inputField = document.createElement("input");
  //INPUT CONTAINER
  inputContainer.setAttribute("class", "inputContainer");
  inputField.setAttribute("class", "input-field");
  inputField.setAttribute("placeholder", "Type your Email");
  inputField.setAttribute("type", "text");

  inputContainer.appendChild(inputField);
  emailButton.after(inputContainer);
}

emailButton.onclick = function () {
  createInput();
};

function createSmallPopUp() {
  const smallContainer = document.createElement("div");
  smallContainer.setAttribute("class", "small-container");
  const text = document.createElement("p");
  text.innerHTML = "Work in progress...";

  smallContainer.appendChild(text);
  lastIconRight.after(smallContainer);
  
}
//Icona puntini small pop up
lastIconRight.onclick = function () {
  createSmallPopUp()
};
