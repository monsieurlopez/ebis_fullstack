const BOX_TOOLS = document.getElementById("box_tools_productos");

const PRODUCTOS_EN_VENTA = [
  {
    name: "Brocha",
    price: 1.5,
    img: "./assets/iconos/brocha.svg",
  },
  {
    name: "Llave",
    price: 3.5,
    img: "./assets/iconos/llave.svg",
  },
  {
    name: "Martillo",
    price: 15,
    img: "./assets/iconos/martillo.svg",
  },
  {
    name: "Tronco",
    price: 2.5,
    img: "./assets/iconos/tronco.svg",
  },
];

const CESTA = document.getElementById("resumen_cesta");

let cestaCompra = {
  productos: [
    {
      producto: "brocha",
      cantidad: 0,
      total: 0,
      img: "./assets/iconos/brocha.svg",
    },

    {
      producto: "llave",
      cantidad: 0,
      total: 0,
      img: "./assets/iconos/llave.svg",
    },
    {
      producto: "martillo",
      cantidad: 0,
      total: 0,
      img: "./assets/iconos/martillo.svg",
    },
    {
      producto: "tronco",
      cantidad: 0,
      total: 0,
      img: "./assets/iconos/tronco.svg",
    },
  ],
  actualizarCesta(accion, producto, precio) {
    let totalGlobal = 0;

    for (let i = 0; i < this.productos.length; i++) {
      if (this.productos[i].producto === producto) {
        if (accion === "add") {
          this.productos[i].cantidad++;
        } else if (accion === "subtract" && this.productos[i].cantidad > 0) {
          this.productos[i].cantidad--;
        }
        this.productos[i].total = this.productos[i].cantidad * precio;
      }
    }

    cestaCompra.productos.forEach((producto, index) => {
      totalGlobal += producto.total;
    });

    CESTA.innerHTML = `
            ${this.productos
              .filter((producto) => producto.cantidad > 0)
              .map(
                (producto) =>
                  `<p class="detalle_producto">${producto.producto}: ${
                    producto.cantidad
                  } unidad(es)</p>
                    <div>
                        ${Array.from({ length: producto.cantidad })
                          .map(
                            () =>
                              `<img src="${producto.img}" alt="${producto.producto}" class="icono_producto">`
                          )
                          .join("")}
                    </div>
                `
              )
              .join("")}
            <h4 id="total_cesta">Total Global: ${totalGlobal.toFixed(2)}€</h4>
        `;
  },
};

for (const PRODUCTO of PRODUCTOS_EN_VENTA) {
  const DIV_PRODUCTO = document.createElement("div");
  DIV_PRODUCTO.classList.add("div_producto");
  DIV_PRODUCTO.id = `div_${PRODUCTO.name}`;
  DIV_PRODUCTO.innerHTML = `
        <h3>${PRODUCTO.name}</h3>
        <img src="${PRODUCTO.img}" alt="${PRODUCTO.name} class="img_producto">
        <p class="price"> <strong>Precio:</strong> ${PRODUCTO.price}€ </p>
        <div>
            <button id="btn_add_${
              PRODUCTO.name
            }" class="btn" onclick="cestaCompra.actualizarCesta('add','${PRODUCTO.name.toLowerCase()}','${
    PRODUCTO.price
  }')"> ➕ </button>
            <button id="btn_subtract_${
              PRODUCTO.name
            }" class="btn" onclick="cestaCompra.actualizarCesta('subtract','${PRODUCTO.name.toLowerCase()}','${
    PRODUCTO.price
  }')"> ➖ </button>
        </div>
    `;
  BOX_TOOLS.appendChild(DIV_PRODUCTO);
}
