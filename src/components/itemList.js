import React from 'react'
import { View, Text, StyleSheet} from 'react-native'

export default function itemList(props) {

    return (
        <View style={[{backgroundColor: props.hexCode}, styles.box]}>
            <Text style={styles.text}>{props.colorName}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    box: {
        height: 35,
        padding: 10,
        marginHorizontal: 10,
        marginVertical : 5,
        borderRadius: 15
    },
    text : {
        fontSize :15,
        fontWeight : 'bold',
        textAlign: 'center'
    }
});