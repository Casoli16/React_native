import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";

const Task = (props) => {

    return (
        <View style={styles.item}>
            <View style={styles.itemLeft}>
                <Image style={styles.img} source={require('../images/check.png')}></Image>
                <Text style={styles.itemText}>{props.text}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
item: {
    backgroundColor: 'pink',
    padding: 15,
    borderRadius:10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 20,
    shadowColor: "#000",
    shadowOffset: {
        width: 0,
        height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    
    elevation: 5,
},
itemLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    flexWrap: 'wrap'
},
img: {
    width: 24,
    height: 24,
    marginRight: 15
},
itemText: {
    maxWidth: '80%'
}
});

export default Task;