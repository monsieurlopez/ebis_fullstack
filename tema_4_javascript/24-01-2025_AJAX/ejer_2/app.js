function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min);
}

const NUMERO = getRandomInt(1, 500);

function buscarPersonaje(numero) {
  fetch(`https://api.disneyapi.dev/character/${numero}`)
    .then((response) => {
      if (!response.ok) {
        throw new Error(
          `Error en la solicitud: ${response.status} para el personaje ${numero}`
        );
      } else {
        return response.json();
      }
    })
    .then((data) => {
      const DATOS = data.data;
      const IMG = DATOS.imageUrl;

      const PJ = `
          <div class="card" style="width: 18rem;">
            <img src="${IMG}" class="card-img-top" alt="${DATOS.name}">
            <div class="card-body">
              <h2 class="card-title"> ${DATOS.name} </h2>
              <p> <strong> ID: </strong> ${DATOS._id} </p>
            </div>
             <ul class="list-group list-group-flush">
                ${DATOS.films
                  .map((film) => `<li class="list-group-item">${film}</li>`)
                  .join("")}
            </ul>
          </div>
        `;

      document.getElementById("personaje").innerHTML = PJ;
    })
    .catch((error) => {
      console.error(error);
    });
}

buscarPersonaje(NUMERO);
