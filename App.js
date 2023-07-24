//importing the two screens
import Start from './components/Start';
import Chat from './components/Chat';

import { useEffect } from 'react';
import { Alert } from 'react-native';

//importing react navigation
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

//creating the navigator
const Stack = createNativeStackNavigator();

//importing firestore databe
import { initializeApp } from 'firebase/app';
import {
  getFirestore,
  disableNetwork,
  enableNetwork,
} from 'firebase/firestore';

import { getStorage } from 'firebase/storage';

//importing useNetInfo for keeping track of the network's connectivity and updating in real time
import { useNetInfo } from '@react-native-community/netinfo';

const App = () => {
  const connectionStatus = useNetInfo();

  // The web app's Firebase configuration
  const firebaseConfig = {
    apiKey: 'AIzaSyC4HuOfha7pqdvoRohfOikwvYbY8fqO59g',
    authDomain: 'chat-app-69a66.firebaseapp.com',
    projectId: 'chat-app-69a66',
    storageBucket: 'chat-app-69a66.appspot.com',
    messagingSenderId: '680772181777',
    appId: '1:680772181777:web:799e2748932520c2fbb6b0',
  };
  // initialize Firebase
  const app = initializeApp(firebaseConfig);

  // throwing an error if no internet
  useEffect(() => {
    if (connectionStatus.isConnected === false) {
      Alert.alert('No internet connection');
      disableNetwork(db);
    } else if (connectionStatus.isConnected === true) {
      enableNetwork(db);
    }
  }, [connectionStatus.isConnected]);

  // initialize Cloud Firestore and get a reference to the service
  const db = getFirestore(app);
  const storage = getStorage(app);

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Start">
        <Stack.Screen name="Start" component={Start} />
        <Stack.Screen name="Chat">
          {(props) => (
            <Chat
              isConnected={connectionStatus.isConnected}
              db={db}
              storage={storage}
              {...props}
            />
          )}
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
