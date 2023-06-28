import  { useEffect, useState } from "react";
import { GiftedChat } from "react-native-gifted-chat";
import { StyleSheet, Text, View, KeyboardAvoidingView, Platform } from "react-native";

const Chat = ({ route, navigation }) => {
    const {name, color} = route.params;

    //created messages state
    const [messages, setMessages] = useState([]);
    
    const onSend = (newMessages) => {
        setMessages(previousMessages => 
            GiftedChat.append(previousMessages, newMessages))
        };
        
    useEffect(() => {
        setMessages([
            {
                _id: 1,
                text: "Hello developer :D",
                createAt: new Date(),
                user: {
                    _id: 2,
                    name: "React Native",
                    avatar: "https://placeimg.com/140/140/any",
                },
            },
            {
                _id: 2,
                text: "This is a sisytem message",
                createAt: new Date(),
                system: true,
            },
        ]);
    }, []);

    useEffect(() => {
        navigation.setOptions({title: name});
    }, []);

    return (
        <View style={[styles.container, {backgroundColor: color}]}> 
            <GiftedChat
            messages={messages}
            onSend={messages => onSend(messages)}
            user={{
                _id: 1
            }}
            />
            { Platform.OS === 'android' ? <KeyboardAvoidingView behavior="height" /> : null }
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1
    }
});

export default Chat;