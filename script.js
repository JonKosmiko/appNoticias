const inputInicio = document.getElementById('input-inicio');
const inputResultados = document.getElementById('input-resultados');

function alternarBusqueda(pantallaActual) {
    if (pantallaActual === 'pantalla-inicio') {
        inputResultados.value = inputInicio.value;
        document.getElementById('pantalla-inicio').classList.remove('activa');
        document.getElementById('pantalla-resultados').classList.add('activa');
        document.body.classList.remove('pantalla-inicio-activa');
        document.body.classList.add('pantalla-resultados-activa');

        inputInicio.blur();
        inputResultados.blur();
    } else {
        inputInicio.value = "";
        document.getElementById('pantalla-resultados').classList.remove('activa');
        document.getElementById('pantalla-inicio').classList.add('activa');
        document.body.classList.remove('pantalla-resultados-activa');
        document.body.classList.add('pantalla-inicio-activa');

        inputInicio.blur();
    }
}

function siPulsaEnter(event) {
    if (event.key === "Enter") {
        if (document.getElementById('pantalla-inicio').classList.contains('activa')) {
            alternarBusqueda('pantalla-inicio');
        }
        event.target.blur();
    }
}