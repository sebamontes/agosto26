document.addEventListener("DOMContentLoaded", () => {
    generarCalendario();
});

function generarCalendario() {
    const ahora = new Date();
    const anio = ahora.getFullYear();
    const mes = ahora.getMonth(); // 0 - 11
    const diaActual = ahora.getDate();

    // Nombres de los meses y días de la semana
    const nombresMeses = [
        "Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio",
        "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"
    ];
    const diasSemana = ["Do", "Lu", "Ma", "Mi", "Ju", "Vi", "Sá"];

    // Mostrar el nombre del mes y año
    document.getElementById("month-title").textContent = `${nombresMeses[mes]} ${anio}`;

    const grid = document.getElementById("calendar-grid");
    grid.innerHTML = "";

    // 1. Agregar encabezados de los días (Do, Lu, Ma, ...)
    diasSemana.forEach(dia => {
        const header = document.createElement("div");
        header.classList.add("day-header");
        header.textContent = dia;
        grid.appendChild(header);
    });

    // 2. Determinar el primer día del mes y el total de días
    const primerDiaSemana = new Date(anio, mes, 1).getDay();
    const totalDiasMes = new Date(anio, mes + 1, 0).getDate();

    // 3. Crear espacios vacíos antes del primer día del mes
    for (let i = 0; i < primerDiaSemana; i++) {
        const emptyCell = document.createElement("div");
        emptyCell.classList.add("day-cell", "empty");
        grid.appendChild(emptyCell);
    }

    // 4. Crear los días del mes
    for (let dia = 1; dia <= totalDiasMes; dia++) {
        const dayCell = document.createElement("div");
        dayCell.classList.add("day-cell");
        dayCell.textContent = dia;

        // Resaltar el día de hoy
        if (dia === diaActual) {
            dayCell.classList.add("today");
        }

        grid.appendChild(dayCell);
    }
}
