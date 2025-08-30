let contador = 0;

document.addEventListener('DOMContentLoaded', () => {
    imprimirNumero();
});

function imprimirNumero(){
    const contadorText = document.getElementById("contadorEj01");
    contadorText.innerText = "Número actual: " + contador;

    const color = contador == 0 ? "black" : ( contador < 0 ? "red" : "green");
    contadorText.style.color = color;
}

document.getElementById("bajarContador").addEventListener("click", function() {
    contador--;
    imprimirNumero();
});

document.getElementById("resetContador").addEventListener("click", function() {
    contador = 0;
    imprimirNumero();
});

document.getElementById("subirContador").addEventListener("click", function() {
    contador++;
    imprimirNumero();
});


