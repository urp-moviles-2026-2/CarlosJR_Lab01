import { Ionicons } from '@expo/vector-icons';
import { StatusBar } from 'expo-status-bar';
import { useRef, useState } from 'react';
import {
  FlatList,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

import TareaItem from './components/TareaItem';
import { colores } from './theme';

export default function App() {
  // Texto que el usuario esta escribiendo en la caja.
  const [texto, setTexto] = useState('');
  // Lista de tareas. Cada una es { id, texto }.
  const [tareas, setTareas] = useState([]);
  // Contador auxiliar: si el usuario agrega dos tareas en el mismo milisegundo,
  // Date.now() devolveria el mismo valor y FlatList tendria claves repetidas.
  const contador = useRef(0);

  const hayTexto = texto.trim() !== '';

  function agregarTarea() {
    const limpio = texto.trim();
    if (limpio === '') return; // no se agregan tareas vacias ni con solo espacios

    contador.current += 1;
    const nuevaTarea = { id: `${Date.now()}-${contador.current}`, texto: limpio };

    // Se crea un arreglo nuevo en vez de mutar el actual.
    setTareas((actuales) => [...actuales, nuevaTarea]);
    setTexto('');
    Keyboard.dismiss();
  }

  function eliminarTarea(id) {
    // filter devuelve un arreglo nuevo sin la tarea eliminada.
    setTareas((actuales) => actuales.filter((tarea) => tarea.id !== id));
  }

  return (
    // Los gestos solo funcionan dentro de GestureHandlerRootView.
    <GestureHandlerRootView style={styles.raiz}>
      <SafeAreaProvider>
        <SafeAreaView style={styles.areaSegura} edges={['top', 'bottom']}>
          <StatusBar style="dark" />

          <KeyboardAvoidingView
            style={styles.raiz}
            behavior={Platform.OS === 'ios' ? 'padding' : undefined}
          >
            <View style={styles.encabezado}>
              <View style={styles.encabezadoIcono}>
                <Ionicons name="checkmark-sharp" size={24} color="#FFFFFF" />
              </View>
              <Text style={styles.titulo}>Tareas</Text>
            </View>

            <View style={styles.tarjetaEntrada}>
              <View style={styles.cajaTexto}>
                <Ionicons
                  name="create-outline"
                  size={20}
                  color={colores.violeta}
                />
                <TextInput
                  style={styles.input}
                  value={texto}
                  onChangeText={setTexto}
                  placeholder="Escribe una nueva tarea…"
                  placeholderTextColor={colores.textoSuave}
                  returnKeyType="done"
                  onSubmitEditing={agregarTarea}
                />
              </View>

              <Pressable
                onPress={agregarTarea}
                disabled={!hayTexto}
                accessibilityRole="button"
                accessibilityLabel="Añadir tarea"
                style={({ pressed }) => [
                  styles.boton,
                  !hayTexto && styles.botonInactivo,
                  pressed && hayTexto && styles.botonPresionado,
                ]}
              >
                <Ionicons name="add" size={22} color="#FFFFFF" />
                <Text style={styles.botonTexto}>Añadir tarea</Text>
              </Pressable>
            </View>

            <FlatList
              data={tareas}
              keyExtractor={(tarea) => tarea.id}
              renderItem={({ item }) => (
                <TareaItem tarea={item} onEliminar={eliminarTarea} />
              )}
              contentContainerStyle={styles.lista}
              keyboardShouldPersistTaps="handled"
              showsVerticalScrollIndicator={false}
              ListEmptyComponent={
                <View style={styles.vacio}>
                  <Ionicons
                    name="clipboard-outline"
                    size={28}
                    color={colores.violetaSuave}
                  />
                  <Text style={styles.vacioTexto}>
                    Aún no hay tareas. Escribe una arriba para empezar.
                  </Text>
                </View>
              }
            />
          </KeyboardAvoidingView>
        </SafeAreaView>
      </SafeAreaProvider>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  raiz: {
    flex: 1,
  },
  areaSegura: {
    flex: 1,
    backgroundColor: colores.fondo,
  },
  encabezado: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    paddingHorizontal: 20,
    paddingTop: 12,
    paddingBottom: 18,
  },
  encabezadoIcono: {
    width: 40,
    height: 40,
    borderRadius: 12,
    backgroundColor: colores.violeta,
    alignItems: 'center',
    justifyContent: 'center',
  },
  titulo: {
    fontSize: 26,
    fontWeight: '700',
    color: colores.texto,
  },
  tarjetaEntrada: {
    backgroundColor: colores.tarjeta,
    marginHorizontal: 20,
    borderRadius: 18,
    borderWidth: 1,
    borderColor: colores.borde,
    padding: 14,
    gap: 12,
  },
  cajaTexto: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    backgroundColor: colores.celeste,
    borderRadius: 12,
    paddingHorizontal: 14,
    minHeight: 48,
  },
  input: {
    flex: 1,
    fontSize: 16,
    color: colores.texto,
    paddingVertical: 12,
  },
  boton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
    backgroundColor: colores.violeta,
    borderRadius: 12,
    minHeight: 50,
  },
  botonInactivo: {
    backgroundColor: colores.violetaSuave,
  },
  botonPresionado: {
    backgroundColor: colores.violetaOscuro,
  },
  botonTexto: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '600',
  },
  lista: {
    paddingHorizontal: 20,
    paddingTop: 20,
    paddingBottom: 32,
    flexGrow: 1,
  },
  vacio: {
    alignItems: 'center',
    gap: 10,
    paddingTop: 48,
    paddingHorizontal: 32,
  },
  vacioTexto: {
    color: colores.textoSuave,
    fontSize: 14,
    textAlign: 'center',
  },
});
