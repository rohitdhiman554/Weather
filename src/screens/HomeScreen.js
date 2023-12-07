import { View, StyleSheet, TextInput, Text, ImageBackground, TouchableOpacity } from 'react-native'
import { theme } from '../theme'
import { MagnifyingGlassIcon } from "react-native-heroicons/outline";

const HomeScreen = () => {

    return (
        <ImageBackground source={require('../assets/bg.png')} style={styles.image} >
            <View style={styles.container}>
                <TextInput placeholder='Enter city' style={styles.searchContainer} placeholderTextColor={'lightgray'} />
                <TouchableOpacity style={styles.button}>
                    <MagnifyingGlassIcon color="white" size={25} />
                </TouchableOpacity>
            </View>
        </ImageBackground>
    )
}



const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        backgroundColor: theme.bgWhite(0.2),
        marginTop: 10,
        borderRadius: "100%",
        marginHorizontal: 5,
        padding: 5

    },
    button: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',

    },
    image: {
        flex: 1,
        resizeMode: 'cover'
    },
    searchContainer: {
        padding: 4,
        marginHorizontal: 5,
        flex: 5,
        color: 'white'

    },
    searchInput: {
        borderWidth: 10,
        borderColor: 'red'
    }
})
export default HomeScreen