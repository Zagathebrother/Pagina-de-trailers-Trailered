document.addEventListener("DOMContentLoaded", function() {
    const formularios = document.querySelectorAll("form");
    const formLogin = formularios[0];
    const formRegistro = formularios[1];

    formRegistro.addEventListener("submit", function(evento) {
        evento.preventDefault();

        const nuevoUsuario = document.getElementById("reg-nombre").value;
        const nuevoPassword = document.getElementById("reg-password").value;

        localStorage.setItem("usuarioRegistrado", nuevoUsuario);
        localStorage.setItem("passwordRegistrado", nuevoPassword);

        alert("¡Registro exitoso! Ahora puedes iniciar sesión.");
        formRegistro.reset();
    });

    formLogin.addEventListener("submit", function(evento) {
        const usuarioInput = document.getElementById("login-nombre").value;
        const passwordInput = document.getElementById("login-password").value;

        const usuarioGuardado = localStorage.getItem("usuarioRegistrado") || "admin";
        const passwordGuardado = localStorage.getItem("passwordRegistrado") || "1234";

        if (usuarioInput !== usuarioGuardado || passwordInput !== passwordGuardado) {
            evento.preventDefault();
            alert("¡Error! Usuario o contraseña incorrectos.");
        }
    });
});
