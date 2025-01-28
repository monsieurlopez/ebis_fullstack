fetch("https://rickandmortyapi.com/api/location")
  .then((response) => {
    if (!response.ok) {
      throw new Error(`Error en la solicitud: ${response.status}`);
    } else {
      return response.json();
    }
  })
  .then((data) => {
    const DATOS = data.results;
    const CONTAINER_SELECT = document.getElementById("box_select_planeta");

    //Creación del select
    const SELECT = document.createElement("select");
    SELECT.classList.add("form-select");

    //Creación de opción por defecto
    const DEFAULT_OPTION = document.createElement("option");
    DEFAULT_OPTION.value = "";
    DEFAULT_OPTION.textContent = "Selecciona un planeta";
    DEFAULT_OPTION.disabled = true;
    DEFAULT_OPTION.selected = true;
    SELECT.appendChild(DEFAULT_OPTION);

    //Agregamos todos los planetas de la API
    DATOS.forEach((dato) => {
      const OPTION = document.createElement("option");
      OPTION.value = dato.name;
      OPTION.textContent = dato.name;
      SELECT.appendChild(OPTION);
    });

    SELECT.addEventListener("change", (e) => {
      const PLANET = e.target.value;
      for (const OPTION_SELECTED of DATOS) {
        if (OPTION_SELECTED.name === PLANET) {
          handleResidentChange(OPTION_SELECTED.residents, PLANET);
        }
      }
    });

    CONTAINER_SELECT.appendChild(SELECT);

    function handleResidentChange(residentUrls, planeta) {
      //Verificamos si hay una alerta antes de crear la siguiente
      const VERIF_ALERTA = document.getElementsByClassName("alert")[0]
      if (VERIF_ALERTA) VERIF_ALERTA.remove()

      const CONTAINER_PJ = document.getElementById("personajes_planeta");
      CONTAINER_PJ.innerHTML = "";
      for (const URL of residentUrls) {
        fetch(URL)
          .then((response) => {
            if (!response.ok) {
              throw new Error(`Error en la solicitud: ${response.status}`);
            } else {
              return response.json();
            }
          })
          .then((data) => {
            const CARD = document.createElement("div");
            CARD.classList.add("card");
            CARD.style.width = "18rem";

            CARD.innerHTML = `
              <img src="${data.image}" class="card-img-top" alt="${data.name}">
              <div class="card-body">
                <h3 class="card-title">${data.name}</h3>
                <p class="card-text"><strong>ID:</strong> ${data.id}</p>
                <p class="card-text"><strong>Especie:</strong> ${data.species}</p>
              </div>
            `;

            CONTAINER_PJ.appendChild(CARD);
          })
          .catch((error) => {
            console.error(error);
          });
      }

      //Cambiar el mensaje de la alerta dependiendo de si el planeta esta habitado o no
      let textoAlerta = `Has seleccionado el planeta ${planeta}.`
      if (residentUrls.length === 0) {
          textoAlerta = `El planeta ${planeta} esta deshabitado.`
      }

      //Construcción de alerta
      const ALERT = document.createElement("div");
      ALERT.classList.add("alert", "alert-success", "alert-dismissible", "fade", "show");
      ALERT.setAttribute("role", "alert");
      ALERT.innerHTML = `
        ${textoAlerta}
        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
      `;
      ALERT.style.position = "fixed";
      ALERT.style.top = "20px";
      ALERT.style.right = "20px";
      ALERT.style.zIndex = "999";

      //Escuchamos el evento para cerrar la alerta de forma manual
      const CLOSE_BTN = ALERT.querySelector(".btn-close");
      CLOSE_BTN.addEventListener("click", () => {
        ALERT.remove();
      });

      document.getElementById("section_planetas").appendChild(ALERT);

      //  Cerramos la alerta automaticamente despues de 5 segundos
      setTimeout(() => {
        if (document.body.contains(ALERT)) {
          ALERT.remove();
        }
      }, 5000);
    }
  })
  .catch((error) => {
    console.error(error);
  });
