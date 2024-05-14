import React from 'react';
import { View, TouchableOpacity, StyleSheet, Text, FlatList, Image, ScrollView } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import actores from '../data/actores';
import Boton from '../components/Boton';

const Pantalla3 = ({ navigation }) => {
    const informacion = actores;

    const irPantalla1 = async () => {
        navigation.navigate('Pantalla1');
    };

    return (
        <View style={styles.container}>
            <ScrollView>
            <Text style={styles.mainTitle}>Actores coreanos</Text>
            <View>
                <FlatList
                    data={informacion}
                    renderItem={({ item }) => (
                        <View style={styles.cardContainer}>
                            <Image source={item.src} style={styles.image} />
                            <Text style={styles.title}>{item.name}</Text>
                            <Text>{item.age}</Text>
                        </View>
                    )}
                    keyExtractor={(item) => item.id}
                    contentContainerStyle={styles.flatListContainer}
                />
                
            </View>

            <Text style={styles.mainTitle}>Actores coreanos</Text>
            <View>
                <FlatList
                    data={informacion}
                    renderItem={({ item }) => (
                        <View style={styles.cardContainer}>
                            <Image source={item.src} style={styles.image} />
                            <Text style={styles.title}>{item.name}</Text>
                            <Text>{item.age}</Text>
                        </View>
                    )}
                    keyExtractor={(item) => item.id}
                    contentContainerStyle={styles.flatListContainer}
                />
                
            </View>
            <View style={styles.contenedor}>
            <Boton
            style={styles.btn}
            textoBoton='Regresar al inicio'
            accionBoton={irPantalla1}
            />
            </View>
            </ScrollView>
        </View>
    );
};

export default Pantalla3;

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#FFF',
        paddingTop: 20,
        marginTop: StatusBar.currentHeight || 20,
    },
    flatListContainer: {
        padding: 5,
        flexDirection: 'row', 
        flexWrap: 'wrap',
        justifyContent: 'space-around', 
    },
    cardContainer: {
        backgroundColor: '#fff',
        borderRadius: 8,
        borderWidth: 1,
        borderColor: '#ccc',
        padding: 10,
        marginBottom: 10,
        width: 130,
        height: 190,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        alignItems:'center'
    },
    image: {
        width: 100,
        height: 100,
        marginBottom: 10,
    },
    title: {
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'center'
    },
    mainTitle: {
        backgroundColor: '#E7CFFC',
        padding: 10,
        textAlign: 'center',
        marginBottom: 20,
        fontSize: 20,
        fontWeight: 'bold',
        color: 'purple'
    },
    texto:{
        marginHorizontal:15
    },
    contenedor: {
        alignItems: 'center',
    },
});
