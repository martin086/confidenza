//Filtrar por barra de búsqueda.
const search = document.getElementById("search");
const canvas = document.getElementById("canvas");

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
                    <a href="#" class="btn btn-primary">Agregar</a>
                </div>
            </div>
            `
        }

    }
    if (canvas.innerHTML === ''){
        canvas.innerHTML = `<li>Producto no listado</li>`
    }
}

//Cargamos Catalogo por defecto.
catalogo();
//Filtrar por busqueda en search.
search.addEventListener('keyup', ()=>{
    filtrarBusqueda();
});

//Filtrar por categoría de sidebar.
const sidebarCategorias = document.querySelectorAll('.sidebar_cat');
const sidebarArray = [...sidebarCategorias];
console.log(sidebarArray);
sidebarArray.forEach(categoria => {
    console.log((categoria.id).substring(1));
});


const filtrarCategoria = ()=>{
    canvas.innerHTML = '';
    for (let producto of productos) {
        let prodId = producto.idCategoria;
        sidebarArray.forEach(categoria => {
            let catId = parseInt((categoria.id).substring(1));
            if (catId === prodId) {
                canvas.innerHTML += `
                <div class="card" style="width: 18rem;" id="canvas">
                    <img src=${producto.imagen} class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">${producto.nombre} x ${producto.tipo}</h5>
                        <p class="card-text">Precio x ${producto.unidad} = $${producto.precio}</p>
                        <a href="#" class="btn btn-primary">Agregar</a>
                    </div>
                </div>
                `
            };
        });
    };
};

for (let i = 0; i < sidebarArray.length; i++) {
    sidebarArray[i].addEventListener('click', ()=>{
        filtrarCategoria();
    });
}

