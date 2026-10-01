
/* =========================
   COMENZAR
========================= */

function comenzar() {

    document
        .getElementById("inicio")
        .classList.add("oculto");

    document
        .getElementById("garage")
        .classList.remove("oculto");
}


/* =========================
   MOSTRAR MENSAJE
========================= */

function mostrarMensaje(tipo) {

    document
        .getElementById("garage")
        .classList.add("oculto");

    document
        .getElementById("mensajePantalla")
        .classList.remove("oculto");


    let contenido = "";

    /* Auto que aparecerá en cada mensaje */

    let auto = "img/rojo.png";


    /* =========================
       CUANDO ME EXTRAÑES
    ========================== */

    if (tipo === "extrañes") {

        auto = "img/azul.png";

        contenido = `
            <div class="corazon-grande">
                ❤️
            </div>

            <h2>
                💗 Cuando me extrañes
            </h2>

            <p>
                Amor...
            </p>

            <p>
                Si estás leyendo esto porque me extrañas,
                quiero que recuerdes algo: TE AMO MUCHISIMO.
            </p>

            <p>
                No importa que tan lejos estemos quiero que sepas
                 que siempre estas presente en mis pensamientos y 
                 en mi corazon.
            </p>

            <p>
                
                <strong>Gracias por llegar a mi vida,</strong> ❤️
                y aunque ahora nos toque estar a distancia,
                sigues siendo una de las personas más importantes
                de mi vida.
            </p>

            <p>
                Recuerda que hay alguien que piensa en ti y te ama muchisimo.
                Extraño muchísimo tus abrazos
                y también tus besos. 🥺❤️
            </p>

            <p>
                Ojalá pudiera recorrer todos los kilómetros
                que nos separan y aparecer frente a ti
                simplemente para abrazarte.
            </p>

            <p>
                Pero mientras llega ese momento,
                quiero que recuerdes que siempre estás
                presente en mi corazón.
            </p>

            <p class="frase-final">
                Te amo mucho, eres el amor de mi vida. ❤️
            </p>
        `;
    }


    /* =========================
       CUANDO ESTÉS TRISTE
    ========================== */

    else if (tipo === "triste") {

        auto = "img/rojo.png";

        contenido = `
            <div class="corazon-grande">
                🥺❤️
            </div>

            <h2>
                🥺 Cuando estés triste
            </h2>

            <p>
                Amor...
            </p>

            <p>
                Si estás pasando por un día difícil,
                quiero que recuerdes que no estás solo.
            </p>

            <p>
                Aunque no pueda estar físicamente contigo
                para abrazarte, estoy contigo de corazón.
            </p>

            <p>
                Respira, sonríe un poquito y recuerda
                que los días malos también pasan.
            </p>

            <p class="frase-final">
                Hay alguien al otro lado de la pantalla
                que te ama muchísimo. ❤️
            </p>
        `;
    }


    /* =========================
       CUANDO NECESITES REÍR
    ========================== */

    else if (tipo === "reir") {

        auto = "img/verde.png";

        contenido = `
            <div class="corazon-grande">
                ❤️
            </div>

            <h2>
                 Cuando necesites sonreir
            </h2>

            <p>
                Cuando necesites sonreir...acuerdate de mi.
            </p>

            <p>
                    Quiero que nunca olvides que me encanta verte 
                    feliz, que me gusta tu sonrisa, que cuando tu estas feliz yo tambien
                    lo estoy.
            </p>


            <p>
                Si todavía no sonríes...
            </p>

            <p>
                entonces voy a tener que mandarte
                un abrazo virtual. 🫂❤️
            </p>

            <p class="frase-final">
                Sonríe, Amor.
                Tu sonrisa es una de mis cosas favoritas.<br> 
                Y recuerda: tienes una novia que te ama muchisimo❤️
            </p>
        `;
    }


    /* =========================
       CUANDO QUIERAS SABER
       CUÁNTO TE AMO
    ========================== */

    else if (tipo === "amor") {

        auto = "img/sol.png";

        contenido = `
            <div class="corazon-grande">
                ❤️
            </div>

            <h2>
                ❤️ ¿Cuánto te amo?
            </h2>

            <p>
                Calculando cuánto te amo...
            </p>

            <p>
                🔄 Procesando...
            </p>

            <p>
                ❌ ERROR
            </p>

            <p>
                El número es demasiado grande
                para calcularlo. ❤️
            </p>

            <p class="frase-final">
                Te amo mucho.
                Eres el amor de mi vida. ❤️
            </p>
        `;
    }


    /* =========================
       NUESTRA HISTORIA
    ========================== */

    else if (tipo === "historia") {

        auto = "img/negro.png";

        contenido = `
            <div class="corazon-grande">
                🏁❤️
            </div>

            <h2>
                🏁 Nuestra historia
            </h2>

            <p>
                Todo comenzó de una manera que ninguno de los dos imaginaba...
            </p>

            <p>
                Sin saber que terminarias  convirtiendote 
                 en alguien
                tan importante para mí.
            </p>

            <p>
                Entre conversaciones, risas y momentos juntos,
                nuestra historia fue creciendo.
            </p>

            <p>
                Ahora la distancia forma parte de nuestra historia,
                pero no significa que nuestro camino haya terminado.
            </p>

            <p>
                Cada kilómetro que nos separa
                también representa un día menos
                para volver a estar juntos.
            </p>

            <p class="frase-final">
                🏁 Próximo destino:
                estar juntos nuevamente. ❤️
            </p>
        `;
    }


    /* =========================
       CAMBIAR AUTO
    ========================== */

    document
        .getElementById("autoCarta")
        .src = auto;


    /* =========================
       MOSTRAR CONTENIDO
    ========================== */

    document
        .getElementById("contenidoMensaje")
        .innerHTML = contenido;
}


/* =========================
   VOLVER AL GARAGE
========================= */

function volverGarage() {

    document
        .getElementById("mensajePantalla")
        .classList.add("oculto");

    document
        .getElementById("garage")
        .classList.remove("oculto");
}


/* =========================
   VOLVER AL INICIO
========================= */

function volverInicio() {

    document
        .getElementById("garage")
        .classList.add("oculto");

    document
        .getElementById("mensajePantalla")
        .classList.add("oculto");

    document
        .getElementById("inicio")
        .classList.remove("oculto");
}

