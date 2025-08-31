const MAX_CARACTERES = 50;

function mostrarTextarea() {
  const textoInput = document.getElementById("textEj5");

  let texto = textoInput.value;
  texto = texto.slice(0, MAX_CARACTERES);

  let color = 'black';

  if(texto.length >= (MAX_CARACTERES * 0.8)) {
    color = '#cfcf00';
  }

  if(texto.length >= (MAX_CARACTERES * 0.9)) {
    color = 'red';
  }

  const contadorText = document.getElementById("contadorEj5");
  contadorText.innerText = `Cantidad de caracteres: ${texto.length}/${MAX_CARACTERES}`;
  contadorText.style.color = color;

  textoInput.value = texto;
}

document.getElementById("textEj5").addEventListener("input", e => {
  mostrarTextarea();
});

document.getElementById("clearText").addEventListener("click", function () {
  const textoInput = document.getElementById("textEj5");
  textoInput.value = "";
  mostrarTextarea();
});

mostrarTextarea();
