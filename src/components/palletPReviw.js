import React from 'react'
import { FlatList, Text, View } from 'react-native'

const Item = () => {
    
}

export default function palletPReviw(props) {

    const DATA = props.data.slice(0, 5);
    return (
        <FlatList 
            horizontal={true}
            data={DATA}
            keyExtractor={item => item.hexCode}
            renderItem={({item}) => 
            <View
            style={{height: 30, width: 30, backgroundColor: item.hexCode, margin: 5, elevation: 2, borderRadius: 5}}> 
            <Text></Text>
            </View>}
        />
    )
}

