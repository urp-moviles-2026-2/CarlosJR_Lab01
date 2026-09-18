# 🧪 LAB-01 — Primer Proyecto React Native: Lista de Tareas

> **Semana 02** · IF-1103 Sistemas Móviles y Plataformas Menores

---

## 📋 Información General

| Campo                       | Detalle                                                                                   |
| --------------------------- | ----------------------------------------------------------------------------------------- |
| 🗓️ Semana                 | 02 — 12/09/2026                                                                          |
| ⏱️ Duración estimada     | 3 horas                                                                                   |
| 👤 Modalidad                | Individual                                                                                |
| ⏳ Fecha límite de entrega | 19/09/2026 — 09:40am                                                                     |
| 📤 Entrega                  | Sub-issue en el hilo[#19](https://github.com/urp-moviles-2026-2/.github-private/issues/19) |
| 🏆 Puntaje                  | 20 pts                                                                                    |

---

## 🎯 Objetivos

Al completar este laboratorio, el estudiante podrá:

- [ ] Crear y ejecutar un proyecto React Native con Expo en su propio teléfono
- [ ] Construir una pantalla con componentes core: `View`, `Text`, `TextInput`, `Pressable` y `FlatList`
- [ ] Manejar estado con `useState` para agregar y eliminar elementos de una lista
- [ ] Implementar un **gesto de deslizar** para ejecutar una acción sobre un elemento
- [ ] Publicar el código en un repositorio y documentar la entrega en un sub-issue

---

## 🛠️ Herramientas Necesarias

- [ ] Node.js LTS, Git y Visual Studio Code
- [ ] **Expo Go** en tu teléfono, o un emulador Android
- [ ] Cuenta de GitHub con acceso a la organización [`urp-moviles-2026-2`](https://github.com/urp-moviles-2026-2)
- [ ] Alternativa si tu equipo no puede instalar Node.js: [GitHub Codespaces](https://github.com/features/codespaces)

---

## 📱 Qué vas a construir

Una pantalla de **lista de tareas** con este diseño de referencia:

<img src="./lab-01-mockup.png" alt="Mockup de la pantalla Tareas: encabezado, tarjeta con caja de texto y botón Añadir tarea, lista de tarjetas de tarea y botón rojo Eliminar revelado al deslizar una tarea a la izquierda" width="300" />

El mockup se compone de estos elementos, de arriba hacia abajo:

| Elemento | Cómo se ve en el mockup |
|----------|-------------------------|
| **Encabezado** | Ícono de check sobre un cuadro violeta redondeado y el título **Tareas** |
| **Tarjeta de entrada** | Tarjeta blanca que agrupa la caja de texto y el botón. La caja tiene fondo celeste muy claro, un ícono a la izquierda y el texto de ayuda "Escribe una nueva tarea…" |
| **Botón "Añadir tarea"** | Ocupa todo el ancho de la tarjeta, fondo violeta, ícono **+** y texto blanco |
| **Tarjeta de tarea** | Una tarjeta blanca por tarea, con esquinas redondeadas y borde tenue. Contiene **solo el texto** de la tarea: no lleva casilla ni estado de completada |
| **Acción "Eliminar"** | Al deslizar la tarjeta a la izquierda queda a la vista, sobre un fondo celeste, un botón **rojo redondeado** con ícono de papelera y el texto "Eliminar" |
| **Fondo** | Lavanda muy claro, con separación uniforme entre tarjetas |

La pantalla tiene cuatro comportamientos obligatorios:

| # | Comportamiento                                  | Detalle                                                                                                                                                      |
| - | ----------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| 1 | **Caja de texto**                         | Permite escribir el nombre de una tarea. Muestra el texto de ayuda "Escribe una nueva tarea…"                                                               |
| 2 | **Botón "Añadir tarea"**                | Agrega la tarea escrita a la lista y**limpia** la caja de texto. No debe agregar tareas vacías ni con solo espacios                                   |
| 3 | **Lista de tareas**                       | Muestra**todas** las tareas añadidas. Debe poder desplazarse cuando hay más tareas que espacio en pantalla                                           |
| 4 | **Deslizar a la izquierda para eliminar** | Al deslizar una tarjeta hacia la izquierda se revela el botón rojo **"Eliminar"** con su ícono de papelera. Al tocarlo, la tarea se elimina de la lista. La tarjeta vuelve a su lugar si el usuario la desliza de regreso |

> 💡 No hace falta que sea idéntico al mockup. Se evalúa que los cuatro comportamientos funcionen y que la interfaz sea ordenada y legible. Los colores, íconos y tipografía son libres.
>
> 🎨 Para los íconos de check, **+** y papelera puedes usar [`@expo/vector-icons`](https://docs.expo.dev/guides/icons/), que ya viene incluido en los proyectos Expo. Busca los nombres en [icons.expo.fyi](https://icons.expo.fyi/).

---

## 📐 Parte 1: Proyecto y repositorio

### Paso 1 — Crea o reutiliza tu proyecto Expo

Puedes continuar con el proyecto que creaste en clase o empezar uno nuevo:

```bash
npx create-expo-app --template blank .
npx expo start
```

Escanea el código QR con Expo Go y confirma que la app abre en tu teléfono.

### Paso 2 — Repositorio en la organización

El código debe estar en un repositorio **dentro de la organización** [`urp-moviles-2026-2`](https://github.com/urp-moviles-2026-2). Puede ser el mismo que creaste en clase. Por motivos de fuerza mayor se aceptara repositorios en sus cuentas, pero deben estar de modo público.

- Nombre sugerido: `NombreApellidos-lab-01` (ejemplo: `RonaldRC-lab-01`)
- Haz commits pequeños y con mensajes claros a medida que avanzas, no un único commit al final

---

## 📐 Parte 2: Caja de texto, botón y lista

### Paso 1 — Estado de la pantalla

Necesitas dos piezas de estado con `useState`:

- El **texto** que el usuario está escribiendo
- El **arreglo de tareas**. Cada tarea debe tener un `id` único y un `texto`

> 💡 **Tip:** no uses el índice del arreglo como `id`. Al eliminar elementos los índices cambian y la lista se comporta de forma extraña. `Date.now().toString()` es suficiente para este laboratorio.

### Paso 2 — Componentes

| Elemento      | Componente                                                      | Documentación                                                                |
| ------------- | --------------------------------------------------------------- | ----------------------------------------------------------------------------- |
| Caja de texto | `TextInput` con `value`, `onChangeText` y `placeholder` | [TextInput](https://reactnative.dev/docs/textinput)                            |
| Botón        | `Pressable` con `onPress`                                   | [Pressable](https://reactnative.dev/docs/pressable)                            |
| Lista         | `FlatList` con `data`, `renderItem` y `keyExtractor`    | [FlatList](https://reactnative.dev/docs/flatlist)                              |
| Área segura  | `SafeAreaView` de `react-native-safe-area-context`          | [Safe areas en Expo](https://docs.expo.dev/develop/user-interface/safe-areas/) |

### Paso 3 — Agregar una tarea

Al presionar el botón:

1. Quita los espacios sobrantes del texto con `trim()`
2. Si queda vacío, no hagas nada
3. Crea la tarea y agrégala al arreglo **sin mutarlo**: `setTareas(actuales => [...actuales, nuevaTarea])`
4. Limpia la caja de texto

**Resultado esperado:** cada tarea que añades aparece al final de la lista y la caja queda vacía, lista para la siguiente.

---

## 📐 Parte 3: Deslizar a la izquierda para eliminar

### Paso 1 — Instala las librerías de gestos

Si creaste el proyecto con la plantilla por defecto, ya las tienes. Si usaste la plantilla en blanco, instálalas con `expo install`, que elige las versiones compatibles con tu SDK:

```bash
npx expo install react-native-gesture-handler react-native-reanimated react-native-worklets
```

Reinicia el servidor limpiando la caché:

```bash
npx expo start --clear
```

### Paso 2 — Envuelve la app en `GestureHandlerRootView`

Los gestos solo funcionan dentro de este contenedor. Debe estar en la raíz de la app y ocupar toda la pantalla:

```jsx
import { GestureHandlerRootView } from 'react-native-gesture-handler';

export default function App() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      {/* tu pantalla */}
    </GestureHandlerRootView>
  );
}
```

> ⚠️ Si olvidas este paso, la lista se ve bien pero los elementos **no se deslizan** y no aparece ningún error.

### Paso 3 — Haz deslizable cada elemento

Usa `ReanimatedSwipeable`. La acción que aparece al deslizar hacia la **izquierda** se define con `renderRightActions`, porque queda del lado derecho del elemento:

```jsx
import ReanimatedSwipeable from 'react-native-gesture-handler/ReanimatedSwipeable';

function TareaItem({ tarea, onEliminar }) {
  return (
    <ReanimatedSwipeable
      renderRightActions={() => (
        /* Tu botón rojo redondeado con ícono de papelera y texto "Eliminar".
           Al presionarlo llama a onEliminar(tarea.id) */
      )}
      overshootRight={false}
    >
      {/* La tarjeta blanca con el texto de la tarea */}
    </ReanimatedSwipeable>
  );
}
```

### Paso 4 — Elimina la tarea del estado

`onEliminar` recibe el `id` y debe producir un arreglo nuevo sin esa tarea. Pista: `filter`.

**Resultado esperado:** al deslizar una tarjeta a la izquierda se revela el botón rojo "Eliminar", como en la primera tarea del mockup. Al tocarlo, esa tarea desaparece y el resto de la lista se mantiene intacta.

📖 Documentación: [ReanimatedSwipeable](https://docs.swmansion.com/react-native-gesture-handler/docs/components/reanimated_swipeable/) · [Instalación de Gesture Handler
](https://docs.swmansion.com/react-native-gesture-handler/docs/fundamentals/installation/)

---

## 🏆 Entregables

Crea un **sub-issue** en el hilo [#19 — LAB-01 Entrega](https://github.com/urp-moviles-2026-2/.github-private/issues/19): sección `Sub-issues` → `+` → `Create sub-issue`.

**Título:** `LAB-01 — [Apellido, Nombre]`

| # | Evidencia           | Descripción                                                                                                            |
| - | ------------------- | ----------------------------------------------------------------------------------------------------------------------- |
| 1 | Repositorio         | Enlace al repositorio dentro de la organización, con el código del laboratorio                                        |
| 2 | Video o GIF corto   | Máximo 30 segundos mostrando: añadir dos tareas, intentar añadir una vacía y eliminar una deslizando a la izquierda |
| 3 | Captura de pantalla | La app corriendo en tu teléfono con Expo Go, o en el emulador                                                          |
| 4 | Dificultades        | Qué problemas encontraste y cómo los resolviste                                                                       |

> 💡 Cierra el sub-issue cuando tu entrega esté completa. Las dudas van como comentario en el hilo #19, no en tu sub-issue.

---

## ❓ Preguntas de Reflexión _(incluir en tu sub-issue)_

1. ¿Por qué `FlatList` necesita una `key` única por elemento? ¿Qué pasó, o qué pasaría, si usaras el índice del arreglo?
2. ¿Por qué actualizamos el arreglo con `[...actuales, nueva]` y `filter` en lugar de `push` y `splice`?
3. ¿Qué diferencia notaste entre probar en Expo Go y en el navegador o emulador, especialmente con el gesto?

---

## 📊 Rúbrica de Evaluación

| Criterio                                                                                     | Puntaje          |
| -------------------------------------------------------------------------------------------- | ---------------- |
| Caja de texto y botón funcionan: añade la tarea, limpia la caja y no acepta tareas vacías | 5 pts            |
| La lista muestra todas las tareas con`FlatList`, claves únicas y desplazamiento           | 4 pts            |
| Deslizar a la izquierda revela "Eliminar" y elimina solo la tarea correcta                   | 5 pts            |
| Interfaz ordenada y legible: espaciados, área segura, zonas táctiles de tamaño adecuado   | 2 pts            |
| Repositorio en la organización con commits claros                                           | 2 pts            |
| Sub-issue completo: video o GIF, captura, dificultades y preguntas de reflexión             | 2 pts            |
| **Total**                                                                              | **20 pts** |
|                                                                                              |                  |

---

## 🆘 ¿Necesitas ayuda?

- 💬 Comenta en el hilo [#19](https://github.com/urp-moviles-2026-2/.github-private/issues/19)
- 📧 Escribe a: ronald.requena@urp.edu.pe

**Problemas frecuentes**

| Síntoma                                        | Causa probable                                                                                            |
| ----------------------------------------------- | --------------------------------------------------------------------------------------------------------- |
| Los elementos no se deslizan                    | Falta`GestureHandlerRootView` en la raíz, o no tiene `style={{ flex: 1 }}`                           |
| Error de Reanimated o Worklets al iniciar       | Instalaste con`npm install` en vez de `npx expo install`, o falta reiniciar con `--clear`           |
| Se elimina una tarea distinta a la que deslicé | Estás usando el índice como`key` o como `id`                                                        |
| El teclado tapa la lista o el botón            | Envuelve la pantalla en`KeyboardAvoidingView` o cierra el teclado con `Keyboard.dismiss()` al añadir |

---

⬅️ [Volver a la Semana 02](../README.md)
