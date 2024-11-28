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

function ubicar() {
    window.location.href = `ubicaciones.html`;
}

function registrar() {
    window.location.href = `agregarAuto.html`;
}

function agregarServicio() {
    window.location.href = `agregarServicio.html`; // Cambia a la ruta deseada
}

function preguntar(){
    window.location.href = `preguntasF.html`;
}

function redirigir(){
    window.location.href = `info.html`;
}

function redireccionarModificaciones() {
    const vehicleId = localStorage.getItem("vehicleId"); // Obtén el vehículo seleccionado actualmente
    if (vehicleId) {
        localStorage.setItem("selectedVehicleId", vehicleId); // Guarda el vehículo seleccionado
    }
    window.location.href = "modificaciones.html"; // Redirige a la pantalla de modificaciones
}

function redireccionarAgregarCarro(){
    window.location.href = `agregarAuto.html`;
}

function cerrarSesion() {
    // Confirmación opcional para cerrar sesión
    const confirmacion = confirm("¿Estás seguro de que deseas cerrar sesión?");
    if (!confirmacion) return;

    // 1. Limpiar caché
    if ('caches' in window) {
        caches.keys().then(function (names) {
            for (let name of names) {
                caches.delete(name); // Borra cada caché encontrado
            }

        }).catch(err => {

        });
    }

    // 2. Borrar cookies
    document.cookie.split(";").forEach(cookie => {
        const eqPos = cookie.indexOf("=");
        const name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
        document.cookie = name + "=;expires=Thu, 01 Jan 1970 00:00:00 UTC;path=/;";
    });
    console.log("Cookies eliminadas.");

    // 3. Limpiar localStorage y sessionStorage
    localStorage.clear();
    sessionStorage.clear();

    // 4. Mensaje y redirección
    alert("Has cerrado sesión exitosamente.");
    window.location.href = 'inicio.html'; // Cambia 'inicio.html' a la URL de tu página de inicio de sesión
}
