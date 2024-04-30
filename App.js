import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { KeyboardAvoidingView, Platform, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import Task from '../to-do-list-app/src/components/task'

export default function App() {
  const [task, setTask] = useState();
  // Creamos un arreglo para guardar todos las task que se agreguen
  const [taskItems, setTaskItem] = useState([]);

  //Funcion que nos agregara la task a nuestro arreglo
  const agregarTask = () => {
    setTaskItem([...taskItems, task])
    setTask(null);
  }

  //Funcion que nos eliminara el item seleccionado
  const completeTask = (index) => {
    let itemsCopy = [...taskItems];
    itemsCopy.splice(index, 1);
    setTaskItem(itemsCopy);
  }

  return (
    <View style={styles.container}>
      {/* Envolvera todas las task */}
      <View style={styles.taskContainer}>
        <Text style={styles.titleTask}>To do list</Text>
        <Text>Toca un item de la lista para poder eliminarla</Text>
        <View style={styles.tasks}>
          {/* Aca apareceran las tasks */}
          {
            // Accedemos a nuestro array
            taskItems.map((item, index) => {
              return (
                <TouchableOpacity key={index} onPress={() => completeTask(index)}>
                  {/* Llamamos a nuestro componente y le pasamos el item, para que se muestre el nombre de ese item */}
                  <Task text={item} />
                </TouchableOpacity>
              )
            })
          }
        </View>
      </View>


      {/* Agregar una tarea */}
      {/* KeyboardAvoidView nos permitira que nuestro teclado se ajuste bien en la pantalla */}
      <KeyboardAvoidingView
        behavior={Platform.OS == 'ios' ? 'padding' : 'height'}
        style={styles.writeTaskWrapper}>

        <TextInput style={styles.input} placeholder={'Escribe una tarea'} value={task} onChangeText={text => setTask(text)}></TextInput>

        <TouchableOpacity onPress={() => agregarTask()}>
          <View style={styles.addWrapper}>
            <Text style={styles.addText}>+</Text>
          </View>
        </TouchableOpacity>

      </KeyboardAvoidingView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  taskContainer: {
    paddingTop: 60,
    paddingHorizontal: 40
  },
  titleTask: {
    fontSize: 24,
    fontWeight: 'bold'
  },
  tasks: {
    marginTop: 30
  },
  writeTaskWrapper: {
    position: 'absolute',
    bottom: 50,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 40
  },
  input: {
    paddingVertical: 15,
    paddingHorizontal: 15,
    backgroundColor: 'white',
    borderRadius: 60,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
    width: 250,
    marginRight: 20,
  },
  addWrapper: {
    width: 60,
    height: 60,
    borderRadius: 60,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F948D3'
  },
  addText: {
    color: 'white',
    fontSize: 20
  }
});
