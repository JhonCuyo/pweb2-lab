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
        })
}