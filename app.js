window.addEventListener("DOMContentLoaded", function () {
  const emailButton = document.getElementById("email-button");
  const lastIconRight = document.getElementById("more");

  //Creare una funzione che richiama un div con all'interno un input
  //Appendere il div appena creato sotto il bottone.
  // Evento click al bottone email
  // Input Validation

  //Creo elemento div con interno input
  function createInput() {
    const inputContainer = document.createElement("form");
    inputContainer.setAttribute("class", "inputContainer");
    inputContainer.setAttribute("novalidate", "");
    const inputField = document.createElement("input");
    const submitButton = document.createElement("button");

    submitButton.setAttribute("class", "btn-form");
    submitButton.innerHTML = "&rArr;";
    inputContainer.appendChild(submitButton);

    inputField.setAttribute("class", "input-field");
    inputField.setAttribute("name", "email");
    inputField.setAttribute("placeholder", "Type your Email");
    inputField.setAttribute("type", "email");

    inputContainer.appendChild(inputField);
    emailButton.after(inputContainer);

    //Submit Event
    inputContainer.addEventListener("submit", checkInput);

    function checkInput(e) {
      e.preventDefault();
      //Catturare il valore inserito nell'input
      const inputValue = inputField.value;
      let inputSpan = document.getElementById("emailValue");
      const re =
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      //Eseguire la condizione che se la email è corretta modifica lo span con l'input inserito
      if (inputValue.match(re)) {
        inputSpan.innerHTML = inputValue;
      } else {
        const error = document.createElement("p");
        error.setAttribute("class", "errormsg");
        error.innerHTML = "Controlla i dati inseriti";
        inputContainer.appendChild(error);
      }
    }
  }

  emailButton.onclick = function () {
    if (document.querySelector("#email-button").nextElementSibling) {
      document.querySelector("#email-button").nextElementSibling.remove();
      document.getElementById("emailValue").innerHTML = "";
      document.querySelector(".inputContainer").nextElementSibling.remove();
    } else {
      createInput();
    }
  };
});
