const formulario = document.getElementById("search");
const resultado = document.getElementById("canvas");

const filtrar = ()=>{
    resultado.innerHTML = '';
    const texto = formulario.value.toLowerCase();
    for (let producto of productos){
        let nombre = producto.nombre.toLowerCase();

        if (nombre.indexOf(texto) !== -1){
            resultado.innerHTML += `
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
    if (resultado.innerHTML === ''){
        resultado.innerHTML = `<li>Producto no listado</li>`
    }
}

formulario.addEventListener('keyup', ()=>{
    filtrar();
})
