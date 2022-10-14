//Variables de barra de búsqueda y lienzo de productos.
const search = document.getElementById("search");
const canvas = document.getElementById("canvas");

//Cargamos catálogo por defecto.
renderizarCatalogo();

//Función para filtrar por busqueda en search.
const filtrarBusqueda = ()=>{
    canvas.innerHTML = '';
    const texto = search.value.toLowerCase();
    for (let producto of productos){
        let nombre = producto.nombre.toLowerCase();

        if (nombre.indexOf(texto) !== -1){
            canvas.innerHTML += `
            <div class="card" style="width: 18rem;" id="canvas">
                <img src=${producto.imagen} class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">${producto.nombre} x ${producto.tipo}</h5>
                    <p class="card-text">Precio x ${producto.unidad} = $${producto.precio}</p>
                    <a id="agregarBtn" href="#" class="btn btn-primary">Agregar</a>
                </div>
            </div>
            `
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
// console.log(sidebarArray);
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
                canvas.innerHTML += `
                <div class="card" style="width: 18rem;" id="canvas">
                    <img src=${producto.imagen} class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">${producto.nombre} x ${producto.tipo}</h5>
                        <p class="card-text">Precio x ${producto.unidad} = $${producto.precio}</p>
                        <a id="agregarBtn" href="#" class="btn btn-primary">Agregar</a>
                    </div>
                </div>
                `
            };
        });
    };
};
/*HAY QUE REVISAR LA FORMULA Y EL LLAMADO*/
//Filtrar por categoría de sidebar.
for (let i = 0; i < sidebarArray.length; i++) {
    sidebarArray[i].addEventListener('click', (event) => {
        console.log(event.target.value)
    });
    filtrarCategoria(i);
}

