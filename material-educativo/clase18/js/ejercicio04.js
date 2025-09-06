if (!localStorage.getItem("arrayTareas")) {
    localStorage.setItem("arrayTareas", JSON.stringify([]));
}

function crearRowEj4(text, index) {
    const li = document.createElement("li");
    li.classList.add("list-group-item");
    li.textContent = text;
    li.style.transitionDelay = `${index * 0.2}s`; 
    return li;
}

function renderListaEj4(arr) {
  const lista = document.getElementById("listEj04");
  lista.innerHTML = "";

  arr.forEach((item, index) => {
    const li = crearRowEj4(item.name, index);
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

  return text === "" ? renderListaEj4(arr) : renderListaEj4(arrFilter);
});


const arr = obtenerArray("arrayTareas");
renderListaEj4(arr);