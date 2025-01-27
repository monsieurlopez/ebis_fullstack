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
    console.log(DATOS);

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

    SELECT.addEventListener("change", () => {
        console.log(DATOS[0].residents);//Seguir por aquí
        handleResidentChange(DATOS.residents);
    });

    CONTAINER_SELECT.appendChild(SELECT);

    function handleResidentChange(residentUrls) {
        // Limpiar cualquier contenido anterior
        const container = document.getElementById("section_planetas");
        container.innerHTML = ""; // Limpiar el contenido
    }
  })
  .catch((error) => {
    console.error(error);
  });

