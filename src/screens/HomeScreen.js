import { View, StyleSheet, TextInput, Text, ImageBackground, TouchableOpacity, ScrollView } from 'react-native'
import { theme } from '../theme'
import { MagnifyingGlassIcon } from "react-native-heroicons/outline";
import { MapPinIcon } from 'react-native-heroicons/solid'
import { useState } from 'react';
import { fetchLocations } from '../api/weather';

const HomeScreen = () => {
    const [location, setLocation] = useState([]);
    const [showSearch, toggleSearch] = useState(false);
    const [search, setSearch] = useState('');

    const handleSearch = () => {
        fetchLocations({ cityName: search }).then((res) => {
            setLocation(res)
        })

    }


    return (
        <ImageBackground blurRadius={50} source={require('../assets/bg.png')} style={styles.image} >
            <View style={[styles.container, { backgroundColor: showSearch ? theme.bgWhite(0.2) : 'transparent' }]}>
                {showSearch ? <TextInput value={search} onChangeText={setSearch} placeholder='Enter city' style={styles.searchContainer} placeholderTextColor={'lightgray'} /> : null}
                <TouchableOpacity style={styles.button} onPress={() => toggleSearch(!showSearch)}>
                    <MagnifyingGlassIcon color="white" size={25} />
                </TouchableOpacity>
            </View>
            <View style={[styles.container, { backgroundColor: 'white', padding: 15, flexDirection: 'column', gap: 10, borderRadius: 30, }]}>
                <TouchableOpacity style={{ flexDirection: 'row', gap: 3, alignItems: 'center' }} >
                    <MapPinIcon color="gray" />
                    <Text style={{ fontSize: 16 }}>London</Text>
                </TouchableOpacity>
                <View style={{ width: "100%", backgroundColor: 'black', height: 0.4 }} />
                <TouchableOpacity style={{ flexDirection: 'row', gap: 3, alignItems: 'center' }} >
                    <MapPinIcon color="gray" />
                    <Text style={{ fontSize: 16 }}>India</Text>
                </TouchableOpacity>
            </View>
        </ImageBackground>
    )
}



const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        marginTop: 10,
        justifyContent: 'space-between',
        borderRadius: 100,
        marginHorizontal: 5,
        padding: 5

    },
    button: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'flex-end',
        paddingHorizontal: 5

    },
    image: {
        flex: 1,
        resizeMode: 'cover'
    },
    searchContainer: {
        color: 'white',
        paddingLeft: 5

    },
    searchInput: {
        borderWidth: 10,
        borderColor: 'red'
    }
})
export default HomeScreen