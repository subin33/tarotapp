import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import DetailPage from '../pages/CardDetail';
import MainPage from '../pages/MainPage';
import CardPage from '../pages/CardChoice';

const Stack = createStackNavigator();

const StackNavigator = () => {
    return (
        <Stack.Navigator
            screenOptions={{
                headerStyle: {
                    backgroundColor: "black",
                    borderBottomColor: "black",
                    shadowColor: "black",
                    height: 100
                },
                headerTintColor: "#FFFFFF",
                headerShown:false,
                headerBackTitleVisible: false
            }}
        >
            <Stack.Screen name="MainPage" component={MainPage} />
            <Stack.Screen name="CardPage" component={CardPage} />
            <Stack.Screen name="DetailPage" component={DetailPage} />
        </Stack.Navigator>
    );
}

export default StackNavigator;
