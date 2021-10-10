const emailButton = document.getElementById("email-button");
const lastIconRight = document.getElementById("more");

//Creare una funzione che richiama un div con all'interno un input
//Appendere il div appena creato sotto il bottone.
// Evento click al bottone email
// Input Validation

//Creo elemento div con interno input
function createInput() {
  const inputContainer = document.createElement("div");
  inputContainer.setAttribute('class', 'inputContainer')
  const inputField = document.createElement("input");
  const submitButton = document.createElement('button')

  submitButton.setAttribute('type', 'submit')
  submitButton.setAttribute('class', 'btn-form')
  submitButton.innerHTML = '&rArr;'
  inputContainer.appendChild(submitButton)

  inputField.setAttribute("class", "input-field");
  inputField.setAttribute("placeholder", "Type your Email");
  inputField.setAttribute("type", "email");

  inputContainer.appendChild(inputField);
  emailButton.after(inputContainer);
}

emailButton.onclick = function () {
  createInput();
};
