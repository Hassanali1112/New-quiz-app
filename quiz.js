let newUser = {};

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
