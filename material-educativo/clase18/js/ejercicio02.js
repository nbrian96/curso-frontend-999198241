if (!localStorage.getItem("arrayTareas")) {
    localStorage.setItem("arrayTareas", JSON.stringify([]));
}

if (!localStorage.getItem("arrayTareasFilter")) {
    localStorage.setItem("arrayTareasFilter", JSON.stringify([]));
}

function obtenerArray(name) {
    return JSON.parse(localStorage.getItem(name));
}

function guardarArray(arr, name) {
    localStorage.setItem(name, JSON.stringify(arr));
}

function crearBtnDelete(index) {
    const btn = document.createElement("button");
    btn.classList.add("btn", "btn-outline-danger");
    btn.textContent = "Borrar ";
    const icon = document.createElement("i");
    icon.classList.add("bi", "bi-trash");

    btn.appendChild(icon);

    btn.onclick = () => {
        eliminarItem(index);
    };

    return btn;
}

function crearBtnCompletar(index) {
    const btn = document.createElement("button");
    btn.classList.add("btn", "btn-outline-success");
    btn.textContent = "Completar ";
    btn.style.marginRight = '0.5rem';

    const icon = document.createElement("i");
    icon.classList.add("bi", "bi-check2");

    btn.appendChild(icon);

    btn.onclick = () => {
        completarItem(index);
    };

    return btn;
}

function crearBtnPendiente(index) {
    const btn = document.createElement("button");
    btn.classList.add("btn", "btn-outline-primary");
    btn.textContent = "Pendiente ";
    btn.style.marginRight = '0.5rem';

    const icon = document.createElement("i");
    icon.classList.add("bi", "bi-arrow-repeat");

    btn.appendChild(icon);

    btn.onclick = () => {
        pendienteItem(index);
    };

    return btn;
}

function crearRow(item, index) {
    const tr = document.createElement("tr");

    const th = document.createElement("th");
    th.textContent = index;

    const tdElemt = document.createElement("td");
    tdElemt.textContent = item.name;

    const tdStatus = document.createElement("td");
    tdStatus.textContent = item.status;

    const tdAcctions = document.createElement("td");

    const btnDelete = crearBtnDelete(index);

    switch (item.status) {
        case 'Pending':
            const btnC = crearBtnCompletar(index);
            tdAcctions.appendChild(btnC);
            break;
        case 'Complete':
            const btnP = crearBtnPendiente(index);
            tdAcctions.appendChild(btnP);
        default:
            break;
    }

    tdAcctions.appendChild(btnDelete);

    tr.appendChild(th);
    tr.appendChild(tdElemt);
    tr.appendChild(tdStatus);
    tr.appendChild(tdAcctions);

    return tr;
}

function renderLista(name) {
    const lista = document.getElementById("listaTareas");

    lista.innerHTML = "";
    const arr = obtenerArray(name);

    arr.forEach((item, index) => {
        const tr = crearRow(item, index);
        lista.appendChild(tr);
    });
}

function agregarItem(item) {
    const arr = obtenerArray("arrayTareas");
    const newItem = {
        name: item,
        status: 'Pending'
    };

    arr.push(newItem);
    guardarArray(arr, "arrayTareas");
    renderLista("arrayTareas");
}

function eliminarItem(index) {
    const arr = obtenerArray("arrayTareas");
    arr.splice(index, 1);
    guardarArray(arr, "arrayTareas");
    renderLista("arrayTareas");
}

function completarItem(index) {
    const arr = obtenerArray("arrayTareas");
    arr[index].status = 'Complete';
    guardarArray(arr, "arrayTareas");
    renderLista("arrayTareas");
}

function pendienteItem(index) {
    const arr = obtenerArray("arrayTareas");
    arr[index].status = 'Pending';
    guardarArray(arr, "arrayTareas");
    renderLista("arrayTareas");
}

document.getElementById("filterAll").addEventListener("click", function () {
    const arr = obtenerArray("arrayTareas");
    guardarArray(arr, "arrayTareas");
    renderLista("arrayTareas")
});

document.getElementById("filterComplete").addEventListener("click", function () {
    let arr = obtenerArray("arrayTareas");
    arr = arr.filter(item => item.status === 'Complete');
    guardarArray(arr, "arrayTareasFilter");
    renderLista("arrayTareasFilter")
});

document.getElementById("filterPending").addEventListener("click", function () {
    let arr = obtenerArray("arrayTareas");
    arr = arr.filter(item => item.status === 'Pending');
    guardarArray(arr, "arrayTareasFilter");
    renderLista("arrayTareasFilter")
});

document.getElementById("btnTarea").addEventListener("click", () => {
    const input = document.getElementById("tarea");
    const valor = input.value.trim();
    if (valor !== "") {
        agregarItem(valor);
        input.value = "";
    }
});

renderLista("arrayTareas");