import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, TouchableOpacity, TextInput } from "react-native";

export default function Input({title_placeholder, numero, setNumero, style}){
    return (
        <TextInput
        style={style}
        placeholder={title_placeholder}
        keyboardType="number-pad"
        value={numero}
        onChangeText={setNumero}>
        </TextInput>
    )
}