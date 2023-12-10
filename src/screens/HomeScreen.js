import { View, StyleSheet, TextInput, Text, ImageBackground, TouchableOpacity, ScrollView, Image } from 'react-native'
import { theme } from '../theme'
import { MagnifyingGlassIcon } from "react-native-heroicons/outline";
import { MapPinIcon } from 'react-native-heroicons/solid'
import { useState } from 'react';
import { fetchLocations } from '../api/weather';

const HomeScreen = () => {
    const [location, setLocation] = useState([1]);
    const [showSearch, toggleSearch] = useState(false);
    const [search, setSearch] = useState('');

    const handleSearch = () => {
        fetchLocations({ cityName: search }).then((res) => {
            setLocation(res)
        })

    }


    return (
        <ImageBackground blurRadius={50} source={require('../../assets/images/bg.png')} style={styles.image} >
            <View style={[styles.container, { backgroundColor: showSearch ? theme.bgWhite(0.2) : 'transparent' }]}>
                {showSearch ? <TextInput value={search} onChangeText={setSearch} placeholder='Enter city' style={styles.searchContainer} placeholderTextColor={'lightgray'} /> : null}
                <TouchableOpacity style={showSearch ? styles.button : styles.fixedButton} onPress={() => toggleSearch(!showSearch)}>
                    <MagnifyingGlassIcon color="white" size={28} />
                </TouchableOpacity>
            </View>

            {/* {list section} */}

            {
                showSearch && location.length > 0 ? <View style={[styles.container, styles.overlappingList, { backgroundColor: 'white', padding: 15, flexDirection: 'column', gap: 10, borderRadius: 30, width: "100%" }]}>
                    <TouchableOpacity style={{ flexDirection: 'row', gap: 3, alignItems: 'center' }} >
                        <MapPinIcon color="gray" />
                        <Text style={{ fontSize: 16 }}>London</Text>
                    </TouchableOpacity>
                    <View style={{ width: "100%", backgroundColor: 'black', height: 0.4 }} />
                    <TouchableOpacity style={{ flexDirection: 'row', gap: 3, alignItems: 'center' }} >
                        <MapPinIcon color="gray" />
                        <Text style={{ fontSize: 16 }}>India</Text>
                    </TouchableOpacity>
                </View> : null
            }

            {/* {forecast section} */}

            <View style={styles.forecastContainer}>

                <View style={styles.cityContainer}>
                    <Text style={{ fontSize: 25, fontWeight: '800', color: 'white' }}>London,</Text>
                    <Text style={{ fontSize: 20, color: 'white' }}>United Kingdom</Text>
                </View>
                <View>
                    <Image style={styles.forecastImage} source={require('../../assets/images/partlycloudy.png')} />
                </View>
                <View style={styles.tempContainer}>
                    <Text style={{ fontSize: 45, color: "white", fontWeight: "bold" }}> 23&#176;</Text>
                    <Text style={{ fontSize: 20, color: "white" }}>Partly Cloudy</Text>
                </View>
            </View>

        </ImageBackground >
    )
}



const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        marginTop: 10,
        justifyContent: 'space-between',
        borderRadius: 100,
        marginHorizontal: 5,
        padding: 5,

    },
    overlappingList: {
        position: 'absolute',
        top: 60,
        zIndex: 10,
    },
    button: {
        justifyContent: 'center',
        alignItems: 'flex-end',
        paddingHorizontal: 5,
        borderRadius: 20,
        marginHorizontal: 4,
        padding: 5,
        backgroundColor: theme.bgWhite(0.3),
        width: '10%'

    },
    image: {
        flex: 1,
        resizeMode: 'cover'
    },
    searchContainer: {
        color: 'white',
        paddingLeft: 5,
        flex: 10

    },
    searchInput: {
        borderWidth: 10,
        borderColor: 'red'
    },
    fixedButton: {
        position: 'absolute',
        right: 10,
        top: 10,
        paddingHorizontal: 5,
    },
    forecastContainer: {
        position: 'absolute',
        width: '100%',
        borderWidth: 2,
        borderColor: 'red',
        alignItems: 'center',
        top: '20%',
        gap: 40,

    },
    innerContainer: {
        marginTop: 90,
        borderColor: 'red',
        borderWidth: 2,
    },
    cityContainer: {
        flexDirection: 'row',
        marginTop: 10,
        alignItems: 'center'
    },
    forecastImage: {
        height: 200,
        objectFit: "contain"
    },
    tempContainer: {

        borderWidth: 2,
        alignItems: "center",
        gap: 5,
    }

})
export default HomeScreen