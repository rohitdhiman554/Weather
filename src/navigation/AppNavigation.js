import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from '../screens/HomeScreen';


const AppNavigation = () => {

    const Stack = createNativeStackNavigator()
    return <NavigationContainer>
        <Stack.Navigator initialRouteName='Home'>
            <Stack.Screen component={HomeScreen} name='Home' />
        </Stack.Navigator>
    </NavigationContainer>
}

export default AppNavigation