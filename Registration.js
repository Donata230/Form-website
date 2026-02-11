regBtn = document.querySelector("#reg-btn")
regForm = document.querySelector("#register")
let fetchData = JSON.parse(localStorage.getItem("registerData")) ||[]
regBtn.addEventListener("click", function(e){
  e.preventDefault()
  const user = document.querySelector("#newUser").value;
  const email = document.querySelector("#newEmail").value;
  const country= document.querySelector("#newNumber").value;
  const number= document.querySelector("#newCountry").value;
  const password = document.querySelector("#newPass").value;
  if(!user || !email || !country || !number || !password){
  alert("All required")
  return;
}

alert("Successful Registration")
const userData = {
  userName: user,
  userEmail: email,
  newCountry: country,
  newNumber: number,
  newPassword: password,
}
fetchData.push(userData)
localStorage.setItem("registerData", JSON.stringify(fetchData))
console.log(fetchData)
window.location.href="index.html"

regForm.reset()

}
)





