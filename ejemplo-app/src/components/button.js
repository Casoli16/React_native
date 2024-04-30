import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

export default function Button({title_button, action_button, style, styleText}) {
    return (
        <TouchableOpacity 
        style={style} 
        onPress={{action_button}}
        >
        <Text
        style={styleText}>{title_button}
        </Text>    
        </TouchableOpacity>
    );
}