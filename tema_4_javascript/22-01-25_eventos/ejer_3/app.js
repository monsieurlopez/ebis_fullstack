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
            <button id="btn_add_${PRODUCTO.name}" class="btn" onclick="actualizarCesta('add','${(PRODUCTO.name).toLowerCase()}','${PRODUCTO.price}')"> ➕ </button>
            <button id="btn_subtract_${PRODUCTO.name}" class="btn" onclick="actualizarCesta('subtract','${(PRODUCTO.name).toLowerCase()}','${PRODUCTO.price}')"> ➖ </button>
        </div>
    `
    BOX_TOOLS.appendChild(DIV_PRODUCTO);
}

let cestaCompra = [
    {
        producto: "brocha",
        cantidad: 0,
        total: 0
    },
    {
        producto: "llave",
        cantidad: 0,
        total: 0
    },
    {
        producto: "martillo",
        cantidad: 0,
        total: 0
    },
    {
        producto: "tronco",
        cantidad: 0,
        total: 0
    },
]


function actualizarCesta(accion, producto, precio) {
    for (let i = 0; i < cestaCompra.length; i++) {
        if (cestaCompra[i].producto === producto) {
            if (accion === "add") {
                cestaCompra[i].cantidad++
            } else {
                cestaCompra[i].cantidad--
            }
            cestaCompra[i].total = (cestaCompra[i].cantidad) * precio
        }
    }
    console.log(cestaCompra)
}

