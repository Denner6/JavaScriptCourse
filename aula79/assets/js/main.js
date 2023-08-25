// fetch("pessoas.json")
//     .then(response => response.json())
//     .then(json => loadElementsInPage(json));

axios("pessoas.json")
    .then(response => loadElementsInPage(response.data));

function loadElementsInPage(json) {
    const table = document.createElement("table")
    
    for (let person of json) {
        const tr = document.createElement("tr");
        let td = document.createElement("td");
        td.innerHTML = person.nome
        tr.appendChild(td);
        
        td = document.createElement("td");
        td.innerHTML = person.idade;
        tr.appendChild(td);
        
        td = document.createElement("td");
        td.innerHTML = person.salario;
        tr.appendChild(td);
        
        table.appendChild(tr);
    }
    const result = document.querySelector("[data-result]");
    result.appendChild(table);
}