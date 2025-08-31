if (!localStorage.getItem("arrayTareas")) {
    localStorage.setItem("arrayTareas", JSON.stringify([]));
}

function obtenerArray(name) {
    return JSON.parse(localStorage.getItem(name));
}

function crearRow(text) {
    const li = document.createElement("li");
    li.classList.add("list-group-item");
    li.textContent = text;
    return li;
}

function renderLista(arr) {
  const lista = document.getElementById("listEj04");
  lista.innerHTML = "";

  arr.forEach((item) => {
    const li = crearRow(item.name);
    lista.appendChild(li);

    requestAnimationFrame(() => {
      li.classList.add("show");
    });
  });
}

document.getElementById("searchEj04").addEventListener("input", (e) => {
  const text = (e.target.value).trim().toLowerCase();

  const arr = obtenerArray("arrayTareas");
  const arrFilter = arr.filter(item => item.name.trim().toLowerCase().includes(text));

  return text === "" ? renderLista(arr) : renderLista(arrFilter);
});


const arr = obtenerArray("arrayTareas");
renderLista(arr);