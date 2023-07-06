import * as React from 'react';
import { Text } from 'react-native-paper';
import InputText from '../../components/InputText';
import { View, StyleSheet, SafeAreaView } from 'react-native';
import { Height, Width } from "../../constants/dimensions";
import ButtonT from '../../components/Button/Button';

export default function WishList({navigation}){
    
    function cancelPedido(){
        goToHome()
    }

    function goToHome(){
        navigation.navigate("Home")
    }
    
    return(
        
        <SafeAreaView style={styles.container}>
          <View style={styles.inputArea}>
      
      
            <ButtonT 
              text={"Confirmar pedidos"}
              mode={"elevated"}
              style={styles.confirm}
              textStyle={styles.textWhite}
              />
            
            <ButtonT 
              text={"Terminar depois"}
              mode={"elevated"}
              style={styles.cancel}
              textStyle={styles.textBlack}
              action={cancelPedido}
              />
          </View>
      </SafeAreaView>
    )
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