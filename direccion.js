document.addEventListener('DOMContentLoaded', function () {
    document.getElementById("boton").addEventListener("click", function () {
        let seleccionar = document.querySelector('input[name="juego"]:checked'); // Obtiene el radio seleccionado

        if (seleccionar) {
            let gameValue = seleccionar.value; // Obtiene el valor del radio seleccionado

            if (gameValue === "oveja") {
                setTimeout(function () {
                    window.location.href = "oveja.html"; // Redirige a la página del acertijo de la oveja
                }, 2000); // Espera 2 segundos antes de redirigir se puede modificar o quitar si no es necesario
            } else if (gameValue === "ranas") {
                setTimeout(function () {
                    window.location.href = "ranas.html"; // Aqui y en el resto es la misma explicacion
                }, 2000);
            } else if (gameValue === "puente") {
                setTimeout(function () {
                    window.location.href = "puente.html";
                }, 2000);
            } else if (gameValue === "canibales") {
                setTimeout(function () {
                    window.location.href = "canibales.html";
                }, 2000);
            }
        } else {
            alert("Selecciona un acertijo antes de continuar ps hijo XD");
        }
    });
});

//Almacenando los gifs
const gifs = [
    "Canibal/Canibal_pt1.gif",
    "Canibal/Canibal_pt2.gif",
    "Canibal/Canibal_pt3.gif",
    "Canibal/Canibal_pt4.gif",
    "Canibal/Canibal_pt5.gif",
    "Canibal/Canibal_pt6.gif",
    "Canibal/Canibal_pt7.gif",
    "Canibal/Canibal_pt8.gif",
    "Canibal/Canibal_pt9.gif",
    "Canibal/Canibal_pt10.gif"
];

const gifs_p = [
    "Puente/Puente_pt1.gif",
    "Puente/Puente_pt2.gif",
    "Puente/Puente_pt3.gif",
    "Puente/Puente_pt4.gif",
    "Puente/Puente_pt5.gif",
    "Puente/Puente_pt6.gif",
    "Puente/Puente_pt7.gif"
];

const gifs_o = [
    "OvejaP/Paso 1.gif",
    "OvejaP/Paso 2.gif",
    "OvejaP/Paso 3.gif",
    "OvejaP/Paso 4.gif",
    "OvejaP/Paso 5.gif",
    "OvejaP/Paso 6.gif"
];

const gifs_r = [
    "Ranas/Paso 1.gif",
    "Ranas/Paso 2.gif",
    "Ranas/Paso 3.gif",
    "Ranas/Paso 4.gif",
    "Ranas/Paso 5.gif",
    "Ranas/Paso 6.gif",
    "Ranas/Paso 7.gif",
    "Ranas/Paso 8.gif",
    "Ranas/Paso 9.gif",
    "Ranas/Paso 10.gif",
    "Ranas/Paso 11.gif",
    "Ranas/Paso 12.gif",
    "Ranas/Paso 13.gif",
    "Ranas/Paso 14.gif",
    "Ranas/Paso 15.gif"
];

let inicio = 0;

//funciones para cambiar los gifs
function cambiar_canibal(direction) {
    inicio = (inicio + direction + gifs.length) % gifs.length;
    document.getElementById("gif_c").src = gifs[inicio];
}

function cambiar_puente(direction) {
    inicio = (inicio + direction + gifs_p.length) % gifs_p.length;
    document.getElementById("gif_p").src = gifs_p[inicio];
}

function cambiar_oveja(direction) {
    inicio = (inicio + direction + gifs_o.length) % gifs_o.length;
    document.getElementById("gif_o").src = gifs_o[inicio];
}

function cambiar_ranas(direction) {
    inicio = (inicio + direction + gifs_r.length) % gifs_r.length;
    document.getElementById("gif_r").src = gifs_r[inicio];
}
