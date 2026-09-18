# LAB-01 — Lista de Tareas (React Native + Expo)

Primer proyecto de **IF-1103 Sistemas Móviles y Plataformas Menores** (Semana 02).
Pantalla de lista de tareas con gesto de deslizar para eliminar.

## Qué hace

| # | Comportamiento | Dónde está |
|---|----------------|------------|
| 1 | Caja de texto con el mensaje de ayuda "Escribe una nueva tarea…" | [`App.js`](App.js) |
| 2 | Botón "Añadir tarea": agrega, limpia la caja y rechaza texto vacío o con solo espacios | `agregarTarea()` en [`App.js`](App.js) |
| 3 | Lista con `FlatList`, claves únicas y desplazamiento | [`App.js`](App.js) |
| 4 | Deslizar a la izquierda revela el botón rojo "Eliminar" | [`components/TareaItem.js`](components/TareaItem.js) |

## Cómo ejecutarlo

```bash
npm install
npx expo start
```

Escanea el código QR con **Expo Go**. Si los gestos se comportan raro después de
instalar algo, limpia la caché:

```bash
npx expo start --clear
```

## Estructura

```
App.js                     Pantalla principal: estado, encabezado, entrada y lista
components/TareaItem.js    Tarjeta deslizable con la acción "Eliminar"
theme.js                   Colores compartidos
```

## Decisiones de implementación

- **Ids únicos, no índices.** Cada tarea usa `` `${Date.now()}-${contador}` ``. Solo
  `Date.now()` puede repetirse si se agregan dos tareas en el mismo milisegundo, y
  eso dejaría claves duplicadas en la `FlatList`.
- **Estado inmutable.** Se agrega con `[...actuales, nueva]` y se elimina con
  `filter`. Nunca `push` ni `splice`.
- **Ancho fijo en la zona de acción.** `ReanimatedSwipeable` mide el ancho de lo que
  devuelve `renderRightActions` para saber cuánto debe abrirse la tarjeta. Con un
  ancho explícito (`ANCHO_ACCION`) el botón rojo siempre queda completamente visible.
- **`GestureHandlerRootView` en la raíz** con `flex: 1`; sin esto los elementos no se
  deslizan y no aparece ningún error.
- **Teclado.** La pantalla usa `KeyboardAvoidingView` y se cierra el teclado al añadir.

## Enunciado

El enunciado completo está en [`lab-01.md`](lab-01.md).
