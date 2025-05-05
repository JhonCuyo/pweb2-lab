function mostrarGraficoArequipa(){
    fetch("data.json")
        .then(response => response.json())
        .then(data => {
            const arequipa =data.find(regionData => regionData.region === "Arequipa");
            if (!arequipa) {
                console.error("No se encontró la región Arequipa en los datos.");
                return;
            }
            google.charts.load('current', {'packages':['corechart']});
            google.charts.setOnLoadCallback(()=>{
                const datos =[["Fecha", "Confirmados"]];
                arequipa.confirmed.forEach(dia => {
                    datos.push([new Date(dia.date), parseInt(dia.value, 10)]);
                });
                const dataChart = google.visualization.arrayToDataTable(datos);
            
}