var INPUT = document.getElementById("input");
var BUTTON = document.getElementById("btn_submit");
BUTTON === null || BUTTON === void 0 ? void 0 : BUTTON.addEventListener("click", function () {
    if (INPUT) {
        console.log(INPUT.value);
    }
});
