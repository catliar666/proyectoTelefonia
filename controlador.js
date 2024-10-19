const card = document.getElementById("card");
const containerForm = document.getElementById("container-form-complete");
const tituloCard = document.getElementById("empresa");
const textoCard = document.getElementById("comparacion");

const empresaA = 'Vodafone', empresaB = 'Movistar';
document.getElementById("Resetear").addEventListener("click", function() {
    // Limpiar valores de los inputs de minutos y cualquier otro dato introducido
    document.getElementById("minutos1").value = '';
    document.getElementById("minutos2").value = '';
    document.getElementById("minutos3").value = '';

    // Ocultar el contenedor de resultados si está visible
    card.style.display = 'none';
    containerForm.style.display = 'block';
    tituloCard.textContent = '';
    textoCard.innerHTML = '';
});

document.getElementById("Comparar").addEventListener("click", function(){
    event.preventDefault();


const minutosMes1 = parseInt(document.getElementById("minutos1").value);
const minutosMes2 = parseInt(document.getElementById("minutos2").value);
const minutosMes3 = parseInt(document.getElementById("minutos3").value);


function calcularCostos(empresa, minutos){
    let precioTotal = 0;
    if (empresa == empresaA) {
        precioTotal = 20 + ((minutos > 1000) ? (minutos-1000)*0.08 : 0);
    } else if (empresa == empresaB) {
        precioTotal = 10 + ((minutos > 500) ? (minutos-500) * 0.12 : 0);
    }

    return precioTotal;
}


let precioVodafone = calcularCostos(empresaA, minutosMes1) + 
calcularCostos(empresaA, minutosMes2) + calcularCostos(empresaA, minutosMes3);
let precioMovistar = calcularCostos(empresaB, minutosMes1) + 
calcularCostos(empresaB, minutosMes2) + calcularCostos(empresaB, minutosMes3);

let precioMedioVodafone = precioVodafone / 3;
let precioMedioMovistar = precioMovistar / 3;

if (precioMedioVodafone < precioMedioMovistar) {
    containerForm.style.display = 'none';
    card.style.display = 'block';
    tituloCard.textContent = "Vodafone";
    textoCard.innerHTML = `La empresa que más te conviene sería <strong>Vodafone</strong> ya que su tarifa ascendería a una media de ${precioMedioVodafone}€, mientras que <strong>Movistar</strong>, su precio sería una media de ${precioMedioMovistar}€`;
} else if (precioMedioMovistar < precioMedioVodafone ) {
    containerForm.style.display = 'none';
    card.style.display = 'block';
    tituloCard.textContent = "Movistar";
    textoCard.innerHTML = `La empresa que más te conviene sería <strong>Movistar</strong> ya que su tarifa ascendería a una media de ${precioMedioMovistar}€, mientras que <strong>Vodafone</strong>, su precio sería una media de ${precioMedioVodafone}€`;
} else {
    containerForm.style.display = 'none';
    card.style.display = 'block';
    tituloCard.textContent = "La que prefieras";
    textoCard.innerHTML = `Las dos empresas equivaldrían al mismo precio, por lo tanto cualquiera de ellas podría servirte. <strong>Precio Movistar: ${precioMedioMovistar}€</strong> <strong>Precio Vodafone: ${precioMedioVodafone}€</strong>`;
}

});
