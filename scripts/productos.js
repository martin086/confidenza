// Array de Productos
const productos = [
    {
        idCategoria: 1,
        idProducto: 1,
        nombre: 'Caño de Cobre',
        tipo: '1/4"',
        precio: 1072,
        unidad: 'mt',
        imagen: './assets/productos/01-cobre.jpg',
    },
    {
        idCategoria: 1,
        idProducto: 2,
        nombre: 'Caño de Cobre',
        tipo: '5/16"',
        precio: 1353,
        unidad: 'mt',
        imagen: './assets/productos/01-cobre.jpg',
    },
    {
        idCategoria: 1,
        idProducto: 3,
        nombre: 'Caño de Cobre',
        tipo: '3/8"',
        precio: 1707,
        unidad: 'mt',
        imagen: './assets/productos/01-cobre.jpg',
    },
    {
        idCategoria: 1,
        idProducto: 4,
        nombre: 'Caño de Cobre',
        tipo: '1/2"',
        precio: 2309,
        unidad: 'mt',
        imagen: './assets/productos/01-cobre.jpg',
    },
    {
        idCategoria: 1,
        idProducto: 5,
        nombre: 'Caño de Cobre',
        tipo: '5/8"',
        precio: 2975,
        unidad: 'mt',
        imagen: './assets/productos/01-cobre.jpg',
    },
    {
        idCategoria: 1,
        idProducto: 6,
        nombre: 'Caño de Cobre',
        tipo: '3/4"',
        precio: 3415,
        unidad: 'mt',
        imagen: './assets/productos/01-cobre.jpg',
    },
    {
        idCategoria: 2,
        idProducto: 1,
        nombre: 'Aislación Elastomérica',
        tipo: '1/4"',
        precio: 495,
        unidad: 'tira',
        imagen: './assets/productos/02-aislacion.jpg',
    },
    {
        idCategoria: 2,
        idProducto: 2,
        nombre: 'Aislación Elastomérica',
        tipo: '5/16"',
        precio: 500,
        unidad: 'tira',
        imagen: './assets/productos/02-aislacion.jpg',
    },
    {
        idCategoria: 2,
        idProducto: 3,
        nombre: 'Aislación Elastomérica',
        tipo: '3/8"',
        precio: 530,
        unidad: 'tira',
        imagen: './assets/productos/02-aislacion.jpg',
    },
    {
        idCategoria: 2,
        idProducto: 4,
        nombre: 'Aislación Elastomérica',
        tipo: '1/2"',
        precio: 600,
        unidad: 'tira',
        imagen: './assets/productos/02-aislacion.jpg',
    },
    {
        idCategoria: 2,
        idProducto: 5,
        nombre: 'Aislación Elastomérica',
        tipo: '5/8"',
        precio: 670,
        unidad: 'tira',
        imagen: './assets/productos/02-aislacion.jpg',
    },
    {
        idCategoria: 2,
        idProducto: 6,
        nombre: 'Aislación Elastomérica',
        tipo: '3/4"',
        precio: 740,
        unidad: 'tira',
        imagen: './assets/productos/02-aislacion.jpg',
    },
    {
        idCategoria: 3,
        idProducto: 1,
        nombre: 'Gases Refrigerantes',
        tipo: 'R22',
        precio: 7940,
        unidad: 'cápsula',
        imagen: './assets/productos/03-gases.jpg',
    },
    {
        idCategoria: 3,
        idProducto: 2,
        nombre: 'Gases Refrigerantes',
        tipo: 'R410',
        precio: 3780,
        unidad: 'cápsula',
        imagen: './assets/productos/03-gases.jpg',
    },
    {
        idCategoria: 3,
        idProducto: 3,
        nombre: 'Gases Refrigerantes',
        tipo: 'R134',
        precio: 3230,
        unidad: 'cápsula',
        imagen: './assets/productos/03-gases.jpg',
    },
    {
        idCategoria: 3,
        idProducto: 4,
        nombre: 'Gases Refrigerantes',
        tipo: 'R404',
        precio: 4155,
        unidad: 'cápsula',
        imagen: './assets/productos/03-gases.jpg',
    },
    {
        idCategoria: 3,
        idProducto: 5,
        nombre: 'Gases Refrigerantes',
        tipo: 'MO49',
        precio: 4360,
        unidad: 'cápsula',
        imagen: './assets/productos/03-gases.jpg',
    },
    {
        idCategoria: 3,
        idProducto: 6,
        nombre: 'Gases Refrigerantes',
        tipo: '141b',
        precio: 6170,
        unidad: 'cápsula',
        imagen: './assets/productos/03-gases.jpg',
    },
    {
        idCategoria: 4,
        idProducto: 1,
        nombre: 'Cable Taller',
        tipo: '3x1.5mm"',
        precio: 270,
        unidad: 'mt',
        imagen: './assets/productos/04-cable.jpg',
    },
    {
        idCategoria: 4,
        idProducto: 2,
        nombre: 'Cable Taller',
        tipo: '3x2.5mm',
        precio: 382,
        unidad: 'mt',
        imagen: './assets/productos/04-cable.jpg',
    },
    {
        idCategoria: 4,
        idProducto: 3,
        nombre: 'Cable Taller',
        tipo: '4x1.5mm',
        precio: 296,
        unidad: 'mt',
        imagen: './assets/productos/04-cable.jpg',
    },
    {
        idCategoria: 4,
        idProducto: 4,
        nombre: 'Cable Taller',
        tipo: '5x1.5mm',
        precio: 412,
        unidad: 'mt',
        imagen: './assets/productos/04-cable.jpg',
    },
    {
        idCategoria: 4,
        idProducto: 5,
        nombre: 'Cable Taller',
        tipo: '5x2.5mm',
        precio: 605,
        unidad: 'mt',
        imagen: './assets/productos/04-cable.jpg',
    },
    {
        idCategoria: 5,
        idProducto: 1,
        nombre: 'Manguera Cristal',
        tipo: '1/4"',
        precio: 52,
        unidad: 'mt',
        imagen: './assets/productos/05-manguera.jpg',
    },
    {
        idCategoria: 5,
        idProducto: 2,
        nombre: 'Manguera Cristal',
        tipo: '1/2"',
        precio: 89,
        unidad: 'mt',
        imagen: './assets/productos/05-manguera.jpg',
    },
    {
        idCategoria: 5,
        idProducto: 3,
        nombre: 'Manguera Cristal',
        tipo: '5/8"',
        precio: 125,
        unidad: 'mt',
        imagen: './assets/productos/05-manguera.jpg',
    },
    {
        idCategoria: 6,
        idProducto: 1,
        nombre: 'Cinta de PVC',
        tipo: 'Tacsa Blanca S/adh',
        precio: 757,
        unidad: 'unidad',
        imagen: './assets/productos/06-cinta.jpg',
    },
    {
        idCategoria: 6,
        idProducto: 2,
        nombre: 'Cinta de PVC',
        tipo: 'Tacsa Blanca C/adh',
        precio: 1222,
        unidad: 'unidad',
        imagen: './assets/productos/06-cinta.jpg',
    },
    {
        idCategoria: 6,
        idProducto: 3,
        nombre: 'Cinta de PVC',
        tipo: 'Económica Blanca S/adh',
        precio: 638,
        unidad: 'unidad',
        imagen: './assets/productos/06-cinta.jpg',
    },
    {
        idCategoria: 6,
        idProducto: 4,
        nombre: 'Cinta de PVC',
        tipo: 'Económica Blanca C/adh',
        precio: 870,
        unidad: 'unidad',
        imagen: './assets/productos/06-cinta.jpg',
    },
    {
        idCategoria: 7,
        idProducto: 1,
        nombre: 'Ménsulas Reforzadas',
        tipo: 'M42 Epoxi',
        precio: 3344,
        unidad: 'juego',
        imagen: './assets/productos/07-mensulas.jpg',
    },
    {
        idCategoria: 7,
        idProducto: 2,
        nombre: 'Ménsulas Reforzadas',
        tipo: 'M49 Epoxi',
        precio: 3436,
        unidad: 'juego',
        imagen: './assets/productos/07-mensulas.jpg',
    },
    {
        idCategoria: 7,
        idProducto: 3,
        nombre: 'Ménsulas Reforzadas',
        tipo: 'M62 Epoxi',
        precio: 4515,
        unidad: 'juego',
        imagen: './assets/productos/07-mensulas.jpg',
    },
    {
        idCategoria: 7,
        idProducto: 4,
        nombre: 'Ménsulas Reforzadas',
        tipo: 'Económica 40cm',
        precio: 1771,
        unidad: 'juego',
        imagen: './assets/productos/07-mensulas.jpg',
    },
    {
        idCategoria: 7,
        idProducto: 5,
        nombre: 'Ménsulas Reforzadas',
        tipo: 'Económica 50cm',
        precio: 2092,
        unidad: 'juego',
        imagen: './assets/productos/07-mensulas.jpg',
    },
    {
        idCategoria: 7,
        idProducto: 6,
        nombre: 'Ménsulas Reforzadas',
        tipo: 'Económica 60cm',
        precio: 3512,
        unidad: 'juego',
        imagen: './assets/productos/07-mensulas.jpg',
    },
    {
        idCategoria: 8,
        idProducto: 1,
        nombre: 'Motocompresores',
        tipo: '1/6HP',
        precio: 22397,
        unidad: 'unidad',
        imagen: './assets/productos/08-compresores.jpg',
    },
    {
        idCategoria: 8,
        idProducto: 2,
        nombre: 'Motocompresores',
        tipo: '1/5HP',
        precio: 23243,
        unidad: 'unidad',
        imagen: './assets/productos/08-compresores.jpg',
    },
    {
        idCategoria: 8,
        idProducto: 3,
        nombre: 'Motocompresores',
        tipo: '1/4HP',
        precio: 27803,
        unidad: 'unidad',
        imagen: './assets/productos/08-compresores.jpg',
    },
    {
        idCategoria: 8,
        idProducto: 4,
        nombre: 'Motocompresores',
        tipo: '1/4+HP',
        precio: 28304,
        unidad: 'unidad',
        imagen: './assets/productos/08-compresores.jpg',
    },
    {
        idCategoria: 8,
        idProducto: 5,
        nombre: 'Motocompresores',
        tipo: '1/3HP',
        precio: 32287,
        unidad: 'unidad',
        imagen: './assets/productos/08-compresores.jpg',
    },
    {
        idCategoria: 8,
        idProducto: 6,
        nombre: 'Motocompresores',
        tipo: '1/3+HP',
        precio: 33285,
        unidad: 'unidad',
        imagen: './assets/productos/08-compresores.jpg',
    },
    {
        idCategoria: 9,
        idProducto: 1,
        nombre: 'Herramientas',
        tipo: 'Manifold Bronce R22',
        precio: 9783,
        unidad: 'unidad',
        imagen: './assets/productos/09-herramientas.jpg',
    },
    {
        idCategoria: 9,
        idProducto: 2,
        nombre: 'Herramientas',
        tipo: 'Manifold Bronce R410',
        precio: 13726,
        unidad: 'unidad',
        imagen: './assets/productos/09-herramientas.jpg',
    },
    {
        idCategoria: 9,
        idProducto: 3,
        nombre: 'Herramientas',
        tipo: 'Bomba de Vacio VALUE',
        precio: 82334,
        unidad: 'unidad',
        imagen: './assets/productos/09-herramientas.jpg',
    },
    {
        idCategoria: 9,
        idProducto: 4,
        nombre: 'Herramientas',
        tipo: 'Llave crique VALUE',
        precio: 2007,
        unidad: 'unidad',
        imagen: './assets/productos/09-herramientas.jpg',
    },
    {
        idCategoria: 9,
        idProducto: 5,
        nombre: 'Herramientas',
        tipo: 'Pinza selladora VALUE',
        precio: 2672,
        unidad: 'unidad',
        imagen: './assets/productos/09-herramientas.jpg',
    },
    {
        idCategoria: 9,
        idProducto: 6,
        nombre: 'Herramientas',
        tipo:  'Pinza cortacapilar VALUE',
        precio: 3033,
        unidad: 'unidad',
        imagen: './assets/productos/09-herramientas.jpg',
    },
    {
        idCategoria: 10,
        idProducto: 1,
        nombre: 'Accesorios',
        tipo: 'Caja Preinstalación',
        precio: 1130,
        unidad: 'unidad',
        imagen: './assets/productos/10-accesorios.jpg',
    },
    {
        idCategoria: 10,
        idProducto: 2,
        nombre: 'Accesorios',
        tipo: 'Tirafondo+Tarugo N°10',
        precio: 58,
        unidad: 'unidad',
        imagen: './assets/productos/10-accesorios.jpg',
    },
    {
        idCategoria: 10,
        idProducto: 3,
        nombre: 'Accesorios',
        tipo: 'Tornillo+Tarugo N°6',
        precio: 18,
        unidad: 'unidad',
        imagen: './assets/productos/10-accesorios.jpg',
    },
    {
        idCategoria: 10,
        idProducto: 4,
        nombre: 'Accesorios',
        tipo: 'Patas de Goma',
        precio: 416,
        unidad: 'juego',
        imagen: './assets/productos/10-accesorios.jpg',
    },
    {
        idCategoria: 10,
        idProducto: 5,
        nombre: 'Accesorios',
        tipo: 'Pico de Drenaje',
        precio: 199,
        unidad: 'unidad',
        imagen: './assets/productos/10-accesorios.jpg',
    },
    {
        idCategoria: 10,
        idProducto: 6,
        nombre: 'Accesorios',
        tipo: 'Tapa Agujero',
        precio: 153,
        unidad: 'unidad',
        imagen: './assets/productos/10-accesorios.jpg',
    },
    {
        idCategoria: 11,
        idProducto: 1,
        nombre: 'Varios',
        tipo: 'Control Remoto Universal',
        precio: 1283,
        unidad: 'unidad',
        imagen: './assets/productos/11-varios.jpg',
    },
    {
        idCategoria: 11,
        idProducto: 2,
        nombre: 'Varios',
        tipo: 'Pila AAA',
        precio: 137,
        unidad: 'unidad',
        imagen: './assets/productos/11-varios.jpg',
    },
    {
        idCategoria: 11,
        idProducto: 3,
        nombre: 'Varios',
        tipo: 'Pila AA',
        precio: [1283, 137, 122, 18677],
        unidad: 'unidad',
        imagen: './assets/productos/11-varios.jpg',
    },
    {
        idCategoria: 11,
        idProducto: 4,
        nombre: 'Varios',
        tipo: 'Bomba Drenaje 10l/h',
        precio: 18677,
        unidad: 'unidad',
        imagen: './assets/productos/11-varios.jpg',
    },
    {
        idCategoria: 12,
        idProducto: 1,
        nombre: 'Aire Acondicionado',
        tipo: 'TRANE 2250fr ON-OFF',
        precio: 98657,
        unidad: 'unidad',
        imagen: './assets/productos/12-aireacondicionado.jpg',
    },
    {
        idCategoria: 12,
        idProducto: 2,
        nombre: 'Aire Acondicionado',
        tipo: 'TRANE 3000fr ON-OFF',
        precio: 108728,
        unidad: 'unidad',
        imagen: './assets/productos/12-aireacondicionado.jpg',
    },
    {
        idCategoria: 12,
        idProducto: 3,
        nombre: 'Aire Acondicionado',
        tipo: 'TRANE 4500fr ON-OFF',
        precio: 161769,
        unidad: 'unidad',
        imagen: './assets/productos/12-aireacondicionado.jpg',
    },
    {
        idCategoria: 12,
        idProducto: 4,
        nombre: 'Aire Acondicionado',
        tipo: 'TRANE 6000fr ON-OFF',
        precio: 193572,
        unidad: 'unidad',
        imagen: './assets/productos/12-aireacondicionado.jpg',
    },
    {
        idCategoria: 12,
        idProducto: 5,
        nombre: 'Aire Acondicionado',
        tipo: 'TRANE 2250fr INVERTER',
        precio: 132299,
        unidad: 'unidad',
        imagen: './assets/productos/12-aireacondicionado.jpg',
    },
    {
        idCategoria: 12,
        idProducto: 6,
        nombre: 'Aire Acondicionado',
        tipo: 'TRANE 3000fr INVERTER',
        precio: 137708,
        unidad: 'unidad',
        imagen: './assets/productos/12-aireacondicionado.jpg',
    },
    {
        idCategoria: 12,
        idProducto: 7,
        nombre: 'Aire Acondicionado',
        tipo: 'TRANE 4500fr INVERTER',
        precio: 198439,
        unidad: 'unidad',
        imagen: './assets/productos/12-aireacondicionado.jpg',
    },
    {
        idCategoria: 12,
        idProducto: 8,
        nombre: 'Aire Acondicionado',
        tipo:  'TRANE 6000fr INVERTER',
        precio: 245698,
        unidad: 'unidad',
        imagen: './assets/productos/12-aireacondicionado.jpg',
    },
]

const catalogoDefault = document.getElementById("canvas");

const renderizarCatalogo = ()=>{
    for (let producto of productos) {
        catalogoDefault.innerHTML += `
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
};