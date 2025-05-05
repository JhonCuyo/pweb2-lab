function mostrarGraficoCompartivo(){
    fetch("data.json")
        .then(response => response.json())
        .then(data => {
            const datos =[["Región", "Total Confirmados"]];
            data.forEach(region =>{
                const total = region.confirmed.reduce((sum, item) => sum + parseInt(item.value, 10), 0);
                datos.push([region.region, total]);
            });
}