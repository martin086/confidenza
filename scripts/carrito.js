//Importamos productos del script correspondiente.
import {productos} from './productos.js';
//Variables de barra de búsqueda y lienzo de productos:
const canvas = document.getElementById("canvas");
const search = document.getElementById("search");
//Variables de Carrito:
let carrito = [];
const moneda = "$";
const carritoItems = document.getElementById('carritoItems');
const subTotalItems = document.getElementById('subTotalItems');
const total = document.getElementById('total');
const iva = document.getElementById('iva');


//Función para renderizar el catálogo de productos.
function renderizarCatalogo() {
    productos.forEach((producto) => {
        const card = document.createElement("div");
        card.innerHTML += `
        <div class="card" style="width: 18rem;" id="card${producto.idProducto}">
            <img src=${producto.imagen} class="card-img-top" alt="${producto.nombre}">
            <div class="card-body">
                <h5 class="card-title">${producto.nombre} x ${producto.tipo}</h5>
                <p class="card-text">Precio x ${producto.unidad} = $${producto.precio}</p>
                <button id="agregarBtn${producto.idProducto}" class="btn btn-primary">Agregar</button>
            </div>
        </div>
        `;
        canvas.appendChild(card);

        //Agregar productos al carrito:
        const botonAdd = document.getElementById(`agregarBtn${producto.idProducto}`);
        botonAdd.addEventListener('click', () => {
            console.log(botonAdd);
            agregarAlCarrito(producto.idProducto);
        });
    });
}

//Función para añadir productos al carrito.
const agregarAlCarrito = (id) => {
    const producto = productos.find((producto) => producto.idProducto === id);
    const productoListadoEnCarrito = carrito.find((producto) => producto.idProducto === id);
    if(productoListadoEnCarrito){
        productoListadoEnCarrito.cantidad++;
    }else {
        carrito.push(producto);
        localStorage.setItem("carrito", JSON.stringify(carrito));
    }
    calculoTotal();
    mostrarCarrito();
}

//Función para calcular resúmen con el total de la compra.
const envioSelect = document.getElementById('envioSelect');
const calculoTotal = () => {
    let totalCompra = 0; 
    carrito.forEach((producto) => {
        totalCompra += producto.precio * producto.cantidad;
    })
    
    const envio = parseInt(envioSelect[envioSelect.selectedIndex].value);
    const totalIva = parseFloat(((totalCompra + envio) * 0.21).toFixed(2));
    subTotalItems.innerHTML = `${moneda}${totalCompra}`;
    iva.innerHTML = `${moneda}${totalIva}`;
    total.innerHTML = `${moneda}${parseFloat(totalCompra+envio+totalIva).toFixed(2)}`;
    const xItems = document.getElementById('xItems');
    xItems.innerHTML = `${carrito.length} item(s)`;
}

envioSelect.addEventListener('click', ()=>{
    calculoTotal();
});

//Función para mostrar el carrito.
const mostrarCarrito = () => {
    carritoItems.innerHTML = "";
    carrito.forEach((producto)=>{
        const elementoCart = document.createElement("div");
        elementoCart.innerHTML = `
        <div class="row mb-4 d-flex justify-content-between align-items-center">
            <div class="col-md-2 col-lg-2 col-xl-2">
                <img
                    src="${producto.imagen}"
                    class="img-fluid rounded-3" alt="${producto.nombre}">
            </div>
            <div class="col-md-3 col-lg-3 col-xl-3">
                <h6 class="text-muted">${producto.nombre} x ${producto.unidad}.</h6>
                <h6 class="text-black mb-0">${producto.tipo}</h6>
            </div>
            <div class="col-md-3 col-lg-3 col-xl-2 d-flex">
                <button id="minusBtn${producto.idProducto}" class="btn btn-link px-2"
                    onclick="this.parentNode.querySelector('input[type=number]').stepDown()">
                    <i class="fas fa-minus"></i>
                </button>
            
                <input id="cantidad${producto.idProducto}" min="1" name="quantity" value="${producto.cantidad}" type="number"
                    class="form-control form-control-sm text-center col-sm-2"/>
            
                <button id="plusBtn${producto.idProducto}" class="btn btn-link px-2"
                    onclick="this.parentNode.querySelector('input[type=number]').stepUp()">
                    <i class="fas fa-plus"></i>
                </button>
            </div>
            <div class="col-md-3 col-lg-2 col-xl-2 offset-lg-1">
                <h6 class="mb-0 text-end">${moneda}${producto.precio}</h6>
            </div>
            <div class="col-md-1 col-lg-1 col-xl-1 text-end">
                <button id="del${producto.idProducto}" href="#!" class="btn btn-link px-2 text-muted"><i class="fas fa-times"></i></button>
            </div>  
        </div>
        <hr class="my-4">
        `
        carritoItems.appendChild(elementoCart);
        
        //Incrementar o Dismunir cantidad de un mismo item:
        const minusBtn = document.getElementById(`minusBtn${producto.idProducto}`);
        const plusBtn = document.getElementById(`plusBtn${producto.idProducto}`);
        let cantidad = document.getElementById(`cantidad${producto.idProducto}`);
        let cantActual = cantidad.value;

        plusBtn.addEventListener('click', ()=>{
            cantActual++;
            cantidad.value = cantActual;
            producto.cantidad = parseInt(cantidad.value);
            console.log(cantActual);
            calculoTotal();
            localStorage.setItem("carrito", JSON.stringify(carrito));
        });
        
        minusBtn.addEventListener('click', ()=>{
            cantActual--;
            if(cantActual <= 1){
                cantActual = 1;
            }
            cantidad.value = cantActual;
            producto.cantidad = parseInt(cantidad.value);
            console.log(cantActual);
            calculoTotal();
            localStorage.setItem("carrito", JSON.stringify(carrito));
        });

        //Eliminar productos del carrito:
        const delBtn = document.getElementById(`del${producto.idProducto}`);
        delBtn.addEventListener('click', ()=>{
            eliminarDelCarrito(producto.idProducto);
        })
    })
    calculoTotal();
}


