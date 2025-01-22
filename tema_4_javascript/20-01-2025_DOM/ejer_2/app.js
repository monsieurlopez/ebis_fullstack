const NOMBRE = "Sergio López Ruiz"

const SALUDO = document.createElement("p")
SALUDO.innerHTML = `Hola, me llamo ${NOMBRE}.`

const CONTAINER = document.getElementById("container_section")
CONTAINER.appendChild(SALUDO)
