function login() {
  let username =
  document.getElementById("username").value;
  let password =
  document.getElementById("password").value;
  
  if (username === "Donata" && password === "Nelson@2000") {
    alert ("Login Successfully 🎉")
  } else {
    alert ("Invalid Credentials ❌")
  }
}