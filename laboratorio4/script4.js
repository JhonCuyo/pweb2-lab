function mostrarGraficoArequipa(){
    fetch("data.json")
        .then(response => response.json())
        .then(data => {
            const arequipa =data.find(regionData => regionData.region === "Arequipa");
            if (!arequipa) {
                console.error("No se encontró la región Arequipa en los datos.");
                return;
            }


}