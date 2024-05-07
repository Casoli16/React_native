import { StatusBar } from 'expo-status-bar';
import { 
  Button, 
  StyleSheet, 
  Text, 
  View, 
  Modal, 
  TextInput,
  TouchableOpacity,
  FlatList
} from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import { useState } from 'react';

export default function App() {

  const [nombre, setNombre] = useState('');
  const [carnet, setCarnet] = useState('');
  const [materia, setMateria] = useState('');
  const [fecha, setFecha] = useState(new Date());
  const [alumnos, setAlumnos] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [count, setCount] = useState(1);

  //Datetimepicker
  const [date, setDate] = useState(new Date());
  const [mode, setMode] = useState('date');
  const [show, setShow] = useState(false);

  // Función para cambiar la fecha seleccionada en el datetimepicker
  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date; // Si no se selecciona ninguna fecha, se mantiene la actual
    setShow(false); // Oculta el datetimepicker
    setFecha(currentDate); // Establece la fecha de reserva seleccionada en el estado
  };

  // Función para mostrar el datetimepicker con el modo especificado (date o time)
  const showMode = (currentMode) => {
    setShow(true); // Muestra el datetimepicker
    setMode(currentMode); // Establece el modo del datetimepicker
  };

  // Función para mostrar el datetimepicker en modo fecha
  const showDatepicker = () => {
    showMode('date');
  };

  const agregarAlumnos =() => {
    const nuevoAlumnos = {id: count, nombre: nombre, carnet: carnet, materia: materia, fecha: fecha };
    setAlumnos([...alumnos, nuevoAlumnos]);
    setCount(count + 1);
    setNombre('');
    setCarnet('');
    setMateria('');
    setFecha(new Date());
    setModalVisible(false);
  }

    // Función para eliminar un alumno
  const eliminarAlumno = (id) => {
    // Filtra la lista de clientes para excluir al alumno con el ID dado
    setAlumnos(alumnos.filter((alumno) => alumno.id !== id));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>¡Bienvenido!</Text>
      <Text style={{marginBottom: 25, textAlign: 'center'}}>Para comenzar debes registrar un alumno</Text>
      <Button style={{with: 30}} title='Registrar alumno' color='purple' onPress={() => setModalVisible(true)}></Button>
      <Modal
        animationType='slide'
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}>
        
        <View style={styles.modal}>
          <View style={styles.modalContent}>
          <Text style={styles.title}> Formulario de registro de alumnos</Text>
          <Text style={{textAlign: 'center', marginBottom:30}}> Escribe todos los campos que son solicitados para crear al alumno</Text>

            {/* Campo de entrada para el nombre del cliente */}
            <TextInput
              style={styles.inputs}
              placeholder="Escribe el nombre del alumno"
              value={nombre}
              onChangeText={setNombre}
            />
            <TextInput
              style={styles.inputs}
              placeholder="Escribe el codigo del alumno"
              value={carnet}
              onChangeText={setCarnet}
            />
            <TextInput
              style={styles.inputs}
              placeholder="Escribe su materia favorita"
              value={materia}
              onChangeText={setMateria}
            />
            {/* Botón para mostrar el datetimepicker */}
            <TouchableOpacity onPress={showDatepicker}><Text style={{fontWeight: 'bold'}}>Seleccionar fecha de nacimiento</Text></TouchableOpacity>
            {/* Muestra la fecha seleccionada */}
            <Text style={{marginBottom:30}}>Fecha seleccionada: {fecha.toLocaleString()}</Text>
            {/* Muestra el datetimepicker si la variable show es verdadera */}
            {show && (
              <DateTimePicker
                testID="dateTimePicker"
                value={date}
                mode={mode}
                is24Hour={false}
                onChange={onChange}
                locale='es-ES' // Establece el idioma del datetimepicker a español
              />
            )}
            {/* Botón para agregar el cliente */}
            <Button title="Crear alumno" onPress={agregarAlumnos} color='purple' />
            {/* Botón para cancelar y cerrar el modal */}
            <View style={{marginBottom:10}}></View>
            <Button
              title="Cancelar"
              onPress={() => setModalVisible(false)}
              color="red"
            />
          </View>
        </View>
      </Modal>
      <View style={styles.separator}/>
      <Text style={{fontWeight: 500, marginBottom:10}}>Cuando ingreses alumnos, los podrás observar es este apartado: </Text>
      
       {/* Lista de clientes */}
      <FlatList
        data={alumnos}
        renderItem={({ item }) => (
          <View
            style={styles.AlumnoItem}
          >
            {/* Muestra el ID, nombre y fecha de reserva del cliente */}
            <Text style={{fontWeight: 'bold'}}>{item.id}</Text>
            <Text >{item.nombre}</Text>
            <Text >{item.carnet}</Text>
            <Text >{item.materia}</Text>
            <Text style={{marginBottom:20}}>
              Fecha de Reserva: {item.fecha.toDateString()}
            </Text>
            <Button title='Eliminar reserva' color='red' onPress={() => eliminarAlumno(item.id)}></Button>
          </View>
        )}
        keyExtractor={(item) => item.id.toString()} // Extrae el ID de cada cliente como clave única
      />
      <StatusBar style="auto" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 50,
    padding: 30,
    flex: 1,
    backgroundColor: '#F3DFFC',
  },
  title:{
    fontWeight: 'bold',
    fontSize: 20,
    textAlign: 'center',
    marginBottom: 5,
  },
  modal: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: '#fff',
    padding: 40,
    borderRadius: 10,
    width: '80%',
  },
  inputs: {
    backgroundColor: '#E4E2E5',
    borderRadius: 5,
    padding: 10,
    marginBottom: 20
  },
  buttonContainer: {
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  separator:{
    marginVertical: 30,
    borderBottomColor: '#1E1E1F',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
 AlumnoItem: {
    backgroundColor: 'white',
    padding: 20,
    marginBottom: 10,
    borderRadius: 20,
    marginTop:5
  },
});
