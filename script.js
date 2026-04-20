const inputInicio = document.getElementById('input-inicio');
const inputResultados = document.getElementById('input-resultados');
const fraseMagica = "Sara Agirre y Koldo Garmendia";
let indexLetra = 0;

function alternarBusqueda(pantallaActual) {
    if (pantallaActual === 'pantalla-inicio') {
        inputResultados.value = inputInicio.value;
        document.getElementById('pantalla-inicio').classList.remove('activa');
        document.getElementById('pantalla-resultados').classList.add('activa');
        document.body.classList.remove('pantalla-inicio-activa');
        document.body.classList.add('pantalla-resultados-activa');

        inputInicio.blur();
        inputResultados.blur();
        window.scrollTo(0, 0);
    } else {
        inputInicio.value = ""; 
        inputResultados.value = ""; 
        indexLetra = 0;             

        document.getElementById('pantalla-resultados').classList.remove('activa');
        document.getElementById('pantalla-inicio').classList.add('activa');
        document.body.classList.remove('pantalla-resultados-activa');
        document.body.classList.add('pantalla-inicio-activa');

        inputInicio.blur();
        window.scrollTo(0, 0);
    }
}

function siPulsaEnter(event) {
    if (event.key === "Enter") {
        if (document.getElementById('pantalla-inicio').classList.contains('activa')) {
            alternarBusqueda('pantalla-inicio');
        }
        if (event.target) event.target.blur();
    }
}

const inputs = [inputInicio, inputResultados];

inputs.forEach(input => {
    if(!input) return; 

    input.addEventListener('keydown', function(e) {
        // Bloqueamos teclas normales para que no se escriban caracteres reales
        if (e.key.length === 1 || e.key === "Backspace") {
            e.preventDefault();
        } else {
            return;
        }

        // Lógica de borrar
        if (e.key === "Backspace") {
            if (indexLetra > 0) {
                indexLetra--;
                this.value = fraseMagica.substring(0, indexLetra);
            }
            return;
        }

        // Escribir la frase mágica letra a letra
        if (indexLetra < fraseMagica.length) {
            this.value += fraseMagica[indexLetra];
            indexLetra++;
        }
    });
});
