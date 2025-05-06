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
}