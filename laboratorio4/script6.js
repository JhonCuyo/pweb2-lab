function mostrarGraficoExcepcion(){
    fetch("data.json")
        .then(response => response.json())
        .then(data => {
        const fechas = data[0].confirmed.map(item => item.date);
  

        const regionesFiltradas = data.filter(region => region.region !== "Lima" && region.region !== "Callao");
         const datos = [["Fecha", ...regionesFiltradas.map(region => region.region)]];
            for (let i=1; i<fechas.length; i++){
                const fila = [fechas[i]];
                regionesFiltradas.forEach(region => {
                    const hoy =parseInt(region.confirmed[i].value, 10);
                    const ayer = parseInt(region.confirmed[i-1].value, 10);
                    const variacion = (isNaN(hoy)|| isNaN(ayer))? 0 : hoy - ayer;
                    fila.push(isNaN(variacion) ? 0 : variacion); 
                });
                datos.push(fila);
            }
        google.charts.load('current', { packages: ['corechart'] });
          google.charts.setOnLoadCallback(() => {
            const dataChart = google.visualization.arrayToDataTable(datos);
            const options = {
              title: 'Crecimiento de Casos Confirmados (sin Lima y Callao)',
              curveType: 'function',
              legend: { position: 'rigth' },
              hAxis: { title: 'Fecha', slantedText: true, slantedTextAngle: 45 , viewWindow: { min: 0}},
              vAxis: { title: 'Casos Confirmados', viewWindow: { min: 0 }}
            };
            const chart = new google.visualization.LineChart(document.getElementById('grafico'));
            chart.draw(dataChart, options);
          });
        })
        .catch(error => console.error("Error al cargar los datos:", error));
}