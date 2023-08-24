const form = document.getElementById("formulario");
const email = document.getElementById("email");
const button = document.getElementById("button-form");

let parrafo = document.createElement("p");
form.append(parrafo);

email.addEventListener("input", () => {
  let dataEmail = email.value;
  let expRegEmail =
    /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g;
  let emailOk = expRegEmail.test(dataEmail);
  buttonCLick(emailOk);
});

function buttonCLick(param) {
  let acceso = param;
  button.addEventListener("click", (e) => {
    e.preventDefault();
    console.log(acceso);
    !acceso
      ? (email.style.borderBottom = "4px solid #f116")
      : (email.style.borderBottom = "4px solid #0616");
  });
}