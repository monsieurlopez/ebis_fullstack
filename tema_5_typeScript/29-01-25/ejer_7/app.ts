let button = document.getElementById("btn_submit") as HTMLButtonElement | null;

function submit(): void {
    let input = document.getElementById("input") as HTMLInputElement | null;
    if (input) {
        const INPUT_VALUE : string = input.value.trim()
        /*if (INPUT_VALUE === "" || INPUT_VALUE ===) {
            console.error("Invalid input value")
            input.value = ""
        }*/
        console.log(INPUT_VALUE);
        input.value = ""
    } else {
        console.error("No se encontró el input");
    }
}

button?.addEventListener("click", submit);


