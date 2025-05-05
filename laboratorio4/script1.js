function cargarRegiones(){
    fetch('/data')
        .then(response => response.json())
        .then(data => {
            const regionesUnicas = [...new Set(data.map(u => u.region))]; 
            const container = document.getElementById("checkbox-container");
            container.innerHTML = ''; 

            const ul = document.createElement("ul");

            regionesUnicas.forEach(region => {
                const li = document.createElement("li");
                li.textContent = region;
                ul.appendChild(li);
            });

            container.appendChild(ul);
        })
        .catch(error => console.error("error al cargar las regiones:", error));
}
