import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const AppNavigation = () => {

    const Stack = createNativeStackNavigator()
    return <NavigationContainer>
        <Stack.Screen />
    </NavigationContainer>
}

export default AppNavigation