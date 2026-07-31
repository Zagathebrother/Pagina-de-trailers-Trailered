document.addEventListener("DOMContentLoaded", function() {
    const formularios = document.querySelectorAll("form");
    

    
    if (formRegistro) {
        formRegistro.addEventListener("submit", function(evento) {
            evento.preventDefault();

            const nuevoUsuario = document.getElementById("reg-nombre").value.trim();
            const nuevoPassword = document.getElementById("reg-password").value.trim();

            localStorage.setItem("usuarioRegistrado", nuevoUsuario);
            localStorage.setItem("passwordRegistrado", nuevoPassword);

            alert("¡Registro exitoso! Ahora puedes iniciar sesión.");
            formRegistro.reset();
        });
    }

    
    if (formLogin) {
        formLogin.addEventListener("submit", function(evento) {
            evento.preventDefault(); 

            const usuarioInput = document.getElementById("login-nombre").value.trim();
            const passwordInput = document.getElementById("login-password").value.trim();

          
            const usuarioGuardado = localStorage.getItem("usuarioRegistrado") || "admin";
            const passwordGuardado = localStorage.getItem("passwordRegistrado") || "1234";

     
            if (usuarioInput === usuarioGuardado && passwordInput === passwordGuardado) {
            
                window.location.href = "bienvenido.html";
            } else {
                alert("¡Error! Usuario o contraseña incorrectos.");
            }
        });
    }
});
