const NUM = Number(window.prompt("Escribe un número:"))

function insertNumero (NUM) {
    const INSERT_NUM = document.getElementById("numero_insertado")
    INSERT_NUM.innerHTML = NUM
}

insertNumero(NUM)