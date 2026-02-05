function signup() {
  let user = document.getElementById("newUser").value;
  let pass = document.getElementById("newEmail").value;
  let pass = document.getElementById("newCountry").value;
  let pass = document.getElementById("newNumber").value;
  let pass = document.getElementById("newPass").value;

  localStorage.setItem("username", user);
  localStorage.setItem("email", user);
  localStorage.setItem("country", user);
  localStorage.setItem("number", user);
  localStorage.setItem("password", pass);

  alert("Account created successfully 🎉");
}