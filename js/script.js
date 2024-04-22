// CoderHouse - JavaScript - Entrega 3
// Alumno: Hernán Loureiro
// Alumno: Hernán Loureiro
console.log(`Entrega 3: CoderHard`)
//-----------------------------------------------------------------------------

// clase constructora de productos
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
    new Producto(1, `Mother MSI B450 AM4 Gaming Max`, `msi`, `b450 Gaming Max`, `motherboard`, 2, 76000),
    new Producto(2, `Motherboard ASUS Prime B450M-A`, `msi`, `Prime B450M-A`, `motherboard`, 5, 85000),
    new Producto(3, `Tarjeta gráfica NVIDIA GeForce RTX 3060`, `nvidia`, `GeForce RTX 3060`, `tarjeta gráfica`, 3, 450000),
    new Producto(4, `SSD Kingston A2000 1TB NVMe`, `kingston`, `A2000`, `almacenamiento`, 8, 120000),
    new Producto(5, `Monitor LG 27GL83A-B`, `lg`, `27GL83A-B`, `monitor`, 4, 320000)
];

// CREAR UN PRODUCTO NUEVO y Agregarlo al array
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
function listarTodo(arr) {
    arr.forEach((el) => {
        console.log(`ID: ${el.id}`);
        console.log(`Producto: ${el.nombre}`);
        console.log(`Marca: ${el.marca}`);
        console.log(`Modelo: ${el.modelo}`);
        console.log(`Categoría: ${el.categoria}`);
        console.log(`Stock: ${el.stock}`);
        console.log(`Precio: $${el.precio}\n\n`);
    });
}

// BUSCAR PRODUCTO
function buscarProducto(arr, propiedad, busqueda) {
    const resultado = arr.filter((producto) => producto[propiedad].includes(busqueda));
    if (resultado.length === 0) {
        alert(`No se encontraron productos.`);
    } else {
        const mensajeResultado = resultado.map((producto) =>
            `\n
            ID: ${producto.id}
            Producto: ${producto.nombre}
            Marca: ${producto.marca}
            Modelo: ${producto.modelo}
            Categoria: ${producto.categoria}
            Stock: ${producto.stock}
            Precio: ${producto.precio}`).join(`\n`);
        alert(`Productos encontrados (${resultado.length} resultados):\n${mensajeResultado}`)
    }
}

/* let busca = prompt('ingrese la busqueda') */


listarTodo(productos)





