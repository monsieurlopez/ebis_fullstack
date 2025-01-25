const BOX_TOOLS = document.getElementById("box_tools_productos")

const PRODUCTOS_EN_VENTA = [
    {
        name: "Brocha",
        price: 1.5,
        img: "./assets/iconos/brocha.svg"
    },
    {
        name: "Llave",
        price: 3.5,
        img: "./assets/iconos/llave.svg"
    },
    {
        name: "Martillo",
        price: 15,
        img: "./assets/iconos/martillo.svg"
    },
    {
        name: "Tronco",
        price: 2.5,
        img: "./assets/iconos/tronco.svg"
    }
]

for (const PRODUCTO of PRODUCTOS_EN_VENTA) {
    const DIV_PRODUCTO = document.createElement("div")
    DIV_PRODUCTO.classList.add("div_producto")
    DIV_PRODUCTO.id = `div_${PRODUCTO.name}`
    DIV_PRODUCTO.innerHTML = `
        <h3>${PRODUCTO.name}</h3>
        <img src="${PRODUCTO.img}" alt="${PRODUCTO.name} class="img_producto">
        <p class="price"> <strong>Precio:</strong> ${PRODUCTO.price}€ </p>
        <div>
            <button id="btn_add_${PRODUCTO.name}" class="btn"> ➕ </button>
            <button id="btn_subtract_${PRODUCTO.name}" class="btn"> ➖ </button>
        </div>
    `
    BOX_TOOLS.appendChild(DIV_PRODUCTO);
}
