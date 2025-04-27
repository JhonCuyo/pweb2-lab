function DiaSemana(numeroDia){
    const dias=["Domingo","Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"];
    return dias=[numeroDia];
}
const fechaActual= new Date();
const numeroDia=fechaActual.getDay();
console.log(DiaSemana(numeroDia));
