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


function generatePassword() {
  const mayusculas = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const minusculas = "abcdefghijklmnopqrstuvwxyz";
  const numeros = "0123456789";
  const especiales = "!@#$%^&*()+-=[]{}";

  let password = [
    mayusculas[Math.floor(Math.random() * mayusculas.length)],
    numeros[Math.floor(Math.random() * numeros.length)],
    especiales[Math.floor(Math.random() * especiales.length)]
  ];

  const todos = mayusculas + minusculas + numeros + especiales;
  while (password.length < 8) {
    password.push(todos[Math.floor(Math.random() * todos.length)]);
  }

  password = password.sort(() => Math.random() - 0.5);

  return password.join("");
}

const ejercicio10 = document.getElementById('ejercicio10');
ejercicio10.addEventListener('submit', function (e) {
  e.preventDefault();
  const password = generatePassword();

  document.getElementById('resultado10').innerHTML = `Password: <strong>${password}</strong>`;
});
