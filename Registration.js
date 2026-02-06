const regBtn = document.querySelector ("#reg-btn");
const regForm = document.querySelector(".Register-card");
regBtn.addEventListener("click",function(e) {
  e.preventDefault()
  const user = document.getElementById("newUser").value;
  const email = document.getElementById("newEmail").value;
  const country = document.getElementById("newCountry").value;
  const number = document.getElementById("newNumber").value;
  const password = document.getElementById("newPass").value;
  
  //Checking user fields before successful registration
  if (!user || email=== "" || !country || !number || !password) {
    alert("All fields required")
    return;
  }
  
  const userData = {
    fullName: user,
    userEmail: email,
    userCountry: country,
    userNumber: number,
    userPassword: password,
  }
  
  alert("Account created successfully 🎉")
  window.location.href = "index.html"
  console.log(userData)
  regForm.reset()

  /*localStorage.setItem("username", user);
  localStorage.setItem("email", user);
  localStorage.setItem("country", user);
  localStorage.setItem("number", user);
  localStorage.setItem("password", pass);*/

  /*);*/
})