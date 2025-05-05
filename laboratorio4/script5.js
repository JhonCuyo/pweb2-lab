function mostrarGraficoComparativo(){
    fetch("data.json")
        .then(response => response.json())
        .then(data => {
            const datos =[["Región", "Total Confirmados"]];
            data.forEach(region =>{
                const total = region.confirmed.reduce((sum, item) => sum + parseInt(item.value, 10), 0);
                datos.push([region.region, total]);
            });
            google.charts.load('current', {'packages':['corechart']});
            google.charts.setOnLoadCallback(()=>{
                const dataChart = google.visualization.arrayToDataTable(datos);
                const options = {
                    title: "Total Confirmados por Región",
                    hAxis: {
                        title: 'Región',
                        slantedText: true,
                        slantedTextAngle: 45
                    },
                    Axis: {
                        title: 'Casos Confirmados'
                    },
                    legend: 'none'
                };
                const chart = new google.visualization.PieChart(document.getElementById("grafico"));
                chart.draw(dataChart, options);
            });
        })
        .catch(error => console.error("error al cargar los datos:", error));
}