import React from 'react'

import {createStackNavigator} from '@react-navigation/stack'

import Home from '../screens/home';
import ColorPreview from '../screens/colorPreview';

const Stack = createStackNavigator();

export default function stackNav() {
    return (
            <Stack.Navigator>
                <Stack.Screen name='Home' component={Home}/>
                <Stack.Screen name='ColorPreview' component={ColorPreview} options={({ route }) => ({ title: route.params.paletteName })}/>
            </Stack.Navigator>
    )
}