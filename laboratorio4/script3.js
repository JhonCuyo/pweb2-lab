function mayorRegiones(){
    fetch("data.json")
        .then(response => response.json())
        .then(data => {
            const regionesTotales = data.map(regionData => {
                const totalConfirmados = regionData.confirmed.reduce((total, diaData) => {
                    return total + parseInt(diaData.value, 10);
                }, 0);
                return { region: regionData.region, total: totalConfirmados };
            });
            const top10 = regionesTotales.sort((a, b) => b.total - a.total).slice(0, 10);
            const datosTabla = [["Región", "Total Confirmados"]];
            top10.forEach(({ region, total }) => {
                datosTabla.push([region, total]);
            });
            google.charts.load("current", { packages: ["table"] });
            google.charts.setOnLoadCallback(() => {
                const dataTable = google.visualization.arrayToDataTable(datosTabla);
                const table = new google.visualization.Table(document.getElementById("contenedor"));
                const options ={
                    showRowNumber: true,
                    width: "50%",
                    height: "auto", 
                };
                table.draw(dataTable, options);
            });
        })
        .catch(error => console.error("error al cargar los datos:", error));
}