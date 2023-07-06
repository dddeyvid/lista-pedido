import { PaperProvider } from 'react-native-paper';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Home from './src/screens/Home'
import Insert from './src/screens/Insert'
import WishList from './src/screens/WishList'



const Stack = createStackNavigator();

export default function App() {
  return (
      
    <PaperProvider>
      <NavigationContainer>
          <Stack.Navigator initialRouteName='Insert'>
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Insert" component={Insert} />
          <Stack.Screen name="WishList" component={WishList} />
          </Stack.Navigator>
        </NavigationContainer>   
    </PaperProvider>

  );
}

