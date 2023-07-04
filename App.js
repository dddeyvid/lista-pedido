import { PaperProvider } from 'react-native-paper';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Home from './src/screens/Home'
import Insert from './src/screens/Insert'

const Stack = createStackNavigator();

export default function App() {
  return (
    <PaperProvider>
     <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Insert" component={Insert} />
        </Stack.Navigator>
      </NavigationContainer> 
    </PaperProvider>
  );
}
