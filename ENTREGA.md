# Borrador del sub-issue — LAB-01

> Archivo de apoyo para armar la entrega en el hilo [#19](https://github.com/urp-moviles-2026-2/.github-private/issues/19).
> Sección `Sub-issues` → `+` → `Create sub-issue`.
> **Título:** `LAB-01 — Jiménez, Carlos`

---

## 1. Repositorio

<!-- Pega aquí el enlace al repositorio (organización urp-moviles-2026-2, o cuenta personal en modo público). -->

## 2. Video o GIF (máx. 30 s)

<!-- Debe mostrar, en este orden:
     1) añadir dos tareas
     2) intentar añadir una vacía (el botón queda inactivo y no pasa nada)
     3) eliminar una deslizando a la izquierda -->

## 3. Captura de pantalla

<!-- La app corriendo en tu teléfono con Expo Go. -->

## 4. Dificultades

<!-- Completa con lo que te haya pasado a ti. Dos que aparecieron al construirlo:

- El botón "Eliminar" salía cortado al deslizar. `ReanimatedSwipeable` calcula
  cuánto abrir la tarjeta midiendo el ancho de lo que devuelve `renderRightActions`;
  al dejar que ese ancho dependiera del contenido, la medición quedaba corta. Se
  resolvió fijando un ancho explícito (`ANCHO_ACCION`) a la zona de acción.

- La plantilla `blank` del SDK 57 ya no trae `@expo/vector-icons`, así que hubo que
  instalarlo aparte con `npx expo install @expo/vector-icons`.
-->

---

## Preguntas de reflexión

**1. ¿Por qué `FlatList` necesita una `key` única por elemento? ¿Qué pasaría si usaras el índice?**

React usa la clave para saber qué fila del render anterior corresponde a cuál del
nuevo. Con una clave estable puede mover, conservar o quitar filas sin volver a
crearlas. Si se usa el índice, la clave describe la *posición*, no la tarea: al
eliminar la primera de tres, la que estaba en el índice 1 pasa al 0, y React cree
que la fila 0 solo cambió de texto en lugar de entender que desapareció una. El
resultado visible es que el estado interno de la fila —en esta app, la posición de
deslizamiento de la tarjeta— se queda pegado a la fila equivocada: se desliza una
tarjeta y aparece abierta otra.

**2. ¿Por qué actualizamos con `[...actuales, nueva]` y `filter` en lugar de `push` y `splice`?**

Porque React decide si volver a renderizar comparando la referencia del estado
anterior con la nueva. `push` y `splice` modifican el mismo arreglo: la referencia
no cambia, React concluye que nada cambió y la pantalla no se actualiza. `[...]` y
`filter` devuelven un arreglo nuevo, así que la comparación detecta el cambio.
Además, mutar el estado hace que el valor anterior se pierda y complica seguir de
dónde salió cada cambio.

**3. ¿Qué diferencia notaste entre probar en Expo Go y en el navegador o emulador, especialmente con el gesto?**

<!-- COMPLETA ESTA CON TU PROPIA PRUEBA EN EXPO GO.

Lo que se verificó en el navegador (`npx expo start --web`): los cuatro
comportamientos funcionan, y el gesto se hace arrastrando con el mouse.

Puntos a comparar cuando lo pruebes en el teléfono:
- En el navegador el gesto se arrastra con el mouse; en el teléfono es el dedo, y
  se nota el rebote y la inercia de la animación, que con mouse casi no se percibe.
- En el teléfono hay que distinguir el deslizamiento horizontal de la tarjeta del
  desplazamiento vertical de la lista; con mouse esa competencia entre gestos no
  se siente igual.
- El teclado del teléfono tapa parte de la pantalla, cosa que no ocurre en el
  navegador.
-->
