function DiaSemana(numeroDia){
    let dias=["Domingo","Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"];
    return dias[numeroDia];
}
let fechaActual= new Date();
let numeroDia=fechaActual.getDay();
let dia= DiaSemana(numeroDia);
document.getElementById("dia").textContent=dia;