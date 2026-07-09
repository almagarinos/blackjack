/* Variables globales */
let mazo, puntosCrupier, puntosJugador, manoCrupier, manoJugador;

// (ENG) Clubs, Diamonds, Hearts, Spades | (ESP) Tréboles, Diamantes, Corazones, Picas
const palos = ['C','D','H','S'];
// (ENG) Ace, Jack, Queen, King | (ESP) As, Jota, Reina, Rey
const asYfiguras = ['A','J','Q','K'];
// Número de barajas usadas en el mazo. Lo habitual son seis.
const numBarajas = 6;

// Contenido dinámico
const recuentoPuntos = document.querySelectorAll('span');
const divCartasCrupier = document.querySelector('#cartasCrupier');
const divCartasJugador = document.querySelector('#cartasJugador');

// Botones de la aplicación
const btnInfo = document.querySelector('#botonInfo');
const btnReglas = document.querySelector('#botonReglas');
const btnTutorial = document.querySelector('#botonTutorial');
const btnNuevo = document.querySelector('#botonNuevo');
const btnPedir = document.querySelector('#botonPedir');
const btnParar = document.querySelector('#botonParar');


/* Se inicializa la aplicación permitiendo solamente pulsar el botón "Nuevo juego" */
btnPedir.disabled = true;
btnParar.disabled = true;


/* Funciones de la aplicación */
// Se crea el mazo con la nomenclatura que tienen las imágenes de las cartas
const crearMazo = () => {

    // Mazo de tantas barajas como se haya indicado
    for( let b = 1; b <= numBarajas; b++ ) {

        // Una baraja completa, con todos sus palos
        for( let palo of palos ) {

            // Cartas con índices del 2 al 10
            for( let i = 2; i <= 10; i++ ) {
                mazo.push( i + palo );
            }

            // Cartas con índices de ases y figuras
            for( let ayf of asYfiguras ) {
                mazo.push( ayf + palo );
            }
        }
    }

    // Se baraja el mazo con la función shuffle de underscore-min.js
    mazo = _.shuffle( mazo );
    return mazo;
}


const obtenerCarta = () => {
    if ( mazo.length === 0 ) {
        throw 'El mazo no tiene cartas.';
    }
    return mazo.pop();
}


// De momento supone que los ases sólo valen 11 puntos. Todas las figuras valen 10 puntos.
const puntuarCarta = ( carta ) => {
    const indiceCarta = carta.substring(0, carta.length - 1);
    return ( isNaN( indiceCarta ) ) ? 
            ( indiceCarta === 'A' ) ? 11 : 10 // Valor de todos los índices que no son números
            : indiceCarta * 1; // Todos los demás índices, del 2 al 10, tienen su mismo valor
}


const contarAses = ( manoCartas ) => {
    let numAses = 0;
    for( let posCarta = 0; posCarta < manoCartas.length; posCarta++ ) {
        if (manoCartas[posCarta].substring(0,1) === 'A') {
            numAses++;
        }
    }
    return numAses;
}


// Contempla que los ases pueden valer 1, es decir, 10 puntos menos que el valor inicial de 11.
const calcularRestaPorAses = ( manoCartas ) => {
    let numAses = contarAses(manoCartas);
    let duplaDeRestos;
    if ( numAses > 0) {
        // Dos opciones: todos los ases excepto uno pasan a valer 10 puntos menos, o bien todos ellos.
        duplaDeRestos = [(numAses - 1) * 10, numAses * 10];
    } else {
        // Si no hay ases, no hay nada que restar. Esto evita errores al superar 21 puntos sin ases.
        duplaDeRestos = [0,0];
    }
    return duplaDeRestos;
}


