class Producto {
    constructor(id, nombre, marca, modelo, categoria, stock, precio) {
        this.id = id;
        this.nombre = nombre;
        this.marca = marca;
        this.modelo = modelo;
        this.categoria = categoria;
        this.stock = stock;
        this.precio = precio;
    }
}

// array PRODUCTOS
const productos = [
    // id, producto, marca, modelo, categoria, stock, precio
    new Producto(1, `Mother MSI B450 AM4 Gaming Max`, `msi`, `b450 Gaming Max`, `motherboard`, 2, 7600),
    new Producto(2, `Motherboard ASUS Prime B450M-A`, `asus`, `Prime B450M-A`, `motherboard`, 5, 8500),
    new Producto(3, `Tarjeta gráfica NVIDIA GeForce RTX 3060`, `nvidia`, `GeForce RTX 3060`, `vga`, 3, 4500),
    new Producto(4, `SSD Kingston A2000 1TB NVMe`, `kingston`, `A2000`, `almacenamiento`, 8, 12550),
    new Producto(5, `Monitor LG 27GL83A-B`, `lg`, `27GL83A-B`, `monitor`, 4, 149499)
];

function crearProducto() {
    const nombre = prompt(`Ingrese el nombre del producto\nejemplo: Procesador AMD Ryzen 7 5700 AM2`).toLowerCase();
    const marca = prompt(`Ingrese la marca del producto`).toLowerCase();
    const modelo = prompt(`Ingrese el modelo`).toLowerCase();
    const categoria = prompt(`Ingrese la categoria`).toLowerCase();
    const stock = Number(prompt(`Ingrese el stock`))
    while (isNaN(stock)) {
        stock = Number(prompt(`Valor incorrecto ingrese un numero`))
    }
    const precio = prompt(`Ingrese el precio`);
    while (isNaN(precio)) {
        precio = Number(prompt(`Valor incorrecto ingrese un numero`))
    }
    const id = () => {
        const ids = productos.map((producto) => producto.id);
        const maxId = Math.max(...ids);
        return maxId + 1;
    }
    const productoNuevo = new Producto(id, nombre, marca, modelo, categoria, stock, precio);
    productos.push(productoNuevo);
}

// LISTA TODOS LOS PRODUCTOS
function listarProductos(arr) {
    arr.forEach((producto) => {
        const productContainer = document.createElement("div");
        productContainer.classList.add("col", "mb-5");

        const productCard = document.createElement("div");
        productCard.classList.add("card", "h-100");

        const productImage = document.createElement("img");
        productImage.classList.add("card-img-top");
        productImage.src = "https://dummyimage.com/450x300/dee2e6/6c757d.jpg";
        productImage.alt = "Product Image";

        const productDetails = document.createElement("div");
        productDetails.classList.add("card-body", "p-4");

        const productText = document.createElement("div");
        productText.classList.add("text-center");
        productText.innerHTML = `
            <h5 class="fw-bolder">${producto.nombre}</h5>
            <p>ID: ${producto.id}</p>
            <p>Marca: ${producto.marca}</p>
            <p>Modelo: ${producto.modelo}</p>
            <p>Categoría: ${producto.categoria}</p>
            <p>Stock: ${producto.stock}</p>
            <p>Precio: $${producto.precio}</p>
        `;

        const productActions = document.createElement("div");
        productActions.classList.add("card-footer", "p-4", "pt-0", "border-top-0", "bg-transparent");

        const addToCartButton = document.createElement("a");
        addToCartButton.classList.add("btn", "btn-outline-dark", "mt-auto");
        addToCartButton.href = "#";
        addToCartButton.innerText = "Agregar al carrito";

        productActions.appendChild(addToCartButton);
        productDetails.appendChild(productText);
        productCard.appendChild(productImage);
        productCard.appendChild(productDetails);
        productCard.appendChild(productActions);
        productContainer.appendChild(productCard);

        const productsContainer = document.getElementById("productContainer");
        productsContainer.appendChild(productContainer);
    });
}
listarProductos(productos)
