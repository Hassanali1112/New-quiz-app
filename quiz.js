let newUser = {};

// // logo
// let logo = document.querySelector(".logo");
// logo.addEventListener("click", () => {
//   location.assign("./index.html");
// });

// let body = document.querySelector("body");
// let modeBtn = document.querySelector(".mode");

// modeBtn.addEventListener("click", () => {
//   if (modeBtn.checked) {
//     localStorage.setItem("mode", "dark");
//     checkMode();
//   } else {
//     localStorage.setItem("mode", "light");
//     checkMode();
//   }
// });
// let checkMode = () => {
//   let mode = localStorage.getItem("mode");
//   if (mode === "dark") {
//     modeBtn.setAttribute("checked","checked")
//     body.style.backgroundColor = "black";
//     // body.style.color = "white";
//   } else {
//     body.style.backgroundColor = "white";
//     // body.style.color = "black";
//   }
// };
// let checkDefaultMode = () => {
//   let mode = localStorage.getItem("mode");
//   if (mode === null) {
//     body.style.backgroundColor = "white";
//     body.style.color = "black";
//     checkMode();
//   } else {
//     checkMode();
//   }
// };
//  window.onload = checkDefaultMode()
// code for welcome file
// sign up

let signUpName = document.querySelector("#name");
let signUpEmail = document.querySelector("#email");
let signUpPassword = document.querySelector("#password");
let signUp = document.querySelector("#sumitSignUp");
let signUpClose = document.querySelector(".signupClose");
let signInModal = document.querySelector(".sign-in");

signUp.addEventListener("click", () => {
  if (
    signUpName.value === "" ||
    signUpEmail.value === "" ||
    signUpPassword.value === ""
  ) {
    Swal.fire({
      title: "Input field required",
      text: "Kindly fill all input fields",
      icon: "error",
    });
  } else {
    // adding values in object
    newUser.name = signUpName.value;
    newUser.email = signUpEmail.value;
    newUser.password = signUpPassword.value;
    console.log(newUser);
    signUpName.value = "";
    signUpEmail.value = "";
    signUpPassword.value = "";
    let userData = JSON.stringify(newUser);
    localStorage.setItem("userData", userData);
    Swal.fire({
      title: "Account has been created",
      text: "For taking test kindly login",
      icon: "success",
    });
    signUpClose.click();
    signInModal.click();
  }
});

// sign in
let signInEmail = document.querySelector("#signInEmail");
let signInPassword = document.querySelector("#signInPassword");

let signIn = document.querySelector("#sumitSignIn");
signIn.addEventListener("click", () => {
  let userData = localStorage.getItem("userData");
  let data = JSON.parse(userData);

  if (signInEmail.value === "" || signInPassword.value === "") {
    Swal.fire({
      title: "Input field required",
      text: "Kindly fill all input fields",
      icon: "error",
    });
  } else if (
    signInEmail.value === data.email &&
    signInPassword.value === data.password
  ) {
    userName = document.querySelector("#user-name");
    console.log(userName);
    location.assign("./courses/subject.html");
  } else {
    console.table(signInEmail.value, signInPassword.value);
    Swal.fire({
      title: "Email Or Password is invalid",
      text: "Kindly fill all input fields properly",
      icon: "error",
    });
  }
});