const calcularPuntosDeMano = ( manoCartas ) => {
    let puntosIniciales = 0;
    let puntosFinales;
    let duplaParaRestar = calcularRestaPorAses( manoCartas );

    for( let posCarta = 0; posCarta < manoCartas.length; posCarta++ ) {
        // Todavía se supone que los ases sólo valen 11 puntos
        puntosIniciales = puntosIniciales + puntuarCarta( manoCartas[posCarta] );
    }

    // Se decide cuándo los ases valen 11 o 1, y cuántos de ellos cambian de valor.
    if( puntosIniciales <= 21) { // Este caso solamente se da con un solo as, si lo hay.
        // Se mantiene el valor de 11 puntos del as, si lo hay.
        puntosFinales = puntosIniciales;
    } else if ( puntosIniciales - duplaParaRestar[0] <= 21) {
        // Todos los ases excepto uno pasan a valer 10 puntos menos, si los hay.
        puntosFinales = puntosIniciales - duplaParaRestar[0];
    } else {
        // Todos los ases sin excepción pasan a valer 10 puntos menos, si los hay.
        puntosFinales = puntosIniciales - duplaParaRestar[1];
    }

    return puntosFinales;
}


const mostrarCarta = ( deQuien ) => {
    const carta = obtenerCarta();
    const imgCarta = document.createElement('img');
    imgCarta.src = `assets/img/${ carta }.png`;
    imgCarta.classList.add('img-carta');

    if (deQuien == "del crupier") {
        divCartasCrupier.append( imgCarta );
        manoCrupier.push( carta );
        puntosCrupier = calcularPuntosDeMano( manoCrupier );
        recuentoPuntos[0].innerText = puntosCrupier;

    } else if (deQuien == "del jugador") {
        divCartasJugador.append( imgCarta );
        manoJugador.push( carta );
        puntosJugador = calcularPuntosDeMano( manoJugador );
        recuentoPuntos[1].innerText = puntosJugador;

    } else {
        throw 'Indique la persona a quien pertenece la carta que desea mostrar.';
    }
}


const evaluarMarcador = () => {
    let resultado;
    let bjJugador = false,
        bjCrupier = false,
        hayEmpate = false,
        jugadorGana = false;

    if (puntosJugador == 21 && manoJugador.length == 2) {
        bjJugador = true;
        console.info('El jugador tiene blackjack: 21 puntos con 2 cartas.');
    }
            
    if (puntosCrupier == 21 && manoCrupier.length == 2) {
        bjCrupier = true;
        console.info('El crupier tiene blackjack: 21 puntos con 2 cartas.');
    }

    if( puntosJugador === puntosCrupier ) {
        if (puntosJugador == 21) {
            if ( bjJugador && bjCrupier ) {
                resultado = '¡Es un empate! Ambos tienen 21 puntos con blackjack.';
                hayEmpate = true;
            } else if ( bjJugador && !bjCrupier ) {
                resultado = '¡El jugador gana con blackjack! No hay empate aunque ambos tengan 21 puntos.';
                jugadorGana = true;
            } else if ( !bjJugador && bjCrupier ) {
                resultado = '¡El crupier gana con blackjack! No hay empate aunque ambos tengan 21 puntos.';
            } else {
                resultado = '¡Es un empate! Ambos tienen 21 puntos pero sin blackjack.';
                hayEmpate = true;
            }
        } else {
            resultado = `¡Es un empate! Se tiene la misma puntuación de ${ puntosJugador } puntos.`;
            hayEmpate = true;
        }
    } else if ( puntosJugador > 21 ) {
        resultado = 'El jugador pierde por excederse de 21 puntos.';
    } else if( puntosCrupier > 21 ) {
        resultado = 'El crupier pierde por excederse de 21 puntos.';
        jugadorGana = true;
    } else if( puntosJugador > puntosCrupier ) {
        resultado = '¡El jugador gana con la mejor mano de cartas!';
        jugadorGana = true;
    } else {
        resultado = '¡El crupier gana con la mejor mano de cartas!';
    }

    // En una futura versión de la app, el siguiente mensaje se podría mostrar sin usar este alert()
    alert(resultado);

    // En una futura versión de la app, los siguientes datos se podrían almacenar en un historial
    console.table ({
                        "Mano del crupier"      :manoCrupier.join('-'),
                        "Mano del jugador"      :manoJugador.join('-'),
                        "Puntos del crupier"    :puntosCrupier,
                        "Puntos del jugador"    :puntosJugador,
                        "Blackjack del crupier" :bjCrupier,
                        "Blackjack del jugador" :bjJugador,
                        "¿Hubo un empate?"      :hayEmpate,
                        "¿Ganó el jugador?"     :jugadorGana
                    });

    console.info('RESULTADO:', resultado);

    btnNuevo.disabled = false;
}


