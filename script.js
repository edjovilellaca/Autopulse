document.addEventListener("DOMContentLoaded", () => {
    const tituloInfoGeneral = document.getElementById("titulo-info-general");
    const infoCarro = document.getElementById("infoCarro");
    
    const tituloInfoManto = document.getElementById("titulo-info-manto");
    const infoManto = document.getElementById("infoManto");

    // Inicializa la visibilidad de infoCarro
    infoCarro.classList.remove("show");
    infoManto.classList.remove("show");

    // Función para alternar la visibilidad
    const toggleVisibility = (infoDiv, tituloDiv) => {
        if (infoDiv.classList.contains("show")) {
            infoDiv.classList.remove("show");
            tituloDiv.innerHTML = '<h1>Información General <i class="fa-solid fa-chevron-down"></i></h1>';
        } else {
            infoDiv.classList.add("show");
            tituloDiv.innerHTML = '<h1>Información General <i class="fa-solid fa-chevron-up"></i></h1>';
        }
    }; 

    const toggleVisibility2 = (infoDiv, tituloDiv) => {
        if (infoDiv.classList.contains("show")) {
            infoDiv.classList.remove("show");
            tituloDiv.innerHTML = '<h1>Mantenimiento <i class="fa-solid fa-chevron-down"></i></h1>';
        } else {
            infoDiv.classList.add("show");
            tituloDiv.innerHTML = '<h1>Mantenimiento <i class="fa-solid fa-chevron-up"></i></h1>';
        }
    }; 

    // Evento para el título de Información General
    tituloInfoGeneral.addEventListener("click", () => {
        toggleVisibility(infoCarro, tituloInfoGeneral);
    });

    // Evento para el título de Mantenimiento
    tituloInfoManto.addEventListener("click", () => {
        toggleVisibility2(infoManto, tituloInfoManto);
        
    });
});

function regresar() {
    window.location.href = `index.html`;
}

function princi() {
    window.location.href = `index.html`;
}

function verNotificaciones() {
    window.location.href = `notificaciones.html`;
}

function preguntar() {
    window.location.href = `preguntasF.html`;
}

function redirigir() {
    window.location.href = `info.html`;
}

function ubicar() {
    window.location.href = `ubicaciones.html`;
}

function registrar() {
    window.location.href = `agregarAuto.html`;
}