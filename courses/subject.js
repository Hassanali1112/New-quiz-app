 function checkIsLoggedIn (){
  let isLoggedIn = localStorage.getItem("isLoggedIn")
  if(isLoggedIn !== "true"){
    window.location.href = "../index.html"
  }
}

window.onload = checkIsLoggedIn()