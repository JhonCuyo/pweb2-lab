function mostrarTotal(){
    fetch("data.json")
        .then(response => response.json())
        .then(data => {
            const container = document.getElementById("contenedor");
            container.innerHTML = ""; 

            const table = document.createElement("table");
            table.border = "1";
            table.style.borderCollapse = "collapse";
            table.style.width = "50%";

            const thead = document.createElement("thead");
            thead.innerHTML="<tr><th>Región</th><th>Total Confirmados</th></tr>";
            table.appendChild(thead);

            const tbody = document.createElement("tbody");
            data.forEach(regionData => {
                const region = regionData.region;
                const totalConfirmados = regionData.confirmed.reduce((total, diaData) =>{
                    return total + parseInt(diaData.value, 10);
                },0);

                const fila = document.createElement("tr");
                fila.innerHTML = `<td>${region}</td><td>${totalConfirmados}</td>`;
                tbody.appendChild(fila);
            });
            table.appendChild(tbody);
            container.appendChild(table);
        })
        .catch(error => console.error("error al cargar los datos:", error));
}