import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, TextInput, View, TouchableOpacity } from 'react-native';
import Input from './src/components/input'
import Button from './src/components/button'


export default function App() {

  //En este espacio vamos a escribir codigo javascript
  //State de la aplicacion
  const [numero1, setNumero1] = useState(0);
  const [numero2, setNumero2] = useState(0);
  const [resultado, setResultado] = useState(0);

  //Operaciones matematicas
  const sumarNumeros = () => {
    let sumatoria = parseFloat(numero1) + parseFloat(numero2);
    setResultado(sumatoria);
  }

  const restarNumeros = () => {
    let resta = parseFloat(numero1) - parseFloat(numero2);
    setResultado(resta);
  }

  
  const multiplicarNumeros = () => {
    let multiplicacion = parseFloat(numero1) * parseFloat(numero2);
    setResultado(multiplicacion);
  }

  const dividirNumeros = () => {
    let dividir = parseFloat(numero1) / parseFloat(numero2);
    setResultado(dividir);
  }

  const limpiar = () => {
    setNumero1(0);
    setNumero2(0);
  }

  return (
    <View style={styles.container}>
      <Text style={{fontSize: 25, fontWeight: 'bold'}}>Mini calculadora</Text>
      <Text style={{marginTop:30, marginBottom:10}}>Numero 1</Text>
      <TextInput 
        placeholder='Ingrese el primer número' 
        value={numero1}
        onChangeText={setNumero1}
        style={
          {backgroundColor: '#EEEBE9', 
          padding:8, width:190, 
          marginBottom:15, 
          borderRadius:10}}>
        </TextInput>
      <Text style={{marginTop:15, marginBottom:10}}>Numero 2</Text>
      <TextInput 
        placeholder='Ingrese el segundo número' 
        value={numero2}
        onChangeText={setNumero2}
        style={
          {backgroundColor: '#EEEBE9', 
          padding:8, width:190, 
          marginBottom:15, 
          borderRadius:10}}>
        </TextInput>

      <TouchableOpacity 
        style={{backgroundColor: 'green', 
        padding: 10, 
        borderRadius:10, 
        width:140}} 
        onPress={sumarNumeros}>
        <Text 
          style={{
            color: 'white', 
            textAlign: 'center'}}>Sumar</Text>
      </TouchableOpacity>

      <TouchableOpacity 
        style={{
          backgroundColor: 'blue', 
          padding: 10, 
          borderRadius:10, 
          marginTop:10, 
          width:140}} 
          onPress={restarNumeros}>
        <Text 
          style={{
            color: 'white', 
            textAlign: 'center'}}>Restar</Text>
      </TouchableOpacity>

      <TouchableOpacity 
        style={{
          backgroundColor: 'orange', 
          padding: 10, 
          borderRadius:10, 
          marginTop:10, 
          width:140}} 
          onPress={multiplicarNumeros}>
        <Text 
          style={{
            color: 'white', 
            textAlign: 'center'}}>Multiplicar</Text>
      </TouchableOpacity>

      <TouchableOpacity 
        style={{backgroundColor: 'purple', 
        padding: 10, borderRadius:10, 
        marginTop:10, width:140}} 
        onPress={dividirNumeros}>
        <Text 
          style={{
            color: 'white', 
            textAlign: 'center'}}>Dividir</Text>
      </TouchableOpacity>

      <TouchableOpacity 
        style={{
          backgroundColor: 'red', 
          padding: 10, 
          borderRadius:10, 
          marginTop:10, 
          width:140}} 
          onPress={limpiar}>
        <Text 
          style={{
            color: 'white', 
            textAlign: 'center'}}>Reset</Text>
      </TouchableOpacity>

      <Text 
        style={{
          color: 'red', 
          marginTop:40, 
          fontSize: 20}}>Resultado: {resultado}</Text>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
