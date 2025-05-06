function cargarRegiones() {
    console.log("cargando regiones");
    fetch('data.json')
        .then(response => response.json())
        .then(data => {
            const regionesUnicas = [...new Set(data.map(u => u.region))]; 
            const container = document.getElementById("checkbox-container");
            container.innerHTML = ''; 
            regionesUnicas.forEach(region => {
                const label = document.createElement("label");
                label.style.display = "block";
                label.innerHTML = `<input type="checkbox" value="${region}" class="region-checkbox"> ${region}`;
                container.appendChild(label);
            });
        })
        .catch(error => console.error("error al cargar las regiones:", error));
}
function generarGrafico() {
    fetch('data.json')
        .then(response => response.json())
        .then(data => {
            const checkboxes = document.querySelectorAll(".region-checkbox:checked");
            const regionesSeleccionadas = Array.from(checkboxes).map(checkbox => checkbox.value);
            if (regionesSeleccionadas.length === 0) {
                alert("Por favor, selecciona al menos una región.");
                return;
            }
            const fechas = data[0].confirmed.map(item => item.date);
            const datos = [["Fecha"]];

            const regionesFiltradas = data.filter(region => regionesSeleccionadas.includes(region.region));
            regionesFiltradas.forEach(region => {
                datos[0].push(region.region);
            });
            fechas.forEach((fecha, i) => {
                const fila = [fecha];
                regionesFiltradas.forEach(region => {
                    const valor = parseInt(region.confirmed[i].value, 10);
                    fila.push(isNaN(valor) ? 0 : valor);
                });
                datos.push(fila);
            });
}