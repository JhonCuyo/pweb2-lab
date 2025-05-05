function mayorRegiones(){
    fetch("data.json")
        .then(response => response.json())
        .then(data => {
            const container = document.getElementById("contenedor");
            container.innerHTML = "";

            const table = document.createElement("table");
            table.border = "1";
            table.style.borderCollapse = "collapse";
            table.style.width = "50%";

            const thead = document.createElement("thead");
            thead.innerHTML="<tr><th>Región</th><th>Total Confirmados</th></tr>";
            table.appendChild(thead);

            const tbody = document.createElement("tbody");

            
}