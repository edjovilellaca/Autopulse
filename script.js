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

function registrar2() {
    window.location.href = `servicio.html`;
}
function agregarServicio() {
    window.location.href = `agregarservicio.html`; // Cambia a la ruta deseada
}

function mostrarFormularioServicio() {
    document.getElementById("formulario-servicio").style.display = "block";
}

function cerrarFormularioServicio() {
    document.getElementById("formulario-servicio").style.display = "none";
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