//Función para eliminar un producto del carrito:
function eliminarDelCarrito(id) {
    const producto = carrito.find((producto) => producto.idProducto === id);
    const indice = carrito.indexOf(producto);
    producto.cantidad = 1;
    carrito.splice(indice, 1);
    mostrarCarrito();

    //LocalStorage:
    localStorage.setItem("carrito", JSON.stringify(carrito));
}

//Vaciamos todo el carrito de compras: 
const vaciarCarrito = document.getElementById('vaciarCarrito');
//Función para vaciar todo el carrito: 
const vaciarElCarrito = () => {
    carrito = [];
    mostrarCarrito();
    calculoTotal();
    localStorage.clear();
}
//Llamamos a la función de vaciado cuando el usuario clickea.
vaciarCarrito.addEventListener('click', () => {
    vaciarElCarrito();
})

//Si hay algo en el localStorage, lo cargamos en el carrito. 
if(localStorage.getItem("carrito")) {
    carrito = JSON.parse(localStorage.getItem("carrito"));
};

//Cargamos catálogo por defecto.
renderizarCatalogo();
//Mostramos carrito actual.
mostrarCarrito();

//***Funciones de filtrado de catálogo***
//Función para filtrar por busqueda en search.
const filtrarBusqueda = ()=>{
    canvas.innerHTML = '';
    const texto = search.value.toLowerCase();
    for (let producto of productos){
        let nombre = producto.nombre.toLowerCase();

        if (nombre.indexOf(texto) !== -1){
            const card = document.createElement("div");
            card.innerHTML += `
            <div class="card" style="width: 18rem;" id="card${producto.idProducto}">
                <img src=${producto.imagen} class="card-img-top" alt="${producto.nombre}">
                <div class="card-body">
                    <h5 class="card-title">${producto.nombre} x ${producto.tipo}</h5>
                    <p class="card-text">Precio x ${producto.unidad} = $${producto.precio}</p>
                    <button id="agregarBtn${producto.idProducto}" class="btn btn-primary">Agregar</button>
                </div>
            </div>
            `;
            canvas.appendChild(card);

            //Agregar productos al carrito:
            const botonAdd = document.getElementById(`agregarBtn${producto.idProducto}`);
            botonAdd.addEventListener('click', ()=>{
                console.log(botonAdd);
                agregarAlCarrito(producto.idProducto);
            });
        };
    }
    if (canvas.innerHTML === ''){
        canvas.innerHTML = `<li>Producto no listado</li>`
    };
};

//Llamamos a la función de busqueda al tipear en search.
search.addEventListener('keyup', ()=>{
    filtrarBusqueda();
});

//Variables de sidebar.
const sidebarCategorias = document.getElementById('sidebarCategorias');
// console.log(Array.isArray(sidebarCategorias));
const sidebarArray = [...sidebarCategorias];
// console.log(Array.isArray(sidebarArray));
// console.log(sidebarArray[1].value);
// sidebarArray.forEach(categoria => {
//     console.log(categoria.value);
// });

//Función para filtrar por categoría de sidebar.
const filtrarCategoria = (categoria)=>{
    canvas.innerHTML = '';
    const productoCat = productos.find((producto) => producto.nombre === categoria);
    const sidebarCat = sidebarArray.options[sidebarArray.selectedIndex].text;
    for (let producto of productos) {
        if (productoCat === sidebarCat) {
            const card = document.createElement("div");
            card.innerHTML += `
            <div class="card" style="width: 18rem;" id="card${producto.idProducto}">
                <img src=${producto.imagen} class="card-img-top" alt="${producto.nombre}">
                <div class="card-body">
                    <h5 class="card-title">${producto.nombre} x ${producto.tipo}</h5>
                    <p class="card-text">Precio x ${producto.unidad} = $${producto.precio}</p>
                    <button id="agregarBtn${producto.idProducto}" class="btn btn-primary">Agregar</button>
                </div>
            </div>
            `;
            canvas.appendChild(card);

            //Agregar productos al carrito: 
            const botonAdd = document.getElementById(`agregarBtn${producto.idProducto}`);
            botonAdd.addEventListener("click", () => {
                console.log(botonAdd);
                agregarAlCarrito(producto.idProducto);
            });
        };
    };
};
/*HAY QUE REVISAR LA FORMULA Y EL LLAMADO*/
//Filtrar por categoría de sidebar.
sidebarCategorias.addEventListener('click', ()=>{
    let categoria = sidebarArray.options[sidebarArray.selectedIndex].text;
    console.log(categoria);
    filtrarCategoria(categoria);
});




