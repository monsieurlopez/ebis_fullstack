const NUM = Number(window.prompt("Escribe un número:"))

function insertNumero (NUM) {
    let color = "yellow"
    const INSERT_NUM = document.getElementById("numero_insertado")
    INSERT_NUM.innerHTML = NUM
    if (NUM < 100) {
        color = "green"
    } else if (NUM > 200) {
        color = "red"
    }
    INSERT_NUM.style.color = color
}

insertNumero(NUM)