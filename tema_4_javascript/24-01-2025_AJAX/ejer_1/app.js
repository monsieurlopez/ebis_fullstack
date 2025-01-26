fetch("https://gutendex.com/books")
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    const DATOS = data.results;
    console.log(DATOS);

    const ARRAY_CARDS = DATOS.map((item) => {
        const imageUrl = item.formats ? item.formats["image/jpeg"] : "placeholder.jpg";
        return `
          <div class="card" style="width: 18rem;">
            <img src="${imageUrl}" class="card-img-top" alt="${item.title}">
            <div class="card-body">
              <h5 class="card-title"> ${item.title} </h5>
              <p class="card-text">${item.authors[0]?.name}</p>
            </div>
          </div>
        `;
      });

    document.getElementById("section_cards").innerHTML = ARRAY_CARDS.join("");
  })
  .catch((error) => {
    console.error(error);
  });
