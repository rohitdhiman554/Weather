import { View, StyleSheet, TextInput, ImageBackground, TouchableOpacity } from 'react-native'
import { theme } from '../theme'


const HomeScreen = () => {

    return (
        <ImageBackground source={require('../assets/bg.png')} style={styles.image} >
            <View style={styles.container}>
                <TextInput placeholder='Enter city' style={styles.searchContainer} placeholderTextColor={'lightgray'} />
                <TouchableOpacity style={styles.button}>
                </TouchableOpacity>
            </View>
        </ImageBackground>




    )
}

console.log("theme", theme)


const styles = StyleSheet.create({
    container: {
        flex: 1

    },
    button: {

    },
    image: {
        flex: 1,
        resizeMode: 'cover'
    },
    searchContainer: {
        padding: 4,
        marginHorizontal: 5,

        borderRadius: 5,
        backgroundColor: theme.bgWhite(0.2)

    },
    searchInput: {
        borderWidth: 10,
        borderColor: 'red'
    }
})
export default HomeScreen