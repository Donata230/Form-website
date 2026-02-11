const loginBtn = document.querySelector("#login-btn")
const loginPage = document.querySelector(".login-form")
const dashBoard = document.querySelector("#dashboard")
loginBtn.addEventListener("click", login)

let currentUser
//Login Function 
function login (event) {
  event.preventDefault()
  const email =
  document.getElementById("email").value;
  const password =
  document.getElementById("password").value;
  //console.log(email, password)
  const fetchData = JSON.parse(localStorage.getItem("registerData"))
  console.log(fetchData)
  currentUser = fetchData.find(user => user.userEmail === email && user.newPassword === password)
  if (currentUser) {
      alert("login successful")
      dashBoard.style.display = "flex"
      loginPage.style.display = "none"
        console.log(currentUser)
       }  else {
          alert("Invalid Credentials")
          loginPage.style.display = "flex"
        }

        //dashBoardDisplay
        const userName = document.querySelector("#username").textContent = currentUser.userName;
        const userCountry = document.querySelector(".user-country").textContent = currentUser.newCountry;
        const userContact = document.querySelector(".user-contact").textContent = currentUser.newNumber;
        const userEmail = document.querySelector(".user-email").textContent = currentUser.userEmail;
      }
  


  
  
  
  
  /*console.log(fetchData[0].userEmail
  )*/