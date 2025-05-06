function mostrarGraficoExcepcion(){
    fetch("data.json")
        .then(response => response.json())
        .then(data => {
        const fechas = data[0].confirmed.map(item => item.date);
        const datos = [["Fecha"]];

        data.forEach(region => {
            if (region.region !== "Lima" && region.region !== "Callao") {
                datos[0].push(region.region);
            }
        });
        })
}