import React from 'react';

import {createStackNavigator} from '@react-navigation/stack'
import {NavigationContainer} from '@react-navigation/native'

import MainStack from './mainStack';
import Moodal from '../screens/moodal';

const RootStack = () => {
    
    const Stack = createStackNavigator();
return (
<NavigationContainer mode="modal">
    <Stack.Navigator>
        <Stack.Screen name='Main' component={MainStack} options={{ headerShown: false }}/>
        <Stack.Screen name='Moodal' component={Moodal}/>
    </Stack.Navigator>
</NavigationContainer>
);}

export default RootStack;