const turnoCrupier = () => {
    btnPedir.disabled = true;
    btnParar.disabled = true;

    do {
        mostrarCarta( "del crupier" );
    } while ( puntosJugador <= 21 && puntosCrupier < 17);

    setTimeout(() => {
        evaluarMarcador();
    }, 1000 );
}


/* Gestión de eventos de botones */
btnParar.addEventListener('click', () => {
    turnoCrupier();
});


btnPedir.addEventListener('click', () => {
    mostrarCarta( "del jugador" );
    if ( puntosJugador >= 21 ) {
        turnoCrupier();
    }
});


btnNuevo.addEventListener('click', () => {
    console.clear();

    btnNuevo.disabled = true;
    btnPedir.disabled = true;
    btnParar.disabled = true;

    // Se inicializa el mazo vacío
    mazo = [];

    // Se completa el mazo ya barajado
    mazo = crearMazo();

    // Descomentando las dos siguientes líneas se pueden hacer pruebas forzando casuísticas
    mazo = ['AS','AH','AD','AD','AC','AS','6S','AH','AD','AC','AS','AH','AD','AC','AS','AH','AD','AC','AS','AH','AD','2H','AC','AS','AH','AD','AC','AS','AH','AD','AC','AS','AH'];
    console.table( mazo );

    // Se vacían las manos de cartas
    manoCrupier = [];
    manoJugador = [];

    // Se ponen a ceros los puntos
    puntosCrupier = 0;
    puntosJugador = 0;
    
    // Se ponen a cero los marcadores
    recuentoPuntos[0].innerText = 0;
    recuentoPuntos[1].innerText = 0;

    // Se inicializan vacías las manos de cartas mostradas en el tapete
    divCartasCrupier.innerHTML = '';
    divCartasJugador.innerHTML = '';

    setTimeout(() => {
        // Primero se le da una carta al jugador
        mostrarCarta( "del jugador" );
    }, 500 );

    setTimeout(() => {
        // A continuación se le da otra al crupier
        mostrarCarta( "del crupier" );
    }, 1000 );

    setTimeout(() => {
        // Por último, se le da una segunda carta al jugador y ya es su turno, según el estilo europeo
        mostrarCarta( "del jugador" );

        // Si el jugador obtiene un blackjack, ya no habla y se le pasa el turno al crupier
        if ( puntosJugador === 21 ) {
            turnoCrupier();
        // Si no lo obtiene, entonces el jugador elige si pedir carta o plantarse
        } else {
            btnPedir.disabled = false;
            btnParar.disabled = false;
        }
    }, 1500 );
});


/* Gestión de teclas asignadas a botones */
window.addEventListener('keyup', (event) => {
    if (event.key === 'a' || event.key === 'A' || event.key === '1') {
        btnInfo.click();
    }
    if (event.key === 'r' || event.key === 'R' || event.key === '2') {
        btnReglas.click();
    }
    if (event.key === 't' || event.key === 'T' || event.key === '3') {
        btnTutorial.click();
    }
    if (event.key === 'n' || event.key === 'N' || event.key === '4') {
        btnNuevo.click();
    }
    if (event.key === 'c' || event.key === 'C' || event.key === '5') {
        btnPedir.click();
    }
    if (event.key === 'p' || event.key === 'P' || event.key === '6') {
        btnParar.click();
    }
});