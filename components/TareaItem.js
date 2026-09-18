import { Ionicons } from '@expo/vector-icons';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import ReanimatedSwipeable from 'react-native-gesture-handler/ReanimatedSwipeable';

import { colores } from '../theme';

// Ancho fijo de la zona que queda a la vista al deslizar. ReanimatedSwipeable
// mide este ancho para saber cuanto debe abrirse la tarjeta, asi que conviene
// que sea un valor explicito y no dependa del contenido.
const ANCHO_ACCION = 132;

/**
 * Tarjeta de una tarea. Al deslizarla hacia la izquierda se revela el boton
 * rojo "Eliminar"; si el usuario la desliza de regreso, vuelve a su lugar.
 */
export default function TareaItem({ tarea, onEliminar }) {
  return (
    <ReanimatedSwipeable
      friction={2}
      rightThreshold={ANCHO_ACCION / 2}
      overshootRight={false}
      containerStyle={styles.contenedor}
      renderRightActions={() => (
        <View style={styles.zonaAccion}>
          <Pressable
            onPress={() => onEliminar(tarea.id)}
            accessibilityRole="button"
            accessibilityLabel={`Eliminar la tarea ${tarea.texto}`}
            style={({ pressed }) => [
              styles.botonEliminar,
              pressed && styles.botonEliminarPresionado,
            ]}
          >
            <Ionicons name="trash-outline" size={20} color="#FFFFFF" />
            <Text style={styles.botonEliminarTexto}>Eliminar</Text>
          </Pressable>
        </View>
      )}
    >
      <View style={styles.tarjeta}>
        <Text style={styles.texto}>{tarea.texto}</Text>
      </View>
    </ReanimatedSwipeable>
  );
}

const styles = StyleSheet.create({
  // El contenedor recorta la tarjeta y deja ver el fondo celeste al deslizar.
  contenedor: {
    marginBottom: 12,
    borderRadius: 16,
    backgroundColor: colores.celeste,
    overflow: 'hidden',
  },
  tarjeta: {
    backgroundColor: colores.tarjeta,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: colores.borde,
    paddingVertical: 18,
    paddingHorizontal: 16,
    justifyContent: 'center',
  },
  texto: {
    fontSize: 16,
    color: colores.texto,
  },
  zonaAccion: {
    width: ANCHO_ACCION,
    justifyContent: 'center',
    paddingLeft: 12,
    paddingRight: 8,
    paddingVertical: 4,
  },
  botonEliminar: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
    backgroundColor: colores.rojo,
    borderRadius: 14,
    // Zona tactil comoda para el dedo
    minHeight: 48,
  },
  botonEliminarPresionado: {
    backgroundColor: colores.rojoOscuro,
  },
  botonEliminarTexto: {
    color: '#FFFFFF',
    fontSize: 15,
    fontWeight: '600',
  },
});
