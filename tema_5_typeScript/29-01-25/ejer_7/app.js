var button = document.getElementById("btn_submit");
function submit() {
    var input = document.getElementById("input");
    if (input) {
        var INPUT_VALUE = input.value.trim();
        /*if (INPUT_VALUE === "" || INPUT_VALUE ===) {
            console.error("Invalid input value")
            input.value = ""
        }*/
        console.log(INPUT_VALUE);
        input.value = "";
    }
    else {
        console.error("No se encontró el input");
    }
}
button === null || button === void 0 ? void 0 : button.addEventListener("click", submit);
