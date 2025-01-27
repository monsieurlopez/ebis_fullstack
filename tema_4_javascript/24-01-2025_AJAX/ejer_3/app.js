function numeroComic () {
    let inputElement = document.getElementById("text_input");
    inputValue = inputElement.value;
    inputElement.value = "";
    return inputValue
}

let valueComic
document.getElementById("btn_search").addEventListener("click", function () {
    valueComic = numeroComic();
    valueComic = Number(valueComic)

    function buscarComic(numero) {
        //Site web: https://cors-anywhere.herokuapp.com/corsdemo
        const myHeaders = new Headers();
        myHeaders.append("X-Requested-With", "XMLHttpRequest");

        const requestOptions = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow',
        };

        const proxy = "https://cors-anywhere.herokuapp.com/";
        const url = `https://xkcd.com/${numero}/info.0.json`;
        const fullUrl = `${proxy}${url}`;

        fetch(fullUrl, requestOptions)
          .then((response) => {
            if (!response.ok) {
              throw new Error(
                `Error en la solicitud: ${response.status} para el comic ${numero}`
              );
            } else {
              return response.json();
            }
          })
          .then((data) => {
            const DATOS = data.data;
            console.log(data)
            const IMG = data.img;
      
            const COMIC = `
                <div class="card text-center" style="width: 18rem;">
                  <img src="${IMG}" class="card-img-top" alt="${data.title}">
                  <div class="card-body">
                    <h2 class="card-title"> ${data.title} </h2>
                    <p> <strong> Año de publicación: </strong> ${data.year} </p>
                  </div>
                </div>
              `;

            document.getElementById("container_comic").innerHTML = COMIC;
          })
          .catch((error) => {
            if (error.message.includes("Failed to fetch")) {
                console.error("El proxy no está disponible o está bloqueado.");
              } else {
                console.error("Error en la solicitud:", error);
              }
          });
    }

    buscarComic(valueComic)
});








