const ejercicio01 = document.getElementById('ejercicio01');

ejercicio01.addEventListener('submit', function (e) {
  e.preventDefault();

  const numero = parseInt(ejercicio01.querySelector('#numero').value, 10);
  let resultado = `<h5>TABLA DE MULTIPLICAR ${numero}</h5>`;

  for (let i = 1; i < 11; i++) {
    const multi = numero * i;
    resultado += `${numero} x ${i} = ${multi} <br>`;
  }


  document.getElementById('resultado01').innerHTML = resultado;
});
