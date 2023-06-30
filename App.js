//importing the two screens
import Start from "./components/Start";
import Chat from "./components/Chat";

//importing react navigation
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';

//creating the navigator
const Stack = createNativeStackNavigator();

//importing firestore databe
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";



const App = () => {
  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyC4HuOfha7pqdvoRohfOikwvYbY8fqO59g",
    authDomain: "chat-app-69a66.firebaseapp.com",
    projectId: "chat-app-69a66",
    storageBucket: "chat-app-69a66.appspot.com",
    messagingSenderId: "680772181777",
    appId: "1:680772181777:web:799e2748932520c2fbb6b0"
  };
  // initialize Firebase
  const app = initializeApp(firebaseConfig);
  // initialize Clou Firestore and get a reference to the service
  const db = getFirestore(app);
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Start"
      >
        <Stack.Screen 
          name="Start"
          component={Start}
        />
        <Stack.Screen
          name="Chat"
          component={Chat}
        >
          {props => <Chat db={db} {...props} />}
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App;
