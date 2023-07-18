import { useEffect, useState } from "react";
import {
  collection,
  addDoc,
  onSnapshot,
  getDocs,
  query,
  orderBy
} from "firebase/firestore";
import { GiftedChat } from "react-native-gifted-chat";
import {
  StyleSheet,
  Text,
  View,
  KeyboardAvoidingView,
  Platform,
  Alert,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { async } from "@firebase/util";

const Chat = ({ route, navigation, db }) => {
  const { name, color, userID } = route.params;

  //created messages state
  const [messages, setMessages] = useState([]);

  //called the onSend() function addMessage()
  const addMessage = async (newMessages) => {
    const newMessageRef = await addDoc(
      collection(db, "messages"),
      newMessages[0]
    );

    if (!newMessageRef.id) {
      Alert.alert("Unable to add. Please try later");
    }
  };

  useEffect(() => {
    const unsubMessages = onSnapshot(
      query(collection(db, "messages"), orderBy("createdAt", "desc")),
      (documentsSnapshot) => {
        let newMessages = [];
        documentsSnapshot.forEach((doc) => {
          newMessages.push({
            id: doc.id,
            ...doc.data(),
            createdAt: new Date(doc.data().createdAt.toMillis()),
          });
        });
        cacheMessages(newMessages);
        setMessages(newMessages);
    }
    );
    
    return () => {
        if (unsubMessages) unsubMessages();
    };
}, []);

const cacheMessages = async (messagesToCache) => {
      try {
          await AsyncStorage.setItem("messages", JSON.stringify(messagesToCache));
      }   catch (error) { 
          console.log(error.message);
      }
  };

  useEffect(() => {
    navigation.setOptions({ title: name });
  }, []);

  return (
    <View style={[styles.container, { backgroundColor: color }]}>
      <GiftedChat
        messages={messages}
        onSend={(message) => addMessage(message)}
        user={{
          _id: userID,
          name: name,
        }}
      />
      {Platform.OS === "android" ? (
        <KeyboardAvoidingView behavior="height" />
      ) : null}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default Chat;
