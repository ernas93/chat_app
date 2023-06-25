import { useState } from "react";
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from "react-native";

const Start = ({navigation}) => {
    const [name, setName] = useState('');
 
    return (
        <View style={styles.container}>
            <Text style={styles.appTitle}>My first native app!</Text>
            <TextInput
                style={styles.textInput}
                value={name}
                onChangeText={setName}
                placeholder='Type your username here, enjoy chatting with your close ones. :-)'
            />
            <TouchableOpacity 
                style={styles.button}
                onPress={() => navigation.navigate('Chat', { name: name })}
            >
                <Text>Start chatting</Text>
            </TouchableOpacity>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#000000'
    },
    appTitle: {
        fontSize: 45,
        fontWeight: '600',
        color: '#FFFFFF'
    },
    textInput: {
        width: '88%',
        fontSize: 16,
        fontWeight: '300',
        color: '#757083',
        padding: 15,
        borderWidth: 1,
        marginTop: 15,
        marginBottom: 15
    },
    button: {
        alignContent: 'center',
        backgroundColor: '#DDDDDD',
        padding: 10
    }
})
export default Start;