
// ==============================
// DATOS DE ACCESO
// ==============================

const NOMBRE_CORRECTO = "wilson";
const CONTRASENA_CORRECTA = "123456";


// ==============================
// FUNCIÓN PARA ENTRAR
// ==============================

function entrar() {

    const nombre = document.getElementById("nombre").value.trim();
    const contrasena = document.getElementById("contrasena").value;

    const mensaje = document.getElementById("mensajeError");
    const pantalla = document.getElementById("pantallaAcceso");
    const contenido = document.getElementById("contenido");

    if (
        nombre.toLowerCase() === NOMBRE_CORRECTO.toLowerCase() &&
        contrasena === CONTRASENA_CORRECTA
    ) {

        mensaje.textContent = "Acceso correcto";

        pantalla.style.transition = "opacity 1s ease";
        pantalla.style.opacity = "0";

        setTimeout(() => {
            pantalla.style.display = "none";
            contenido.style.display = "block";
        }, 1000);

    } else {

        mensaje.textContent =
            "El nombre o la contraseña no son correctos.";
    }
}


// ==============================
// CUANDO CARGA LA PÁGINA
// ==============================

document.addEventListener("DOMContentLoaded", function () {

    const escena = document.querySelector(".escena");
    const botonAmor = document.getElementById("botonAmor");

    // Efecto de carga
    if (escena) {
        escena.classList.add("cargada");
    }


    // ==============================
    // BOTÓN "TE QUIERO"
    // ==============================

    if (botonAmor) {

        botonAmor.addEventListener("click", function () {

            // Crear corazones
            for (let i = 0; i < 35; i++) {

                const corazon = document.createElement("div");

                corazon.className = "corazon";
                corazon.textContent = "❤️";

                corazon.style.left =
                    Math.random() * 100 + "vw";

                corazon.style.fontSize =
                    (20 + Math.random() * 35) + "px";

                corazon.style.animationDuration =
                    (3 + Math.random() * 3) + "s";

                corazon.style.animationDelay =
                    (Math.random() * 1) + "s";

                document.body.appendChild(corazon);


                // Eliminar corazón
                setTimeout(function () {
                    corazon.remove();
                }, 7000);
            }


            // Cambiar texto del botón
            botonAmor.textContent = "❤️ TE QUIERO ❤️";

            setTimeout(function () {
                botonAmor.textContent = "🏁 TE QUIERO";
            }, 2500);

        });

    }


    // ==============================
    // MOVIMIENTO CON MOUSE
    // ==============================

    document.addEventListener("mousemove", function (evento) {

        const x =
            (evento.clientX / window.innerWidth - 0.5) * 2;

        const y =
            (evento.clientY / window.innerHeight - 0.5) * 2;

        document
            .querySelectorAll(".auto, .moto")
            .forEach(function (vehiculo, index) {

                const movimiento = (index + 1) * 2;

                vehiculo.style.marginLeft =
                    `${x * movimiento}px`;

                vehiculo.style.marginTop =
                    `${y * movimiento}px`;
            });

    });


    // ==============================
    // MOVIMIENTO CON CELULAR
    // ==============================

    document.addEventListener(
        "touchmove",
        function (evento) {

            if (!evento.touches.length) {
                return;
            }

            const toque = evento.touches[0];

            const x =
                (toque.clientX / window.innerWidth - 0.5) * 2;

            const y =
                (toque.clientY / window.innerHeight - 0.5) * 2;

            document
                .querySelectorAll(".auto, .moto")
                .forEach(function (vehiculo, index) {

                    const movimiento = (index + 1) * 1.5;

                    vehiculo.style.marginLeft =
                        `${x * movimiento}px`;

                    vehiculo.style.marginTop =
                        `${y * movimiento}px`;

                });

        },
        { passive: true }
    );

});

