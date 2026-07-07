# Blackjack

Juego de cartas de casino, en su modalidad clásica europea, implementado como aplicación web. [¿Cómo jugar?](https://www.casino.es/blackjack/como-jugar-blackjack/)

En ningún momento de este proyecto se realizarán apuestas con dinero real, siempre serán cantidades ficticias.


## 📈 Versión 1.0.2
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=000)
![HTML](https://img.shields.io/badge/HTML-%23E34F26.svg?logo=html5&logoColor=white)
![CSS](https://img.shields.io/badge/CSS-639?logo=css&logoColor=fff)
![Bootstrap](https://img.shields.io/badge/Bootstrap-7952B3?logo=bootstrap&logoColor=fff)

Esta es una versión estable del proyecto, desarrollada únicamente con tecnologías Front-End nativas: JavaScript, HTML y CSS. Se importa la librería Bootstrap, pero la aplicación no requiere de procesos de compilación ni instalación de dependencias.

Se ha testeado con éxito en pantallas de smartphones y laptops. Si en algún caso sale scroll, se recomienda ajustar al 90 % el zoom del navegador, mediante `Ctrl`+`-`, por ejemplo.

Actualmente se puede jugar perfectamente entendiendo cómo funcionan las reglas para ganar, empatar o perder, pero todavía no se han implementado estas funcionalidades:
- Posibilidad de realizar apuestas indicando las cantidades.
- Participar en más de un puesto de jugador aparte del crupier.
- Doblar apuestas cuando la mano inicial suma 9, 10 u 11 puntos.
- Separar pares cuando las dos cartas iniciales tienen el mismo valor.
- Realizar apuestas de seguro cuando la primera carta del crupier es un as.


### Funcionalidades pendientes 🧾

Para que esta aplicación se considere un simulador completo de blackjack real, debe incluir los siguientes puntos en detalle.

- 💰 **Apuestas**. Además del pago a la par, hay que tener en cuenta el pago especial de las manos que tengan blackjack y el de los seguros.
- 👥 **Jugadores**. Puede haber hasta siete puestos de jugadores, aparte del crupier. Como mínimo, se deben ocupar dos puestos de jugador.
- 2️⃣ **Doblar**. Jugada especial también llamada "apuesta doble", "doblada" o *double down* en inglés, cuando las dos cartas iniciales suman 9, 10 u 11 puntos, y donde se obtiene solamente una carta más. Esta tercera carta se posiciona en perpendicular a las anteriores de la mano.
- ➗ **Separar**. Jugada especial también llamada "pares", "apertura", "dividir", "separar" o *split* en inglés, cuando las dos cartas iniciales tienen el mismo valor, y donde figuras y dieces cuentan como iguales, ya que todas las figuras valen 10 puntos.
- ✅ **Asegurar**. Jugada especial también llamada "el seguro" o *insurance* en inglés, cuando la primera carta del crupier es un as, y donde como máximo se añade la mitad de la cantidad inicial apostada.


## 🎮 Jugar online
![GitHub Pages](https://img.shields.io/badge/GitHub%20Pages-121013?logo=github&logoColor=white)

Disponible tras su despliegue en GitHub Pages:

👉 https://almagarinos.github.io/blackjack/ 👈


## 💻 Instalación local

![Git](https://img.shields.io/badge/Git-F05032?logo=git&logoColor=fff)

### Clonar repositorio ⬇️

Si se tiene instalado [Git](https://git-scm.com/), sólo hay que usar los siguientes comandos en un terminal, dentro de la ruta del directorio donde se quiera descargar el juego:
```bash
git clone https://github.com/almagarinos/blackjack  # Descarga el proyecto
blackjack\index.html                # Ejecuta el juego en un navegador web
```

### Descargar fichero 🗂️
Se puede obtener todo el proyecto comprimido en [este ZIP](https://github.com/almagarinos/blackjack/archive/refs/heads/main.zip). Descomprímase su contenido dentro del directorio donde se quiera ubicar el juego, para luego abrir el archivo **index.html** en un navegador web.


## 📂 Estructura del proyecto

```sh
blackjack/
│
├── assets/
│   ├── css/
│   │   └── styles.css          # Estilos propios de la aplicación
│   │
│   ├── icon/                   # Archivos para el favicon en distinos formatos
│   │   └── ...
│   │
│   ├── img/                    # Imágenes de las 52 cartas de la baraja francesa
│   │   ├── 10C.png             # En este ejemplo: 10 de "clubs" (tréboles)
│   │   └── ...                 # Siguen el patrón [índice][palo].png
│   │
│   ├── js/
│   │   ├── app.js              # Lógica principal del juego, incluye comentarios
│   │   └── underscore-min.js   # Librería Underscore.js, es usada como auxiliar
│   │
│   └── pdf/
│       └── rules.pdf           # Reglas del blackjack en su variante europea
│
└── index.html                  # Punto de entrada de la aplicación
```


## 🛠️ Herramientas auxiliares

Se importa la librería de estilos **Bootstrap** en la cabedera `<head>` del archivo **index.html**. Se aplica en las fuentes de texto, disposición de componentes y aspecto de botones.

Se utiliza la función `_.shuffle()` de la librería **Underscore.js** para barajar las cartas. Véase más información en [este blog](https://www.javascriptroom.com/blog/underscore-js-shuffle-function/) y en su [documentación oficial](https://underscorejs.org/#shuffle).


## 📒 Reglas del juego
El objetivo es sumar un valor lo más próximo a 21 puntos sin pasarse. Las cartas numéricas suman su valor, las figuras suman 10 y el as vale 11 o 1.

A continuación se detallan dos opciones para aprender a jugar. La primera está pensada para acceder a estas reglas cuando no se disponga de conexión a Internet, una vez descargado el proyecto en local.

### Leer en PDF 📋
Se pueden consultar en [este PDF](https://almagarinos.github.io/blackjack/assets/pdf/rules.pdf), el cual también está adjunto en la ruta `blackjack/assets/pdf/rules.pdf`.

### Ver videotutorial ▶️

Se puede visualizar [este vídeo](https://www.youtube.com/watch?v=q1JwKw_c4r0) de 10 minutos, perfectamente explicado, relativo a [esta guía](https://www.casino.es/blackjack/) muy completa.


## ❓ Glosario y nomenclatura

Cada naipe de la baraja francesa tiene un índice y un palo. Los índices son los números del 2 al 10, los ases y las figuras.

### Ases y figuras de la baraja 🃏
- As - *Ace*: 🃑 `A`
- Jota - *Jack*: 🃛 `J`
- Reina - *Queen*: 🃝 `Q`
- Rey - *King*: 🃞 `K`

### Palos de la baraja ♣️♦️♠️♥️
- Tréboles - *Clubs*: ♣ `C`
- Diamantes - *Diamonds*: ♦ `D`
- Picas - *Spades*: ♠ `S`
- Corazones - *Hearts*: ♥ `H`

Todo lo anterior facilitará entender el nombre de las cartas, que siguen el patrón `[índice][palo]`. Por ejemplo:
- `8H` es el ocho de corazones.
- `10C` es el diez de tréboles.
- `AD` es el as de diamantes.
- `QS` es la reina de picas.

Esta nomenclatura se usa en las imágenes de `blackjack/assets/img/` y en los datos mostrados por consola.


## 👨‍💻 Datos por consola
En la versión actual, la aplicación muestra información por consola tras resolver cada jugada. Para verla, hay que acceder a las herramientas de desarrollador (DevTools) del navegador, idealmente en un dispositivo de sobremesa (Desktop). Para ello, desde la propia pestaña abierta de la aplicación, pulsaremos F12 para abrir dichas herramientas, cuya opción "Console" es la que debemos seleccionar.

En ella se mostrarán tres tipos de mensaje:
- Detección de blackjacks, si los hubiese.
- Tabla con todos los datos de la jugada.
- Resultado con el resumen de la jugada.

Estos datos serán muy útiles para un futuro historial de jugadas o testeo de nuevas funcionalidades de la aplicación.

### Ejemplo 1: pierde el jugador 👎

El crupier ha obtenido un diez de tréboles (`10C`) y un as de diamantes (`AD`). El jugador ha obtenido una reina de picas (`QS`), una reina de diamantes (`QD`) y un as de picas (`AS`). Lo que muestra la consola es la siguiente información:

`El crupier tiene blackjack: 21 puntos con 2 cartas.`

|`(index)`              |`Value`		        |
|-----------------------|-----------------------|
|Mano del crupier		|'`10C`-`AD`'           |
|Mano del jugador		|'`QS`-`QD`-`AS`'       |
|Puntos del crupier		|21				        |
|Puntos del jugador		|21				        |
|Blackjack del crupier	|true			        |
|Blackjack del jugador	|false			        |
|¿Hubo un empate?		|false			        |
|¿Ganó el jugador?		|false			        |

`RESULTADO: ¡El crupier gana con blackjack! No hay empate aunque ambos tengan 21 puntos.`

### Ejemplo 2: hay un empate 🤝

El crupier ha obtenido una reina de diamantes (`QD`) y un as de picas (`AS`). El jugador ha obtenido una reina de corazones (`QH`) y un as de tréboles (`AC`). Lo que muestra la consola es la siguiente información:

`El jugador tiene blackjack: 21 puntos con 2 cartas.`

`El crupier tiene blackjack: 21 puntos con 2 cartas.`

|`(index)`				|`Value`		        |
|-----------------------|-----------------------|
|Mano del crupier		|'`QD`-`AS`'	        |
|Mano del jugador		|'`QH`-`AC`'	        |
|Puntos del crupier		|21 			        |
|Puntos del jugador		|21				        |
|Blackjack del crupier	|true			        |
|Blackjack del jugador	|true			        |
|¿Hubo un empate?		|true			        |
|¿Ganó el jugador?		|false			        |

`RESULTADO: ¡Es un empate! Ambos tienen 21 puntos con blackjack.`

### Ejemplo 3: gana el jugador 👍

El crupier ha obtenido una jota de diamantes (`JD`), un tres de corazones (`3H`), un tres de tréboles (`3C`) y un dos de tréboles (`2C`). El jugador ha obtenido una reina de picas (`QS`) y un nueve de tréboles (`9C`). Lo que muestra la consola es la siguiente información:

|`(index)`  			|`Value`		        |
|-----------------------|-----------------------|
|Mano del crupier		|'`JD`-`3H`-`3C`-`2C`'	|
|Mano del jugador		|'`QS`-`9C`'		    |
|Puntos del crupier		|18				        |
|Puntos del jugador		|19				        |
|Blackjack del crupier	|false			        |
|Blackjack del jugador	|false			        |
|¿Hubo un empate?		|false			        |
|¿Ganó el jugador?		|true			        |

`RESULTADO: ¡El jugador gana con la mejor mano de cartas!`


## 🔬 Cobertura de pruebas

Se puede forzar la no aleatoriedad del reparto de las cartas para poder hacer pruebas de casuísticas concretas.

Para ello, búsquese "pruebas" en el archivo `blackjack/assets/js/app.js` para encontrar este comentario:

```JS
// Descomentando las dos siguientes líneas se pueden hacer pruebas forzando casuísticas
```

Siguiendo el patrón descrito anteriormente para nombrar las cartas, se pueden provocar las manos deseadas para cubrir todas las posibilidades en el testeo de la aplicación. Por ejemplo, si dejamos esas dos líneas descomentadas tal que así:

```JS
mazo = ['8C','7H','6C','AD','5H','QS'];
console.table( mazo );
```

Entonces, lo que se muestra por consola es el mazo completo de cartas que se tiene previsto repartir y, a continuación, los datos de la jugada según lo habitual. Vemos que en este caso aún queda por repartir la carta `8C` del mazo, sin embargo, en concordancia con las reglas del blackjack, el crupier debe parar en `7H` su reparto porque ya alcanzó 17 puntos o más:

|`(index)`				|`Value`				|
|-----------------------|-----------------------|
|0						|'`8C`'					|
|1						|'`7H`'					|
|2						|'`6C`'					|
|3						|'`AD`'					|
|4						|'`5H`'					|
|5						|'`QS`'					|

`El jugador tiene blackjack: 21 puntos con 2 cartas.`

|`(index)`				|`Value`				|
|-----------------------|-----------------------|
|Mano del crupier		|'`5H`-`6C`-`7H`'		|
|Mano del jugador		|'`QS`-`AD`'			|
|Puntos del crupier		|18						|
|Puntos del jugador		|21						|
|Blackjack del crupier	|false					|
|Blackjack del jugador	|true					|
|¿Hubo un empate?		|false					|
|¿Ganó el jugador?		|true					|

`RESULTADO: ¡El jugador gana con la mejor mano de cartas!`