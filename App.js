import { PaperProvider } from 'react-native-paper';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Home from './src/screens/Home'
import Insert from './src/screens/Insert'
import InputText from './src/components/InputText';
import { View, StyleSheet, SafeAreaView } from 'react-native';
import { Height, Width } from "./constants/dimensions";
import ButtonT from './src/components/Button/Button';


const Stack = createStackNavigator();

export default function App() {
  return (
      
    <PaperProvider>
      {/* <NavigationContainer>
        <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Insert" component={Insert} />
        </Stack.Navigator>
      </NavigationContainer>   */}
      <SafeAreaView style={styles.container}>
        <View style={styles.inputArea}>
          <InputText label="Nome" style={styles.input} />
          <InputText label="Pedido" style={styles.input} />

          <ButtonT text={"Confirmar"} mode={"elevated"} style={styles.confirm} textStyle={styles.textWhite}/>
          <ButtonT text={"Cancelar"}  mode={"elevated"} style={styles.cancel} textStyle={styles.textBlack} />
        </View>
      </SafeAreaView>

    </PaperProvider>

  );
}

const styles = StyleSheet.create({
  
  container:{
    flex: 1, 
    justifyContent: "center",
    alignItems: "center",
  },
  inputArea:{
    padding: 16,
    width: Width*0.8 
  },
  input:{
    borderRadius: 50,
  },
  confirm:{
    backgroundColor: "#DC143C",
    marginTop: 10,
  },
  cancel:{
    borderColor: "#DC143C",
    borderWidth: 1,
    backgroundColor: "#fff",
    color: "#000000",
    marginTop: 5,
  },
  textBlack: {
    color: "#000000",
  },
  textWhite: {
    color: "#FFF",
  },
})