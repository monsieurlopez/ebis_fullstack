const INPUT = document.getElementById("input") as HTMLInputElement;
const BUTTON = document.getElementById("btn_submit") as HTMLButtonElement;

BUTTON.addEventListener("click", function () {
  console.log(INPUT.value)
})
