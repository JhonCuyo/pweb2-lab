function mayorRegiones(){
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

            const regionesTotales = data.map(regionData => {
                const totalConfirmados = regionData.confirmed.reduce((total, diaData) => {
                    return total + parseInt(diaData.value, 10);
                }, 0);
                return { region: regionData.region, total: totalConfirmados };
            });
            const top10 = regionesTotales.sort((a, b) => b.total - a.total).slice(0, 10);

            top10.forEach(({ region, total }) => {
                const fila = document.createElement("tr");
                fila.innerHTML = `<td>${region}</td><td>${total}</td>`;
                tbody.appendChild(fila);
            });
            table.appendChild(tbody);
            container.appendChild(table);
        })
        .catch(error => console.error("error al cargar los datos:", error));
}