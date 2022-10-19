//Variables de barra de búsqueda y lienzo de productos.
const canvas = document.getElementById("canvas");
const search = document.getElementById("search");


const renderizarCatalogo = ()=>{
    productos.forEach((producto) => {
        const card = document.createElement("div");
        card.innerHTML += `
        <div class="card" style="width: 18rem;" id="card${producto.idCategoria}${producto.idProducto}">
            <img src=${producto.imagen} class="card-img-top" alt="${producto.nombre}">
            <div class="card-body">
                <h5 class="card-title">${producto.nombre} x ${producto.tipo}</h5>
                <p class="card-text">Precio x ${producto.unidad} = $${producto.precio}</p>
                <a id="agregarBtn${producto.idCategoria}${producto.idProducto}" class="btn btn-primary">Agregar</a>
            </div>
        </div>
        `
        canvas.appendChild(card);
    })
};

//Cargamos catálogo por defecto.
renderizarCatalogo();

//Función para filtrar por busqueda en search.
const filtrarBusqueda = ()=>{
    canvas.innerHTML = '';
    const texto = search.value.toLowerCase();
    for (let producto of productos){
        let nombre = producto.nombre.toLowerCase();

        if (nombre.indexOf(texto) !== -1){
            const card = document.createElement("div");
            card.innerHTML += `
            <div class="card" style="width: 18rem;" id="card${producto.idCategoria}${producto.idProducto}">
                <img src=${producto.imagen} class="card-img-top" alt="${producto.nombre}">
                <div class="card-body">
                    <h5 class="card-title">${producto.nombre} x ${producto.tipo}</h5>
                    <p class="card-text">Precio x ${producto.unidad} = $${producto.precio}</p>
                    <a id="agregarBtn${producto.idCategoria}${producto.idProducto}" class="btn btn-primary">Agregar</a>
                </div>
            </div>
            `
            canvas.appendChild(card);
        }

    }
    if (canvas.innerHTML === ''){
        canvas.innerHTML = `<li>Producto no listado</li>`
    }
}

//Filtrar por busqueda en search.
search.addEventListener('keyup', ()=>{
    filtrarBusqueda();
});

//Variables de sidebar.
//const sidebarCategorias = document.querySelectorAll('.sidebar_cat');
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
    for (let producto of productos) {
        let prodId = producto.idCategoria;
        sidebarArray.forEach(categoria => {
            let catId = parseInt(categoria.value);
            if (catId === prodId) {
                const card = document.createElement("div");
                card.innerHTML += `
                <div class="card" style="width: 18rem;" id="card${producto.idCategoria}${producto.idProducto}">
                    <img src=${producto.imagen} class="card-img-top" alt="${producto.nombre}">
                    <div class="card-body">
                        <h5 class="card-title">${producto.nombre} x ${producto.tipo}</h5>
                        <p class="card-text">Precio x ${producto.unidad} = $${producto.precio}</p>
                        <a id="agregarBtn${producto.idCategoria}${producto.idProducto}" class="btn btn-primary">Agregar</a>
                    </div>
                </div>
                `
                canvas.appendChild(card);
            };
        });
    };
};
/*HAY QUE REVISAR LA FORMULA Y EL LLAMADO*/
//Filtrar por categoría de sidebar.
sidebarArray.addEventListener('click', ()=>{
    let catId = sidebarArray[1].value;
    console.log(catId);
    //filtrarCategoria(categoria);
});

