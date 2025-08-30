const formEjercicio02 = document.getElementById('formEjercicio02');
formEjercicio02.addEventListener('submit', function (e) {
    e.preventDefault();


    const task = formEjercicio02.querySelector('#tarea').value;
    console.log(task);

    formEjercicio02.querySelector('#tarea').value = '';
    //   const numero = parseInt(ejercicio01.querySelector('#numero').value, 10);
    //   let resultado = `<h5>TABLA DE MULTIPLICAR ${numero}</h5>`;

    //   for (let i = 1; i < 11; i++) {
    //     const multi = numero * i;
    //     resultado += `${numero} x ${i} = ${multi} <br>`;
    //   }


    //   document.getElementById('resultado01').innerHTML = resultado;
});


