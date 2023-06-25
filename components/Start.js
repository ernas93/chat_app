import { useState } from "react";
import { ImageBackground, StyleSheet, Text, View, TextInput, TouchableOpacity } from "react-native";

const image = require('../media/images/background-image.png');

const backgroundColors = {
    a: '#474056',
    b: '#757083',
    c: '#8A95A5',
    d: '#B9C6AE',
};

const Start = ({navigation}) => {
    const [name, setName] = useState('');
    const [color, setColor] = useState(backgroundColors.d);
 
    return (
        <View style={styles.container}>
            <ImageBackground source={image} resizeMode='cover' style={styles.image}>
                <Text style={styles.appTitle}>App title</Text>
                <View style={styles.inputContainer}>
                    <TextInput
                        style={styles.textInput}
                        value={name}
                        onChangeText={setName}
                        placeholder='Type your username here'
                        placeholderTextColor='#757083'
                    />
                    <Text style={styles.colorSelector}>Choose background color:</Text>
                    <View style={styles.selectColorElement}>
                        <TouchableOpacity 
                            style={[styles.circle, {backgroundColor: backgroundColors.a}]}
                            onPress={() => setColor(backgroundColors.a)}
                        >
                        </TouchableOpacity>
                        <TouchableOpacity 
                            style={[styles.circle, {backgroundColor: backgroundColors.b}]}
                            onPress={() => setColor(backgroundColors.b)}
                        >
                        </TouchableOpacity>
                        <TouchableOpacity 
                            style={[styles.circle, {backgroundColor: backgroundColors.c}]}
                            onPress={() => setColor(backgroundColors.c)}
                        >
                        </TouchableOpacity>
                        <TouchableOpacity 
                            style={[styles.circle, {backgroundColor: backgroundColors.d}]}
                            onPress={() => setColor(backgroundColors.d)}
                        >
                        </TouchableOpacity>
                    </View>
                    <TouchableOpacity 
                        style={styles.button}
                        onPress={() => navigation.navigate('Chat', { name: name, color: color } )}
                    >
                        <Text>Start chatting</Text>
                    </TouchableOpacity>
                </View>
            </ImageBackground>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    image:{
        flex: 1,
        justifyContent: 'space-between',
        //alignItems: 'center',
        padding: '6%'
    },
    appTitle: {
        flex: 2,
        fontSize: 45,
        fontWeight: '600',
        color: '#FFFFFF',
        alignSelf: 'center'
    },
    inputContainer: {
        flex: 1,
        backgroundColor: '#000000',
        padding: '6%'
    },
    textInput: {
        fontSize: 16,
        fontWeight: '300',
        color: '#757083',
        padding: 15,
        borderWidth: 1,
        borderColor: '#757083',
        marginTop: 15,
        marginBottom: 15
    },
    selectColorElement: {
        flex: 1,
        justifyContent: 'space-around',
        flexDirection: 'row'
    },
    colorSelector: {
        fontSize: 16,
        fontWeight: '300',
        color: '#8A95A5'
    },
    circle: {
        height: 50,
        width: 50,
        borderRadius: 25,
        marginTop: 10,
        marginBottom: 10,
    },
    button: {
        alignContent: 'center',
        backgroundColor: '#757083',
        padding: 10
    }
})
export default Start;