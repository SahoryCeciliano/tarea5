console.log(document);
console.dir(document);
document.title="Practica";
document.body.style.backgroundColor="#f0b8e0";


const contenedor = document.getElementById('contenedor');
const botonAgregar = document.getElementById('agregar');
const botonModificar = document.getElementById('modificar');
const botonEliminar = document.getElementById('eliminar');


function agregarParrafo() {
    const nuevoParrafo = document.createElement('p');
    nuevoParrafo.textContent = 'El nuevo parrafo es:Nicole Ceciliano Padilla';
    contenedor.appendChild(nuevoParrafo);
}


function modificarParrafo() {
    const parrafos = contenedor.getElementsByTagName('p');
    if (parrafos.length > 0) {
        parrafos[0].textContent = 'El parrafo modificado es: Sahory Ceciliano Padilla';
    }
}


function eliminarParrafo() {
    const parrafos = contenedor.getElementsByTagName('p');
    if (parrafos.length > 0) {
        contenedor.removeChild(parrafos[0]);
    }
}
document.getElementById('cambiarColor').addEventListener('click', function() {
   
    var elementos = document.getElementsByClassName('textopr');
    
  
    for (var i = 0; i < elementos.length; i++) {
        elementos[i].style.color = 'purple';
    }
});

botonAgregar.addEventListener('click', agregarParrafo);
botonModificar.addEventListener('click', modificarParrafo);
botonEliminar.addEventListener('click', eliminarParrafo);