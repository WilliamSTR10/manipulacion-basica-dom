const inp1 = document.querySelector('#calculo1');
const inp2 = document.querySelector('#calculo2');
const btnCalcular = document.querySelector('#btnCalcular');
const pResultado = document.querySelector('#resultado');
const form = document.querySelector('#form');

form.addEventListener('submit', sumarValores);

function sumarValores(event){
    event.preventDefault();
    const sumaValores = parseInt(inp1.value) + parseInt(inp2.value);
    pResultado.innerHTML = "Resultado: " + sumaValores;
}

