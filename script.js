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
        window.scrollTo(0, 0);
    } else {
        inputInicio.value = "";
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
        event.target.blur();
    }
}

const fraseMagica = "Audrey Hepburn";
let indexLetra = 0;

const inputs = [
    document.getElementById('input-inicio'),
    document.getElementById('input-resultados')
];

inputs.forEach(input => {
    if(!input) return; 

    input.addEventListener('keydown', function(e) {
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

        // ESCRIBIR NUESTRA FRASE
        if (indexLetra < fraseMagica.length) {
            this.value += fraseMagica[indexLetra];
            indexLetra++;

            // Opcional: Si termina la frase, ejecutamos la búsqueda
            if (indexLetra === fraseMagica.length) {
                siPulsaEnter({ key: "Enter", target: this, preventDefault: () => {} });
            }
        }
    });
});
