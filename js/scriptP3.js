let lista = [];
let totalACargar = 0;

const inputCant = document.querySelector('#cant');
const formulario = document.querySelector('#form');
const btnAgregar = document.querySelector('#agregar');
const btnCalcular = document.querySelector('#calcular');
const btnReiniciar = document.querySelector('#reiniciar');
const resultados = document.querySelector('#resultados');

//AGREGA LA INSTALACIÓN PARA ARRANCAR
btnAgregar.addEventListener('click', function() {

    //VALIDACIÓN NUMÉRICA
    if (lista.length === 0) {
        totalACargar = Number(inputCant.value);

        if (isNaN(totalACargar) || totalACargar <= 0) {
            alert("Ingrese una cantidad válida.");
            return;
        }

        inputCant.disabled = true;
    }

    const nombre = document.querySelector('#nombre').value;
    const personas = Number(document.querySelector('#personas').value);
    const dias = Number(document.querySelector('#dias').value);
    const horas = Number(document.querySelector('#horas').value);
    const costoHora = Number(document.querySelector('#costoHora').value);

    if (nombre === "" || isNaN(personas) || personas <= 0 || isNaN(dias) || dias <= 0 || isNaN(horas) || horas <= 0 || isNaN(costoHora) || costoHora < 0) {

        alert("Complete todos los campos correctamente.");
        return;
    }

    //SE AGREGA A LA LISTA
    lista.push({ nombre, personas, dias, horas, costoHora });

    alert("Instalación cargada. Quedan: " + (totalACargar - lista.length));

    formulario.reset();

    if (lista.length === totalACargar) {
        btnAgregar.disabled = true;
        btnCalcular.disabled = false;
    }
});

btnCalcular.addEventListener('click', function() {

    let costoDiaTotal = 0;
    let costoTodas = 0;

    let instalacionMayor = lista[0];

    for (let i = 0; i < lista.length; i++) {

        let instalacionActual = lista[i];

        // EL COSTO DE UN DIA DE LABURO
        let costoDia = instalacionActual.personas *
                       instalacionActual.horas *
                       instalacionActual.costoHora;

        costoDiaTotal += costoDia;

        //TOTAL
        let costoTotal = costoDia * instalacionActual.dias;

        costoTodas += costoTotal;

        // INSTALACIÓN QUE DURE MAS
        if (instalacionActual.dias > instalacionMayor.dias) {
            instalacionMayor = instalacionActual;
        }
    }

    // COSTO DE LA INSTALACIÓN CON MAS DÍAS
    let costoMayor = instalacionMayor.personas *
                     instalacionMayor.horas *
                     instalacionMayor.costoHora *
                     instalacionMayor.dias;

    // PORCENTAJE DEL CACHO DE COSTO TOTAL QUE REPRESENTA
    let porcentajeMayor = (costoMayor / costoTodas) * 100;

    resultados.innerHTML = `
        <div class="resultados">
            <p>Costo total de un día de trabajo: $${costoDiaTotal.toFixed(2)}.</p>
            <p>Mayor producción: ${instalacionMayor.nombre} (${instalacionMayor.dias} días). Costo total: $${costoMayor.toFixed(2)}.</p>
            <p>La instalación de mayor producción representa el ${porcentajeMayor.toFixed(2)}% del costo total.</p>
        </div>
    `;

    btnCalcular.disabled = true;
    btnReiniciar.disabled = false;
});

// REINICIO DEL FORMULARIO
btnReiniciar.addEventListener('click', function() {

    lista = [];
    totalACargar = 0;

    resultados.innerHTML = "";

    inputCant.value = "";
    inputCant.disabled = false;

    formulario.reset();

    btnAgregar.disabled = false;
    btnCalcular.disabled = true;
    btnReiniciar.disabled = true;
});

