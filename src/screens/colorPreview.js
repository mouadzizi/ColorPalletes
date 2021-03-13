import React from 'react'
import {Text, StyleSheet, FlatList, View } from 'react-native'
import ItemList from '../components/itemList';



export default function colorPreview({route}) {

    const {paletteName, colors} = route.params;
    return ( 
    <FlatList
            style={styles.list}
            keyExtractor={item => item.colorName}
            data={colors}
            ListHeaderComponent={ <Text style={styles.title}> { paletteName } </Text> }
            renderItem={({item}) => <ItemList hexCode={item.hexCode} colorName={item.colorName}/> } 
       /> 
    )
}

const styles = StyleSheet.create({
    list: {
        backgroundColor : 'white',
    },
    title: {
        fontWeight: 'bold',
        fontSize: 18
    }
})