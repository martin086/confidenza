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

const Toast = Swal.mixin({
    toast: true,
    position: 'top-right',
    iconColor: 'white',
    customClass: {
        popup: 'colored-toast'
    },
    showConfirmButton: false,
    timer: 1500,
    timerProgressBar: true
})

//Función para añadir productos al carrito.
const agregarAlCarrito = (id) => {
    const producto = productos.find((producto) => producto.idProducto === id);
    const productoListadoEnCarrito = carrito.find((producto) => producto.idProducto === id);
    if(productoListadoEnCarrito){
        productoListadoEnCarrito.cantidad++;
        Toast.fire({
            icon: 'info',
            title: 'Este producto ya existe en el carrito.',
        });
    }else {
        carrito.push(producto);
        localStorage.setItem("carrito", JSON.stringify(carrito));
        Toast.fire({
            icon: 'success',
            title: 'Producto añadido.',
        });
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
            Toast.fire({
                icon: 'error',
                title: 'Producto eliminado.',
            });
        });
    });
    calculoTotal();
}


//Función para eliminar un producto del carrito:
const eliminarDelCarrito = (id) => {
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

//Confirmación de compra.
const checkoutBtn = document.getElementById('checkoutBtn');
checkoutBtn.addEventListener('click', ()=>{
    if (carrito.length >= 1){
        Swal.fire({
            title: 'Estas a punto de confirmar tu pedido',
            text: "Deseas continuar?",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#4ba722',
            cancelButtonColor: '#3085d6',
            confirmButtonText: 'Confirmar',
            cancelButtonText: 'Seguir comprando',
        }).then((result) => {
            if(result.isConfirmed) {
                console.log(carrito);
                Swal.fire ({
                    title: "Gracias por tu compra",
                    text: "Procesaremos tu pedido a la brevedad.",
                    icon: "success",
                    confirmButtonText: "Aceptar",
                    confirmButtonColor: "#4ba722",
                });
            }
        })
    } else {
        Swal.fire({
            icon: 'error',
            title: 'El carrito está vacío',
            text: 'Por favor agrega algún producto.',
        })
    }
});


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


//Función para filtrar por categoría de sidebar.
const sidebarCategorias = document.getElementById('sidebarCategorias');
const filtrarCategoria = ()=>{
    canvas.innerHTML = '';
    const sidebarCat = sidebarCategorias[sidebarCategorias.selectedIndex].value;
    for (let producto of productos) {
        let productoCat = producto.nombre;
        if (sidebarCat === productoCat){
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
        } else if (sidebarCat === "Todas") {
            canvas.innerHTML = '';
            renderizarCatalogo();
        };            
    };
};

//Filtrar por categoría de sidebar.
sidebarCategorias.addEventListener('click', ()=>{
    filtrarCategoria();
});


// Boton sticky scroll to top.
const scrollToTopButton = document.getElementById('js-top');

// Función que muestra el boton si scrolleamos pasada la altura de la ventana inicial.
const scrollFunc = () => {
    // Obtenemos el valor actual de scroll vertical.
    let y = window.scrollY;
    // Si el valor es mayor a la altura de la ventan, agregamos la clase para mostrar el boton.
    if (y > 0) {
    scrollToTopButton.className = "top-link show";
    } else {
    scrollToTopButton.className = "top-link hide";
    }
};

window.addEventListener("scroll", scrollFunc);

const scrollToTop = () => {
    // Declaramos una variable para el n° de pixels de distancia al tope del document.
    const c = document.documentElement.scrollTop || document.body.scrollTop;
    // Si el n° es mayor a 0, scrolleamos de vuelta a 0, lo que es el tope del cocument.
    if (c > 0) {
    // ScrollTo necesita los parámetros "x" e "y" (coordenadas).
    window.scrollTo(0, 0);
    }
};

// Cuando se clickea el boton, llamamos a la función ScrolltoTop
scrollToTopButton.onclick = function(e) {
    e.preventDefault();
    scrollToTop();
}