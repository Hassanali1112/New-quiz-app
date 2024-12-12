// logo


let body = document.querySelector("body");
let modeBtn = document.querySelector(".mode");

modeBtn.addEventListener("click", () => {
  if (modeBtn.checked) {
    localStorage.setItem("mode", "dark");
    checkMode();
  } else {
    localStorage.setItem("mode", "light");
    checkMode();
  }
});
let checkMode = () => {
  let mode = localStorage.getItem("mode");
  if (mode === "dark") {
    modeBtn.setAttribute("checked","checked")
    body.style.backgroundColor = "black";
    body.style.color = "blue";
  } else {
    body.style.backgroundColor = "white";
    body.style.color = "black";
  }
};
let checkDefaultMode = () => {
  let mode = localStorage.getItem("mode");
  if (mode === null) {
    body.style.backgroundColor = "white";
    body.style.color = "black";
    checkMode();
  } else {
    checkMode();
  }
};
 window.onload = checkDefaultMode()