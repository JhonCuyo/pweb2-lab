function mostrarGrafico(){
    fetch("data.json")
        .then(response => response.json())
        .then(data => {
        const fechas = data[0].confirmed.map(item => item.date);
        const datos = [["Fecha"]];
        const regionesFiltradas = data.filter(region => region.region !== "Lima" && region.region !== "Callao");
            regionesFiltradas.forEach(region => {
                datos[0].push(region.region);
            });
        fechas.forEach((fecha, i) => {
            const fila = [fecha];
            regionesFiltradas.forEach(region => {
                const valor = parseInt(region.confirmed[i].value,10);
                fila.push(isNaN(valor) ? 0 : valor);
            });
            datos.push(fila);
        })
        google.charts.load("current", { packages: ["corechart"] });
        google.charts.setOnLoadCallback(() => {
            const dataChart = google.visualization.arrayToDataTable(datos);
            const options = {
                title: "Casos Confirmados por dia(sin Lima y Callao)",
                curveType: "function",
                legend: { position: "rigth", textStyle: { fontSize: 11 } },
                hAxis: { title: "Fecha", slantedText: true, slantedTextAngle: 70 ,textStyle :{fontSize:9}, viewWindow: { min: 0}},
                vAxis: { title: "Casos Confirmados", viewWindow: { min: 0 }}
            };
            const chart = new google.visualization.LineChart(document.getElementById("grafico"));
            chart.draw(dataChart, options);
        });
    })
    .catch(error => console.error("Error al cargar los datos:", error));
}