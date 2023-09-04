const loginForm = document.querySelector(".login-form");

function formSubmit(event) {
  event.preventDefault();
  const form = event.currentTarget;
  const login = form.elements.email.value;
  const password = form.elements.password.value;

  if (login !== "" && password !== "") {
    const formObject = {
      login: login,
      password: password,
    };
    console.log(formObject);
    form.reset();
  } else {
    alert("Every field should be filled!");
  }
}

loginForm.addEventListener("submit", formSubmit);
